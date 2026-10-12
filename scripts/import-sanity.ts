// One-off migration: Sanity (old JS.Garden blog) → MDX articles.
// Usage: node scripts/import-sanity.ts
// Reads the public dataset, writes src/app/articles/<slug>/page.mdx + images.

import { mkdir, writeFile } from 'node:fs/promises'
import path from 'node:path'

const PROJECT = 'qtyf8bhl'
const DATASET = 'production'
const OUT = 'src/app/articles'

type Span = { _type: 'span'; text: string; marks?: string[] }
type MarkDef = { _key: string; _type: string; href?: string }
type Block = {
  _type: string
  _key: string
  style?: string
  listItem?: 'bullet' | 'number'
  level?: number
  children?: Span[]
  markDefs?: MarkDef[]
  code?: string
  language?: string
  content?: Block[]
  asset?: { _ref: string }
}
type Post = {
  title: string
  slug: { current: string }
  description?: string
  publishedAt: string
  youtubeUrl?: string
  mainImage?: { asset: { _ref: string } }
  content: Block[]
}

// Alt text for informational images, keyed by file name. Covers stay decorative.
const ALT: Record<string, string> = {
  '73ab82e1':
    'macOS iCloud settings: Advanced Data Protection is on, listing end-to-end encrypted data types',
  d3c0cc9b:
    'Disk Utility dialog to erase the external drive “Backup”, with the Security Options button',
  '4149697b': 'Cryptomator window with an unlocked vault named “Cryptomated”',
  '6ca9abed':
    'Safari Passwords menu with options to import, export selected or export all passwords',
  a50b387e: 'Photos File menu: Export Unmodified Originals for 2,950 items',
  '355ccd8c': 'Music app print dialog set to print the song list',
  '7d2e44f2':
    'CIE chromaticity diagrams comparing the small sRGB gamut with the much wider Rec. 2020 gamut',
  c52a049c:
    'GitHub repository settings, Social Preview section with an “HDR check” banner image',
  '4f16d8f1':
    'GitHub project board “hdr roadmap” with Backlog, In progress and In review columns',
}

const query = encodeURIComponent('*[_type == "post"] | order(publishedAt desc)')
const url = `https://${PROJECT}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${query}`

function escapeText(text: string) {
  // U+F8FF is the Apple logo, which only renders on Apple fonts.
  return text.replace(/\s*\uF8FF/g, '').replace(/[\\`*_[\]<>{}|]/g, '\\$&')
}

function renderSpans(block: Block) {
  let defs = new Map((block.markDefs ?? []).map((d) => [d._key, d]))
  let isHeading = block.style === 'h2' || block.style === 'h3'
  return (block.children ?? [])
    .map((span) => {
      let marks = (span.marks ?? []).filter(
        (m) => !(isHeading && m === 'strong'),
      )
      let raw = span.text
      if (!raw.trim()) return raw
      // Keep surrounding whitespace outside of emphasis markers.
      let [, lead, core, trail] = raw.match(/^(\s*)([\s\S]*?)(\s*)$/)!
      let text = marks.includes('code')
        ? core.includes('`')
          ? `\`\` ${core} \`\``
          : `\`${core}\``
        : escapeText(core)
      if (marks.includes('em')) text = `_${text}_`
      if (marks.includes('strong')) text = `**${text}**`
      for (let mark of marks) {
        let def = defs.get(mark)
        if (def?._type === 'link' && def.href) text = `[${text}](${def.href})`
      }
      return lead + text + trail
    })
    .join('')
    .replace(/\n/g, '  \n')
}

function imageInfo(ref: string) {
  // image-<id>-<w>x<h>-<ext>
  let [, id, size, ext] = ref.match(/^image-([a-f0-9]+)-(\d+x\d+)-(\w+)$/)!
  // Let the Sanity CDN re-encode raster images as WebP to keep pages light.
  let keep = ext === 'svg' || ext === 'gif'
  return {
    file: `${id.slice(0, 8)}.${keep ? ext : 'webp'}`,
    src: `https://cdn.sanity.io/images/${PROJECT}/${DATASET}/${id}-${size}.${ext}?w=1440&fit=max&q=75${keep ? '' : '&fm=webp'}`,
  }
}

function firstParagraph(blocks: Block[]) {
  let block = blocks.find(
    (b) => b._type === 'block' && b.style === 'normal' && !b.listItem,
  )
  let text = (block?.children ?? []).map((c) => c.text).join('')
  return text.length > 200 ? `${text.slice(0, 197).trimEnd()}…` : text
}

async function download(src: string, dest: string) {
  let res = await fetch(src)
  if (!res.ok) throw new Error(`${res.status} ${src}`)
  await writeFile(dest, Buffer.from(await res.arrayBuffer()))
}

async function convert(post: Post) {
  let slug = post.slug.current
  let dir = path.join(OUT, slug)
  await mkdir(dir, { recursive: true })

  let imports: string[] = []
  let images: Array<{ src: string; dest: string }> = []
  function addImage(ref: string) {
    let { file, src } = imageInfo(ref)
    let name = `image${imports.length + 1}`
    imports.push(`import ${name} from './${file}'`)
    images.push({ src, dest: path.join(dir, file) })
    let alt = ALT[file.split('.')[0]] ?? ''
    return `<Image src={${name}} alt=${JSON.stringify(alt)} />`
  }

  function render(blocks: Block[]): string {
    let out: string[] = []
    let prevList = false
    for (let block of blocks) {
      let chunk: string
      let isList = block._type === 'block' && !!block.listItem
      if (block._type === 'block') {
        let text = renderSpans(block)
        if (block.listItem) {
          let indent = '    '.repeat((block.level ?? 1) - 1)
          chunk = `${indent}${block.listItem === 'number' ? '1.' : '-'} ${text}`
        } else if (block.style === 'h2' || block.style === 'h3') {
          chunk = `${block.style === 'h2' ? '##' : '###'} ${text}`
        } else if (block.style === 'blockquote') {
          chunk = `> ${text}`
        } else {
          chunk = text
        }
        if (!text.trim()) continue
      } else if (block._type === 'code') {
        chunk = `\`\`\`${block.language ?? ''}\n${block.code ?? ''}\n\`\`\``
      } else if (block._type === 'image' && block.asset) {
        chunk = addImage(block.asset._ref)
      } else if (block._type === 'aside') {
        chunk = render(block.content ?? [])
          .split('\n')
          .map((line) => (line ? `> ${line}` : '>'))
          .join('\n')
      } else {
        console.warn(`[${slug}] skipped block type ${block._type}`)
        continue
      }
      out.push(prevList && isList ? '\n' : '\n\n', chunk)
      prevList = isList
    }
    return out.join('').trim()
  }

  let parts: string[] = []
  if (post.mainImage) parts.push(addImage(post.mainImage.asset._ref))
  if (post.youtubeUrl) {
    parts.push(`> Prefer video? [Watch this on YouTube](${post.youtubeUrl}).`)
  }
  parts.push(render(post.content))

  let article = {
    author: 'Aleksei Volkov',
    date: post.publishedAt.slice(0, 10),
    title: post.title,
    description: (post.description || firstParagraph(post.content))
      .replace(/\s*\n\s*/g, ' ')
      .trim(),
  }

  let mdx = [
    `import { ArticleLayout } from '@/components/ArticleLayout'`,
    ...imports,
    '',
    `export const article = ${JSON.stringify(article, null, 2)}`,
    '',
    `export const metadata = {\n  title: article.title,\n  description: article.description,\n}`,
    '',
    `export default ({ children }) => (\n  <ArticleLayout article={article}>{children}</ArticleLayout>\n)`,
    '',
    parts.join('\n\n'),
    '',
  ].join('\n')

  await writeFile(path.join(dir, 'page.mdx'), mdx)
  await Promise.all(images.map(({ src, dest }) => download(src, dest)))
  console.log(`✓ ${slug} (${images.length} images)`)
}

let { result } = (await (await fetch(url)).json()) as { result: Post[] }
for (let post of result) await convert(post)
