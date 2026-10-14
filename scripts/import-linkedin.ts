// Imports LinkedIn posts from the official data export (LinkedIn → Settings →
// Data privacy → Get a copy of your data). Run locally on macOS, then commit:
//
//   npm run linkedin -- ~/Downloads/Complete_LinkedInDataExport_<date>.zip
//
// Accepts the .zip or the folder Safari unpacks it into. Copies only the posts
// file (Shares_*.csv); the rest of the export is private. Then saves an image for
// each post shown on the home page to public/linkedin/<post id>.jpg, taken from
// the public post page's og:image — the export's own image links expire after
// two weeks and are missing for recent posts. Builds never call LinkedIn.
//
// Re-running is safe: existing images are kept, images of posts that dropped out
// of the carousel are deleted, posts without an image are retried.
import { execFileSync } from 'node:child_process'
import { existsSync, statSync } from 'node:fs'
import {
  mkdir,
  mkdtemp,
  readFile,
  readdir,
  rm,
  writeFile,
} from 'node:fs/promises'
import { tmpdir } from 'node:os'
import path from 'node:path'

import { CSV_FILE, IMAGE_DIR, getLinkedInPosts } from '../src/lib/linkedin.ts'

const UA =
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.0 Safari/605.1.15'

let source = process.argv[2]
if (!source || !existsSync(source)) {
  console.error('Usage: npm run linkedin -- <LinkedIn export .zip or folder>')
  process.exit(1)
}

let csv: Buffer
let isShares = (name: string) =>
  /^Shares(_\d+)?\.csv$/.test(path.basename(name))
if (statSync(source).isDirectory()) {
  let name = (await readdir(source)).find(isShares)
  if (!name) throw new Error(`No Shares_*.csv in ${source}`)
  csv = await readFile(path.join(source, name))
} else {
  let names = execFileSync('unzip', ['-Z1', source], { encoding: 'utf8' })
  let name = names.split('\n').find(isShares)
  if (!name) throw new Error(`No Shares_*.csv in ${source}`)
  csv = execFileSync('unzip', ['-p', source, name], {
    maxBuffer: 64 * 1024 * 1024,
  })
}
await mkdir(path.dirname(CSV_FILE), { recursive: true })
await writeFile(CSV_FILE, csv)

// Same posts, same order as the home page carousel.
let posts = await getLinkedInPosts()
console.log(`linkedin: ${posts.length} posts in the carousel`)

await mkdir(IMAGE_DIR, { recursive: true })
let tmp = await mkdtemp(path.join(tmpdir(), 'linkedin-'))
try {
  for (let post of posts) {
    let file = path.join(IMAGE_DIR, `${post.id}.jpg`)
    if (existsSync(file)) continue

    let html = await fetch(post.url, { headers: { 'user-agent': UA } }).then(
      (res) => res.text(),
    )
    let src = html
      .match(/property="og:image" content="([^"]+)"/)?.[1]
      .replaceAll('&amp;', '&')
    // Text-only posts have the profile photo as og:image; skip those.
    if (!src || !/\/(feedshare|videocover)-/.test(src)) {
      console.log(`linkedin: ${post.date} ${post.id} — no image`)
      continue
    }

    let raw = path.join(tmp, post.id)
    let res = await fetch(src, { headers: { 'user-agent': UA } })
    if (!res.ok) throw new Error(`${res.status} for ${src}`)
    await writeFile(raw, Buffer.from(await res.arrayBuffer()))
    // Any format (posts can be 20 MB animated GIFs) → first frame, ≤800px JPEG.
    execFileSync(
      'sips',
      [
        '-s',
        'format',
        'jpeg',
        '-s',
        'formatOptions',
        '80',
        '-Z',
        '800',
        raw,
        '--out',
        file,
      ],
      { stdio: 'ignore' },
    )
    console.log(`linkedin: ${post.date} ${post.id} — image saved`)
  }
} finally {
  await rm(tmp, { recursive: true, force: true })
}

let keep = new Set(posts.map((post) => `${post.id}.jpg`))
for (let name of await readdir(IMAGE_DIR)) {
  if (keep.has(name)) continue
  await rm(path.join(IMAGE_DIR, name))
  console.log(`linkedin: removed ${name}`)
}
