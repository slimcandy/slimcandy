import { type ImageProps } from 'next/image'

import iconCapsuleToys from '@/images/projects/capsule-toys.svg'
import iconCss from '@/images/projects/css3isawesome.svg'
import iconFeFwk from '@/images/projects/fe-fwk-ts-react.svg'
import iconMetaCleaner from '@/images/projects/metacleaner.svg'
import iconBabel from '@/images/projects/no-magic-babel.svg'
import iconType from '@/images/projects/tailwind-typography-extras.svg'

const OWNER = 'slimcandy'

// The six projects on /projects, in display order. Everything a visitor
// reads is written here; GitHub only adds the language and the last push
// date at build time (src/lib/github.ts), and the page builds without it.
export interface ProjectEntry {
  // Repository name under github.com/slimcandy, also the display name.
  repo: string
  // Live demo.
  homepage: string
  // One line for a CTO.
  description: string
  // Who checks the AI-written core: a tool that is independent of the code.
  judge: string
  // The hand-written code before the 2026 rebuild: a git tag, or where it went.
  before: { label: string; href: string } | null
  // The project's own mark, from its favicon.
  icon: ImageProps['src']
}

function tag(repo: string, name: string) {
  return {
    label: name,
    href: `https://github.com/${OWNER}/${repo}/tree/${name}`,
  }
}

export const projects: Array<ProjectEntry> = [
  {
    repo: 'MetaCleaner',
    homepage: 'https://meta.avolkov.dev',
    description:
      'Removes EXIF, GPS, XMP and IPTC from photos in the browser, byte by byte; nothing is uploaded. Installs as a PWA.',
    judge:
      'The real ExifTool checks every cleaned file: 7 formats, at byte level, pixels never re-encoded.',
    before: tag('MetaCleaner', 'legacy-2023'),
    icon: iconMetaCleaner,
  },
  {
    repo: 'fe-fwk-ts-react',
    homepage: 'https://react.avolkov.dev',
    description:
      'A React-like runtime in TypeScript: virtual DOM, keyed reconciliation, components, a scheduler. The demo counts renders and DOM writes per edit.',
    judge:
      'The same edits rendered by this runtime and by react-dom 19 must give identical DOM; fast-check generates random edits. 212 tests.',
    before: tag('fe-fwk-ts-react', 'legacy-2026'),
    icon: iconFeFwk,
  },
  {
    repo: 'no-magic-babel',
    homepage: 'https://babel.avolkov.dev',
    description:
      'A small Babel: parse, traverse, generate. A scroll story shows every step the compiler takes.',
    judge:
      'The output must parse as ES5 with acorn and run the same as the input.',
    before: tag('no-magic-babel', 'legacy-2025'),
    icon: iconBabel,
  },
  {
    repo: 'css3IsAwesome',
    homepage: 'https://css.avolkov.dev',
    description:
      'Three drawings made only of CSS, from 2015 and 2021, redrawn with modern CSS in a fraction of the elements. Drag the divider to compare.',
    judge:
      'None. The page itself puts the hand-made 2015/2021 CSS, the 2026 redraw and an “AI power” version of each drawing side by side.',
    before: tag('css3IsAwesome', 'legacy-2021'),
    icon: iconCss,
  },
  {
    repo: 'tailwind-typography-extras',
    homepage: 'https://type.avolkov.dev',
    description:
      'Four Tailwind CSS v4 packages for the typography properties Tailwind doesn’t ship: hanging punctuation, small caps, initial letter, text rendering.',
    judge:
      '31 tests against the real Tailwind v4 compiler. Four packages on npm; used in production by ChatBotKit.',
    before: {
      label: 'four archived v1 repos',
      href: `https://github.com/${OWNER}?tab=repositories&q=tailwind&type=archived`,
    },
    icon: iconType,
  },
  {
    repo: 'capsule-toys',
    homepage: 'https://ar.avolkov.dev',
    description:
      'A capsule toy machine for augmented reality: turn the knob and a random 3D model opens in AR Quick Look. iPhone and Vision Pro only.',
    judge:
      'Every model passes Apple’s usdchecker --arkit, plus anchor, size and licence checks.',
    before: tag('capsule-toys', 'legacy-2023'),
    icon: iconCapsuleToys,
  },
]
