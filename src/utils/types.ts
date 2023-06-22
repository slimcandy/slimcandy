export type TUnknownObject = Record<string, unknown>

export type TSiteMetadata = {
  title?: string | null
  description?: string | null
  image?: string | null
  motto?: string | null
  author?: string | null
  siteUrl?: string | null
  social?: {
    github?: string | null
    linkedin?: string | null
    youtube?: string | null
  } | null
} | null

export interface TPostContext {
  title: string
  slug: {
    current: string
  }
}
