"use client";

import { RikoMark, Wordmark } from "./RikoMark";
import { clamp } from "@/lib/easing";

export function AnimatedNavBar({ time }: { time: number }) {
  const t = time;
  const build = clamp(t / 0.6, 0, 1);
  const spin = t > 0.6 ? ((t - 0.6) / 6) % 1 : 0;
  const fade = clamp(t / 0.35, 0, 1);

  const linkStyle: React.CSSProperties = {
    fontSize: 14,
    fontWeight: 500,
    color: "#0B1F12",
    opacity: 0.78,
    letterSpacing: "-0.005em",
  };

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: 76,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 64px",
        borderBottom: "1px solid #E5EBE7",
        background: "rgba(255,255,255,0.85)",
        backdropFilter: "blur(6px)",
        WebkitBackdropFilter: "blur(6px)",
        opacity: fade,
        zIndex: 50,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <RikoMark size={28} color="#16A34A" spin={spin} animateIn={build} />
        <span style={{ opacity: build }}>
          <Wordmark size={22} />
        </span>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 36 }}>
        <span style={linkStyle}>Product</span>
        <span style={linkStyle}>Pricing</span>
        <span style={linkStyle}>Docs</span>
        <span style={linkStyle}>Customers</span>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <span style={{ ...linkStyle, opacity: 0.6 }}>Sign in</span>
        <button
          style={{
            fontSize: 14,
            fontWeight: 600,
            padding: "10px 18px",
            background: "#0B1F12",
            color: "#FFFFFF",
            border: "none",
            borderRadius: 9,
            cursor: "pointer",
            letterSpacing: "-0.005em",
          }}
        >
          Start free
        </button>
      </div>
    </div>
  );
}
