"use client";

export function ScrollDots({ active }: { active: number }) {
  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        right: 28,
        transform: "translateY(-50%)",
        display: "flex",
        flexDirection: "column",
        gap: 12,
        zIndex: 60,
      }}
    >
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          style={{
            width: 6,
            height: i === active ? 22 : 6,
            borderRadius: 4,
            background: i === active ? "#16A34A" : "#D0D8D2",
            transition:
              "height 300ms cubic-bezier(0.4, 0, 0.2, 1), background 200ms",
          }}
        />
      ))}
    </div>
  );
}
