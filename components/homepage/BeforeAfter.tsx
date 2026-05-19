import { Icon } from "@/components/shared/Icons";

export function BeforeAfter() {
  const rows = [
    { b: "₹45L stuck in receivables", a: "Riko chases it automatically." },
    { b: "4 hrs pulling Tally reports", a: "Ask a question, get the answer." },
    { b: "GST filing panic every month", a: "One-click GSTR-3B, on time." },
  ];
  return (
    <section className="relative overflow-hidden bg-ink py-24 text-white">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 20% 0%, rgba(34,197,94,0.15), transparent 50%)",
        }}
      />
      <div className="relative mx-auto max-w-[1280px] px-8">
        <div className="mb-12">
          <div
            className="text-[11px] font-semibold uppercase tracking-[0.14em]"
            style={{ color: "var(--accent-bright)", fontFamily: "var(--font-jetbrains-mono), monospace" }}
          >
            02 / OUTCOMES
          </div>
          <h2 className="mt-3 max-w-[18ch] text-[clamp(28px,3.6vw,52px)] font-semibold leading-[1.02] tracking-[-0.028em] text-balance text-white">
            Before Riko. <span className="text-white/50">After Riko.</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-3">
          {rows.map((r, i) => (
            <div key={i} className="bg-white/[0.02] p-9">
              <div
                className="text-[11px] tracking-[0.12em] text-white/40"
                style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
              >
                {String(i + 1).padStart(2, "0")} / BEFORE
              </div>
              <div className="mt-5 text-[15px] text-white/60 line-through decoration-red-500/80 decoration-[1.5px]">
                {r.b}
              </div>
              <div className="my-3 h-5 text-accent-bright">
                <Icon.arrowRight />
              </div>
              <div className="text-[21px] font-semibold leading-[1.25] tracking-[-0.01em] text-white">
                {r.a}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
