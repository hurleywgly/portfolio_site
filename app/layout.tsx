import { GeistSans } from "geist/font/sans"
import type { Metadata } from "next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { ParticlesBackground } from "@/components/particles-background"

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
      <head>
        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-747E1F6JP2"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-747E1F6JP2');
            `,
          }}
        />
      </head>
      <body className={`${GeistSans.className} min-h-screen bg-background text-foreground`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <ParticlesBackground />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

