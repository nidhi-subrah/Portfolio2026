"use client";

import { SocialLinks } from "./social-links";

export function Footer() {
  return (
    <footer className="mt-4 py-10 border-t border-border">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-5">
        <div className="text-center sm:text-left">
        <p className="font-hand text-xl text-accent-soft -rotate-1 mb-1">thanks for stopping by!</p>
        <p className="text-sm text-muted-foreground">
          <span className="font-serif italic text-foreground/90">Nidhi Subrahmanya</span>{" "}
          <span className="text-accent">♡</span> 2026
        </p>
        </div>
        <SocialLinks size="sm" />
      </div>
    </footer>
  );
}
