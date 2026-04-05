"use client";

import { cn } from "@/lib/utils";

interface TabsNavProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const tabs = [
  { id: "work", label: "work" },
  { id: "projects", label: "projects" },
  { id: "activities", label: "activities" },
];

export function TabsNav({ activeTab, onTabChange }: TabsNavProps) {
  return (
    <nav className="flex items-center gap-1.5">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={cn(
            "px-4 py-1.5 text-sm font-medium rounded-full transition-all duration-200",
            activeTab === tab.id
              ? "bg-foreground text-background"
              : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
          )}
        >
          {tab.label}
        </button>
      ))}
    </nav>
  );
}
