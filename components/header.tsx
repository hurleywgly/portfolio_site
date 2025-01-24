import { Mail, Twitter, Linkedin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { FC } from 'react'

export const Header: FC = () => {
  return (
    <header className="w-full max-w-3xl mx-auto py-8 px-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image 
            src="/ryan-profile.jpg" 
            alt="Ryan Wigley" 
            width={62} 
            height={62} 
            className="rounded-full"
            priority
          />
          <div>
            <h1 className="text-xl font-bold">Ryan Wigley</h1>
            <p className="text-md text-muted-foreground">Technical Product Leader</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Link href="https://www.linkedin.com/in/rywigs/" className="text-muted-foreground hover:text-foreground">
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link href="https://twitter.com/rywigs" className="text-muted-foreground hover:text-foreground">
            <Twitter className="h-5 w-5" />
            <span className="sr-only">Twitter</span>
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

