'use client'

import { useEffect, useRef, useState } from 'react'

import { Container } from '@/components/Container'

function ChevronIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M6.75 5.75 9.25 8l-2.5 2.25"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ScrollButton({
  direction,
  disabled,
  onClick,
}: {
  direction: 'previous' | 'next'
  disabled: boolean
  onClick: () => void
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={`Scroll to ${direction} items`}
      className="group flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md ring-1 shadow-zinc-800/5 ring-zinc-900/5 transition disabled:opacity-40 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 dark:enabled:hover:border-zinc-700"
    >
      <ChevronIcon
        className={`h-4 w-4 stroke-zinc-500 transition group-enabled:group-hover:stroke-zinc-700 dark:stroke-zinc-400 dark:group-enabled:group-hover:stroke-zinc-200 ${direction === 'previous' ? 'rotate-180' : ''}`}
      />
    </button>
  )
}

export function Carousel({
  title,
  href,
  linkLabel,
  children,
}: {
  title: string
  href: string
  linkLabel: string
  children: React.ReactNode
}) {
  let listRef = useRef<HTMLUListElement>(null)
  let [canScroll, setCanScroll] = useState({ previous: false, next: false })

  useEffect(() => {
    let list = listRef.current
    if (!list) return
    let update = () =>
      setCanScroll({
        previous: list.scrollLeft > 0,
        next: list.scrollLeft + list.clientWidth < list.scrollWidth - 1,
      })
    update()
    list.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      list.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  function scroll(direction: 1 | -1) {
    let list = listRef.current
    if (!list) return
    let reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    list.scrollBy({
      left: direction * list.clientWidth * 0.8,
      behavior: reduce ? 'auto' : 'smooth',
    })
  }

  let headingId = `carousel-${title.toLowerCase().replace(/\W+/g, '-')}`

  return (
    <section aria-labelledby={headingId} className="mt-16 sm:mt-20">
      <Container>
        <div className="flex items-center justify-between gap-4">
          <h2
            id={headingId}
            className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100"
          >
            {title}
          </h2>
          <div className="flex items-center gap-3">
            <a
              href={href}
              className="text-sm font-medium text-teal-600 hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300"
            >
              {linkLabel}
            </a>
            <div className="hidden gap-2 sm:flex">
              <ScrollButton
                direction="previous"
                disabled={!canScroll.previous}
                onClick={() => scroll(-1)}
              />
              <ScrollButton
                direction="next"
                disabled={!canScroll.next}
                onClick={() => scroll(1)}
              />
            </div>
          </div>
        </div>
        <ul
          ref={listRef}
          role="list"
          className="-mx-4 mt-6 flex snap-x snap-mandatory scroll-px-4 [scrollbar-width:thin] gap-6 overflow-x-auto overscroll-x-contain px-4 pb-4"
        >
          {children}
        </ul>
      </Container>
    </section>
  )
}

export function CarouselItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="relative w-72 flex-none snap-start sm:w-80">{children}</li>
  )
}
