"use client";

import dynamic from 'next/dynamic';
import { useEffect, useRef, useState } from "react";
import { Hero } from "@/components/hero";
import { ProjectGrid } from "@/components/project-grid";
import { Footer } from "@/components/footer";
import { workData, projectsData, activitiesData } from "@/lib/data";

const TabsNav = dynamic(
  () => import('@/components/tabs-nav').then((mod) => mod.TabsNav),
  { ssr: false }
);

export default function Home() {
  const [activeTab, setActiveTab] = useState("work");

  // The section heading bar sticks to the top once you scroll past it.
  // A zero-height sentinel just above it tells us when it's "stuck".
  const sentinelRef = useRef<HTMLDivElement>(null);
  const [stuck, setStuck] = useState(false);
  useEffect(() => {
    const el = sentinelRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => setStuck(!entry.isIntersecting && entry.boundingClientRect.top < 0));
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // All tabs stay mounted (images stay decoded); switching only toggles visibility,
  // so there's no remount/reload flicker or layout jump.
  const panels = [
    { id: "work", items: workData },
    { id: "projects", items: projectsData },
    { id: "activities", items: activitiesData },
  ];

  return (
    <>
    {/* Fixed layers live outside the animated wrapper (its transform would break position: fixed) */}
    <div className="ambient-bg" aria-hidden>
      <div className="ambient-grid" />
      <div className="ambient-vignette" />
    </div>
    <div className="relative min-h-screen animate-in fade-in duration-500">
      <main className="max-w-7xl mx-auto px-6 lg:px-12">
        <Hero />

        {/* spacing between the intro and this section */}
        <div className="pt-7 lg:pt-9" />
        <div ref={sentinelRef} aria-hidden />
        {/* Layout never changes between states (no flicker); only the backdrop fades in. */}
        <section
          data-stuck={stuck}
          className="sticky-bar sticky top-0 z-40 py-5 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6"
        >
          <div>
            <h2 className="relative inline-block font-serif italic text-3xl md:text-4xl text-foreground">
              Things I&apos;ve been up to
              <svg
                className="squiggle absolute left-0 -bottom-3 w-full h-3 text-accent"
                viewBox="0 0 300 12"
                preserveAspectRatio="none"
                aria-hidden
              >
                <path
                  d="M2 8 C 40 2, 70 12, 110 6 S 180 2, 220 7 S 280 10, 298 4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            </h2>
          </div>
          <TabsNav activeTab={activeTab} onTabChange={setActiveTab} />
        </section>
        {/* hint sits below the sticky bar so it scrolls away normally */}
        <p className="font-hand text-xl text-muted-foreground -mt-3 mb-16 -rotate-1">
          (tap any card for the full story ↓)
        </p>

        <section className="pt-7 pb-8">
          {panels.map((panel) => (
            <div
              key={panel.id}
              role="tabpanel"
              hidden={activeTab !== panel.id}
              className="tab-panel"
            >
              <ProjectGrid projects={panel.items} />
            </div>
          ))}
        </section>

        <Footer />
      </main>
    </div>
    </>
  );
}
