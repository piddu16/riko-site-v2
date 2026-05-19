"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import { Easing } from "@/lib/easing";
import { Fold1 } from "./Fold1";
import { Fold2 } from "./Fold2";
import { Fold3 } from "./Fold3";
import { AnimatedNavBar } from "./NavBar";
import { ScrollDots } from "./ScrollDots";

const PAGE_W = 1920;
const FOLD_H = 1080;
const TOTAL = 22;

const F2_SCROLL_START = 7.0;
const F2_SCROLL_END = 7.6;
const F3_SCROLL_START = 14.5;
const F3_SCROLL_END = 15.1;

function cameraY(t: number) {
  if (t < F2_SCROLL_START) return 0;
  if (t < F2_SCROLL_END) {
    const k = (t - F2_SCROLL_START) / (F2_SCROLL_END - F2_SCROLL_START);
    return -FOLD_H * Easing.easeInOutCubic(k);
  }
  if (t < F3_SCROLL_START) return -FOLD_H;
  if (t < F3_SCROLL_END) {
    const k = (t - F3_SCROLL_START) / (F3_SCROLL_END - F3_SCROLL_START);
    return -FOLD_H - FOLD_H * Easing.easeInOutCubic(k);
  }
  return -FOLD_H * 2;
}

function activeFoldIndex(t: number) {
  if (t < (F2_SCROLL_START + F2_SCROLL_END) / 2) return 0;
  if (t < (F3_SCROLL_START + F3_SCROLL_END) / 2) return 1;
  return 2;
}

export function ScrollScene() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const [time, setTime] = useState(0);
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setTime(v * TOTAL);
  });

  const [scale, setScale] = useState(1);
  useEffect(() => {
    const measure = () => {
      if (typeof window === "undefined") return;
      const s = Math.min(
        window.innerWidth / PAGE_W,
        window.innerHeight / FOLD_H
      );
      setScale(Math.max(0.1, s));
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const y = cameraY(time);
  const active = activeFoldIndex(time);

  return (
    <section
      ref={ref}
      className="relative"
      style={{ height: `${TOTAL * 50}vh` }}
      aria-label="Riko intro animation"
    >
      <div className="sticky top-0 h-screen overflow-hidden bg-white">
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            style={{
              width: PAGE_W,
              height: FOLD_H,
              transform: `scale(${scale})`,
              transformOrigin: "center",
              position: "relative",
              overflow: "hidden",
              flexShrink: 0,
            }}
          >
            {/* Scrolling page (3 stacked folds) */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: PAGE_W,
                height: FOLD_H * 3,
                transform: `translate3d(0, ${y}px, 0)`,
                willChange: "transform",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: PAGE_W,
                  height: FOLD_H,
                }}
              >
                <Fold1 time={time} t0={0} />
              </div>
              <div
                style={{
                  position: "absolute",
                  top: FOLD_H,
                  left: 0,
                  width: PAGE_W,
                  height: FOLD_H,
                }}
              >
                <Fold2 time={time} t0={7.5} />
              </div>
              <div
                style={{
                  position: "absolute",
                  top: FOLD_H * 2,
                  left: 0,
                  width: PAGE_W,
                  height: FOLD_H,
                }}
              >
                <Fold3 time={time} t0={15} />
              </div>
            </div>

            <AnimatedNavBar time={time} />
            <ScrollDots active={active} />
          </div>
        </div>
      </div>
    </section>
  );
}
