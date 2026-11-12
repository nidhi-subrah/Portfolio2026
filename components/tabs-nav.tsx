"use client";

import { cn } from "@/lib/utils";

interface TabsNavProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const tabs = [
  { id: "work", label: "Work" },
  { id: "projects", label: "Projects" },
  { id: "activities", label: "Activities" },
];

export function TabsNav({ activeTab, onTabChange }: TabsNavProps) {
  return (
    <nav
      role="tablist"
      className="inline-flex items-center gap-1 p-1 rounded-full border border-border bg-foreground/[0.03] backdrop-blur-md self-start sm:self-auto"
    >
      {tabs.map((tab) => {
        const active = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            role="tab"
            aria-selected={active}
            onClick={() => onTabChange(tab.id)}
            className={cn(
              "px-5 py-2 font-display text-[15px] rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
              active
                ? "bg-accent text-accent-foreground shadow-[0_4px_20px_-4px_var(--glow)]"
                : "text-muted-foreground hover:text-foreground hover:bg-foreground/[0.05]"
            )}
          >
            {tab.label}
          </button>
        );
      })}
    </nav>
  );
}
