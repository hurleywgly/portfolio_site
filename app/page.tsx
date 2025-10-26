import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProjectCard } from "@/components/project-card"
import { Briefcase, PenTool, Settings, Wrench } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { tools, essays, workExperience, projects } from "@/lib/data"
import type { Project, WorkExperience, Tool, Essay } from "@/lib/types"
import { ToolCard } from "@/components/tool-card"
import { WorkItem } from "@/components/work-item"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container max-w-4xl mx-auto px-4 pb-16">
        <section className="mb-12">
          <p className="text-lg text-muted-foreground">
          I build systems to understand them. From shipping products at Amazon-scale to prototyping agentic systems in my home office, I'm drawn to the edges where strategy meets execution. Currently leading the membership experience at Raya, figuring out where AI solves actual problems versus where it's just hype.
          </p>
        </section>

        <section className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <Briefcase className="h-5 w-5" />
            <h2 className="text-xl font-semibold">Work</h2>
          </div>
          <div className="space-y-4">
            {workExperience.map((work) => (
              <WorkItem key={work.company} experience={work} />
            ))}
          </div>
        </section>

        <section className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <Settings className="h-5 w-5" />
            <h2 className="text-xl font-semibold">Project portfolio</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project: Project) => (
              project && project.id ? (
                <ProjectCard key={project.id} project={project} />
              ) : null
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
            {tools.map((tool) => (
              <ToolCard key={tool.name} tool={tool} />
            ))}
          </div>
          <div className="mt-16 p-4 bg-muted/50 rounded-lg">
            <h2 className="font-semibold mb-2">About this site</h2>
            <p className="text-sm text-muted-foreground">
              This site was built using code assists from Cursor, Claude Code,
              and Claude. It is currently hosted on Netlify. Prototypes and apps
              were built using Lovable, v0, Bolt, Replit, and more.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

