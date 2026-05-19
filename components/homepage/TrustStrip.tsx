import { Icon } from "@/components/shared/Icons";

export function TrustStrip() {
  const items = [
    { icon: <Icon.lock />, label: "AES-256 encrypted" },
    { icon: <Icon.server />, label: "Mumbai-hosted" },
    { icon: <Icon.database />, label: "Read-only Tally access" },
    { icon: <Icon.shield />, label: "Hallucination-checked answers" },
    { icon: <Icon.indian />, label: "Razorpay billing" },
  ];

  return (
    <div className="border-y border-line-soft bg-tint py-5">
      <div className="mx-auto flex max-w-[1280px] flex-wrap items-center justify-center gap-x-10 gap-y-8 px-8">
        {items.map((it) => (
          <div
            key={it.label}
            className="inline-flex items-center gap-2 text-[12.5px] font-medium text-muted"
          >
            <span className="text-accent">{it.icon}</span>
            <span>{it.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
