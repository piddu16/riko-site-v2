"use client";

import { clamp, Easing } from "@/lib/easing";
import { RikoMark } from "./RikoMark";

export function Fold1({
  time,
  t0 = 0,
  portrait = false,
}: {
  time: number;
  t0?: number;
  portrait?: boolean;
}) {
  if (portrait) return <Fold1Portrait time={time} t0={t0} />;
  return <Fold1Desktop time={time} t0={t0} />;
}

function Fold1Desktop({ time, t0 = 0 }: { time: number; t0?: number }) {
  const t = time - t0;

  const eyebrowIn = clamp((t - 0.6) / 0.4, 0, 1);
  const h1Line1 = clamp((t - 1.0) / 0.6, 0, 1);
  const h1Line2a = clamp((t - 1.6) / 0.45, 0, 1);
  const h1Line2b = clamp((t - 2.05) / 0.6, 0, 1);
  const subIn = clamp((t - 2.7) / 0.5, 0, 1);
  const chatIn = clamp((t - 3.2) / 0.45, 0, 1);

  const typeStart = 3.7;
  const typeEnd = 4.7;
  const fullQuery = "Kitna profit hua October mein?";
  const typeFrac = clamp((t - typeStart) / (typeEnd - typeStart), 0, 1);
  const typedChars = Math.floor(typeFrac * fullQuery.length);
  const typedText = fullQuery.slice(0, typedChars);
  const caretBlink = Math.floor(t * 2) % 2 === 0;

  const sendPulse = clamp((t - 4.7) / 0.25, 0, 1);
  const sendDone = clamp((t - 4.95) / 0.1, 0, 1);

  const thinking = t > 4.95 && t < 5.55;
  const dotPhase = ((t - 4.95) * 2) % 1;

  const cardIn = clamp((t - 5.5) / 0.55, 0, 1);
  const numIn = clamp((t - 5.85) / 0.5, 0, 1);
  const captionIn = clamp((t - 6.1) / 0.4, 0, 1);
  const sparkIn = clamp((t - 6.3) / 0.6, 0, 1);

  const targetNum = 24.9;
  const displayNum = (targetNum * Easing.easeOutCubic(numIn)).toFixed(1);

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        background: "#FFFFFF",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 80% 60% at 50% 30%, rgba(232,245,236,0.7), rgba(255,255,255,0) 70%)",
        }}
      />
      <BackgroundGrid />

      {/* Eyebrow */}
      <div
        className="mono"
        style={{
          position: "absolute",
          top: 156,
          left: 0,
          right: 0,
          textAlign: "center",
          fontSize: 12,
          fontWeight: 500,
          color: "#16A34A",
          opacity: eyebrowIn,
          transform: `translateY(${(1 - eyebrowIn) * 6}px)`,
        }}
      >
        01 / ASK ANYTHING
      </div>

      {/* Headline */}
      <div
        style={{
          position: "absolute",
          top: 196,
          left: 0,
          right: 0,
          textAlign: "center",
          fontSize: 108,
          fontWeight: 600,
          lineHeight: 1.04,
          letterSpacing: "-0.045em",
          color: "#0B1F12",
        }}
      >
        <div
          style={{
            opacity: h1Line1,
            transform: `translateY(${(1 - h1Line1) * 18}px)`,
            marginTop: 32,
          }}
        >
          Your books,
        </div>
        <div
          style={{
            marginTop: 4,
            display: "flex",
            justifyContent: "center",
            alignItems: "baseline",
            gap: 18,
            whiteSpace: "nowrap",
          }}
        >
          <span
            style={{
              opacity: h1Line2a,
              transform: `translateY(${(1 - h1Line2a) * 18}px)`,
              display: "inline-block",
              whiteSpace: "nowrap",
            }}
          >
            but they
          </span>
          <span
            className="serif-italic"
            style={{
              opacity: h1Line2b,
              transform: `translateY(${(1 - h1Line2b) * 18}px)`,
              display: "inline-block",
              color: "#16A34A",
              fontSize: 124,
              letterSpacing: "-0.02em",
              whiteSpace: "nowrap",
            }}
          >
            talk back.
          </span>
        </div>
      </div>

      {/* Sub-hero */}
      <div
        style={{
          position: "absolute",
          top: 488,
          left: "50%",
          transform: `translate(-50%, ${(1 - subIn) * 12}px)`,
          opacity: subIn,
          width: 760,
          textAlign: "center",
          fontSize: 19,
          lineHeight: 1.5,
          color: "#4A5A50",
          letterSpacing: "-0.005em",
        }}
      >
        Riko sits above Tally and turns ledgers, invoices, and ageing
        <br />
        into next-best actions — in Hindi, English, or WhatsApp voice notes.
      </div>

      {/* Chat surface */}
      <div
        style={{
          position: "absolute",
          top: 640,
          left: "50%",
          transform: `translate(-50%, ${(1 - chatIn) * 24}px)`,
          opacity: chatIn,
          width: 780,
          display: "flex",
          flexDirection: "column",
          gap: 16,
        }}
      >
        <div
          style={{
            background: "#FFFFFF",
            border: "1px solid #D0D8D2",
            borderRadius: 18,
            padding: "20px 22px",
            display: "flex",
            alignItems: "center",
            gap: 14,
            boxShadow:
              "0 8px 32px rgba(11,31,18,0.06), 0 2px 8px rgba(11,31,18,0.04)",
          }}
        >
          <RikoMark size={22} color="#16A34A" spin={0} animateIn={1} />
          <div
            style={{
              flex: 1,
              fontSize: 19,
              color: typedChars === 0 ? "#9AA69C" : "#0B1F12",
              letterSpacing: "-0.005em",
            }}
          >
            {typedChars === 0 ? "Ask anything…" : typedText}
            {typeFrac > 0 && typeFrac < 1 && (
              <span
                style={{
                  display: "inline-block",
                  width: 2,
                  height: 22,
                  background: "#16A34A",
                  marginLeft: 2,
                  verticalAlign: "middle",
                  opacity: caretBlink ? 1 : 0,
                }}
              />
            )}
          </div>
          <button
            style={{
              width: 44,
              height: 44,
              borderRadius: 12,
              background: typeFrac >= 1 ? "#16A34A" : "#EEF3EF",
              border: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "background 200ms",
              transform: `scale(${1 + sendPulse * 0.12 - sendDone * 0.12})`,
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path
                d="M5 12h14M13 6l6 6-6 6"
                stroke={typeFrac >= 1 ? "#FFFFFF" : "#9AA69C"}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {thinking && (
          <div
            style={{
              alignSelf: "flex-start",
              marginLeft: 22,
              display: "flex",
              alignItems: "center",
              gap: 6,
              padding: "14px 18px",
              background: "#F6F9F6",
              borderRadius: 14,
            }}
          >
            {[0, 1, 2].map((i) => {
              const phase = (dotPhase + i * 0.18) % 1;
              const o = 0.3 + 0.7 * Math.sin(phase * Math.PI);
              return (
                <span
                  key={i}
                  style={{
                    width: 7,
                    height: 7,
                    borderRadius: 5,
                    background: "#16A34A",
                    opacity: o,
                  }}
                />
              );
            })}
          </div>
        )}

        {cardIn > 0 && (
          <div
            style={{
              background: "#FFFFFF",
              border: "1px solid #D0D8D2",
              borderRadius: 18,
              padding: "24px 26px",
              opacity: cardIn,
              transform: `translateY(${(1 - cardIn) * 16}px)`,
              display: "grid",
              gridTemplateColumns: "1fr auto",
              gap: 18,
              alignItems: "center",
              boxShadow:
                "0 8px 32px rgba(11,31,18,0.06), 0 2px 8px rgba(11,31,18,0.04)",
            }}
          >
            <div>
              <div
                className="mono"
                style={{ fontSize: 11, color: "#16A34A", marginBottom: 8 }}
              >
                REVENUE · OCT 2025
              </div>
              <div
                className="tnum"
                style={{
                  fontSize: 56,
                  fontWeight: 600,
                  color: "#0B1F12",
                  letterSpacing: "-0.035em",
                  lineHeight: 1,
                  opacity: numIn,
                }}
              >
                ₹{displayNum}L
              </div>
              <div
                className="tnum"
                style={{
                  marginTop: 8,
                  fontSize: 14,
                  color: "#4A5A50",
                  opacity: captionIn,
                }}
              >
                <span style={{ color: "#16A34A", fontWeight: 600 }}>+18%</span>{" "}
                YoY · vs ₹21.1L last Oct · 312 invoices
              </div>
            </div>
            <Sparkline progress={sparkIn} />
          </div>
        )}
      </div>
    </div>
  );
}

function BackgroundGrid() {
  return (
    <svg
      width="1920"
      height="1080"
      style={{ position: "absolute", inset: 0, opacity: 0.35 }}
    >
      <defs>
        <pattern
          id="dotgrid"
          width="48"
          height="48"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="1" cy="1" r="1" fill="#E5EBE7" />
        </pattern>
      </defs>
      <rect width="1920" height="1080" fill="url(#dotgrid)" />
    </svg>
  );
}

function Sparkline({ progress = 1 }: { progress?: number }) {
  const values = [11.2, 13.5, 12.0, 14.8, 16.1, 15.4, 17.2, 18.9, 19.5, 20.8, 21.1, 24.9];
  const max = 26;
  const w = 200;
  const h = 80;
  const gap = 4;
  const bw = (w - gap * (values.length - 1)) / values.length;
  const visibleCount = Math.floor(progress * values.length);
  return (
    <svg width={w} height={h} style={{ display: "block" }}>
      {values.map((v, i) => {
        if (i > visibleCount) return null;
        const localGrow =
          i === visibleCount ? progress * values.length - visibleCount : 1;
        const bh = (v / max) * h * localGrow;
        const isLast = i === values.length - 1;
        return (
          <rect
            key={i}
            x={i * (bw + gap)}
            y={h - bh}
            width={bw}
            height={bh}
            rx={1.5}
            fill={isLast ? "#16A34A" : "#D0D8D2"}
          />
        );
      })}
    </svg>
  );
}

// ─── Portrait (720×1280) ─────────────────────────────────────────────────────
function Fold1Portrait({ time, t0 = 0 }: { time: number; t0?: number }) {
  const t = time - t0;
  const eyebrowIn = clamp((t - 0.6) / 0.4, 0, 1);
  const h1Line1 = clamp((t - 1.0) / 0.6, 0, 1);
  const h1Line2a = clamp((t - 1.6) / 0.45, 0, 1);
  const h1Line2b = clamp((t - 2.05) / 0.6, 0, 1);
  const subIn = clamp((t - 2.7) / 0.5, 0, 1);
  const chatIn = clamp((t - 3.2) / 0.45, 0, 1);

  const fullQuery = "Kitna profit hua October mein?";
  const typeFrac = clamp((t - 3.7) / 1.0, 0, 1);
  const typedChars = Math.floor(typeFrac * fullQuery.length);
  const typedText = fullQuery.slice(0, typedChars);
  const caretBlink = Math.floor(t * 2) % 2 === 0;

  const sendPulse = clamp((t - 4.7) / 0.25, 0, 1);
  const sendDone = clamp((t - 4.95) / 0.1, 0, 1);

  const cardIn = clamp((t - 5.5) / 0.55, 0, 1);
  const numIn = clamp((t - 5.85) / 0.5, 0, 1);
  const captionIn = clamp((t - 6.1) / 0.4, 0, 1);
  const sparkIn = clamp((t - 6.3) / 0.6, 0, 1);
  const displayNum = (24.9 * Easing.easeOutCubic(numIn)).toFixed(1);

  return (
    <div style={{ position: "absolute", inset: 0, background: "#FFFFFF", overflow: "hidden" }}>
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 90% 50% at 50% 25%, rgba(232,245,236,0.8), rgba(255,255,255,0) 70%)",
        }}
      />
      <div
        className="mono"
        style={{
          position: "absolute",
          top: 96,
          left: 0,
          right: 0,
          textAlign: "center",
          fontSize: 18,
          fontWeight: 500,
          color: "#16A34A",
          opacity: eyebrowIn,
          transform: `translateY(${(1 - eyebrowIn) * 6}px)`,
        }}
      >
        01 / ASK ANYTHING
      </div>

      <div
        style={{
          position: "absolute",
          top: 156,
          left: 0,
          right: 0,
          textAlign: "center",
          fontSize: 88,
          fontWeight: 600,
          lineHeight: 1.02,
          letterSpacing: "-0.04em",
          color: "#0B1F12",
        }}
      >
        <div
          style={{
            opacity: h1Line1,
            transform: `translateY(${(1 - h1Line1) * 18}px)`,
          }}
        >
          Your books,
        </div>
        <div
          style={{
            opacity: h1Line2a,
            transform: `translateY(${(1 - h1Line2a) * 18}px)`,
            marginTop: 6,
          }}
        >
          but they
        </div>
        <div
          className="serif-italic"
          style={{
            opacity: h1Line2b,
            transform: `translateY(${(1 - h1Line2b) * 18}px)`,
            color: "#16A34A",
            fontSize: 104,
            letterSpacing: "-0.02em",
            marginTop: 4,
          }}
        >
          talk back.
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          top: 600,
          left: 40,
          right: 40,
          textAlign: "center",
          fontSize: 24,
          lineHeight: 1.45,
          color: "#4A5A50",
          opacity: subIn,
          transform: `translateY(${(1 - subIn) * 10}px)`,
        }}
      >
        Riko sits above Tally — turns ledgers, invoices, and ageing into next-best actions.
      </div>

      <div
        style={{
          position: "absolute",
          top: 760,
          left: 40,
          right: 40,
          display: "flex",
          flexDirection: "column",
          gap: 16,
          opacity: chatIn,
          transform: `translateY(${(1 - chatIn) * 24}px)`,
        }}
      >
        <div
          style={{
            background: "#FFFFFF",
            border: "1px solid #D0D8D2",
            borderRadius: 18,
            padding: "22px 22px",
            display: "flex",
            alignItems: "center",
            gap: 14,
            boxShadow: "0 8px 32px rgba(11,31,18,0.06)",
          }}
        >
          <RikoMark size={28} color="#16A34A" spin={0} animateIn={1} />
          <div
            style={{
              flex: 1,
              fontSize: 24,
              color: typedChars === 0 ? "#9AA69C" : "#0B1F12",
            }}
          >
            {typedChars === 0 ? "Ask anything…" : typedText}
            {typeFrac > 0 && typeFrac < 1 && (
              <span
                style={{
                  display: "inline-block",
                  width: 3,
                  height: 26,
                  background: "#16A34A",
                  marginLeft: 2,
                  verticalAlign: "middle",
                  opacity: caretBlink ? 1 : 0,
                }}
              />
            )}
          </div>
          <button
            style={{
              width: 52,
              height: 52,
              borderRadius: 14,
              background: typeFrac >= 1 ? "#16A34A" : "#EEF3EF",
              border: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transform: `scale(${1 + sendPulse * 0.12 - sendDone * 0.12})`,
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M5 12h14M13 6l6 6-6 6"
                stroke={typeFrac >= 1 ? "#FFFFFF" : "#9AA69C"}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {cardIn > 0 && (
          <div
            style={{
              background: "#FFFFFF",
              border: "1px solid #D0D8D2",
              borderRadius: 18,
              padding: "26px",
              opacity: cardIn,
              transform: `translateY(${(1 - cardIn) * 16}px)`,
              boxShadow: "0 8px 32px rgba(11,31,18,0.06)",
            }}
          >
            <div className="mono" style={{ fontSize: 14, color: "#16A34A", marginBottom: 10 }}>
              REVENUE · OCT 2025
            </div>
            <div
              className="tnum"
              style={{
                fontSize: 72,
                fontWeight: 600,
                color: "#0B1F12",
                letterSpacing: "-0.035em",
                lineHeight: 1,
                opacity: numIn,
              }}
            >
              ₹{displayNum}L
            </div>
            <div
              className="tnum"
              style={{ marginTop: 10, fontSize: 17, color: "#4A5A50", opacity: captionIn }}
            >
              <span style={{ color: "#16A34A", fontWeight: 600 }}>+18%</span> YoY · 312 invoices
            </div>
            <div style={{ marginTop: 16 }}>
              <PortraitSparkline progress={sparkIn} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function PortraitSparkline({ progress = 1 }: { progress?: number }) {
  const values = [11.2, 13.5, 12.0, 14.8, 16.1, 15.4, 17.2, 18.9, 19.5, 20.8, 21.1, 24.9];
  const max = 26;
  const w = 560;
  const h = 80;
  const gap = 6;
  const bw = (w - gap * (values.length - 1)) / values.length;
  const visibleCount = Math.floor(progress * values.length);
  return (
    <svg width="100%" height={h} viewBox={`0 0 ${w} ${h}`} style={{ display: "block" }}>
      {values.map((v, i) => {
        if (i > visibleCount) return null;
        const localGrow = i === visibleCount ? progress * values.length - visibleCount : 1;
        const bh = (v / max) * h * localGrow;
        const isLast = i === values.length - 1;
        return (
          <rect
            key={i}
            x={i * (bw + gap)}
            y={h - bh}
            width={bw}
            height={bh}
            rx={2}
            fill={isLast ? "#16A34A" : "#D0D8D2"}
          />
        );
      })}
    </svg>
  );
}
