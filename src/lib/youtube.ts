import { existsSync } from 'node:fs'
import { mkdir, rename, writeFile } from 'node:fs/promises'
import path from 'node:path'

import { site } from '@/lib/site'

// Thumbnails are saved into the site at build time, so visitors never
// request anything from YouTube/Google. Generated, not committed.
const THUMB_DIR = path.join(process.cwd(), 'public/youtube')

export interface Video {
  id: string
  title: string
  published: string
  url: string
  thumbnail: string | null
}

function decode(text: string) {
  return text
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&')
}

// Returns the local path, or null if the download fails (card shows no image).
async function saveThumbnail(id: string) {
  let file = path.join(THUMB_DIR, `${id}.jpg`)
  try {
    if (!existsSync(file)) {
      let res = await fetch(`https://i.ytimg.com/vi/${id}/hqdefault.jpg`)
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      await mkdir(THUMB_DIR, { recursive: true })
      // Write then rename, so parallel build workers never see a partial file.
      let tmp = `${file}.${process.pid}.tmp`
      await writeFile(tmp, Buffer.from(await res.arrayBuffer()))
      await rename(tmp, file)
    }
    return `/youtube/${id}.jpg`
  } catch (error) {
    console.warn(`[youtube] thumbnail ${id}: ${error}`)
    return null
  }
}

function tag(xml: string, name: string) {
  return xml.match(new RegExp(`<${name}>([^<]*)</${name}>`))?.[1] ?? ''
}

// Public channel feed: latest 15 uploads, no API key needed.
// Fails soft so a YouTube outage never breaks the build.
export async function getVideos(limit = 10): Promise<Array<Video>> {
  let url = `https://www.youtube.com/feeds/videos.xml?channel_id=${site.youtubeChannelId}`
  try {
    let res = await fetch(url)
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    let xml = await res.text()
    let entries = xml.split('<entry>').slice(1).slice(0, limit)
    return await Promise.all(
      entries.map(async (entry) => {
        let id = tag(entry, 'yt:videoId')
        return {
          id,
          title: decode(tag(entry, 'title')),
          published: tag(entry, 'published').slice(0, 10),
          url: `https://www.youtube.com/watch?v=${id}`,
          thumbnail: await saveThumbnail(id),
        }
      }),
    )
  } catch (error) {
    console.warn(`[youtube] ${error}`)
    return []
  }
}
