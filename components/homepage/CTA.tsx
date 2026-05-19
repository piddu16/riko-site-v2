"use client";

import { Icon } from "@/components/shared/Icons";

export function CTA() {
  return (
    <section className="px-4 py-12 sm:px-8" id="cta">
      <div className="relative mx-auto max-w-[1280px] overflow-hidden rounded-3xl bg-ink px-8 py-20 text-center text-white sm:py-24">
        <div
          className="pointer-events-none absolute -left-24 -top-72 h-[600px] w-[600px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(34,197,94,0.22), transparent 70%)",
          }}
        />
        <div
          className="pointer-events-none absolute -bottom-60 -right-24 h-[500px] w-[500px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(34,197,94,0.15), transparent 70%)",
          }}
        />
        <h2 className="relative mx-auto max-w-[16ch] text-[clamp(28px,4.4vw,64px)] font-semibold leading-[1.04] tracking-[-0.028em] text-balance text-white">
          Put an AI CFO <br />
          <span
            className="text-accent-bright"
            style={{ fontFamily: "var(--font-instrument-serif), serif", fontStyle: "italic", fontWeight: 400 }}
          >
            above your Tally.
          </span>
        </h2>
        <p className="relative mx-auto mt-5 max-w-[48ch] text-[17px] text-white/70">
          5 free credits a day, no card on file. Setup in 5 minutes. Top up or
          subscribe when you outgrow it.
        </p>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="relative mx-auto mt-8 flex max-w-[460px] items-stretch gap-2 rounded-xl border border-white/10 bg-white/[0.06] p-[5px] backdrop-blur"
        >
          <input
            type="email"
            placeholder="work@yourcompany.in"
            className="flex-1 min-w-0 bg-transparent px-3 py-2.5 text-[15px] text-white placeholder:text-white/50 focus:outline-none"
          />
          <button
            type="submit"
            className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-lg bg-accent px-4 py-2.5 text-sm font-semibold text-white hover:bg-accent-deep"
          >
            Start free trial <Icon.arrowRight />
          </button>
        </form>
        <div className="relative mx-auto mt-6 flex flex-wrap justify-center gap-6 text-[13px] text-white/75">
          {[
            "14-day free trial",
            "No credit card",
            "Setup in 5 minutes",
            "Cancel anytime",
          ].map((p) => (
            <span key={p} className="inline-flex items-center gap-1.5">
              <span className="text-accent-bright">
                <Icon.check />
              </span>
              {p}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
