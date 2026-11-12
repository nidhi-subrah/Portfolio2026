"use client";

import { useState } from "react";
import type { Project } from "@/lib/data";
import { ProjectCard } from "./project-card";
import { ProjectModal } from "./project-modal";

interface ProjectGridProps {
  projects: Project[];
}

export function ProjectGrid({ projects }: ProjectGridProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
        {projects.map((project, index) => (
          <div key={project.id}>
            <ProjectCard
              project={project}
              index={index}
              onClick={() => setSelectedProject(project)}
            />
          </div>
        ))}
      </div>
      
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}
