import { type ImageProps } from 'next/image'

import iconCapsuleToys from '@/images/projects/capsule-toys.svg'
import iconCss from '@/images/projects/css3isawesome.svg'
import iconFeFwk from '@/images/projects/fe-fwk-ts-react.svg'
import iconMetaCleaner from '@/images/projects/metacleaner.svg'
import iconBabel from '@/images/projects/no-magic-babel.svg'
import iconType from '@/images/projects/tailwind-typography-extras.svg'

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
  // The project's own mark, from its favicon.
  icon: ImageProps['src']
}

export const projects: Array<ProjectEntry> = [
  {
    repo: 'MetaCleaner',
    homepage: 'https://meta.avolkov.dev',
    description:
      'Removes EXIF, GPS, XMP and IPTC from photos in the browser, byte by byte; nothing is uploaded. Installs as a PWA.',
    icon: iconMetaCleaner,
  },
  {
    repo: 'fe-fwk-ts-react',
    homepage: 'https://react.avolkov.dev',
    description:
      'A React-like runtime in TypeScript: virtual DOM, keyed reconciliation, components, a scheduler. The demo counts renders and DOM writes per edit.',
    icon: iconFeFwk,
  },
  {
    repo: 'no-magic-babel',
    homepage: 'https://babel.avolkov.dev',
    description:
      'A small Babel: parse, traverse, generate. A scroll story shows every step the compiler takes.',
    icon: iconBabel,
  },
  {
    repo: 'css3IsAwesome',
    homepage: 'https://css.avolkov.dev',
    description:
      'Three drawings made only of CSS, from 2015 and 2021, redrawn with modern CSS in a fraction of the elements. Drag the divider to compare.',
    icon: iconCss,
  },
  {
    repo: 'tailwind-typography-extras',
    homepage: 'https://type.avolkov.dev',
    description:
      'Four Tailwind CSS v4 packages for the typography properties Tailwind doesn’t ship: hanging punctuation, small caps, initial letter, text rendering. On npm.',
    icon: iconType,
  },
  {
    repo: 'capsule-toys',
    homepage: 'https://ar.avolkov.dev',
    description:
      'A capsule toy machine for augmented reality: turn the knob and a random 3D model opens in AR Quick Look. iPhone and Vision Pro only.',
    icon: iconCapsuleToys,
  },
]
