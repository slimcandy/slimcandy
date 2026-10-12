import { type MetadataRoute } from 'next'

import { getAllArticles } from '@/lib/articles'
import { site } from '@/lib/site'

export const dynamic = 'force-static'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  let pages = ['', '/about', '/articles', '/projects'].map((path) => ({
    url: `${site.url}${path}`,
  }))
  let articles = (await getAllArticles()).map((article) => ({
    url: `${site.url}/articles/${article.slug}`,
    lastModified: article.date,
  }))
  return [...pages, ...articles]
}
