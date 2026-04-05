"use client";

export function Footer() {
  return (
    <footer className="py-12 mt-20 border-t border-border/50">
      <div className="text-center space-y-3">
        <p className="text-sm text-muted-foreground">
          built with care in 2026
        </p>
        <p className="text-sm text-muted-foreground">
          inspired by{" "}
          <a
            href="https://www.iankorovinsky.ca/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 hover:text-foreground transition-colors"
          >
            ian korovinsky
          </a>
        </p>
      </div>
    </footer>
  );
}
