export type TUnknownObject = {
  [key: string]: unknown
}

export type TSiteMetadata = {
  title?: string | null
  description?: string | null
  motto?: string | null
  author?: string | null
  siteUrl?: string | null
  social?: {
    github?: string | null
    linkedin?: string | null
    youtube?: string | null
  } | null
} | null

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
