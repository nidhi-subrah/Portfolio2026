"use client";

import { SocialLinks } from "./social-links";
import { FlatLay } from "./flat-lay";

export function Hero() {
  return (
    <section className="min-h-[85vh] lg:min-h-[78vh] flex items-start pt-16 lg:pt-20">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-10">
        {/* Left side - Text content */}
        <div className="flex flex-col justify-center">
          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 animate-in fade-in slide-in-from-bottom-4 duration-500"
          >
            Nidhi Subrahmanya
          </h1>

          {/* Social links directly under name */}
          <div
            className="mb-7 animate-in fade-in slide-in-from-bottom-4 duration-500"
            style={{ animationDelay: '80ms' }}
          >
            <SocialLinks />
          </div>

          <div
            className="space-y-1 animate-in fade-in slide-in-from-bottom-4 duration-500"
            style={{ animationDelay: '150ms' }}
          >
            <p className="text-lg text-muted-foreground">
              honours computer engineering @ university of waterloo.
            </p>
            <p className="text-lg text-muted-foreground">
              learning, building and cheezing yur yur.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              i format
              exactly
              like this.
            </p>
          </div>
        </div>

        {/* Right side - Flat lay composition */}
        <div
          className="relative animate-in fade-in duration-700 hidden lg:block"
          style={{ animationDelay: '300ms' }}
        >
          <FlatLay />
        </div>
      </div>
    </section>
  );
}
