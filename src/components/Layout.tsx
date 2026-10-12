import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="fixed inset-0 flex justify-center sm:px-8">
        <div className="flex w-full max-w-7xl lg:px-8">
          <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20" />
        </div>
      </div>
      <div className="relative flex w-full flex-col">
        <a
          href="#main"
          className="fixed top-4 left-4 z-50 -translate-y-24 rounded-md bg-white px-3 py-2 text-sm font-medium text-zinc-800 shadow-md focus:translate-y-0 dark:bg-zinc-800 dark:text-zinc-100"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-auto">
          {children}
        </main>
        <Footer />
      </div>
    </>
  )
}
