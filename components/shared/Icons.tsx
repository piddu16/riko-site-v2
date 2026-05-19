import type { SVGProps } from "react";

const base: SVGProps<SVGSVGElement> = {
  width: 14,
  height: 14,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export const Icon = {
  arrowRight: () => (
    <svg {...base}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  ),
  arrowUpRight: () => (
    <svg {...base}>
      <path d="M7 17L17 7M7 7h10v10" />
    </svg>
  ),
  check: () => (
    <svg {...base} width={16} height={16}>
      <path d="M20 6L9 17l-5-5" />
    </svg>
  ),
  plus: () => (
    <svg {...base}>
      <path d="M12 5v14M5 12h14" />
    </svg>
  ),
  chat: () => (
    <svg {...base} width={18} height={18}>
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  ),
  bar: () => (
    <svg {...base} width={18} height={18}>
      <line x1="12" y1="20" x2="12" y2="10" />
      <line x1="18" y1="20" x2="18" y2="4" />
      <line x1="6" y1="20" x2="6" y2="16" />
    </svg>
  ),
  zap: () => (
    <svg {...base} width={18} height={18}>
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  ),
  file: () => (
    <svg {...base} width={18} height={18}>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
    </svg>
  ),
  trend: () => (
    <svg {...base} width={18} height={18}>
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
      <polyline points="17 6 23 6 23 12" />
    </svg>
  ),
  shield: () => (
    <svg {...base} width={18} height={18}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  lock: () => (
    <svg {...base}>
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  ),
  server: () => (
    <svg {...base}>
      <rect x="2" y="3" width="20" height="6" rx="2" />
      <rect x="2" y="15" width="20" height="6" rx="2" />
      <line x1="6" y1="6" x2="6.01" y2="6" />
      <line x1="6" y1="18" x2="6.01" y2="18" />
    </svg>
  ),
  database: () => (
    <svg {...base}>
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
    </svg>
  ),
  indian: () => (
    <svg {...base}>
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  ),
  activity: () => (
    <svg {...base}>
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
  ),
};
