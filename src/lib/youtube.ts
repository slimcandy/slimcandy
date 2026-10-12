import { site } from '@/lib/site'

export interface Video {
  id: string
  title: string
  published: string
  url: string
  thumbnail: string
}

function decode(text: string) {
  return text
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&')
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
    return xml
      .split('<entry>')
      .slice(1)
      .slice(0, limit)
      .map((entry) => {
        let id = tag(entry, 'yt:videoId')
        return {
          id,
          title: decode(tag(entry, 'title')),
          published: tag(entry, 'published').slice(0, 10),
          url: `https://www.youtube.com/watch?v=${id}`,
          thumbnail: `https://i.ytimg.com/vi/${id}/hqdefault.jpg`,
        }
      })
  } catch (error) {
    console.warn(`[youtube] ${error}`)
    return []
  }
}
