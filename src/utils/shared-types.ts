export type PostType = {
  id: string
  frontmatter: {
    title: string
    date: string
    icon?: string
    category?: string
  }
  slug: string
  excerpt: string
  body: any
  timeToRead: number
}
