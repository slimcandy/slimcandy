// Source of truth: ~/Downloads/cv-generator-2/cv/cv-master.md
import { type ImageProps } from 'next/image'

import logoArtezio from '@/images/logos/artezio.png'
import logoBrandContrast from '@/images/logos/brandcontrast.png'
import logoDxc from '@/images/logos/dxc.png'
import logoInnoscripta from '@/images/logos/innoscripta.png'
import logoLightspeed from '@/images/logos/lightspeed.svg'

export interface Role {
  company: string
  url: string
  // Company favicon, downloaded from its website.
  logo: ImageProps['src']
  // Client domain from the CV. Per-role job titles: TODO(Alex) — not in cv-master.md
  summary: string
  start: string
  end: string | null
}

export const roles: Array<Role> = [
  {
    company: 'DXC Technology',
    url: 'https://dxc.com',
    logo: logoDxc,
    summary: 'Hedge fund trading · retail logistics',
    start: '2022',
    end: null,
  },
  {
    company: 'Artezio',
    url: 'https://www.artezio.com',
    logo: logoArtezio,
    summary: 'Universal banking platform',
    start: '2021',
    end: '2022',
  },
  {
    company: 'innoscripta',
    url: 'https://www.innoscripta.com',
    logo: logoInnoscripta,
    summary: 'R&D funding SaaS',
    start: '2020',
    end: '2021',
  },
  {
    company: 'BrandContrast',
    url: 'https://www.brandcontrast.de',
    logo: logoBrandContrast,
    summary: 'PR & brand-communication agency',
    start: '2015',
    end: '2019',
  },
  {
    company: 'Lightspeed Commerce',
    url: 'https://www.lightspeedhq.com',
    logo: logoLightspeed,
    summary: 'Cloud POS & payments (Ecwid)',
    start: '2014',
    end: '2015',
  },
]

export const highlights = [
  {
    metric: 'Weeks → minutes',
    text: 'Transaction cost analysis reporting for 30–40 portfolio managers at a $6.4B hedge fund, orchestrating ~18 parallel data flows over WebSockets.',
  },
  {
    metric: '~1,000 PRs',
    text: 'distilled into agentic coding workflows: engineering standards, planning agents, shared-library discovery and automated checks.',
  },
  {
    metric: '5,460 stores',
    text: 'in 97 markets served by 3 legacy logistics apps migrated to microfrontends — the architecture became the corporate standard.',
  },
  {
    metric: '−63% form work',
    text: 'with a JSON-schema-driven banking form runtime used by 5 teams serving up to 5M users.',
  },
]

export const skills = [
  {
    group: 'Frontend',
    items: 'React, TypeScript, Next.js, microfrontends, design systems, WCAG',
  },
  {
    group: 'Backend & data',
    items: 'Node.js, Express, NestJS, REST, GraphQL, WebSockets, PostgreSQL',
  },
  {
    group: 'AI & agentic coding',
    items: 'Claude Code, Codex, GitHub Copilot, MCP servers, agent skills',
  },
  {
    group: 'Quality & delivery',
    items: 'Playwright, Jest, Vitest, Cypress, Docker, AWS, Azure DevOps CI/CD',
  },
  {
    group: 'Real-time & desktop',
    items: 'AG Grid, Highcharts, D3.js, Electron, OpenFin, Okta SSO',
  },
]
