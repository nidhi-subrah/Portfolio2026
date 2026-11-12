"use client";

import dynamic from 'next/dynamic';
import { useState } from "react";
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

        <section className="pt-10 pb-12 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div>
            <p className="font-hand text-xl text-accent-soft mb-1 -rotate-2 origin-left">
              a bit about my life
            </p>
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
            <p className="font-hand text-xl text-muted-foreground mt-4 -rotate-1">
              (tap any card for the full story ↓)
            </p>
          </div>
          <TabsNav activeTab={activeTab} onTabChange={setActiveTab} />
        </section>

        <section className="pb-8">
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
