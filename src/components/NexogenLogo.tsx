"use client";

export function NexogenLogo({ className = "", size = 64 }: { className?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Nexogen Holdings logo"
    >
      <defs>
        <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00FFFF" />
          <stop offset="100%" stopColor="#00BFFF" />
        </linearGradient>
        <filter id="logoGlow">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <path
        d="M20 80 L20 20 L45 20 L45 45 L55 20 L80 20 L55 55 L80 80 L55 80 L45 55 L45 80 Z"
        fill="url(#logoGrad)"
        filter="url(#logoGlow)"
        opacity="0.95"
      />
      <path
        d="M25 75 L25 25 L42 25 L42 48 L50 25 L72 25 L52 52 L72 75 L52 75 L42 52 L42 75 Z"
        fill="none"
        stroke="#00FFFF"
        strokeWidth="0.5"
        opacity="0.4"
      />
    </svg>
  );
}
