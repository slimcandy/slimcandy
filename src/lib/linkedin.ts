import { existsSync, readFileSync } from 'node:fs'
import { readFile } from 'node:fs/promises'
import path from 'node:path'

// Filled by `npm run linkedin -- <export>` (scripts/import-linkedin.ts) from the
// LinkedIn data export. No file → no LinkedIn section.
export const CSV_FILE = path.join(
  process.cwd(),
  'src/content/linkedin/Shares.csv',
)
export const IMAGE_DIR = path.join(process.cwd(), 'public/linkedin')

export interface LinkedInPost {
  id: string
  date: string
  url: string
  text: string
  image: { src: string; width: number; height: number } | null
}

// Width/height from the JPEG header (SOFn marker), so the card reserves the
// image's own aspect ratio before it loads.
function jpegSize(buffer: Buffer) {
  let i = 2
  while (i + 9 < buffer.length) {
    if (buffer[i] !== 0xff) return null
    let marker = buffer[i + 1]
    if (
      marker >= 0xc0 &&
      marker <= 0xcf &&
      ![0xc4, 0xc8, 0xcc].includes(marker)
    ) {
      return {
        height: buffer.readUInt16BE(i + 5),
        width: buffer.readUInt16BE(i + 7),
      }
    }
    i += 2 + buffer.readUInt16BE(i + 2)
  }
  return null
}

function image(id: string) {
  let file = path.join(IMAGE_DIR, `${id}.jpg`)
  let size = existsSync(file) && jpegSize(readFileSync(file))
  return size ? { src: `/linkedin/${id}.jpg`, ...size } : null
}

// RFC 4180: quoted fields may contain commas, newlines and "" escapes.
function parseCsv(input: string) {
  let rows: Array<Array<string>> = []
  let row: Array<string> = []
  let field = ''
  let quoted = false
  for (let i = 0; i < input.length; i++) {
    let char = input[i]
    if (quoted) {
      if (char === '"' && input[i + 1] === '"') {
        field += '"'
        i++
      } else if (char === '"') {
        quoted = false
      } else {
        field += char
      }
    } else if (char === '"') {
      quoted = true
    } else if (char === ',') {
      row.push(field)
      field = ''
    } else if (char === '\n' || char === '\r') {
      if (char === '\r' && input[i + 1] === '\n') i++
      row.push(field)
      rows.push(row)
      row = []
      field = ''
    } else {
      field += char
    }
  }
  if (field || row.length) rows.push([...row, field])
  return rows
}

function clean(text: string) {
  return (
    text
      // LinkedIn wraps each line break of a post in extra quotes: `line1"⏎"line2`.
      .replace(/"\r?\n"/g, '\n')
      .replace(/\{hashtag\|\\?#\|([^}]+)\}/g, '#$1')
      // Keep line breaks (the hook is usually its own line), drop blank lines.
      .split('\n')
      .map((line) => line.replace(/\s+/g, ' ').trim())
      .filter(Boolean)
      .join('\n')
  )
}

export async function getLinkedInPosts(
  limit = 10,
): Promise<Array<LinkedInPost>> {
  let csv: string
  try {
    csv = await readFile(CSV_FILE, 'utf8')
  } catch {
    return []
  }

  let [header, ...rows] = parseCsv(csv.replace(/^\uFEFF/, ''))
  let col = (name: string) => header.indexOf(name)
  let [date, link, text, visibility] = [
    col('Date'),
    col('ShareLink'),
    col('ShareCommentary'),
    col('Visibility'),
  ]

  return rows
    .filter((row) => row[link] && row[text]?.trim())
    .filter((row) => !/CONNECTIONS/i.test(row[visibility] ?? ''))
    .map((row) => {
      // ShareLink ends in the post URN: …urn%3Ali%3Ashare%3A7509998258547707905
      let id = row[link].match(/(\d+)\/?$/)?.[1] ?? ''
      return {
        id,
        date: row[date].slice(0, 10),
        url: row[link],
        text: clean(row[text]),
        image: image(id),
      }
    })
    .sort((a, z) => z.date.localeCompare(a.date))
    .slice(0, limit)
}
