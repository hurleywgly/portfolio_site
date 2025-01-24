import { ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { FC } from 'react'

export const Footer: FC = () => {
  return (
    <footer className="border-t">
      <div className="max-w-3xl mx-auto px-4 py-6">
        <div className="flex flex-wrap gap-6 text-sm">
          <Link
            href="https://blog.ryanwigley.com"
            className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
          >
            blog
            <ArrowUpRight className="h-4 w-4" />
          </Link>
          <Link
            href="mailto:ryan.wigley522@gmail.com"
            className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
          >
            email
            <ArrowUpRight className="h-4 w-4" />
          </Link>
          <Link
            href="https://github.com/hurleywgly/portfolio_site"
            className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
          >
            view source
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </footer>
  )
}

