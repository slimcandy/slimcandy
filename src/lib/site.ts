export const site = {
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://avolkov.dev',
  name: 'Aleksei Volkov',
  title: 'Lead Full Stack Engineer',
  description:
    'Lead Full Stack Engineer with 12+ years across financial services, banking, and retail. React, TypeScript, Node.js and agentic development.',
  email: 'volkov.dev@icloud.com',
  cv: '/cv/Aleksei_Volkov_12yr_Lead_Fullstack_Engineer.pdf',
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
