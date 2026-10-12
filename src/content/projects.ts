// Featured repos from github.com/slimcandy, in display order.
// `description` and `homepage` override the GitHub values;
// `homepage: null` hides a dead demo link.
export const projects: Array<{
  repo: string
  description?: string
  homepage?: string | null
}> = [
  { repo: 'MetaCleaner' },
  { repo: 'fe-fwk-ts-react' },
  { repo: 'my-own-babel' },
  { repo: 'isit-hdr-ready', homepage: null }, // hdr.js.garden is down
  {
    repo: 'tailwind-hanging-punctuation',
    description:
      'Tailwind CSS plugin for the hanging-punctuation property, for cleaner quotes and lists.',
  },
  {
    repo: 'tailwind-font-variant-caps',
    description:
      'Tailwind CSS plugin for font-variant-caps: small caps, all small caps, titling caps and more.',
  },
  { repo: 'rss-reader' },
  { repo: 'WhatARQuickLookCanDoToday' },
  { repo: 'openNotes', homepage: null }, // note.js.garden is down
  { repo: 'css3IsAwesome' },
  { repo: 'tailwindcss-text-rendering' },
  { repo: 'randomARt' },
]
