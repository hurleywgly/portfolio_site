import { Mail, Linkedin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { FC } from 'react'
import { ThemeAwareImage } from "@/components/ui/theme-aware-image"
import { workExperience } from "@/lib/data"

export function Header() {
  const experience = workExperience[0] // Current role (Raya)

  return (
    <header className="py-8">
      <div className="container max-w-4xl mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src="/ryan-profile.jpg"
            alt="Ryan Wigley"
            width={62}
            height={62}
            className="rounded-full"
            priority
          />
          <div className="flex-1">
            <Link href="/" className="flex items-center gap-2">
              <h1 className="text-2xl font-semibold">Ryan Wigley</h1>
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Link href="https://www.linkedin.com/in/ryanwigley/" className="text-muted-foreground hover:text-foreground">
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link href="https://x.com/rywigs" className="text-muted-foreground hover:text-foreground">
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
            <span className="sr-only">X (Twitter)</span>
          </Link>
          <Link href="mailto:ryan.wigley522@gmail.com" className="text-muted-foreground hover:text-foreground">
            <Mail className="h-5 w-5" />
            <span className="sr-only">Email</span>
          </Link>
        </div>
      </div>
    </header>
  )
}

