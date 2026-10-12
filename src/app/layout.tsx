import { type Metadata, type Viewport } from 'next'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'
import { site } from '@/lib/site'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    template: `%s - ${site.name}`,
    default: `${site.name} - ${site.title}`,
  },
  description: site.description,
  authors: [{ name: site.name, url: site.url }],
  openGraph: {
    type: 'website',
    siteName: site.name,
    title: `${site.name} - ${site.title}`,
    description: site.description,
    url: site.url,
    images: [{ url: '/og.jpg', width: 1200, height: 630 }],
  },
  alternates: {
    types: {
      'application/rss+xml': '/feed.xml',
    },
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fafafa' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
