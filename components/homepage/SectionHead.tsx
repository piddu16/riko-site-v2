export function SectionHead({
  num,
  h,
  lead,
  id,
}: {
  num: string;
  h: string;
  lead: string;
  id?: string;
}) {
  return (
    <header
      id={id}
      className="mb-12 grid grid-cols-1 items-end gap-4 border-b border-line-soft pb-5 md:grid-cols-[auto_1fr] md:gap-10"
    >
      <div className="flex flex-col gap-2">
        <div
          className="text-xs font-medium uppercase tracking-[0.14em] text-faint"
          style={{
            fontFamily: "var(--font-jetbrains-mono), monospace",
          }}
        >
          {num}
        </div>
        <h2 className="m-0 max-w-[18ch] text-[clamp(28px,3.6vw,52px)] font-semibold leading-[1.02] tracking-[-0.028em] text-balance">
          {h}
        </h2>
      </div>
      <p className="m-0 max-w-[50ch] text-base text-muted md:text-right">{lead}</p>
    </header>
  );
}
