'use client'

import Image from "next/image"
import Link from "next/link"
import { FC } from 'react'
import type { Project } from "@/lib/types"

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.id}`} className="group relative w-full">
      <div className="overflow-hidden rounded-lg border bg-card hover:bg-accent/50 transition-colors w-full">
        <div className="relative w-full pt-[52.5%]">
          <Image
            src={project.coverImage || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover absolute top-0 left-0 h-full w-full transition-transform group-hover:scale-105"
          />
          <div className="absolute top-0 left-0 h-full w-full bg-black/60 opacity-0 transition-opacity group-hover:opacity-100 flex items-center justify-center">
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

