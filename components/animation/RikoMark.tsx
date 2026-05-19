"use client";

import { clamp } from "@/lib/easing";

type Props = {
  size?: number;
  color?: string;
  spin?: number;       // 0..1 (full orbit cycle)
  animateIn?: number;  // 0..1 (build-in progress)
};

export function RikoMark({
  size = 28,
  color = "#16A34A",
  spin = 0,
  animateIn = 1,
}: Props) {
  const cx = 28;
  const cy = 28;
  const planetR = 13.5;
  const orbitRx = 22;
  const orbitRy = 8;
  const orbitTilt = -35;

  const planetIn = clamp(animateIn / 0.4, 0, 1);
  const arcIn = clamp((animateIn - 0.35) / 0.35, 0, 1);
  const dotIn = clamp((animateIn - 0.7) / 0.3, 0, 1);

  const baseAngle = Math.PI;
  const angle = baseAngle + spin * Math.PI * 2;
  const px = orbitRx * Math.cos(angle);
  const py = orbitRy * Math.sin(angle);
  const rad = (orbitTilt * Math.PI) / 180;
  const sx = cx + px * Math.cos(rad) - py * Math.sin(rad);
  const sy = cy + px * Math.sin(rad) + py * Math.cos(rad);

  const buildSx = cx + -orbitRx * Math.cos(rad);
  const buildSy = cy + -orbitRx * Math.sin(rad);

  const useSx = animateIn < 1 ? buildSx : sx;
  const useSy = animateIn < 1 ? buildSy : sy;

  const arcCircum =
    Math.PI *
    (3 * (orbitRx + orbitRy) -
      Math.sqrt((3 * orbitRx + orbitRy) * (orbitRx + 3 * orbitRy)));

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 56 56"
      style={{ display: "block", overflow: "visible" }}
    >
      <circle
        cx={cx}
        cy={cy}
        r={planetR * (0.7 + 0.3 * planetIn)}
        fill={color}
        opacity={planetIn}
      />
      <g transform={`rotate(${orbitTilt} ${cx} ${cy})`}>
        <ellipse
          cx={cx}
          cy={cy}
          rx={orbitRx}
          ry={orbitRy}
          fill="none"
          stroke={color}
          strokeWidth={2.2}
          strokeLinecap="round"
          strokeDasharray={arcCircum}
          strokeDashoffset={arcCircum * (1 - arcIn)}
          opacity={0.95}
        />
      </g>
      <circle cx={useSx} cy={useSy} r={3 * dotIn} fill={color} />
    </svg>
  );
}

export function Wordmark({
  size = 22,
  color = "#0B1F12",
}: {
  size?: number;
  color?: string;
}) {
  return (
    <span
      style={{
        fontWeight: 700,
        fontSize: size,
        letterSpacing: "-0.04em",
        color,
        lineHeight: 1,
      }}
    >
      Riko
    </span>
  );
}
