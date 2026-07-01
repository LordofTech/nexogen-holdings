export function NexogenMark({ className = "", size = 24 }: { className?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M8 40 L8 8 L22 8 L22 24 L26 8 L40 8 L26 28 L40 40 L26 40 L22 26 L22 40 Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="miter"
        fill="none"
      />
    </svg>
  );
}

export function NexogenMarkAnimated({
  className = "",
  size = 80,
  animate = true,
}: {
  className?: string;
  size?: number;
  animate?: boolean;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M8 40 L8 8 L22 8 L22 24 L26 8 L40 8 L26 28 L40 40 L26 40 L22 26 L22 40 Z"
        stroke="white"
        strokeWidth="1.5"
        strokeLinejoin="miter"
        fill="none"
        pathLength={1}
        style={
          animate
            ? {
                strokeDasharray: 1,
                strokeDashoffset: 1,
                animation: "drawLogo 0.8s ease forwards",
              }
            : { strokeDasharray: 1, strokeDashoffset: 0 }
        }
      />
      <style>{`
        @keyframes drawLogo {
          to { stroke-dashoffset: 0; }
        }
      `}</style>
    </svg>
  );
}
