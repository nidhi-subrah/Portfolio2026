"use client";

import { SocialLinks } from "./social-links";
import { FlatLay } from "./flat-lay";

export function Hero() {
  return (
    <section className="relative min-h-[70vh] lg:min-h-[67vh] flex items-start pt-16 lg:pt-20">
      <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-10">
        {/* Left side - Text content */}
        <div className="flex flex-col justify-center">
          <p className="font-hand text-2xl md:text-3xl text-accent-soft mb-1 -rotate-2 origin-left animate-in fade-in duration-500">
            {/* Caveat's capital "I" is cursive; its "l" is a plain straight stroke, so show that
                visually while screen readers still get "I'm". */}
            <span className="sr-only">hi there, I&apos;m</span>
            <span aria-hidden>hi there, l&apos;m</span>
          </p>
          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-6 animate-in fade-in slide-in-from-bottom-4 duration-500"
          >
            Nidhi{" "}
            <span className="relative whitespace-nowrap">
              <span className="shine-text font-serif italic font-medium pr-1">
                Subrahmanya
              </span>
            </span>
          </h1>

          {/* Social links directly under name */}
          <div
            className="mb-7 animate-in fade-in slide-in-from-bottom-4 duration-500"
            style={{ animationDelay: '80ms' }}
          >
            <SocialLinks />
          </div>

          <div
            className="font-display max-w-xl animate-in fade-in slide-in-from-bottom-4 duration-500"
            style={{ animationDelay: '150ms' }}
          >
            <p className="text-xl md:text-[1.4rem] leading-snug text-foreground/95 font-light">
              Computer Engineering @{" "}
              <span className="text-accent font-normal">University of Waterloo</span>.
            </p>
            <p className="text-xl md:text-[1.4rem] leading-snug text-foreground/95 font-light mt-3">
              I love <em className="italic text-accent font-normal">building things</em> and staying busy.
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mt-5">
              Mentoring, fostering connections, and staying in tune with{" "}
              <span className="whitespace-nowrap">the latest tech!</span>
            </p>
          </div>

        </div>

        {/* Right side - Flat lay composition */}
        {/* Fixed height keeps every sticker exactly where it was, regardless of the text column */}
        <div className="relative hidden lg:block lg:self-start lg:h-[380px] lg:-translate-x-10 lg:translate-y-10">
          <FlatLay />
        </div>
      </div>
    </section>
  );
}
