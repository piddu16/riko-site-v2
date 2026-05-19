"use client";

import { useEffect, useRef, useState } from "react";
import { Fold1 } from "./Fold1";
import { Fold2 } from "./Fold2";
import { Fold3 } from "./Fold3";

const DESKTOP_W = 1920;
const DESKTOP_H = 1080;
const PORTRAIT_W = 720;
const PORTRAIT_H = 1280;
const TOTAL = 22;
const HOLD_AT = 21.5;

type Props = {
  /** "16/9" desktop, "9/16" portrait */
  aspect?: "16/9" | "9/16";
  /** Loop the timeline; otherwise hold on the final CTA frame. */
  loop?: boolean;
  /** Begin playing on mount. */
  autoplay?: boolean;
  className?: string;
};

export function InlineAnimation({
  aspect = "16/9",
  loop = false,
  autoplay = true,
  className = "",
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const lastTsRef = useRef<number | null>(null);

  const [time, setTime] = useState(0);
  const [playing, setPlaying] = useState(autoplay);
  const [scale, setScale] = useState(1);
  const [portrait, setPortrait] = useState(aspect === "9/16");

  useEffect(() => {
    setPortrait(aspect === "9/16");
  }, [aspect]);

  useEffect(() => {
    if (!containerRef.current) return;
    const el = containerRef.current;
    const measure = () => {
      const w = el.clientWidth;
      const h = el.clientHeight;
      const canvasW = portrait ? PORTRAIT_W : DESKTOP_W;
      const canvasH = portrait ? PORTRAIT_H : DESKTOP_H;
      const s = Math.min(w / canvasW, h / canvasH);
      setScale(Math.max(0.05, s));
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [portrait]);

  useEffect(() => {
    if (!playing) {
      lastTsRef.current = null;
      return;
    }
    const step = (ts: number) => {
      if (lastTsRef.current == null) lastTsRef.current = ts;
      const dt = (ts - lastTsRef.current) / 1000;
      lastTsRef.current = ts;
      setTime((t) => {
        let next = t + dt;
        if (loop) {
          if (next >= TOTAL) next = next % TOTAL;
        } else if (next >= HOLD_AT) {
          next = HOLD_AT;
          setPlaying(false);
        }
        return next;
      });
      rafRef.current = requestAnimationFrame(step);
    };
    rafRef.current = requestAnimationFrame(step);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      lastTsRef.current = null;
    };
  }, [playing, loop]);

  const replay = () => {
    setTime(0);
    setPlaying(true);
  };

  const showReplay = !playing && time >= HOLD_AT - 0.01;

  return (
    <div
      ref={containerRef}
      className={`relative w-full overflow-hidden rounded-2xl bg-white shadow-[0_30px_80px_-20px_rgba(11,31,18,0.18),_0_8px_24px_-12px_rgba(11,31,18,0.08)] ring-1 ring-line-soft ${className}`}
      style={{ aspectRatio: aspect.replace("/", " / ") }}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          style={{
            width: portrait ? PORTRAIT_W : DESKTOP_W,
            height: portrait ? PORTRAIT_H : DESKTOP_H,
            transform: `scale(${scale})`,
            transformOrigin: "center",
            position: "relative",
            overflow: "hidden",
            flexShrink: 0,
          }}
        >
          <ActiveFold time={time} portrait={portrait} />
        </div>
      </div>

      {showReplay && (
        <button
          onClick={replay}
          className="absolute bottom-3 right-3 z-10 inline-flex items-center gap-1.5 rounded-full bg-ink/90 px-3 py-1.5 text-[11px] font-semibold text-white backdrop-blur transition-colors hover:bg-ink"
        >
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
            <path
              d="M1 4v6h6M3.51 15a9 9 0 1 0 2.13-9.36L1 10"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Replay
        </button>
      )}
    </div>
  );
}

function ActiveFold({ time, portrait }: { time: number; portrait: boolean }) {
  if (time < 7.6) return <Fold1 time={time} t0={0} portrait={portrait} />;
  if (time < 15.1) return <Fold2 time={time} t0={7.5} portrait={portrait} />;
  return <Fold3 time={time} t0={15} portrait={portrait} />;
}
