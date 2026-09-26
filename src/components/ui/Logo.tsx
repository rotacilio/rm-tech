interface LogoProps {
  className?: string
  showWordmark?: boolean
}

export default function Logo({ className = '', showWordmark = true }: LogoProps) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <svg
        width="34"
        height="34"
        viewBox="0 0 64 64"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        <defs>
          <linearGradient id="logo-grad" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#4ff2e0" />
            <stop offset="55%" stopColor="#4f7cff" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
        </defs>
        <rect width="64" height="64" rx="16" fill="url(#logo-grad)" />
        <text
          x="31"
          y="42"
          textAnchor="middle"
          fontFamily="Arial, Helvetica, sans-serif"
          fontWeight="800"
          fontSize="27"
          letterSpacing="-1.5"
          fill="#05060a"
        >
          RM
        </text>
        <circle cx="50" cy="50" r="5" fill="#05060a" />
        <circle cx="50" cy="50" r="2" fill="#4ff2e0" />
      </svg>
      {showWordmark && (
        <span className="font-display text-xl font-semibold tracking-tight text-ink">
          RM <span className="text-gradient">Technology</span>
        </span>
      )}
    </div>
  )
}
