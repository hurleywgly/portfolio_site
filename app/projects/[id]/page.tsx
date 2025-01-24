import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"

// Import projects data from a shared location
const projects = [
  {
    id: "marketplace",
    title: "Music Marketplace",
    description: "Rights management technology for DJ mixes and remixes.",
    coverImage: "/mixbank-demo-ss.png?height=630&width=1200",
    prototypeUrl: "https://super-frangollo-031a70.netlify.app/",
    problemStatement: "Managing rights for derivative music content like DJ mixes and remixes was a complex, manual process that limited monetization opportunities for artists and labels.",
    challengeAndRole: "As Technical Product Lead, I designed and built a scalable rights management platform that could handle complex music ownership scenarios and automate royalty distributions.",
    technicalInnovation: "Developed a novel audio fingerprinting system and blockchain-based rights registry that could track partial ownership of derivative works.",
    strategicExecution: "Partnered with major labels and DJ platforms for initial testing. Scaled to process millions of tracks while maintaining accuracy.",
    impactAndLegacy: "Platform now handles rights for over 5M derivative works, generating significant new revenue streams for rights holders.",
  },
  {
    id: "apiinfra",
    title: "Enterprise API Rebuild",
    description: "Simplifying an API design and infrastructure",
    coverImage: "/api-infra-before-after.png?height=630&width=1200",
    prototypeUrl: "https://prototype.dataflow.com",
    problemStatement: "Legacy API infrastructure was causing performance bottlenecks and making it difficult to add new features or integrate with partners.",
    challengeAndRole: "Led complete redesign and rebuild of core API infrastructure, focusing on scalability and developer experience.",
    technicalInnovation: "Implemented GraphQL federation and edge caching to improve performance while reducing complexity.",
    strategicExecution: "Managed phased migration to minimize disruption. Provided extensive documentation and support for internal and external developers.",
    impactAndLegacy: "New API handles 10x previous load with better performance. Integration time for partners reduced from weeks to days.",
  },
  {
    id: "music-charts",
    title: "Performance Metrics Dashboard",
    description: "Real-time analytics platform for music performance tracking",
    coverImage: "/MusicCharts-dashboard.png?height=630&width=1200",
    prototypeUrl: "https://customer-activation-simulator-ryanwigley522.replit.app/",
    problemStatement: "Music industry professionals lacked real-time insights into track performance across multiple platforms and territories.",
    challengeAndRole: "Designed and built a unified dashboard that aggregates and visualizes streaming, social, and sales metrics in real-time.",
    technicalInnovation: "Created a flexible data pipeline that could handle diverse data sources and formats while maintaining consistency.",
    strategicExecution: "Worked closely with industry analysts to identify key metrics and visualization needs. Iteratively improved based on user feedback.",
    impactAndLegacy: "Dashboard is now used by 200+ labels and publishers to track performance of 1M+ tracks.",
  },
  {
    id: "bookshelf",
    title: "Acquired Bookshelf",
    description: "AI assisted bookshelf for the Acquired podcast.",
    coverImage: "/acquired-bookshelf.png?height=630&width=1200",
    prototypeUrl: "https://prototype.aicopilot.com",
    problemStatement: "Podcast listeners wanted an easy way to discover and explore books mentioned in episodes, with context about their relevance.",
    challengeAndRole: "Built an AI-powered platform that automatically identifies book references in podcast transcripts and provides rich contextual information.",
    technicalInnovation: "Developed custom NLP models to extract and contextualize book references from audio transcripts.",
    strategicExecution: "Collaborated with podcast team to ensure accuracy and add editorial context where needed.",
    impactAndLegacy: "Platform has helped drive significant book sales and enriched the listening experience for podcast audience.",
  },
]

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === params.id)

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container max-w-4xl mx-auto px-4 pb-16">
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to home
          </Link>
        </div>

        <div className="relative aspect-[1200/630] mb-8 overflow-hidden rounded-lg border">
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>

        <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
        <p className="text-xl text-muted-foreground mb-8">{project.description}</p>

        <div className="mb-8">
          <a
            href={project.prototypeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
          >
            View Prototype
          </a>
        </div>

        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-semibold mb-4">Problem Statement</h2>
            <p className="text-muted-foreground">{project.problemStatement}</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Challenge & Role</h2>
            <p className="text-muted-foreground">{project.challengeAndRole}</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Technical Innovation</h2>
            <p className="text-muted-foreground">{project.technicalInnovation}</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Strategic Execution</h2>
            <p className="text-muted-foreground">{project.strategicExecution}</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Impact & Legacy</h2>
            <p className="text-muted-foreground">{project.impactAndLegacy}</p>
          </section>
        </div>

        <div className="mt-16 p-4 bg-muted/50 rounded-lg">
          <h2 className="font-semibold mb-2">About this site</h2>
          <p className="text-sm text-muted-foreground">
            This site was built using code assists from Cursor, Claude, and 
            ChatGPT and is currently hosted on Netlify. Prototypes were built 
            using Replit, v0, Bolt, and more.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  )
}

