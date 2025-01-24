'use client'

import Image from "next/image"
import Link from "next/link"
import type { Project } from "@/types"

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.id}`} className="group relative w-full">
      <div className="overflow-hidden rounded-lg border bg-card w-full">
        <div className="relative aspect-[1200/630]">
          <Image
            src={project.coverImage || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/60 opacity-0 transition-opacity group-hover:opacity-100 flex items-center justify-center">
            <span className="text-white font-medium">View Project</span>
          </div>
        </div>
        <div className="p-4">
          <h3 className="font-semibold">{project.title}</h3>
          <p className="text-sm text-muted-foreground mt-1">{project.description}</p>
        </div>
      </div>
    </Link>
  )
}

