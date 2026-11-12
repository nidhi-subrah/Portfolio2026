"use client";

import { useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import type { Project } from "@/lib/data";
import { X, ExternalLink } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

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

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-[var(--scrim)] backdrop-blur-md animate-in fade-in duration-200" />
      
      {/* Modal */}
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-popover rounded-3xl border border-border shadow-[0_40px_120px_-30px_var(--glow-soft)] animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-background/70 border border-border backdrop-blur-md text-muted-foreground hover:text-foreground hover:rotate-90 transition-all duration-300"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Project image */}
{project.carouselImages && project.carouselImages.length > 1 ? (
  <Carousel className="w-full">
    <CarouselContent>
      {project.carouselImages.map((image, index) => (
        <CarouselItem key={index}>
          <div className="relative aspect-video w-full">
            <Image
              src={image}
              alt={`${project.title} - Image ${index + 1}`}
              fill
              className="object-cover rounded-t-3xl"
              sizes="(max-width: 768px) 100vw, 672px"
            />
          </div>
        </CarouselItem>
      ))}
    </CarouselContent>
    <CarouselPrevious className="left-2" />
    <CarouselNext className="right-2" />
  </Carousel>
) : (
  <div className="relative aspect-video w-full">
    <Image
      src={
        project.carouselImages && project.carouselImages.length > 0
          ? project.carouselImages[0]
          : project.image
      }
      alt={project.title}
      fill
      className="object-cover rounded-t-3xl"
      sizes="(max-width: 768px) 100vw, 672px"
    />
  </div>
)}

        {/* Content */}
        <div className="p-6 lg:p-8">
          {/* Header */}
          <div className="flex items-start justify-between gap-4 mb-6">
            <div>
              <h2 className="font-display text-2xl font-medium tracking-wide mb-1">
                {project.title}
              </h2>
              <p className="font-display text-muted-foreground">{project.subtitle}</p>
              {project.location && (
                <p className="text-sm text-muted-foreground/80 mt-1">{project.location}</p>
              )}
            </div>
            <span className="px-3 py-1 text-xs font-mono border border-border bg-foreground/[0.03] rounded-full text-muted-foreground shrink-0 whitespace-nowrap">
              {project.year}
            </span>
          </div>

          {/* Overview */}
          <div className="mb-6">
            <h3 className="text-xs font-medium text-accent uppercase tracking-[0.2em] mb-2">
              Overview
            </h3>
            <p
              className="font-display text-base md:text-lg text-muted-foreground leading-relaxed whitespace-pre-line"
              dangerouslySetInnerHTML={{ __html: project.overview }}
            />
            {project.attachments?.map((a) => (
              <figure key={a.src} className="mt-5">
              {/* white backing: the certificate has a transparent background */}
              <div className="overflow-hidden rounded-xl bg-white ring-1 ring-border shadow-lg">
                <Image
                  src={a.src}
                  alt={a.alt}
                  width={a.width}
                  height={a.height}
                  draggable={false}
                  className="w-full h-auto"
                  sizes="(max-width: 768px) 100vw, 608px"
                />
              </div>
              {a.caption && (
                <figcaption className="mt-3 font-display italic text-sm md:text-base text-muted-foreground">
                  {a.caption}
                </figcaption>
              )}
              </figure>
            ))}
          </div>
          {/* Features */}
{project.keyFeatures && project.keyFeatures.length > 0 && (
  <div className="mb-6">
    <h3 className="text-xs font-medium text-accent uppercase tracking-[0.2em] mb-2">
      Key Features
    </h3>
    <ul className="list-disc marker:text-accent pl-5 space-y-2 font-display text-base md:text-lg text-muted-foreground leading-relaxed">
      {project.keyFeatures.map((feature) => (
        <li key={feature}>{feature}</li>
      ))}
    </ul>
  </div>
)}
{project.awards && project.awards.length > 0 && (
  <div className="mb-6">
    <h3 className="text-xs font-medium text-accent uppercase tracking-[0.2em] mb-2">
      Honours & Awards
    </h3>
    <ul className="list-disc marker:text-accent pl-5 space-y-2 font-display text-base md:text-lg text-muted-foreground leading-relaxed">
      {project.awards.map((award) => (
        <li key={award}>{award}</li>
      ))}
    </ul>
  </div>
)}
          {project.techStack && project.techStack.length > 0 && (
  <div className="mb-8">
    <h3 className="text-xs font-medium text-accent uppercase tracking-[0.2em] mb-3">
      Tech Stack
    </h3>
    <div className="flex flex-wrap gap-2">
      {project.techStack.map((tech) => (
        <span
          key={tech}
          className="px-3 py-1 text-sm rounded-full border border-border bg-foreground/[0.04] text-foreground/85"
        >
          {tech}
        </span>
      ))}
    </div>
  </div>
)}

          {/* Links */}
          <div className="flex flex-wrap gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 bg-accent text-accent-foreground text-sm font-semibold tracking-wide rounded-full hover:opacity-90 hover:-translate-y-0.5 transition-all duration-300"
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
                className="flex items-center gap-2 px-5 py-2.5 border border-border text-foreground text-sm font-semibold tracking-wide rounded-full hover:bg-foreground/[0.06] hover:-translate-y-0.5 transition-all duration-300"
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
                className="flex items-center gap-2 px-5 py-2.5 bg-accent text-accent-foreground text-sm font-semibold tracking-wide rounded-full hover:opacity-90 hover:-translate-y-0.5 transition-all duration-300"
              >
                LEARN MORE
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
            {project.youtube && (
              <a
                href={project.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 bg-accent text-accent-foreground text-sm font-semibold tracking-wide rounded-full hover:opacity-90 hover:-translate-y-0.5 transition-all duration-300"
              >
                MY YOUTUBE CHANNEL! 
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}