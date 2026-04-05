"use client";

import { useState } from "react";
import { Hero } from "@/components/hero";
import { TabsNav } from "@/components/tabs-nav";
import { ProjectGrid } from "@/components/project-grid";
import { Footer } from "@/components/footer";
import { workData, projectsData, activitiesData } from "@/lib/data";

export default function Home() {
  const [activeTab, setActiveTab] = useState("work");

  const getActiveProjects = () => {
    switch (activeTab) {
      case "work":
        return workData;
      case "projects":
        return projectsData;
      case "activities":
        return activitiesData;
      default:
        return workData;
    }
  };

  return (
    <div className="min-h-screen bg-background animate-in fade-in duration-500">
      <main className="max-w-7xl mx-auto px-6 lg:px-12">
        <Hero />

        <section className="pt-8 pb-12">
          <TabsNav activeTab={activeTab} onTabChange={setActiveTab} />
        </section>

        <section className="pb-4" key={activeTab}>
          <ProjectGrid projects={getActiveProjects()} />
        </section>

        <Footer />
      </main>
    </div>
  );
}
