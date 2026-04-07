"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";
import type { Project } from "@/lib/data";
import { X, ExternalLink } from "lucide-react";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const handleEscape = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") onClose();
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, handleEscape]);

  if (!isOpen || !project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200" />
      
      {/* Modal */}
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-popover rounded-xl border border-border shadow-2xl animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-background/80 backdrop-blur-sm text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Project image */}
        <div className="relative aspect-video w-full">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover rounded-t-xl"
            sizes="(max-width: 768px) 100vw, 672px"
          />
        </div>

        {/* Content */}
        <div className="p-6 lg:p-8">
          {/* Header */}
          <div className="flex items-start justify-between gap-4 mb-6">
            <div>
              <h2 className="text-2xl font-bold tracking-wide mb-1">
                {project.title}
              </h2>
              <p className="text-muted-foreground">{project.subtitle}</p>
            </div>
            <span className="px-3 py-1 text-sm bg-secondary rounded-full text-muted-foreground shrink-0">
              {project.year}
            </span>
          </div>

          {/* Overview */}
          <div className="mb-6">
            <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2">
              Overview
            </h3>
            <p
            className="text-foreground/90 leading-relaxed whitespace-pre-line"
            dangerouslySetInnerHTML={{ __html: project.overview }}
            />
          </div>

          {/* Tech Stack */}
          <div className="mb-8">
            <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-3">
              Tools
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-sm bg-secondary rounded-md text-foreground/80"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 bg-foreground text-background font-medium rounded-lg hover:bg-foreground/90 transition-colors"
              >
                GITHUB
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 border border-border text-foreground font-medium rounded-lg hover:bg-secondary transition-colors"
              >
                LIVE DEMO
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
                        {project.companyWebsite && (
              <a
                href={project.companyWebsite}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 bg-foreground text-background font-medium rounded-lg hover:bg-foreground/90 transition-colors"
              >
                LEARN MORE
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
