"use client";

import { useState, useRef, type MouseEvent } from "react";
import Image from "next/image";
import type { Project } from "@/lib/data";

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

export function ProjectCard({ project, onClick }: ProjectCardProps) {
  const [glowPosition, setGlowPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const cardRef = useRef<HTMLElement>(null);

  const imageWrapperClass =
    project.title === "WATERLOO REALITY LABS"
      ? "relative aspect-[16/10] overflow-hidden rounded-lg mb-4 bg-[#0C1726]"
      : "relative aspect-[16/10] overflow-hidden rounded-lg mb-4 bg-card";

  const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setGlowPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <article
  ref={cardRef}
  onClick={onClick}
  onMouseMove={handleMouseMove}
  onMouseEnter={() => setIsHovering(true)}
  onMouseLeave={() => setIsHovering(false)}
  className="group cursor-pointer transition-transform duration-200 hover:-translate-y-0.5"
>
  <div className={imageWrapperClass}>
    {/* Subtle cursor-responsive glow */}
    {isHovering && (
      <div
        className="absolute inset-0 z-20 pointer-events-none transition-opacity duration-300"
        style={{
          background: `radial-gradient(180px circle at ${glowPosition.x}px ${glowPosition.y}px, rgba(255,255,255,0.04) 0%, transparent 60%)`,
        }}
      />
    )}
    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
    {project.title === "NETWORKIFY" && (
    <div className="absolute top-3 left-3 z-20 rounded-xl bg-[#243246]/88 border border-amber-300/20 px-3 py-2 text-white shadow-lg backdrop-blur-sm">
    <div className="flex items-center gap-2">
      <span className="text-amber-300 text-sm">🏆</span>
      <div>
        <div className="text-[11px] font-semibold uppercase tracking-wide">
          Finalist at HackCanada 2026
        </div>
        <div className="text-[11px] italic text-white/75">
          Most Technically Advanced Project
        </div>
      </div>
    </div>
  </div>
  )}

    <Image
      src={project.image}
      alt={project.title}
      fill
      className="object-cover transition-transform duration-300 group-hover:scale-[1.015]"
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
    />
  </div>

  <div className="flex items-start justify-between gap-4">
    <div>
      <h3 className="font-semibold tracking-wide text-foreground mb-1">
        {project.title}
      </h3>
      <p className="text-sm text-muted-foreground">{project.subtitle}</p>
    </div>
    <span className="text-sm text-muted-foreground shrink-0">{project.year}</span>
  </div>
</article>
  );
}
