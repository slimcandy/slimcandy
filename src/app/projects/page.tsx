import { type Metadata } from 'next'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { GitHubIcon } from '@/components/SocialIcons'
import { getProjects } from '@/lib/github'

function LinkIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Open-source side projects: educational rebuilds of React and Babel, Tailwind CSS plugins, privacy tools, and AR experiments.',
}

export default async function Projects() {
  let projects = await getProjects()

  return (
    <SimpleLayout
      title="Things I’ve built to learn how the web really works."
      intro="Side projects from my GitHub: educational rebuilds of React and Babel, Tailwind CSS plugins, a privacy tool, and AR experiments. All open source — have a look at the code."
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <Card as="li" key={project.name}>
            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md ring-1 shadow-zinc-800/5 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <GitHubIcon className="h-6 w-6 fill-zinc-700 dark:fill-zinc-300" />
            </div>
            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
              <Card.Link href={project.url}>{project.name}</Card.Link>
            </h2>
            <Card.Description>{project.description}</Card.Description>
            <p className="relative z-10 mt-4 text-xs text-zinc-500 dark:text-zinc-400">
              {[
                project.language,
                project.pushedAt &&
                  `Updated ${new Date(project.pushedAt).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}`,
              ]
                .filter(Boolean)
                .join(' · ')}
            </p>
            {project.homepage && (
              <a
                href={project.homepage}
                className="relative z-30 mt-4 flex text-sm font-medium text-zinc-500 transition hover:text-teal-600 dark:text-zinc-300 dark:hover:text-teal-400"
              >
                <LinkIcon className="h-6 w-6 flex-none" />
                <span className="ml-2">
                  {new URL(project.homepage).host}
                  <span className="sr-only">
                    {' '}
                    (live demo of {project.name})
                  </span>
                </span>
              </a>
            )}
          </Card>
        ))}
      </ul>
    </SimpleLayout>
  )
}
