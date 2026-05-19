"use client";

import { useState } from "react";
import { Icon } from "@/components/shared/Icons";
import { SectionHead } from "./SectionHead";

export function FAQ() {
  const faqs = [
    {
      q: "What exactly does Riko do?",
      a: "Riko sits above your Tally and turns your ledgers, invoices, bills, and ageing into next-best actions. You get AI chat to ask anything about your business, automated payment reminders, outstanding trackers, MIS reports, and inventory alerts — all without touching Tally itself.",
    },
    {
      q: "Does Riko modify my Tally data?",
      a: "Never. Riko reads from Tally through a secure read-only connection. We can never create, edit, or delete entries in your Tally. Your books stay exactly as your CA left them.",
    },
    {
      q: "Which languages does Riko support?",
      a: "Hindi and English today — type, voice, or WhatsApp. Ask 'Kitna profit hua October mein?' or 'Who owes me more than 30 days?' and Riko understands both. Tamil, Marathi, and Gujarati are on the roadmap.",
    },
    {
      q: "How long does setup take?",
      a: "Under 5 minutes. Install the lightweight Riko Connector on the machine running Tally Prime, authenticate, and you're live. No IT team needed.",
    },
    {
      q: "Where is my data stored?",
      a: "All data sits on Indian servers, encrypted with AES-256 in transit and at rest. The Tally connector is read-only — Riko physically cannot write back to your books. We never sell or share your data, and never use it to train models for other customers. SOC 2 audit is in progress.",
    },
  ];
  const [open, setOpen] = useState(0);
  return (
    <section className="py-24" id="faq">
      <div className="mx-auto max-w-[1280px] px-8">
        <SectionHead
          num="06 / FAQ"
          h="Questions we get every week."
          lead="If yours isn't here, our team replies within two hours on weekdays."
        />
        <div className="mx-auto max-w-[780px]">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="border-b border-line-soft py-5">
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="flex w-full items-center justify-between text-left text-[18px] font-medium tracking-[-0.01em] text-ink"
                >
                  <span>{f.q}</span>
                  <span
                    className={`ml-5 grid h-7 w-7 flex-shrink-0 place-items-center rounded-full border transition-all duration-200 ${
                      isOpen
                        ? "rotate-45 border-ink bg-ink text-white"
                        : "border-line text-muted"
                    }`}
                  >
                    <Icon.plus />
                  </span>
                </button>
                <div
                  className="grid overflow-hidden transition-all duration-300"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p className="m-0 max-w-[68ch] pt-4 text-[15px] leading-[1.6] text-muted">
                      {f.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
