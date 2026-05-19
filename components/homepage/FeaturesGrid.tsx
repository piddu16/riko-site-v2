import { Icon } from "@/components/shared/Icons";
import { SectionHead } from "./SectionHead";

export function FeaturesGrid() {
  const feats = [
    { n: "01", icon: <Icon.chat />, h: "Chat with your books", d: "Ask anything about your Tally data in Hindi or English. Web, WhatsApp, and voice — same agent, same context." },
    { n: "02", icon: <Icon.bar />, h: "Live receivables", d: "Open invoices by party, ageing buckets, bill-wise breakdown. Refreshed straight from Tally voucher data." },
    { n: "03", icon: <Icon.zap />, h: "WhatsApp reminders", d: "Send a single nudge or a batch. Delivery, read, and reply status pulled back into your dashboard." },
    { n: "04", icon: <Icon.file />, h: "Party share links", d: "WhatsApp a tokenised URL to a customer — they see their open ledger without signing up to Riko." },
    { n: "05", icon: <Icon.trend />, h: "Morning summary", d: "A one-screen WhatsApp brief at 9 AM IST: revenue, overdues, anything that needs your attention today." },
    { n: "06", icon: <Icon.shield />, h: "Hallucination-checked", d: "Every answer post-flight validated against the source data. Failures logged so they get fixed, not shipped." },
  ];
  return (
    <section className="py-24" id="capabilities">
      <div className="mx-auto max-w-[1280px] px-8">
        <SectionHead
          num="03 / CAPABILITIES"
          h="Everything above Tally, nothing inside it."
          lead="Riko never writes to your books. It reads, interprets, and acts — your CA's work stays exactly as they left it."
        />
        <div className="grid grid-cols-1 border-l border-t border-line-soft md:grid-cols-2 lg:grid-cols-3">
          {feats.map((f) => (
            <div
              key={f.n}
              className="relative border-b border-r border-line-soft p-10 transition-colors hover:bg-tint"
            >
              <div
                className="absolute right-5 top-4 text-[11px] tracking-[0.1em] text-faint"
                style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
              >
                {f.n}
              </div>
              <div className="mb-5 grid h-9 w-9 place-items-center rounded-[9px] bg-tint-accent text-accent">
                {f.icon}
              </div>
              <h4 className="m-0 mb-1.5 text-lg font-semibold tracking-[-0.01em]">{f.h}</h4>
              <p className="m-0 text-[14.5px] leading-[1.55] text-muted">{f.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
