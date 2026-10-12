import { projects } from '@/content/projects'

const OWNER = 'slimcandy'

export interface Project {
  name: string
  description: string
  url: string
  homepage: string | null
  language: string | null
  pushedAt: string | null
}

interface GitHubRepo {
  name: string
  description: string | null
  html_url: string
  homepage: string | null
  language: string | null
  pushed_at: string
}

async function fetchRepo(repo: string): Promise<GitHubRepo | null> {
  let headers: HeadersInit = { Accept: 'application/vnd.github+json' }
  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`
  }

  try {
    let res = await fetch(`https://api.github.com/repos/${OWNER}/${repo}`, {
      headers,
    })
    if (!res.ok) {
      console.warn(`[github] ${repo}: HTTP ${res.status}`)
      return null
    }
    return (await res.json()) as GitHubRepo
  } catch (error) {
    console.warn(`[github] ${repo}: ${error}`)
    return null
  }
}

// Build-time only. A failed request falls back to the local entry so the
// build never breaks because of GitHub.
export async function getProjects(): Promise<Array<Project>> {
  return Promise.all(
    projects.map(async ({ repo, description, homepage }) => {
      let data = await fetchRepo(repo)
      return {
        name: data?.name ?? repo,
        description: description ?? data?.description ?? '',
        url: data?.html_url ?? `https://github.com/${OWNER}/${repo}`,
        homepage: homepage === undefined ? data?.homepage || null : homepage,
        language: data?.language ?? null,
        pushedAt: data?.pushed_at ?? null,
      }
    }),
  )
}
