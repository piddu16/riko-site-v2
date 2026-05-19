"use client";

import { clamp } from "@/lib/easing";
import { RikoMark } from "./RikoMark";

export function Fold3({
  time,
  t0 = 15,
  portrait = false,
}: {
  time: number;
  t0?: number;
  portrait?: boolean;
}) {
  if (portrait) return <Fold3Portrait time={time} t0={t0} />;
  return <Fold3Desktop time={time} t0={t0} />;
}

function Fold3Desktop({ time, t0 = 15 }: { time: number; t0?: number }) {
  const t = time - t0;

  const eyebrowIn = clamp((t - 0.2) / 0.4, 0, 1);
  const h1aIn = clamp((t - 0.4) / 0.5, 0, 1);
  const h1bIn = clamp((t - 0.7) / 0.55, 0, 1);
  const subIn = clamp((t - 1.0) / 0.5, 0, 1);
  const phoneIn = clamp((t - 1.0) / 0.95, 0, 1);

  const typingOn = t > 2.0 && t < 2.7;
  const typingDotPhase = ((t - 2.0) * 2) % 1;
  const msgIn = clamp((t - 2.65) / 0.55, 0, 1);
  const tickIn = clamp((t - 3.2) / 0.3, 0, 1);
  const tickDouble = clamp((t - 3.45) / 0.3, 0, 1);
  const deliveredIn = clamp((t - 3.55) / 0.4, 0, 1);

  const pillTimes = [3.9, 4.2, 4.5, 4.8];
  const pillIn = pillTimes.map((ts) => clamp((t - ts) / 0.4, 0, 1));

  const ctaIn = clamp((t - 5.4) / 0.6, 0, 1);
  const breathe = t > 5.4 ? (Math.sin((t - 5.4) * 2) + 1) / 2 : 0;

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
          background: "linear-gradient(180deg, #FFFFFF, #F6F9F6)",
        }}
      />

      <div
        style={{
          position: "absolute",
          top: 76,
          bottom: 0,
          left: 96,
          width: 880,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          paddingTop: 40,
          paddingBottom: 80,
        }}
      >
        <div
          className="mono"
          style={{
            fontSize: 12,
            fontWeight: 500,
            color: "#16A34A",
            opacity: eyebrowIn,
            transform: `translateY(${(1 - eyebrowIn) * 8}px)`,
          }}
        >
          03 / DELIVERED · 09:04 IST
        </div>

        <div
          style={{
            marginTop: 22,
            fontSize: 116,
            fontWeight: 600,
            lineHeight: 1.0,
            letterSpacing: "-0.045em",
            color: "#0B1F12",
          }}
        >
          <div
            style={{
              opacity: h1aIn,
              transform: `translateY(${(1 - h1aIn) * 22}px)`,
            }}
          >
            Delivered,
          </div>
          <div
            style={{
              opacity: h1bIn,
              transform: `translateY(${(1 - h1bIn) * 22}px)`,
              marginTop: 2,
            }}
          >
            <span
              className="serif-italic"
              style={{
                color: "#16A34A",
                fontSize: 124,
                letterSpacing: "-0.02em",
              }}
            >
              not
            </span>{" "}
            <span>hyped.</span>
          </div>
        </div>

        <div
          style={{
            marginTop: 28,
            maxWidth: 640,
            fontSize: 20,
            lineHeight: 1.5,
            color: "#4A5A50",
            letterSpacing: "-0.005em",
            opacity: subIn,
            transform: `translateY(${(1 - subIn) * 12}px)`,
          }}
        >
          Hindi-English fluent. WhatsApp-native. Every number cited
          back to a Tally voucher — so you can trust the answer
          before you act on it.
        </div>

        <div
          style={{
            marginTop: 36,
            display: "flex",
            flexWrap: "wrap",
            gap: 10,
          }}
        >
          {[
            { label: "Read-only", icon: "lock" },
            { label: "Mumbai-hosted", icon: "server" },
            { label: "AES-256", icon: "shield" },
            { label: "Hallucination-checked", icon: "check" },
          ].map((p, i) => (
            <TrustPill key={i} label={p.label} icon={p.icon} opacity={pillIn[i]} />
          ))}
        </div>

        <div
          style={{
            marginTop: 48,
            opacity: ctaIn,
            transform: `translateY(${(1 - ctaIn) * 16}px)`,
            display: "flex",
            alignItems: "center",
            gap: 18,
          }}
        >
          <button
            style={{
              fontSize: 17,
              fontWeight: 600,
              padding: "18px 28px",
              background: "#0B1F12",
              color: "#FFFFFF",
              border: "none",
              borderRadius: 12,
              letterSpacing: "-0.005em",
              display: "flex",
              alignItems: "center",
              gap: 10,
              boxShadow: `0 0 0 ${breathe * 6}px rgba(22,163,74,${0.18 * breathe}), 0 8px 24px rgba(11,31,18,0.15)`,
              transition: "box-shadow 80ms",
            }}
          >
            Start free — 5 credits a day, no card
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path
                d="M5 12h14M13 6l6 6-6 6"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <span
            style={{
              fontSize: 15,
              color: "#4A5A50",
              fontWeight: 500,
            }}
          >
            or watch the 2-min demo →
          </span>
        </div>

        <div
          className="mono"
          style={{
            marginTop: 28,
            fontSize: 11,
            color: "#9AA69C",
            opacity: ctaIn,
          }}
        >
          FREE FOREVER FOR ONE TALLY COMPANY · UPGRADE WHEN YOU NEED MORE
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          top: 76,
          bottom: 0,
          right: 96,
          width: 760,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transform: `translateX(${(1 - phoneIn) * 160}px)`,
          opacity: phoneIn,
        }}
      >
        <Phone>
          <WhatsAppThread
            typingOn={typingOn}
            typingDotPhase={typingDotPhase}
            msgIn={msgIn}
            tickIn={tickIn}
            tickDouble={tickDouble}
            deliveredIn={deliveredIn}
          />
        </Phone>
      </div>
    </div>
  );
}

function TrustPill({
  label,
  icon,
  opacity = 1,
}: {
  label: string;
  icon: string;
  opacity?: number;
}) {
  const icons: Record<string, JSX.Element> = {
    lock: (
      <path
        d="M6 10V7a4 4 0 0 1 8 0v3M5 10h10v8H5z"
        stroke="#16A34A"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    ),
    server: (
      <>
        <rect x="3" y="4" width="14" height="5" rx="1" stroke="#16A34A" strokeWidth="1.6" fill="none" />
        <rect x="3" y="11" width="14" height="5" rx="1" stroke="#16A34A" strokeWidth="1.6" fill="none" />
        <circle cx="6" cy="6.5" r="0.8" fill="#16A34A" />
        <circle cx="6" cy="13.5" r="0.8" fill="#16A34A" />
      </>
    ),
    shield: (
      <path
        d="M10 2l7 3v5c0 4.5-3 8.5-7 10-4-1.5-7-5.5-7-10V5l7-3z"
        stroke="#16A34A"
        strokeWidth="1.6"
        fill="none"
        strokeLinejoin="round"
      />
    ),
    check: (
      <path
        d="M3 10l4 4 10-10"
        stroke="#16A34A"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    ),
  };
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        padding: "10px 16px",
        background: "#E8F5EC",
        borderRadius: 100,
        opacity,
        transform: `translateY(${(1 - opacity) * 8}px)`,
      }}
    >
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        {icons[icon]}
      </svg>
      <span
        style={{
          fontSize: 14,
          fontWeight: 600,
          color: "#065F46",
          letterSpacing: "-0.005em",
        }}
      >
        {label}
      </span>
    </div>
  );
}

function Phone({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        width: 380,
        height: 780,
        background: "#0B1F12",
        borderRadius: 56,
        padding: 12,
        boxShadow:
          "0 40px 80px rgba(11,31,18,0.22), 0 8px 24px rgba(11,31,18,0.1)",
        position: "relative",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#ECE5DD",
          borderRadius: 44,
          overflow: "hidden",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 12,
            left: "50%",
            transform: "translateX(-50%)",
            width: 120,
            height: 28,
            background: "#0B1F12",
            borderRadius: 100,
            zIndex: 10,
          }}
        />
        {children}
      </div>
    </div>
  );
}

function WhatsAppThread({
  typingOn,
  typingDotPhase,
  msgIn,
  tickIn,
  tickDouble,
  deliveredIn,
}: {
  typingOn: boolean;
  typingDotPhase: number;
  msgIn: number;
  tickIn: number;
  tickDouble: number;
  deliveredIn: number;
}) {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          background: "#075E54",
          color: "#FFFFFF",
          padding: "50px 16px 14px",
          display: "flex",
          alignItems: "center",
          gap: 12,
        }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path
            d="M15 18l-6-6 6-6"
            stroke="#fff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <div
          style={{
            width: 36,
            height: 36,
            borderRadius: 22,
            background: "#16A34A",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <RikoMark size={22} color="#FFFFFF" spin={0} animateIn={1} />
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 15, fontWeight: 600 }}>Riko</div>
          <div style={{ fontSize: 11, opacity: 0.75 }}>online</div>
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "center", marginTop: 16 }}>
        <div
          style={{
            background: "rgba(255,255,255,0.85)",
            fontSize: 11,
            color: "#54656F",
            padding: "4px 10px",
            borderRadius: 8,
            fontWeight: 500,
          }}
        >
          TODAY
        </div>
      </div>

      <div
        style={{
          flex: 1,
          padding: "16px 12px",
          display: "flex",
          flexDirection: "column",
          gap: 8,
        }}
      >
        {typingOn && (
          <div
            style={{
              alignSelf: "flex-start",
              background: "#FFFFFF",
              padding: "12px 14px",
              borderRadius: 14,
              borderTopLeftRadius: 4,
              boxShadow: "0 1px 0.5px rgba(0,0,0,0.13)",
              display: "flex",
              alignItems: "center",
              gap: 4,
            }}
          >
            {[0, 1, 2].map((i) => {
              const phase = (typingDotPhase + i * 0.18) % 1;
              const o = 0.3 + 0.7 * Math.sin(phase * Math.PI);
              return (
                <span
                  key={i}
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: 4,
                    background: "#16A34A",
                    opacity: o,
                  }}
                />
              );
            })}
          </div>
        )}

        {msgIn > 0 && (
          <div
            style={{
              alignSelf: "flex-start",
              maxWidth: "85%",
              background: "#FFFFFF",
              padding: "10px 12px 8px",
              borderRadius: 14,
              borderTopLeftRadius: 4,
              boxShadow: "0 1px 0.5px rgba(0,0,0,0.13)",
              opacity: msgIn,
              transform: `translateY(${(1 - msgIn) * 8}px) scale(${0.96 + 0.04 * msgIn})`,
              transformOrigin: "top left",
            }}
          >
            <div
              style={{
                fontSize: 13.5,
                color: "#16A34A",
                fontWeight: 600,
                marginBottom: 4,
              }}
            >
              ☀️ Good morning, Arjun
            </div>
            <div style={{ fontSize: 13.5, color: "#111B21", lineHeight: 1.4 }}>
              Yesterday: <b className="tnum">₹2,18,000</b> revenue, 14 invoices.
              <br />
              <br />
              <b>Top overdue:</b> <b className="tnum">₹5.2L</b> from Kothari Traders, 42 days.
              <br />
              <br />
              Send a polite reminder?
            </div>
            <div
              style={{
                marginTop: 10,
                paddingTop: 8,
                borderTop: "1px solid #E5EBE7",
                display: "flex",
                flexDirection: "column",
                gap: 6,
              }}
            >
              <div
                style={{
                  fontSize: 13,
                  color: "#16A34A",
                  fontWeight: 600,
                  textAlign: "center",
                }}
              >
                Send reminder now
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                gap: 4,
                marginTop: 4,
              }}
            >
              <span style={{ fontSize: 10.5, color: "#667781" }}>9:04</span>
              <svg width="16" height="11" viewBox="0 0 16 11" fill="none">
                <path
                  d="M1 6l2.5 2.5L10 2"
                  stroke={tickDouble > 0 ? "#53BDEB" : "#8696A0"}
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  opacity={tickIn}
                />
                <path
                  d="M5 6l2.5 2.5L14 2"
                  stroke={tickDouble > 0 ? "#53BDEB" : "#8696A0"}
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  opacity={tickDouble}
                />
              </svg>
            </div>
          </div>
        )}

        {deliveredIn > 0 && (
          <div
            style={{
              alignSelf: "flex-end",
              marginTop: 12,
              marginRight: 8,
              display: "flex",
              alignItems: "center",
              gap: 6,
              padding: "6px 10px",
              background: "#E8F5EC",
              borderRadius: 100,
              opacity: deliveredIn,
              transform: `translateY(${(1 - deliveredIn) * 6}px)`,
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: 4,
                background: "#16A34A",
              }}
            />
            <span
              className="mono"
              style={{ fontSize: 9.5, color: "#065F46", fontWeight: 600 }}
            >
              DELIVERED · 09:04 IST
            </span>
          </div>
        )}
      </div>

      <div
        style={{
          background: "#F0F2F5",
          padding: "8px 12px",
          display: "flex",
          alignItems: "center",
          gap: 8,
        }}
      >
        <div
          style={{
            flex: 1,
            background: "#FFFFFF",
            borderRadius: 20,
            padding: "8px 14px",
            fontSize: 13,
            color: "#8696A0",
          }}
        >
          Message
        </div>
      </div>
    </div>
  );
}

// ─── Portrait (720×1280) ─────────────────────────────────────────────────────
function Fold3Portrait({ time, t0 = 15 }: { time: number; t0?: number }) {
  const t = time - t0;
  const eyebrowIn = clamp((t - 0.2) / 0.4, 0, 1);
  const h1aIn = clamp((t - 0.4) / 0.5, 0, 1);
  const h1bIn = clamp((t - 0.7) / 0.55, 0, 1);
  const subIn = clamp((t - 1.0) / 0.5, 0, 1);
  const phoneIn = clamp((t - 1.0) / 0.95, 0, 1);
  const typingOn = t > 2.0 && t < 2.7;
  const typingDotPhase = ((t - 2.0) * 2) % 1;
  const msgIn = clamp((t - 2.65) / 0.55, 0, 1);
  const tickIn = clamp((t - 3.2) / 0.3, 0, 1);
  const tickDouble = clamp((t - 3.45) / 0.3, 0, 1);
  const deliveredIn = clamp((t - 3.55) / 0.4, 0, 1);
  const pillTimes = [3.9, 4.2, 4.5, 4.8];
  const pillIn = pillTimes.map((ts) => clamp((t - ts) / 0.4, 0, 1));
  const ctaIn = clamp((t - 5.4) / 0.6, 0, 1);
  const breathe = t > 5.4 ? (Math.sin((t - 5.4) * 2) + 1) / 2 : 0;

  return (
    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, #FFFFFF, #F6F9F6)", overflow: "hidden" }}>
      <div
        className="mono"
        style={{
          position: "absolute",
          top: 60,
          left: 40,
          fontSize: 15,
          fontWeight: 500,
          color: "#16A34A",
          opacity: eyebrowIn,
        }}
      >
        03 / DELIVERED · 09:04 IST
      </div>

      <div
        style={{
          position: "absolute",
          top: 100,
          left: 40,
          right: 40,
          fontSize: 96,
          fontWeight: 600,
          lineHeight: 1.0,
          letterSpacing: "-0.045em",
          color: "#0B1F12",
        }}
      >
        <div style={{ opacity: h1aIn, transform: `translateY(${(1 - h1aIn) * 18}px)` }}>
          Delivered,
        </div>
        <div
          style={{
            opacity: h1bIn,
            transform: `translateY(${(1 - h1bIn) * 18}px)`,
            marginTop: 4,
          }}
        >
          <span
            className="serif-italic"
            style={{ color: "#16A34A", fontSize: 104, letterSpacing: "-0.02em" }}
          >
            not
          </span>{" "}
          hyped.
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          top: 340,
          left: 40,
          right: 40,
          fontSize: 22,
          lineHeight: 1.45,
          color: "#4A5A50",
          opacity: subIn,
          transform: `translateY(${(1 - subIn) * 10}px)`,
        }}
      >
        Hindi-English fluent. WhatsApp-native. Every number cited back to a Tally voucher.
      </div>

      <div
        style={{
          position: "absolute",
          top: 460,
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "center",
          transform: `translateY(${(1 - phoneIn) * 60}px)`,
          opacity: phoneIn,
        }}
      >
        <div
          style={{
            width: 340,
            height: 580,
            background: "#0B1F12",
            borderRadius: 44,
            padding: 10,
            boxShadow: "0 40px 80px rgba(11,31,18,0.22)",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              background: "#ECE5DD",
              borderRadius: 36,
              overflow: "hidden",
              position: "relative",
            }}
          >
            <div
              style={{
                background: "#075E54",
                color: "#FFFFFF",
                padding: "44px 14px 12px",
                display: "flex",
                alignItems: "center",
                gap: 10,
                fontSize: 14,
                fontWeight: 600,
              }}
            >
              <div
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 20,
                  background: "#16A34A",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <RikoMark size={20} color="#FFFFFF" spin={0} animateIn={1} />
              </div>
              <div style={{ flex: 1 }}>
                <div>Riko</div>
                <div style={{ fontSize: 10, opacity: 0.75, fontWeight: 400 }}>online</div>
              </div>
            </div>
            <div style={{ padding: "12px 10px", display: "flex", flexDirection: "column", gap: 6 }}>
              {typingOn && (
                <div
                  style={{
                    alignSelf: "flex-start",
                    background: "#FFFFFF",
                    padding: "10px 12px",
                    borderRadius: 12,
                    borderTopLeftRadius: 4,
                    display: "flex",
                    gap: 4,
                  }}
                >
                  {[0, 1, 2].map((i) => {
                    const phase = (typingDotPhase + i * 0.18) % 1;
                    const o = 0.3 + 0.7 * Math.sin(phase * Math.PI);
                    return (
                      <span
                        key={i}
                        style={{ width: 5, height: 5, borderRadius: 3, background: "#16A34A", opacity: o }}
                      />
                    );
                  })}
                </div>
              )}
              {msgIn > 0 && (
                <div
                  style={{
                    alignSelf: "flex-start",
                    maxWidth: "88%",
                    background: "#FFFFFF",
                    padding: "8px 10px 6px",
                    borderRadius: 12,
                    borderTopLeftRadius: 4,
                    opacity: msgIn,
                    transform: `translateY(${(1 - msgIn) * 6}px)`,
                  }}
                >
                  <div style={{ fontSize: 12, color: "#16A34A", fontWeight: 600, marginBottom: 3 }}>
                    ☀️ Good morning, Arjun
                  </div>
                  <div style={{ fontSize: 12, color: "#111B21", lineHeight: 1.4 }}>
                    Yesterday: <b className="tnum">₹2,18,000</b> revenue, 14 invoices.
                    <br />
                    <b>Top overdue:</b> <b className="tnum">₹5.2L</b> from Kothari Traders.
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-end",
                      gap: 4,
                      marginTop: 4,
                      alignItems: "center",
                    }}
                  >
                    <span style={{ fontSize: 9, color: "#667781" }}>9:04</span>
                    <svg width="14" height="10" viewBox="0 0 16 11" fill="none">
                      <path
                        d="M1 6l2.5 2.5L10 2"
                        stroke={tickDouble > 0 ? "#53BDEB" : "#8696A0"}
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        opacity={tickIn}
                      />
                      <path
                        d="M5 6l2.5 2.5L14 2"
                        stroke={tickDouble > 0 ? "#53BDEB" : "#8696A0"}
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        opacity={tickDouble}
                      />
                    </svg>
                  </div>
                </div>
              )}
              {deliveredIn > 0 && (
                <div
                  style={{
                    alignSelf: "flex-end",
                    marginTop: 8,
                    display: "flex",
                    alignItems: "center",
                    gap: 5,
                    padding: "5px 9px",
                    background: "#E8F5EC",
                    borderRadius: 100,
                    opacity: deliveredIn,
                  }}
                >
                  <span
                    style={{ width: 5, height: 5, borderRadius: 3, background: "#16A34A" }}
                  />
                  <span
                    className="mono"
                    style={{ fontSize: 9, color: "#065F46", fontWeight: 600 }}
                  >
                    DELIVERED · 09:04 IST
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: 130,
          left: 40,
          right: 40,
          display: "flex",
          flexWrap: "wrap",
          gap: 8,
          justifyContent: "center",
        }}
      >
        {[
          { label: "Read-only", icon: "lock" },
          { label: "Mumbai-hosted", icon: "server" },
          { label: "AES-256", icon: "shield" },
          { label: "Cited", icon: "check" },
        ].map((p, i) => (
          <PortraitTrustPill key={i} label={p.label} icon={p.icon} opacity={pillIn[i]} />
        ))}
      </div>

      <div
        style={{
          position: "absolute",
          bottom: 40,
          left: 40,
          right: 40,
          opacity: ctaIn,
          transform: `translateY(${(1 - ctaIn) * 12}px)`,
        }}
      >
        <button
          style={{
            width: "100%",
            fontSize: 19,
            fontWeight: 600,
            padding: "20px 24px",
            background: "#0B1F12",
            color: "#FFFFFF",
            border: "none",
            borderRadius: 14,
            letterSpacing: "-0.005em",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 10,
            boxShadow: `0 0 0 ${breathe * 6}px rgba(22,163,74,${0.18 * breathe}), 0 8px 24px rgba(11,31,18,0.15)`,
            transition: "box-shadow 80ms",
          }}
        >
          Start free · 5 credits a day, no card
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path
              d="M5 12h14M13 6l6 6-6 6"
              stroke="#fff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

function PortraitTrustPill({
  label,
  icon,
  opacity = 1,
}: {
  label: string;
  icon: string;
  opacity?: number;
}) {
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        padding: "8px 14px",
        background: "#E8F5EC",
        borderRadius: 100,
        opacity,
        transform: `translateY(${(1 - opacity) * 6}px)`,
        fontSize: 13,
        fontWeight: 600,
        color: "#065F46",
      }}
    >
      {label}
    </div>
  );
}
