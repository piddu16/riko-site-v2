"use client";

import { clamp, Easing } from "@/lib/easing";

export function Fold2({ time, t0 = 7.5 }: { time: number; t0?: number }) {
  const t = time - t0;

  const eyebrowIn = clamp((t - 0.3) / 0.4, 0, 1);
  const h1aIn = clamp((t - 0.5) / 0.5, 0, 1);
  const h1bIn = clamp((t - 0.9) / 0.5, 0, 1);
  const tallyIn = clamp((t - 0.6) / 0.7, 0, 1);

  const scrollT = clamp(t - 1.2, 0, 1.2);
  const rowOffset = scrollT * 56;

  const spotlightIn = clamp((t - 2.3) / 0.5, 0, 1);
  const spotlightPulse = 0.6 + 0.4 * Math.sin((t - 2.3) * 4.5);

  const liftT = clamp((t - 3.0) / 1.0, 0, 1);
  const liftY = -Easing.easeInOutCubic(liftT) * 320;

  const cardIn = clamp((t - 3.6) / 0.7, 0, 1);

  const btnPulse = (Math.sin((t - 5.2) * 2.4) + 1) / 2;
  const btnGlow = t > 5.2 ? btnPulse : 0;

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
          top: 76,
          left: 0,
          right: 0,
          height: 500,
          background: "#FFFFFF",
          zIndex: 2,
        }}
      >
        <div
          className="mono"
          style={{
            position: "absolute",
            top: 56,
            left: 96,
            fontSize: 12,
            fontWeight: 500,
            color: "#16A34A",
            opacity: eyebrowIn,
            transform: `translateY(${(1 - eyebrowIn) * 8}px)`,
          }}
        >
          02 / ABOVE TALLY · NEVER INSIDE
        </div>

        <div
          style={{
            position: "absolute",
            top: 96,
            left: 96,
            maxWidth: 900,
            fontSize: 92,
            fontWeight: 600,
            lineHeight: 1.02,
            letterSpacing: "-0.04em",
            color: "#0B1F12",
          }}
        >
          <div
            style={{
              opacity: h1aIn,
              transform: `translateY(${(1 - h1aIn) * 18}px)`,
            }}
          >
            One layer{" "}
            <span
              className="serif-italic"
              style={{ color: "#16A34A", fontSize: 100, letterSpacing: "-0.02em" }}
            >
              above
            </span>{" "}
            your books.
          </div>
          <div
            style={{
              opacity: h1bIn,
              transform: `translateY(${(1 - h1bIn) * 18}px)`,
              fontSize: 22,
              fontWeight: 400,
              letterSpacing: "-0.005em",
              lineHeight: 1.5,
              color: "#4A5A50",
              marginTop: 24,
              maxWidth: 600,
            }}
          >
            Riko reads from Tally, never writes back. Your ledger stays canonical.
            We just turn it into action.
          </div>
        </div>

        {cardIn > 0 && (
          <div
            style={{
              position: "absolute",
              top: 200,
              right: 96,
              width: 460,
              opacity: cardIn,
              transform: `translateY(${(1 - cardIn) * 24}px) scale(${0.96 + 0.04 * cardIn})`,
            }}
          >
            <div
              style={{
                background: "#FFFFFF",
                border: "1px solid #D0D8D2",
                borderRadius: 18,
                padding: "24px 26px",
                boxShadow:
                  "0 16px 48px rgba(11,31,18,0.10), 0 4px 12px rgba(11,31,18,0.06)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  marginBottom: 14,
                }}
              >
                <span
                  className="mono"
                  style={{
                    fontSize: 10,
                    fontWeight: 600,
                    padding: "4px 10px",
                    borderRadius: 100,
                    background: "#FEF2F2",
                    color: "#DC2626",
                  }}
                >
                  OVERDUE
                </span>
                <span
                  className="mono"
                  style={{ fontSize: 10, fontWeight: 500, color: "#9AA69C" }}
                >
                  04 · RECEIVABLES
                </span>
              </div>
              <div
                className="tnum"
                style={{
                  fontSize: 52,
                  fontWeight: 600,
                  color: "#0B1F12",
                  letterSpacing: "-0.03em",
                  lineHeight: 1,
                }}
              >
                ₹5,24,000
              </div>
              <div
                style={{
                  marginTop: 8,
                  fontSize: 15,
                  color: "#243329",
                  fontWeight: 500,
                }}
              >
                Kothari Traders · 42 days overdue
              </div>
              <div
                className="tnum"
                style={{
                  marginTop: 4,
                  fontSize: 13,
                  color: "#9AA69C",
                }}
              >
                Bill INV-2841 · Due 07 Apr 2026 · 3 reminders sent
              </div>

              <div style={{ marginTop: 18, display: "flex", gap: 10 }}>
                <button
                  style={{
                    flex: 1,
                    fontSize: 14,
                    fontWeight: 600,
                    padding: "11px 18px",
                    background: "#16A34A",
                    color: "#FFFFFF",
                    border: "none",
                    borderRadius: 10,
                    boxShadow: `0 0 0 ${btnGlow * 8}px rgba(22,163,74,${0.15 * btnGlow})`,
                    transition: "box-shadow 80ms",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 8,
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M20 12a8 8 0 1 1-3.4-6.55L20 4l-1.45 3.4A8 8 0 0 1 20 12z"
                      stroke="#fff"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8.5 12.5l1.5 1.5 4-4"
                      stroke="#fff"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Send WhatsApp reminder
                </button>
                <button
                  style={{
                    fontSize: 14,
                    fontWeight: 500,
                    padding: "11px 16px",
                    background: "#FFFFFF",
                    color: "#0B1F12",
                    border: "1px solid #D0D8D2",
                    borderRadius: 10,
                  }}
                >
                  Skip
                </button>
              </div>
            </div>

            <div
              className="mono"
              style={{
                marginTop: 12,
                display: "flex",
                alignItems: "center",
                gap: 6,
                fontSize: 10,
                color: "#9AA69C",
              }}
            >
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
                <path
                  d="M9 12l2 2 4-4M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"
                  stroke="#16A34A"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              CITED FROM TALLY · VOUCHER #58294 · SYNCED 90s AGO
            </div>
          </div>
        )}
      </div>

      {liftT > 0 && liftT < 1 && (
        <GhostRow
          y={576 + liftY}
          opacity={Math.max(0, 1 - liftT * liftT)}
          scale={1 - liftT * 0.15}
        />
      )}

      <div
        style={{
          position: "absolute",
          top: 576,
          left: 0,
          right: 0,
          height: 1,
          background:
            "linear-gradient(90deg, transparent, #16A34A 50%, transparent)",
          opacity: tallyIn * 0.6,
          zIndex: 3,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 572,
          left: 0,
          right: 0,
          height: 8,
          background:
            "linear-gradient(180deg, transparent, rgba(22,163,74,0.08))",
          opacity: tallyIn,
          zIndex: 1,
        }}
      />

      <div
        style={{
          position: "absolute",
          top: 576,
          left: 0,
          right: 0,
          bottom: 0,
          background: "#EEF3EF",
          transform: `translateY(${(1 - tallyIn) * 100}px)`,
          opacity: tallyIn,
          overflow: "hidden",
        }}
      >
        <TallyScreen
          rowOffset={rowOffset}
          spotlightOn={spotlightIn}
          spotlightPulse={spotlightPulse}
          rowHidden={liftT > 0.1}
        />
      </div>

      <div
        className="mono"
        style={{
          position: "absolute",
          bottom: 24,
          left: 96,
          fontSize: 11,
          color: "#9AA69C",
          opacity: tallyIn,
          zIndex: 5,
          display: "flex",
          alignItems: "center",
          gap: 8,
        }}
      >
        <span
          style={{
            display: "inline-block",
            width: 8,
            height: 8,
            borderRadius: 4,
            background: "#16A34A",
            boxShadow: "0 0 0 3px rgba(22,163,74,0.18)",
          }}
        />
        SYNCED WITH TALLY · 2,433,607 VOUCHERS INDEXED
      </div>
    </div>
  );
}

function TallyScreen({
  rowOffset,
  spotlightOn,
  spotlightPulse,
  rowHidden,
}: {
  rowOffset: number;
  spotlightOn: number;
  spotlightPulse: number;
  rowHidden: boolean;
}) {
  const rows = [
    { date: "07-Apr-26", party: "Kothari Traders", voucher: "INV-2841", amount: "5,24,000", days: 42, type: "SALES" },
    { date: "12-Apr-26", party: "Mehta Foods Pvt Ltd", voucher: "INV-2843", amount: "1,82,500", days: 37, type: "SALES" },
    { date: "15-Apr-26", party: "Sharma Auto Parts", voucher: "INV-2847", amount: "94,200", days: 34, type: "SALES" },
    { date: "18-Apr-26", party: "Patel & Sons", voucher: "PUR-1198", amount: "3,11,800", days: 31, type: "PURCH" },
    { date: "22-Apr-26", party: "Apex Textiles", voucher: "INV-2851", amount: "76,400", days: 27, type: "SALES" },
    { date: "25-Apr-26", party: "Raj Hardware", voucher: "INV-2853", amount: "1,12,000", days: 24, type: "SALES" },
    { date: "28-Apr-26", party: "NextGen Suppliers", voucher: "PUR-1204", amount: "2,45,600", days: 21, type: "PURCH" },
    { date: "02-May-26", party: "Vora Distribution", voucher: "INV-2857", amount: "58,900", days: 17, type: "SALES" },
    { date: "05-May-26", party: "Krish Industries", voucher: "INV-2859", amount: "4,02,300", days: 14, type: "SALES" },
  ];

  const rowH = 44;

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        fontFamily: "var(--font-jetbrains-mono), ui-monospace, monospace",
        fontSize: 13,
        color: "#243329",
      }}
    >
      <div
        style={{
          height: 32,
          background: "#243329",
          color: "#F6F9F6",
          display: "flex",
          alignItems: "center",
          padding: "0 96px",
          fontSize: 11,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
        }}
      >
        <span style={{ opacity: 0.6 }}>
          Tally Prime · NXTLVL TRADERS · F.Y. 2026-27 ·{" "}
        </span>
        <span style={{ opacity: 0.85, marginLeft: 6 }}>
          OUTSTANDING RECEIVABLES
        </span>
        <span style={{ marginLeft: "auto", opacity: 0.5 }}>
          F5 · Ageing F6 · Party Esc · Back
        </span>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "120px 1fr 140px 140px 90px 90px",
          padding: "14px 96px 10px",
          gap: 16,
          borderBottom: "1px solid #D0D8D2",
          fontSize: 10,
          letterSpacing: "0.12em",
          color: "#4A5A50",
          background: "#EEF3EF",
        }}
      >
        <div>DATE</div>
        <div>PARTY</div>
        <div>VOUCHER</div>
        <div style={{ textAlign: "right" }}>AMOUNT (₹)</div>
        <div style={{ textAlign: "right" }}>DAYS</div>
        <div>TYPE</div>
      </div>

      <div
        style={{
          position: "absolute",
          top: 76,
          left: 0,
          right: 0,
          bottom: 0,
          overflow: "hidden",
        }}
      >
        <div style={{ transform: `translateY(${-rowOffset}px)` }}>
          {rows.map((r, i) => {
            const isSpotlight = i === 0;
            const hide = isSpotlight && rowHidden;
            return (
              <div
                key={i}
                style={{
                  display: "grid",
                  gridTemplateColumns: "120px 1fr 140px 140px 90px 90px",
                  padding: "0 96px",
                  gap: 16,
                  height: rowH,
                  alignItems: "center",
                  borderBottom: "1px solid #E5EBE7",
                  background: isSpotlight
                    ? `rgba(22,163,74,${0.06 + 0.08 * spotlightOn * spotlightPulse})`
                    : i % 2 === 0
                    ? "transparent"
                    : "rgba(255,255,255,0.45)",
                  position: "relative",
                  opacity: hide ? 0.25 : 1,
                  transition: "opacity 200ms",
                }}
              >
                {isSpotlight && spotlightOn > 0 && !hide && (
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      border: `1.5px solid rgba(22,163,74,${spotlightOn})`,
                      borderRadius: 6,
                      pointerEvents: "none",
                      boxShadow: `0 0 0 ${4 * spotlightOn * spotlightPulse}px rgba(22,163,74,${0.12 * spotlightOn})`,
                    }}
                  />
                )}
                <div style={{ color: "#4A5A50" }}>{r.date}</div>
                <div
                  style={{
                    color: "#0B1F12",
                    fontWeight: isSpotlight ? 600 : 400,
                  }}
                >
                  {r.party}
                </div>
                <div style={{ color: "#4A5A50" }}>{r.voucher}</div>
                <div
                  className="tnum"
                  style={{
                    textAlign: "right",
                    color: "#0B1F12",
                    fontWeight: isSpotlight ? 600 : 500,
                  }}
                >
                  {r.amount}
                </div>
                <div
                  className="tnum"
                  style={{
                    textAlign: "right",
                    color: r.days > 30 ? "#DC2626" : "#4A5A50",
                    fontWeight: r.days > 30 ? 600 : 400,
                  }}
                >
                  {r.days}
                </div>
                <div style={{ color: "#9AA69C", fontSize: 10 }}>{r.type}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function GhostRow({
  y,
  opacity = 1,
  scale = 1,
}: {
  y: number;
  opacity?: number;
  scale?: number;
}) {
  return (
    <div
      style={{
        position: "absolute",
        top: y,
        left: 96,
        right: 96,
        height: 44,
        background: "rgba(255,255,255,0.92)",
        border: "1.5px solid #16A34A",
        borderRadius: 8,
        boxShadow: "0 12px 40px rgba(22,163,74,0.25)",
        padding: "0 24px",
        display: "grid",
        gridTemplateColumns: "120px 1fr 140px 140px 90px 90px",
        gap: 16,
        alignItems: "center",
        fontFamily: "var(--font-jetbrains-mono), ui-monospace, monospace",
        fontSize: 13,
        color: "#0B1F12",
        opacity,
        transform: `scale(${scale})`,
        transformOrigin: "center",
        zIndex: 4,
        pointerEvents: "none",
      }}
    >
      <div style={{ color: "#4A5A50" }}>07-Apr-26</div>
      <div style={{ fontWeight: 600 }}>Kothari Traders</div>
      <div style={{ color: "#4A5A50" }}>INV-2841</div>
      <div className="tnum" style={{ textAlign: "right", fontWeight: 600 }}>
        5,24,000
      </div>
      <div
        className="tnum"
        style={{ textAlign: "right", color: "#DC2626", fontWeight: 600 }}
      >
        42
      </div>
      <div style={{ color: "#9AA69C", fontSize: 10 }}>SALES</div>
    </div>
  );
}
