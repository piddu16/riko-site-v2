"use client";

import { useEffect, useState } from "react";
import { Icon } from "@/components/shared/Icons";
import { InlineAnimation } from "@/components/animation/InlineAnimation";

function useIsNarrow(breakpoint = 1024) {
  const [narrow, setNarrow] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${breakpoint - 1}px)`);
    const handler = () => setNarrow(mq.matches);
    handler();
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, [breakpoint]);
  return narrow;
}

export function HeroSection() {
  const narrow = useIsNarrow(1024);

  return (
    <section
      className="relative overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(34,197,94,0.10), transparent 60%), linear-gradient(180deg, var(--tint) 0%, #ffffff 80%)",
      }}
    >
      <div className="mx-auto max-w-[1280px] px-6 pb-16 pt-12 sm:px-8 lg:pb-24 lg:pt-20">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-14">
          <div>
            <div className="mb-7 flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-line-soft bg-white px-2.5 py-1.5 text-[12.5px] font-medium text-ink-2">
                <span className="relative inline-flex">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent-bright" />
                  <span className="pulse-dot absolute inset-0" />
                </span>
                Riko v4.2 · Deep Tally connector live
              </div>
              <span
                className="text-xs uppercase tracking-[0.04em] text-faint"
                style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
              >
                MUMBAI · BUILT IN INDIA
              </span>
            </div>

            <h1
              className="text-balance text-[clamp(40px,6vw,76px)] font-semibold leading-[0.98] tracking-[-0.035em] text-ink"
            >
              Your books, but they{" "}
              <span
                className="text-accent"
                style={{
                  fontFamily: "var(--font-instrument-serif), serif",
                  fontStyle: "italic",
                  fontWeight: 400,
                  letterSpacing: "-0.02em",
                }}
              >
                talk back.
              </span>
            </h1>

            <p className="mt-7 max-w-[46ch] text-[19px] leading-[1.5] text-muted">
              Riko sits above Tally — reads your ledgers, chases overdue parties
              on WhatsApp, and answers anything in Hindi or English. Never writes
              to your books.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex flex-1 items-stretch gap-2 rounded-xl border border-line bg-white p-[5px] shadow-[0_1px_0_rgba(11,31,18,0.02),_0_10px_30px_-10px_rgba(11,31,18,0.08)] focus-within:border-accent focus-within:shadow-[0_0_0_3px_rgba(34,197,94,0.12)] sm:flex-none"
              >
                <input
                  type="email"
                  placeholder="work@yourcompany.in"
                  className="min-w-[200px] flex-1 border-none bg-transparent px-3 py-2.5 text-[15px] text-ink outline-none placeholder:text-faint"
                />
                <button
                  type="submit"
                  className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-lg bg-ink px-4 py-2.5 text-sm font-semibold text-white hover:bg-accent-deep"
                >
                  Start free <Icon.arrowRight />
                </button>
              </form>
              <a
                href="#how"
                className="inline-flex items-center gap-1.5 rounded-lg px-3 py-3 text-sm font-medium text-muted hover:text-ink"
              >
                <Icon.activity /> Watch 2-min demo
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 text-[13px] text-muted">
              <span className="inline-flex items-center gap-1.5">
                <span className="text-accent">
                  <Icon.lock />
                </span>
                Read-only access
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="text-accent">
                  <Icon.server />
                </span>
                Mumbai-hosted
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="text-accent">
                  <Icon.shield />
                </span>
                AES-256
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="text-accent">
                  <Icon.check />
                </span>
                Cited from Tally
              </span>
            </div>

            <div className="mt-7 flex items-center gap-3 text-[13.5px] text-muted">
              <div className="flex">
                {[
                  "linear-gradient(135deg,#16A34A,#065F46)",
                  "linear-gradient(135deg,#F59E0B,#b45309)",
                  "linear-gradient(135deg,#2563eb,#1e40af)",
                  "linear-gradient(135deg,#dc2626,#9f1239)",
                ].map((bg, i) => (
                  <span
                    key={i}
                    className="-ml-2 h-[26px] w-[26px] rounded-full border-2 border-white shadow-[0_0_0_1px_var(--line-soft)] first:ml-0"
                    style={{ background: bg }}
                  />
                ))}
                <span
                  className="-ml-2 grid h-[26px] w-[26px] place-items-center rounded-full border-2 border-white text-[10px] font-bold text-white shadow-[0_0_0_1px_var(--line-soft)]"
                  style={{ background: "linear-gradient(135deg,#22C55E,#16a34a)" }}
                >
                  +
                </span>
              </div>
              <span>
                <b>500+ finance teams</b> across India run on Riko
              </span>
            </div>
          </div>

          <div className="lg:max-w-none">
            <InlineAnimation aspect={narrow ? "9/16" : "16/9"} />
          </div>
        </div>
      </div>
    </section>
  );
}
