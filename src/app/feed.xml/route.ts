import { Feed } from 'feed'

import { getAllArticles } from '@/lib/articles'
import { site } from '@/lib/site'

export const dynamic = 'force-static'

export async function GET() {
  let author = { name: site.name, email: site.email, link: site.url }

  let feed = new Feed({
    title: site.name,
    description: site.description,
    author,
    id: site.url,
    link: site.url,
    language: 'en',
    image: `${site.url}/og.jpg`,
    favicon: `${site.url}/icon.png`,
    copyright: `All rights reserved ${new Date().getFullYear()}`,
    feedLinks: {
      rss2: `${site.url}/feed.xml`,
    },
  })

  for (let article of await getAllArticles()) {
    let url = `${site.url}/articles/${article.slug}`
    feed.addItem({
      title: article.title,
      id: url,
      link: url,
      description: article.description,
      author: [author],
      date: new Date(article.date),
    })
  }

  return new Response(feed.rss2(), {
    headers: { 'content-type': 'application/xml; charset=utf-8' },
  })
}
