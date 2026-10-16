import { type ProjectEntry, projects } from '@/content/projects'

const OWNER = 'slimcandy'

export interface Project extends ProjectEntry {
  url: string
  language: string | null
  pushedAt: string | null
}

interface GitHubRepo {
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

// Build-time only. GitHub adds the language and the last push date; when the
// request fails the card is shown without them, so the build never breaks
// because of GitHub.
export async function getProjects(): Promise<Array<Project>> {
  return Promise.all(
    projects.map(async (entry) => {
      let data = await fetchRepo(entry.repo)
      return {
        ...entry,
        url: `https://github.com/${OWNER}/${entry.repo}`,
        language: data?.language ?? null,
        pushedAt: data?.pushed_at ?? null,
      }
    }),
  )
}
