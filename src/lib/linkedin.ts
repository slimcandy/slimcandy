import { existsSync } from 'node:fs'
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
  image: string | null
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
        image: existsSync(path.join(IMAGE_DIR, `${id}.jpg`))
          ? `/linkedin/${id}.jpg`
          : null,
      }
    })
    .sort((a, z) => z.date.localeCompare(a.date))
    .slice(0, limit)
}
