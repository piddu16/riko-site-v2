"use client";

export function ChatMockup() {
  return (
    <div className="w-full max-w-[460px] overflow-hidden rounded-xl border border-line-soft bg-white shadow-[0_20px_60px_-20px_rgba(11,31,18,0.12)]">
      <div className="flex items-center gap-2.5 border-b border-line-soft p-3.5 text-xs font-semibold text-muted">
        <div
          className="grid h-6 w-6 place-items-center rounded-md bg-ink text-xs font-bold text-white"
          style={{ fontFamily: "var(--font-instrument-serif), serif", fontStyle: "italic" }}
        >
          R
        </div>
        <span>Riko · Ask anything</span>
      </div>
      <div className="flex flex-col gap-2 p-3.5">
        <div className="max-w-[85%] self-end rounded-2xl rounded-br-[4px] bg-ink px-3 py-2 text-[13px] leading-[1.5] text-white">
          Kitna profit hua October mein?
        </div>
        <div className="max-w-[85%] self-start rounded-2xl rounded-bl-[4px] bg-tint-accent px-3 py-2 text-[13px] leading-[1.5] text-ink">
          October revenue: <b className="tnum">₹24.9L</b> · net profit{" "}
          <b className="tnum">₹3.8L</b> (15.2% margin).
          <div className="mt-2 border-t border-black/5 pt-1 text-[12px]">
            <div className="flex justify-between py-1">
              <span>Sales</span>
              <span className="tnum font-semibold">₹24.9L</span>
            </div>
            <div className="flex justify-between border-t border-black/5 py-1">
              <span>Expenses</span>
              <span className="tnum font-semibold">₹21.1L</span>
            </div>
            <div className="flex justify-between border-t border-black/5 py-1">
              <span>Net</span>
              <span className="tnum font-semibold text-accent">₹3.8L</span>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-3.5 mb-3.5 flex items-center gap-2 rounded-lg border border-line-soft bg-tint px-3 py-2.5 text-xs text-faint">
        Ask Riko anything…
        <div className="ml-auto grid h-[26px] w-[26px] place-items-center rounded-full bg-accent text-white">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"
              fill="currentColor"
            />
            <path
              d="M19 10v2a7 7 0 0 1-14 0v-2M12 19v4M8 23h8"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export function OutstandingsMockup() {
  const rows = [
    { name: "Kothari Traders", days: "42d", amt: "₹5.2L", risk: "high" },
    { name: "Mehta Foods", days: "37d", amt: "₹1.8L", risk: "high" },
    { name: "Sharma Auto Parts", days: "34d", amt: "₹94K", risk: "med" },
    { name: "Patel & Sons", days: "31d", amt: "₹3.1L", risk: "med" },
    { name: "Apex Textiles", days: "27d", amt: "₹76K", risk: "low" },
  ];
  return (
    <div className="w-full max-w-[460px] overflow-hidden rounded-xl border border-line-soft bg-white shadow-[0_20px_60px_-20px_rgba(11,31,18,0.12)]">
      <div className="flex items-center gap-2.5 border-b border-line-soft p-3.5 text-xs font-semibold text-muted">
        <span>Outstanding receivables · live from Tally</span>
      </div>
      <div className="flex flex-col">
        {rows.map((r) => (
          <div
            key={r.name}
            className="grid grid-cols-[1fr_auto_auto] items-center gap-3 border-b border-line-soft px-3.5 py-2.5 text-[13px] last:border-b-0"
          >
            <div className="flex items-center gap-2 font-medium text-ink">
              <span
                className={`inline-block h-[7px] w-[7px] rounded-full ${
                  r.risk === "high"
                    ? "bg-[#dc2626]"
                    : r.risk === "med"
                    ? "bg-[#d97706]"
                    : "bg-accent"
                }`}
              />
              {r.name}
            </div>
            <div className="tnum text-[11.5px] text-muted">{r.days}</div>
            <div className="tnum font-semibold">{r.amt}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function RemindersMockup() {
  const rows = [
    { ch: "wa", name: "Kothari Traders", sub: "₹5.2L · 42d overdue", status: "sent" },
    { ch: "wa", name: "Mehta Foods", sub: "₹1.8L · 37d overdue", status: "sent" },
    { ch: "em", name: "Sharma Auto Parts", sub: "Bill INV-2847 · ₹94K", status: "sched" },
    { ch: "wa", name: "Patel & Sons", sub: "₹3.1L · 31d overdue", status: "sched" },
  ];
  return (
    <div className="w-full max-w-[460px] overflow-hidden rounded-xl border border-line-soft bg-white shadow-[0_20px_60px_-20px_rgba(11,31,18,0.12)]">
      <div className="flex items-center gap-2.5 border-b border-line-soft p-3.5 text-xs font-semibold text-muted">
        Reminder queue · MSG91
      </div>
      <div className="flex flex-col">
        {rows.map((r, i) => (
          <div
            key={i}
            className="grid grid-cols-[auto_1fr_auto] items-center gap-3 border-b border-line-soft px-3.5 py-2.5 last:border-b-0"
          >
            <div
              className={`grid h-7 w-7 place-items-center rounded-lg text-[11px] font-bold ${
                r.ch === "wa"
                  ? "bg-[#e7f9ea] text-accent"
                  : "bg-[#eef4ff] text-[#2563eb]"
              }`}
            >
              {r.ch === "wa" ? "WA" : "EM"}
            </div>
            <div>
              <div className="text-[13px] font-medium text-ink">{r.name}</div>
              <div className="text-[11.5px] text-faint">{r.sub}</div>
            </div>
            <div
              className={`text-[11px] font-semibold ${
                r.status === "sent" ? "text-accent" : "text-muted"
              }`}
            >
              {r.status === "sent" ? "DELIVERED" : "SCHEDULED"}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function MISMockup() {
  const rows = [
    { label: "Yesterday revenue", val: "₹2.18L", chg: "+12% w/w", up: true },
    { label: "Top overdue (Kothari)", val: "₹5.2L", chg: "42d", up: false },
    { label: "GSTR-3B due", val: "₹3.7L", chg: "in 2 days", up: false },
    { label: "Net cash flow", val: "₹4.6L", chg: "+18% m/m", up: true },
  ];
  return (
    <div className="w-full max-w-[460px] overflow-hidden rounded-xl border border-line-soft bg-white shadow-[0_20px_60px_-20px_rgba(11,31,18,0.12)]">
      <div className="flex items-center gap-2.5 border-b border-line-soft p-3.5 text-xs font-semibold text-muted">
        Morning brief · 9:04 IST
      </div>
      <div className="py-1.5">
        {rows.map((r, i) => (
          <div
            key={i}
            className="grid grid-cols-[1fr_auto_auto] items-center gap-3 border-b border-line-soft px-3.5 py-2 text-[13px] last:border-b-0"
          >
            <div className="text-muted">{r.label}</div>
            <div className="tnum font-semibold">{r.val}</div>
            <div
              className={`tnum text-[11px] font-medium ${
                r.up ? "text-accent" : "text-[#b91c1c]"
              }`}
            >
              {r.chg}
            </div>
          </div>
        ))}
      </div>
      <div className="flex gap-2 p-3.5">
        <button className="flex-1 rounded-lg bg-ink p-2 text-xs font-semibold text-white">
          Send to WhatsApp
        </button>
        <button className="flex-1 rounded-lg border border-line-soft bg-tint p-2 text-xs font-semibold text-ink-2">
          Open dashboard
        </button>
      </div>
    </div>
  );
}
