import { GeistSans } from "geist/font/sans"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Ryan Wigley",
  description: "Personal website and portfolio of Ryan Wigley, Technical Product Leader based in Seattle.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body className="min-h-screen bg-background text-foreground">{children}</body>
    </html>
  )
}

