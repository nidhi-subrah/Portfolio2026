"use client";

import { useState, useRef, type MouseEvent } from "react";
import Image from "next/image";
import type { Project } from "@/lib/data";

interface ProjectCardProps {
  project: Project;
  index?: number;
  onClick: () => void;
}

// Alternating tape colours / angles so the grid feels hand-assembled, not templated
const tapeColors = ["var(--accent)", "var(--tape-neutral)", "var(--accent-soft)"];
const tapeByName = {
  red: "var(--accent)",
  white: "var(--tape-neutral)",
  yellow: "var(--tape-yellow)",
  pink: "var(--accent-soft)",
} as const;
const tapeAngles = [-4, 3, -2, 5, -3, 2];
const cardTilts = [-0.8, 0.6, -0.5, 0.9, -0.7, 0.5];

export function ProjectCard({ project, index = 0, onClick }: ProjectCardProps) {
  const [glowPosition, setGlowPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const cardRef = useRef<HTMLElement>(null);

  const imageWrapperClass =
    project.title === "WATERLOO REALITY LABS"
      ? "relative aspect-[16/10] overflow-hidden rounded-2xl mb-4 bg-[#0C1726] ring-1 ring-border transition-all duration-500 group-hover:ring-accent/40 group-hover:shadow-[0_20px_50px_-20px_var(--glow-soft)]"
      : "relative aspect-[16/10] overflow-hidden rounded-2xl mb-4 bg-card ring-1 ring-border transition-all duration-500 group-hover:ring-accent/40 group-hover:shadow-[0_20px_50px_-20px_var(--glow-soft)]";

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
  className="group relative cursor-pointer transition-transform duration-500 ease-out"
  style={{
    transform: isHovering
      ? `translateY(-4px) rotate(${cardTilts[index % cardTilts.length]}deg)`
      : undefined,
  }}
>
  <span
    aria-hidden
    className="washi"
    style={{
      transform: `translateX(-50%) rotate(${tapeAngles[index % tapeAngles.length]}deg)`,
      ["--washi-color" as string]: project.tape ? tapeByName[project.tape] : tapeColors[index % tapeColors.length],
    }}
  />
  <div className={imageWrapperClass}>
    {/* Subtle cursor-responsive glow */}
    {isHovering && (
      <div
        className="absolute inset-0 z-20 pointer-events-none transition-opacity duration-300"
        style={{
          background: `radial-gradient(180px circle at ${glowPosition.x}px ${glowPosition.y}px, color-mix(in oklch, var(--accent) 14%, transparent) 0%, transparent 60%)`,
        }}
      />
    )}
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
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
      loading="eager"
      draggable={false}
      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
    />
  </div>

  <div className="font-display flex items-start justify-between gap-4 px-1">
    <div>
      <h3 className="text-[17px] font-medium tracking-wide text-foreground mb-1 transition-colors duration-300 group-hover:text-accent">
        {project.title}
      </h3>
      <p className="text-sm text-muted-foreground">{project.subtitle}</p>
    </div>
    <span className="mt-0.5 px-2.5 py-0.5 text-xs text-muted-foreground rounded-full border border-border bg-foreground/[0.03] shrink-0 whitespace-nowrap">
      {project.year}
    </span>
  </div>
</article>
  );
}
