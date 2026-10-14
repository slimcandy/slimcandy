import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Carousel, CarouselItem } from '@/components/Carousel'
import { Container } from '@/components/Container'
import {
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  YouTubeIcon,
} from '@/components/SocialIcons'
import { type Role, roles } from '@/content/work'
import { type ArticleWithSlug, getAllArticles } from '@/lib/articles'
import { formatDate } from '@/lib/formatDate'
import { type LinkedInPost, getLinkedInPosts } from '@/lib/linkedin'
import { site } from '@/lib/site'
import { type Video, getVideos } from '@/lib/youtube'

function BriefcaseIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function ArrowDownIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Article({ article }: { article: ArticleWithSlug }) {
  return (
    <Card as="article">
      <Card.Title href={`/articles/${article.slug}`}>
        {article.title}
      </Card.Title>
      <Card.Eyebrow as="time" dateTime={article.date} decorate>
        {formatDate(article.date)}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>Read article</Card.Cta>
    </Card>
  )
}

function VideoCard({ video }: { video: Video }) {
  return (
    <a
      href={video.url}
      className="group block rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-700 dark:focus-visible:outline-teal-400"
    >
      <img
        src={video.thumbnail}
        alt=""
        width={320}
        height={180}
        loading="lazy"
        decoding="async"
        className="aspect-video w-full rounded-2xl bg-zinc-100 object-cover ring-1 ring-zinc-900/5 dark:bg-zinc-800 dark:ring-white/10"
      />
      <h3 className="mt-4 text-base font-semibold tracking-tight text-zinc-800 group-hover:text-teal-700 dark:text-zinc-100 dark:group-hover:text-teal-400">
        {video.title}
      </h3>
      <time
        dateTime={video.published}
        className="mt-1 block text-sm text-zinc-500 dark:text-zinc-400"
      >
        {formatDate(video.published)}
      </time>
    </a>
  )
}

function LinkedInCard({ post }: { post: LinkedInPost }) {
  return (
    <a
      href={post.url}
      className="group flex h-full flex-col rounded-2xl border border-zinc-100 p-6 transition hover:bg-zinc-50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-700 dark:border-zinc-700/40 dark:hover:bg-zinc-800/50 dark:focus-visible:outline-teal-400"
    >
      {post.image && (
        <img
          src={post.image}
          alt=""
          width={320}
          height={180}
          loading="lazy"
          decoding="async"
          className="mb-4 aspect-video w-full rounded-lg bg-zinc-100 object-cover object-top ring-1 ring-zinc-900/5 dark:bg-zinc-800 dark:ring-white/10"
        />
      )}
      <time
        dateTime={post.date}
        className="text-sm text-zinc-500 dark:text-zinc-400"
      >
        {formatDate(post.date)}
      </time>
      <p
        className={clsx(
          'mt-3 text-sm whitespace-pre-line text-zinc-600 dark:text-zinc-400',
          post.image ? 'line-clamp-4' : 'line-clamp-[10]',
        )}
      >
        {post.text}
      </p>
      <span className="mt-auto pt-4 text-sm font-medium text-teal-700 dark:text-teal-400">
        Read on LinkedIn
        <span className="sr-only">: post from {formatDate(post.date)}</span>
      </span>
    </a>
  )
}

function SocialLink({
  icon: Icon,
  ...props
}: React.ComponentPropsWithoutRef<typeof Link> & {
  icon: React.ComponentType<{ className?: string }>
}) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

function Role({ role }: { role: Role }) {
  let endLabel = role.end ?? 'Present'
  let endDate = role.end ?? new Date().getFullYear().toString()

  return (
    <li className="flex gap-4">
      <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full bg-white shadow-md ring-1 shadow-zinc-800/5 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
        <Image
          src={role.logo}
          alt=""
          className="h-7 w-7 rounded-md"
          unoptimized
        />
      </div>
      <dl className="flex flex-auto flex-wrap gap-x-2">
        <dt className="sr-only">Company</dt>
        <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
          <a
            href={role.url}
            className="hover:text-teal-700 dark:hover:text-teal-400"
          >
            {role.company}
          </a>
        </dd>
        <dt className="sr-only">Focus</dt>
        <dd className="text-xs text-zinc-500 dark:text-zinc-400">
          {role.summary}
        </dd>
        <dt className="sr-only">Date</dt>
        <dd
          className="ml-auto text-xs text-zinc-500 dark:text-zinc-400"
          aria-label={`${role.start} until ${endLabel}`}
        >
          <time dateTime={role.start}>{role.start}</time>{' '}
          <span aria-hidden="true">—</span>{' '}
          <time dateTime={endDate}>{endLabel}</time>
        </dd>
      </dl>
    </li>
  )
}

function Resume() {
  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Work</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {roles.map((role) => (
          <Role key={role.company} role={role} />
        ))}
      </ol>
      <Button
        href={site.cv}
        variant="secondary"
        className="group mt-6 w-full"
        download
      >
        Download CV
        <span className="sr-only">(PDF)</span>
        <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
      </Button>
    </div>
  )
}

export default async function Home() {
  let [articles, videos, posts] = await Promise.all([
    getAllArticles().then((all) => all.slice(0, 4)),
    getVideos(),
    getLinkedInPosts(),
  ])

  return (
    <>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Lead Full Stack Engineer building trading systems.
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            I’m Aleksei, a full stack engineer with 12+ years across financial
            services, banking, and retail. I own React interfaces, Node.js
            services, databases, testing, and cloud delivery end to end — and
            orchestrate agentic coding with Claude Code, Codex, and GitHub
            Copilot.
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href={site.social.github}
              aria-label="GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href={site.social.linkedin}
              aria-label="LinkedIn"
              icon={LinkedInIcon}
            />
            <SocialLink
              href={site.social.youtube}
              aria-label="YouTube"
              icon={YouTubeIcon}
            />
            <SocialLink
              href={`mailto:${site.email}`}
              aria-label={`Email ${site.email}`}
              icon={MailIcon}
            />
          </div>
        </div>
      </Container>
      {videos.length > 0 && (
        <Carousel
          title="Latest videos"
          href={site.social.youtube}
          linkLabel="YouTube channel"
        >
          {videos.map((video) => (
            <CarouselItem key={video.id}>
              <VideoCard video={video} />
            </CarouselItem>
          ))}
        </Carousel>
      )}
      {posts.length > 0 && (
        <Carousel
          title="On LinkedIn"
          href={site.social.linkedin}
          linkLabel="LinkedIn profile"
        >
          {posts.map((post) => (
            <CarouselItem key={post.url}>
              <LinkedInCard post={post} />
            </CarouselItem>
          ))}
        </Carousel>
      )}
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Resume />
          </div>
        </div>
      </Container>
    </>
  )
}
