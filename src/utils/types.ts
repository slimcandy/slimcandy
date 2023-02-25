export type TUnknownObject = {
  [key: string]: unknown
}

export type TSiteMetadata = {
  title?: string
  description?: string
  author?: string
  siteUrl?: string
  social?: {
    email?: string
    github?: string
    linkedin?: string
    podcast?: string
    rss?: string
    youtube?: string
  }
}

export function SiteMetadata(data: unknown): TSiteMetadata {
  const result: TSiteMetadata = {}
  if (typeof data === "object" && data !== null) {
    const { title, description, author, siteUrl, social } =
      data as TUnknownObject
    if (typeof title === "string") result.title = title
    if (typeof description === "string") result.description = description
    if (typeof author === "string") result.author = author
    if (typeof siteUrl === "string") result.siteUrl = siteUrl
    if (typeof social === "object" && social !== null) {
      const { email, github, linkedin, podcast, rss, youtube } =
        social as TUnknownObject
      result.social = {}
      if (typeof email === "string") result.social.email = email
      if (typeof github === "string") result.social.github = github
      if (typeof linkedin === "string") result.social.linkedin = linkedin
      if (typeof podcast === "string") result.social.podcast = podcast
      if (typeof rss === "string") result.social.rss = rss
      if (typeof youtube === "string") result.social.youtube = youtube
    }
  }
  return result
}

export type TPostContext = {
  title: string
  slug: {
    current: string
  }
}

export type TCategoryContext = {
  name: string
  slug: {
    current: string
  }
}
