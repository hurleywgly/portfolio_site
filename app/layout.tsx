import { GeistSans } from "geist/font/sans"
import type { Metadata } from "next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

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
    <html lang="en" suppressHydrationWarning>
      <body className={`${GeistSans.className} min-h-screen bg-background text-foreground`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          forcedTheme="system"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

