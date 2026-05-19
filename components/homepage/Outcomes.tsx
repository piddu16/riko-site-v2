import { Icon } from "@/components/shared/Icons";
import { SectionHead } from "./SectionHead";

export function Outcomes() {
  const items = [
    { stat: "75", unit: "%", d: "reduction in month-end close time", c: "Patel Textiles", s: "Manufacturing · Surat" },
    { stat: "₹42", unit: "L", d: "recovered in overdue receivables", c: "Mumbai Distributors", s: "FMCG · Mumbai" },
    { stat: "12", unit: "hrs", d: "saved per week on Tally reporting", c: "Kothari Traders", s: "Retail · Ahmedabad" },
  ];
  return (
    <section className="py-24" id="outcomes">
      <div className="mx-auto max-w-[1280px] px-8">
        <SectionHead
          num="05 / CUSTOMERS"
          h="Real results from real Indian businesses."
          lead="Time recovered, cash unblocked, owners sleeping better — from Surat to Salem."
        />
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {items.map((o) => (
            <div
              key={o.c}
              className="relative overflow-hidden rounded-2xl border border-line-soft bg-white p-8 transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_30px_-10px_rgba(11,31,18,0.1)]"
            >
              <div
                className="tnum text-[clamp(48px,5vw,72px)] font-semibold leading-none tracking-[-0.03em] text-ink"
              >
                <span>{o.stat}</span>
                <span
                  className="ml-1 text-[0.7em] text-accent"
                  style={{ fontFamily: "var(--font-instrument-serif), serif", fontStyle: "italic", fontWeight: 400 }}
                >
                  {o.unit}
                </span>
              </div>
              <p className="mt-4 max-w-[22ch] text-base leading-[1.45] text-muted">
                {o.d}
              </p>
              <div className="mt-8 flex items-center justify-between border-t border-line-soft pt-5">
                <div>
                  <div className="text-[13px] font-semibold text-ink">{o.c}</div>
                  <div className="mt-0.5 text-[11.5px] text-muted">{o.s}</div>
                </div>
                <div className="text-accent">
                  <Icon.arrowUpRight />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
