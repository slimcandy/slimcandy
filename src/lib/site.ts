export const site = {
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://avolkov.dev',
  name: 'Aleksei Volkov',
  title: 'AI Solutions Architect · Forward Deployed Engineer',
  description:
    'AI Solutions Architect and Forward Deployed Engineer with 12+ years in the JavaScript ecosystem. I design AI solutions on TypeScript, Node.js and React and take them to production.',
  email: 'volkov.dev@icloud.com',
  cv: '/cv/Aleksei_Volkov_Forward_Deployed_Engineer_12yr.pdf',
  social: {
    github: 'https://github.com/slimcandy',
    linkedin: 'https://www.linkedin.com/in/aleksei-volkov-react/',
    youtube: 'https://www.youtube.com/@AlexAboutJavaScript',
  },
  youtubeChannelId: 'UCxFjJds3Xz5yBowexEeycrQ',
}

// Link-preview image (Telegram, LinkedIn, iMessage). Bump ?v= after replacing
// public/og.jpg, since those apps cache previews aggressively.
export const ogImage = {
  url: '/og.jpg?v=1',
  type: 'image/jpeg',
  width: 1200,
  height: 630,
  alt: `${site.name}, ${site.title}`,
}
