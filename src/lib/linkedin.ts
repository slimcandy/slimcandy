import { readFile } from 'node:fs/promises'
import path from 'node:path'

// Drop Shares.csv from the LinkedIn data export (Settings → Data privacy →
// Get a copy of your data) into this path. No file → no LinkedIn section.
const FILE = path.join(process.cwd(), 'src/content/linkedin/Shares.csv')

export interface LinkedInPost {
  date: string
  url: string
  text: string
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
  return text
    .replace(/\{hashtag\|\\?#\|([^}]+)\}/g, '#$1')
    .replace(/\s+/g, ' ')
    .trim()
}

export async function getLinkedInPosts(
  limit = 10,
): Promise<Array<LinkedInPost>> {
  let csv: string
  try {
    csv = await readFile(FILE, 'utf8')
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
    .map((row) => ({
      date: row[date].slice(0, 10),
      url: row[link],
      text: clean(row[text]),
    }))
    .sort((a, z) => z.date.localeCompare(a.date))
    .slice(0, limit)
}
