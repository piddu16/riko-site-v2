"use client";

import Image from "next/image";
import { Icon } from "@/components/shared/Icons";

export function StickyNav() {
  return (
    <header
      className="sticky top-0 z-40 border-b border-line-soft"
      style={{
        background: "rgba(255,255,255,0.78)",
        backdropFilter: "blur(16px) saturate(180%)",
        WebkitBackdropFilter: "blur(16px) saturate(180%)",
      }}
    >
      <div className="mx-auto flex h-16 max-w-[1440px] items-center gap-8 px-8">
        <a href="#" className="flex items-center gap-2.5 text-[18px] font-bold tracking-[-0.02em] text-ink">
          <Image src="/assets/riko-mark.png" alt="" width={28} height={28} />
          <span>Riko</span>
        </a>
        <nav className="ml-2 flex gap-1">
          {[
            ["Features", "#features"],
            ["How it works", "#how"],
            ["Pricing", "#pricing"],
            ["Tally integration", "#tally"],
            ["Blog", "#blog"],
          ].map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-muted transition-colors hover:bg-tint-2 hover:text-ink"
            >
              {label}
            </a>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-2">
          <a href="#contact" className="rounded-lg px-3.5 py-2 text-sm font-medium text-muted hover:bg-tint-2 hover:text-ink">
            Contact
          </a>
          <a
            href="#contact"
            className="rounded-lg border border-line bg-white px-3.5 py-2 text-sm font-medium text-ink hover:bg-tint"
          >
            Book a demo
          </a>
          <a
            href="#cta"
            className="inline-flex items-center gap-1.5 rounded-lg bg-ink px-3.5 py-2 text-sm font-semibold text-white hover:bg-accent-deep"
          >
            Get started <Icon.arrowRight />
          </a>
        </div>
      </div>
    </header>
  );
}
