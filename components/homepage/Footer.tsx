import Image from "next/image";

export function Footer() {
  const cols = [
    {
      h: "Product",
      links: [
        ["Features", "#features"],
        ["How it works", "#how"],
        ["Pricing", "#pricing"],
        ["Tally integration", "#tally"],
      ],
    },
    {
      h: "Resources",
      links: [
        ["Blog", "#blog"],
        ["Help center", "#"],
        ["FAQ", "#faq"],
        ["Tally guides", "#"],
      ],
    },
    {
      h: "Company",
      links: [
        ["About", "#about"],
        ["Contact", "#contact"],
        ["Careers", "#"],
        ["Security", "#"],
      ],
    },
  ];
  return (
    <footer className="border-t border-line-soft bg-tint pb-9 pt-16">
      <div className="mx-auto max-w-[1280px] px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr]">
          <div>
            <a href="#" className="flex items-center gap-2.5 text-[18px] font-bold tracking-[-0.02em] text-ink">
              <Image src="/assets/riko-mark.png" alt="" width={28} height={28} />
              <span>Riko</span>
            </a>
            <p className="mt-4 max-w-[32ch] text-sm leading-[1.55] text-muted">
              The AI operating layer above Tally and Xero. Read-only,
              Mumbai-hosted, hallucination-checked.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-xs text-muted">
              <span
                style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
              >
                +91 98196 02121
              </span>
              <span>·</span>
              <span>support@rikoai.in</span>
            </div>
          </div>
          {cols.map((c) => (
            <div key={c.h}>
              <h5 className="m-0 mb-4 text-xs font-semibold uppercase tracking-[0.1em] text-ink">
                {c.h}
              </h5>
              <ul className="m-0 flex list-none flex-col gap-2.5 p-0">
                {c.links.map(([label, href]) => (
                  <li key={label}>
                    <a href={href} className="text-sm text-muted hover:text-ink">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-line pt-6 text-[12.5px] text-faint md:flex-row md:items-center">
          <div>© 2026 NXTLVL Tech Solutions Pvt Ltd · Mumbai, India</div>
          <div className="flex gap-5">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
