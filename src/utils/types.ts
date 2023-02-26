export type TUnknownObject = {
  [key: string]: unknown
}

export type TSiteMetadata = {
  title?: string | null
  description?: string | null
  author?: string | null
  siteUrl?: string | null
  social?: {
    email?: string | null
    github?: string | null
    linkedin?: string | null
    podcast?: string | null
    rss?: string | null
    youtube?: string | null
  } | null
} | null

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

export interface TTagContext extends TCategoryContext {}

export type TTags = ReadonlyArray<{
  readonly name: string | null
  readonly slug: { readonly current: string | null } | null
}>

export type TCategories = ReadonlyArray<{
  readonly description: string | null
  readonly name: string | null
  readonly slug: { readonly current: string | null } | null
}>
