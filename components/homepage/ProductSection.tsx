"use client";

import { useState } from "react";
import { Icon } from "@/components/shared/Icons";
import { SectionHead } from "./SectionHead";
import {
  ChatMockup,
  OutstandingsMockup,
  RemindersMockup,
  MISMockup,
} from "./mockups/Mockups";

const TABS = [
  {
    id: "chat",
    label: "AI Chat",
    icon: <Icon.chat />,
    h: "Ask anything. In any language.",
    desc: "Type a question, paste a file, or forward a WhatsApp voice note. Riko pulls the answer straight from your live Tally data.",
    features: [
      "Hindi and English — chat, voice, and WhatsApp",
      "Every answer grounded in your live Tally data",
      "Inbuilt validation flags any hallucinated number",
      "Each session logs the exact SQL it ran",
    ],
    Mockup: ChatMockup,
  },
  {
    id: "out",
    label: "Outstandings",
    icon: <Icon.bar />,
    h: "See who owes you. Share a link.",
    desc: "Live receivables by party with ageing buckets and risk flags. Send any customer a tokenised share link — they see their open ledger without needing a Riko account.",
    features: [
      "Live ageing buckets pulled straight from Tally",
      "Party share links — WhatsApp the customer their own statement",
      "Bill-wise breakdown with due dates and amounts",
      "Mark a payment received — logged for write-back later",
    ],
    Mockup: OutstandingsMockup,
  },
  {
    id: "rem",
    label: "Reminders",
    icon: <Icon.zap />,
    h: "Chase payments on WhatsApp.",
    desc: "Send a payment reminder to one customer or a batch of them. Goes out as a personal WhatsApp message through MSG91, with delivery and read receipts back in your dashboard.",
    features: [
      "WhatsApp via MSG91 — one approved sender for India",
      "Send singly or in batches from the receivables view",
      "Delivery + read + reply status tracked per message",
      "Reminder activity logged so nothing falls through the cracks",
    ],
    Mockup: RemindersMockup,
  },
  {
    id: "mis",
    label: "Morning summary",
    icon: <Icon.file />,
    h: "A WhatsApp brief before chai.",
    desc: "Every morning, Riko sends a one-screen WhatsApp brief: yesterday's revenue, today's top overdue parties, anything that needs your attention. Open Riko to drill in.",
    features: [
      "Sent daily to the owner's WhatsApp (or email)",
      "Revenue, top overdues, alerts in one scroll",
      "Tap a party to chat with Riko about it",
      "Quiet hours respected — your timezone, your schedule",
    ],
    Mockup: MISMockup,
  },
];

export function ProductSection() {
  const [active, setActive] = useState(0);
  const tab = TABS[active];
  const Mockup = tab.Mockup;

  return (
    <section className="py-24" id="features">
      <div className="mx-auto max-w-[1280px] px-8">
        <SectionHead
          num="01 / PRODUCT"
          h="Built around daily operator behaviour."
          lead="Four modules your finance team will actually open every day — each one earning its place in the dashboard."
        />

        <div className="mb-10 inline-flex gap-0.5 rounded-full border border-line-soft bg-tint p-1">
          {TABS.map((t, i) => (
            <button
              key={t.id}
              onClick={() => setActive(i)}
              className={`inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium transition-all ${
                i === active
                  ? "bg-white text-ink shadow-[0_1px_2px_rgba(11,31,18,0.05),_0_0_0_1px_var(--line-soft)]"
                  : "text-muted hover:text-ink"
              }`}
            >
              <span
                className={`h-1.5 w-1.5 rounded-sm ${
                  i === active ? "bg-accent-bright" : "bg-current opacity-40"
                }`}
              />
              {t.label}
            </button>
          ))}
        </div>

        <div className="grid items-center gap-14 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <div className="grid h-8 w-8 place-items-center rounded-lg bg-tint-accent text-accent">
                {tab.icon}
              </div>
              <span
                className="text-[11px] font-semibold uppercase tracking-[0.14em] text-accent"
              >
                {tab.label}
              </span>
            </div>
            <h3 className="my-4 max-w-[14ch] text-[clamp(24px,3vw,40px)] font-semibold leading-[1.05] tracking-[-0.025em] text-balance">
              {tab.h}
            </h3>
            <p className="max-w-[44ch] text-[17px] text-muted">{tab.desc}</p>
            <ul className="mt-7 flex flex-col gap-2.5">
              {tab.features.map((f) => (
                <li
                  key={f}
                  className="flex items-start gap-2.5 text-[14.5px] text-ink-2"
                >
                  <span className="mt-0.5 flex-shrink-0 text-accent">
                    <Icon.check />
                  </span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>

          <div
            className="grid min-h-[440px] place-items-center rounded-2xl border border-line-soft p-6"
            style={{
              background:
                "radial-gradient(ellipse at 20% 20%, rgba(34,197,94,0.08), transparent 60%), linear-gradient(180deg, var(--tint), white)",
            }}
          >
            <Mockup />
          </div>
        </div>
      </div>
    </section>
  );
}
