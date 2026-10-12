import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  YouTubeIcon,
} from '@/components/SocialIcons'
import { highlights, skills } from '@/content/work'
import { site } from '@/lib/site'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-700 dark:text-zinc-200 dark:hover:text-teal-400"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-600 dark:group-hover:fill-teal-400" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

export const metadata: Metadata = {
  title: 'About',
  description:
    'I’m Aleksei Volkov, a Lead Full Stack Engineer with 12+ years in financial services, banking, and retail.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt="Portrait of Aleksei Volkov"
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              priority
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            I’m Aleksei Volkov. I build software for trading desks, banks, and
            global retail.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              I’m a full stack engineer with 12+ years across financial
              services, banking, and retail. My core is deep JavaScript and
              TypeScript: I own React interfaces, Node.js services, SQL
              databases, testing, and cloud delivery from requirements to
              production.
            </p>
            <p>
              Today I build trading and operations systems for a $6.4B hedge
              fund with 55+ portfolio-manager teams: full stack support tools,
              real-time analytics, and developer automation. Before that I moved
              a global fashion retailer’s logistics apps to microfrontends,
              built a banking design system and form runtime, and spent five
              years shipping accessible, fast websites for German industrial
              clients.
            </p>
            <p>
              I work with AI agents every day — Claude Code, Codex, and GitHub
              Copilot — defining tasks, reviewing generated code, and turning
              what works into shared standards for the team.
            </p>
          </div>

          <h2 className="mt-12 text-sm font-semibold text-zinc-900 dark:text-zinc-100">
            Selected impact
          </h2>
          <dl className="mt-6 grid gap-6 sm:grid-cols-2">
            {highlights.map((item) => (
              <div
                key={item.metric}
                className="rounded-2xl border border-zinc-100 p-5 dark:border-zinc-700/40"
              >
                <dt className="text-lg font-semibold text-zinc-800 dark:text-zinc-100">
                  {item.metric}
                </dt>
                <dd className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                  {item.text}
                </dd>
              </div>
            ))}
          </dl>

          <h2 className="mt-12 text-sm font-semibold text-zinc-900 dark:text-zinc-100">
            Skills
          </h2>
          <dl className="mt-6 space-y-4 text-sm">
            {skills.map((skill) => (
              <div key={skill.group} className="sm:flex sm:gap-4">
                <dt className="font-medium text-zinc-800 sm:w-40 sm:flex-none dark:text-zinc-200">
                  {skill.group}
                </dt>
                <dd className="text-zinc-600 dark:text-zinc-400">
                  {skill.items}
                </dd>
              </div>
            ))}
          </dl>

          <h2 className="mt-12 text-sm font-semibold text-zinc-900 dark:text-zinc-100">
            Education & languages
          </h2>
          <ul className="mt-6 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
            <li>Master’s degree, Computer Software Engineering — 2018</li>
            <li>
              Bachelor’s degree, Computer Software Engineering, Darmstadt
              University of Applied Sciences — 2016
            </li>
            <li>English C1 · Serbian B1 · German A1</li>
          </ul>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href={site.social.github} icon={GitHubIcon}>
              Follow on GitHub
            </SocialLink>
            <SocialLink
              href={site.social.linkedin}
              icon={LinkedInIcon}
              className="mt-4"
            >
              Connect on LinkedIn
            </SocialLink>
            <SocialLink
              href={site.social.youtube}
              icon={YouTubeIcon}
              className="mt-4"
            >
              Watch on YouTube
            </SocialLink>
            <SocialLink
              href={`mailto:${site.email}`}
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              {site.email}
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
