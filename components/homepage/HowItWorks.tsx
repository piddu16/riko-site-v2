import { SectionHead } from "./SectionHead";

const STEP_ILLOS: Record<string, JSX.Element> = {
  read: (
    <svg viewBox="0 0 240 160" fill="none" width="100%" className="block">
      <defs>
        <pattern id="grid1" width="12" height="12" patternUnits="userSpaceOnUse">
          <path d="M12 0H0V12" stroke="#e5ebe7" strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect width="240" height="160" fill="url(#grid1)" />
      <rect x="16" y="50" width="72" height="60" rx="6" fill="#fff" stroke="#0B1F12" strokeWidth="1.2" />
      <text x="52" y="73" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="9" fontWeight="600" fill="#6b7a70">TALLY</text>
      <text x="52" y="86" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="8" fill="#6b7a70">Prime 5.0</text>
      <line x1="24" y1="96" x2="80" y2="96" stroke="#e5ebe7" />
      <circle cx="30" cy="102" r="1.5" fill="#22C55E" />
      <text x="36" y="105" fontFamily="Inter, sans-serif" fontSize="7" fill="#16A34A">Running</text>
      <path d="M88 80 L152 80" stroke="#16A34A" strokeWidth="1.5" strokeDasharray="3 3" />
      <circle cx="120" cy="80" r="4" fill="#fff" stroke="#16A34A" strokeWidth="1.5" />
      <path d="M117 80 L120 83 L124 77" stroke="#16A34A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <rect x="152" y="62" width="72" height="36" rx="18" fill="#0B1F12" />
      <circle cx="170" cy="80" r="8" fill="none" stroke="#22C55E" strokeWidth="1.6" />
      <path d="M163 84 Q170 78 177 77" stroke="#22C55E" strokeWidth="1.6" fill="none" strokeLinecap="round" />
      <circle cx="177" cy="77" r="1.6" fill="#22C55E" />
      <text x="214" y="83" textAnchor="end" fontFamily="Inter, sans-serif" fontSize="9" fontWeight="600" fill="#fff">Riko</text>
      <text x="120" y="62" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="7" fill="#16A34A" fontWeight="600">4 MB · AES-256</text>
      <text x="120" y="102" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="7" fill="#9aa69c">read-only</text>
    </svg>
  ),
  interpret: (
    <svg viewBox="0 0 240 160" fill="none" width="100%" className="block">
      <defs>
        <pattern id="grid2" width="12" height="12" patternUnits="userSpaceOnUse">
          <path d="M12 0H0V12" stroke="#e5ebe7" strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect width="240" height="160" fill="url(#grid2)" />
      <rect x="14" y="24" width="80" height="112" rx="4" fill="#fff" stroke="#e5ebe7" />
      <text x="20" y="38" fontFamily="JetBrains Mono, monospace" fontSize="7" fontWeight="600" fill="#6b7a70">LEDGER.CSV</text>
      {[0, 1, 2, 3, 4, 5, 6].map((i) => (
        <g key={i}>
          <rect x="20" y={46 + i * 11} width={i % 2 === 0 ? 50 : 65} height="2.5" fill="#e5ebe7" />
          <rect x="20" y={50 + i * 11} width={i % 3 === 0 ? 30 : 45} height="1.5" fill="#e5ebe7" />
        </g>
      ))}
      <path d="M94 80 L134 80" stroke="#16A34A" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M130 76 L134 80 L130 84" stroke="#16A34A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <text x="114" y="74" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="7" fill="#16A34A" fontWeight="600">PARSE</text>
      <g>
        <rect x="140" y="28" width="84" height="24" rx="4" fill="#f0f7f1" stroke="#cfe5d2" />
        <circle cx="152" cy="40" r="4" fill="#16A34A" />
        <text x="162" y="37" fontFamily="Inter, sans-serif" fontSize="7.5" fontWeight="600" fill="#0B1F12">Parties</text>
        <text x="162" y="47" fontFamily="Inter, sans-serif" fontSize="7" fill="#6b7a70">17 detected</text>
      </g>
      <g>
        <rect x="140" y="58" width="84" height="24" rx="4" fill="#fff" stroke="#e5ebe7" />
        <circle cx="152" cy="70" r="4" fill="#F59E0B" />
        <text x="162" y="67" fontFamily="Inter, sans-serif" fontSize="7.5" fontWeight="600" fill="#0B1F12">Ageing</text>
        <text x="162" y="77" fontFamily="Inter, sans-serif" fontSize="7" fill="#6b7a70">4 buckets · ₹18.3L</text>
      </g>
      <g>
        <rect x="140" y="88" width="84" height="24" rx="4" fill="#fff" stroke="#e5ebe7" />
        <circle cx="152" cy="100" r="4" fill="#2563eb" />
        <text x="162" y="97" fontFamily="Inter, sans-serif" fontSize="7.5" fontWeight="600" fill="#0B1F12">Tax classes</text>
        <text x="162" y="107" fontFamily="Inter, sans-serif" fontSize="7" fill="#6b7a70">GST 5/12/18%</text>
      </g>
      <g>
        <rect x="140" y="118" width="84" height="18" rx="4" fill="#fff" stroke="#e5ebe7" strokeDasharray="2 2" />
        <text x="182" y="130" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="7" fill="#9aa69c">+ 12 more</text>
      </g>
    </svg>
  ),
  act: (
    <svg viewBox="0 0 240 160" fill="none" width="100%" className="block">
      <defs>
        <pattern id="grid3" width="12" height="12" patternUnits="userSpaceOnUse">
          <path d="M12 0H0V12" stroke="#e5ebe7" strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect width="240" height="160" fill="url(#grid3)" />
      <rect x="26" y="30" width="188" height="76" rx="6" fill="#fff" stroke="#0B1F12" strokeWidth="1.2" />
      <text x="38" y="48" fontFamily="JetBrains Mono, monospace" fontSize="7" fontWeight="600" fill="#16A34A">NEXT BEST ACTION · 01 / 03</text>
      <text x="38" y="66" fontFamily="Inter, sans-serif" fontSize="13" fontWeight="600" fill="#0B1F12">Chase Kothari Traders</text>
      <text x="38" y="80" fontFamily="Inter, sans-serif" fontSize="9" fill="#6b7a70">₹5.2L · 42 days overdue · high risk</text>
      <rect x="38" y="88" width="68" height="14" rx="3" fill="#0B1F12" />
      <text x="72" y="98" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="8" fontWeight="600" fill="#fff">Approve &amp; send</text>
      <text x="116" y="98" fontFamily="Inter, sans-serif" fontSize="8" fill="#6b7a70">Skip</text>
      <g>
        <circle cx="72" cy="95" r="16" fill="none" stroke="#16A34A" strokeWidth="1" opacity="0.4" />
        <circle cx="72" cy="95" r="10" fill="none" stroke="#16A34A" strokeWidth="1" opacity="0.7" />
      </g>
      <rect x="26" y="118" width="188" height="22" rx="4" fill="#f0f7f1" stroke="#cfe5d2" />
      <circle cx="38" cy="129" r="4" fill="#16A34A" />
      <path d="M35.5 129 L37.5 131 L40.5 127.5" stroke="#fff" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <text x="48" y="132" fontFamily="Inter, sans-serif" fontSize="8.5" fill="#0B1F12">WhatsApp sent · 09:04 IST · delivered</text>
    </svg>
  ),
  expand: (
    <svg viewBox="0 0 240 160" fill="none" width="100%" className="block">
      <defs>
        <pattern id="grid4" width="12" height="12" patternUnits="userSpaceOnUse">
          <path d="M12 0H0V12" stroke="#e5ebe7" strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect width="240" height="160" fill="url(#grid4)" />
      <circle cx="120" cy="80" r="18" fill="none" stroke="#16A34A" strokeWidth="1" />
      <circle cx="120" cy="80" r="36" fill="none" stroke="#cfe5d2" strokeWidth="1" strokeDasharray="3 3" />
      <circle cx="120" cy="80" r="56" fill="none" stroke="#e5ebe7" strokeWidth="1" strokeDasharray="2 4" />
      <circle cx="120" cy="80" r="14" fill="#0B1F12" />
      <text x="120" y="83" textAnchor="middle" fontFamily="Instrument Serif, serif" fontStyle="italic" fontSize="13" fontWeight="700" fill="#22C55E">R</text>
      {[
        { x: 120, y: 44, l: "Receivables" },
        { x: 156, y: 80, l: "Reminders" },
        { x: 120, y: 116, l: "MIS" },
        { x: 84, y: 80, l: "Chat" },
      ].map((m, i) => (
        <g key={i}>
          <circle cx={m.x} cy={m.y} r="8" fill="#fff" stroke="#16A34A" strokeWidth="1.2" />
          <circle cx={m.x} cy={m.y} r="3" fill="#16A34A" />
          <rect x={m.x - 24} y={m.y + 12} width="48" height="11" rx="2" fill="#fff" stroke="#cfe5d2" />
          <text x={m.x} y={m.y + 20} textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="7" fontWeight="500" fill="#0B1F12">{m.l}</text>
        </g>
      ))}
      {[
        { x: 120, y: 24 },
        { x: 176, y: 80 },
        { x: 120, y: 136 },
        { x: 64, y: 80 },
      ].map((m, i) => (
        <g key={i}>
          <circle cx={m.x} cy={m.y} r="5" fill="#fff" stroke="#9aa69c" strokeWidth="1" strokeDasharray="1.5 1.5" />
          <text x={m.x} y={m.y + 2} textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="6" fill="#9aa69c" fontWeight="600">SOON</text>
        </g>
      ))}
      <text x="120" y="154" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="7" fill="#6b7a70" letterSpacing="0.5">4 MODULES LIVE · 4 COMING</text>
    </svg>
  ),
};

export function HowItWorks() {
  const steps = [
    { n: "01", label: "READ", k: "read", h: "Connect Tally", d: "Install the 4MB Riko Connector on the machine running Tally Prime. Read-only, encrypted." },
    { n: "02", label: "INTERPRET", k: "interpret", h: "AI maps your books", d: "Riko parses your ledgers, parties, tax classes, and ageing — usually within 90 seconds." },
    { n: "03", label: "ACT", k: "act", h: "First next-best action", d: "Within minutes, Riko suggests what to chase, file, or flag — approve in one tap." },
    { n: "04", label: "EXPAND", k: "expand", h: "Grow into ops", d: "Move into payables, MIS, working capital, and broader finance as the team scales." },
  ];
  return (
    <section className="py-24" id="how">
      <div className="mx-auto max-w-[1280px] px-8">
        <SectionHead
          num="04 / HOW IT WORKS"
          h="Read. Interpret. Act. Expand."
          lead="Connect once. Riko handles the rest — in under five minutes, no IT team required."
        />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div key={s.n} className="relative rounded-2xl border border-line-soft bg-white p-8">
              <div
                className="text-xs font-semibold tracking-[0.12em] text-accent"
                style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
              >
                {s.n} / {s.label}
              </div>
              <h4 className="mb-2.5 mt-8 text-[22px] font-semibold tracking-[-0.015em]">
                {s.h}
              </h4>
              <p className="m-0 text-sm leading-[1.55] text-muted">{s.d}</p>
              <div className="mt-5 overflow-hidden rounded-lg border border-line-soft bg-tint" style={{ aspectRatio: "240 / 160" }}>
                {STEP_ILLOS[s.k]}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
