import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProjectCard } from "@/components/project-card"
import { Briefcase, PenTool, Settings, Wrench } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    id: "marketplace",
    title: "Music Marketplace",
    description: "Rights management technology for DJ mixes and remixes.",
    coverImage: "/mixbank-demo-ss.png?height=630&width=1200",
    prototypeUrl: "https://super-frangollo-031a70.netlify.app/",
    problemStatement: "Lorem ipsum dolor sit amet...",
    challengeAndRole: "Lorem ipsum dolor sit amet...",
    technicalInnovation: "Lorem ipsum dolor sit amet...",
    strategicExecution: "Lorem ipsum dolor sit amet...",
    impactAndLegacy: "Lorem ipsum dolor sit amet...",
  },
  {
    id: "apiinfra",
    title: "Enterprise API Rebuild",
    description: "Simplifying an API design and infrastructure",
    coverImage: "/api-infra-before-after.png?height=630&width=1200",
    prototypeUrl: "https://prototype.dataflow.com",
    problemStatement:
      "Managing and visualizing real-time data streams at scale presented significant challenges for enterprise customers. Traditional solutions struggled with latency and complex data relationships.",
    challengeAndRole:
      "As Technical Product Lead, I architected a scalable real-time analytics platform handling millions of events per second. Led a team of 8 engineers through the development and deployment phases.",
    technicalInnovation:
      "Implemented a novel stream processing architecture using Apache Kafka and custom aggregation algorithms. Reduced latency by 80% while maintaining data consistency.",
    strategicExecution:
      "Coordinated with 5 enterprise clients for beta testing, gathering feedback, and iterating on the solution. Successfully launched to 100+ enterprise customers within 8 months.",
    impactAndLegacy:
      "Platform now processes over 1B events daily with 99.99% uptime. Generated $12M in new annual recurring revenue within first year of launch.",
  },
  {
    id: "music-charts",
    title: "Performance Metrics Dashboard",
    description: "Somethign catchy goes here regarding the platform.",
    coverImage: "/MusicCharts-dashboard.png?height=630&width=1200",
    prototypeUrl: "https://customer-activation-simulator-ryanwigley522.replit.app/",
    problemStatement:
      "Quantum computing education and experimentation required expensive hardware or complex software setups, limiting accessibility for students and researchers.",
    challengeAndRole:
      "Led the development of a web-based quantum circuit simulator that makes quantum computing accessible to anyone with a browser. Managed UX design and technical architecture.",
    technicalInnovation:
      "Created a novel quantum state visualization system and optimized matrix calculations for browser performance. Implemented WebAssembly for complex computations.",
    strategicExecution:
      "Partnered with 3 universities for initial testing and curriculum integration. Gathered feedback from 200+ students and researchers during beta.",
    impactAndLegacy:
      "Now used by 50+ educational institutions worldwide. Featured in quantum computing conferences and workshops.",
  },
  {
    id: "bookshelf",
    title: "Acquired Bookshelf",
    description: "AI assisted bookshelf for the Acquired podcast.",
    coverImage: "acquired-bookshelf.png?height=630&width=1200",
    prototypeUrl: "https://prototype.aicopilot.com",
    problemStatement:
      "Developers spent significant time on repetitive coding tasks and documentation lookup, reducing productivity and innovation time.",
    challengeAndRole:
      "Spearheaded the development of an AI-powered development assistant that understands project context and coding patterns. Led product strategy and ML architecture.",
    technicalInnovation:
      "Developed a novel context-aware code understanding system using transformer models and semantic code analysis. Integrated with major IDEs and git workflows.",
    strategicExecution:
      "Conducted extensive testing with 1000+ developers across different programming languages and project sizes. Iteratively improved accuracy and suggestion relevance.",
    impactAndLegacy:
      "Reduced average development time by 30% for early adopters. Tool has assisted in writing over 1M lines of code across 10k+ projects.",
  },
]

const essays = [
  {
    id: "1",
    date: "12/12/24",
    title: "100 days of AI",
    preview:
      "I've been finding myself thinking a lot about young Ryan lately.",
    url: "https://blog.ryanwigley.com/100-days-of-ai",
  },
  {
    id: "2",
    date: "12/5/24",
    title: "Free-range AI agents",
    preview:
      "I can’t stop thinking about AI agents. We’re witnessing the dawn of truly autonomous digital beings",
    url: "https://blog.ryanwigley.com/free-range-ai-agents",
  },
  {
    id: "3",
    date: "10/31/24",
    title: "The growing AI innovation gap",
    preview:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    url: "https://blog.ryanwigley.com/the-growing-ai-innovation-gap",
  },
  {
    id: "4",
    date: "10/22/24",
    title: "How to avoid overthinking your API",
    preview:
      "If you are in the business of software integrations, your API is your brand’s digital handshake with the world.",
    url: "https://blog.ryanwigley.com/how-to-avoid-overthinking-your-api",
  },
]

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container max-w-4xl mx-auto px-4 pb-16">
        <section className="mb-12">
          <p className="text-lg text-muted-foreground">
            Hey! I'm Ryan Wigley, a technical product leader based in Seattle, where I live with my wife and toddler.
            I'm passionate about emerging technology and new ways of thinking, working, and living.
          </p>
        </section>

        <section className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <Briefcase className="h-5 w-5" />
            <h2 className="text-xl font-semibold">Work</h2>
          </div>
          <p className="text-muted-foreground mb-4">
            I specialize in building new products, APIs, transforming complex architecture & operations, and wearing many hats.
          </p>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 mt-1 rounded-full bg-primary" />
              <div>
                <h3 className="font-medium">Amazon</h3>
                <p className="text-sm text-muted-foreground">Sr Technical PM • 2021 - today</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 mt-1 rounded-full bg-primary" />
              <div>
                <h3 className="font-medium">Productonics</h3>
                <p className="text-sm text-muted-foreground">Founder • 2020 - today</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 mt-1 rounded-full bg-primary" />
              <div>
                <h3 className="font-medium">Dubset Media</h3>
                <p className="text-sm text-muted-foreground">Founding PM • 2012 - 2020</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 mt-1 rounded-full bg-primary" />
              <div>
                <h3 className="font-medium">Bouncebug</h3>
                <p className="text-sm text-muted-foreground">Co-Founder • 2011 - 2012</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <PenTool className="h-5 w-5" />
            <h2 className="text-xl font-semibold">Project portfolio</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        <section className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <PenTool className="h-5 w-5" />
            <h2 className="text-xl font-semibold">Recent essays</h2>
          </div>
          <div className="space-y-8">
            {essays.map((essay) => (
              <article key={essay.id} className="group">
                <Link href={essay.url} className="space-y-2">
                  <div className="flex items-baseline gap-4">
                    <time className="text-sm text-muted-foreground shrink-0">{essay.date}</time>
                    <h3 className="font-medium group-hover:text-primary">{essay.title}</h3>
                  </div>
                  <p className="text-muted-foreground">{essay.preview}</p>
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <Wrench className="h-5 w-5" />
            <h2 className="text-xl font-semibold">Favorite tools</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              { name: "Notion", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit." },
              { name: "ChatGPT", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit." },
              { name: "Claude", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit." },
              { name: "Perplexity", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit." },
              { name: "Cursor", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit." },
              { name: "v0", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit." },
              { name: "Replit", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit." },
            ].map((tool) => (
              <div key={tool.name} className="flex items-start gap-3 p-4 rounded-lg border bg-card">
                <Settings className="h-5 w-5 mt-0.5 text-muted-foreground" />
                <div>
                  <h3 className="font-medium">{tool.name}</h3>
                  <p className="text-sm text-muted-foreground">{tool.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

