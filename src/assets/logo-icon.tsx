export const LogoIcon = () => {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* <defs>
        <mask id="c-cutout-mask-btn">
          <rect width="100%" height="100%" fill="white"/>
          <text x="40%" y="48%" textAnchor="middle" dominantBaseline="central" fontFamily="Arial Black, sans-serif" fontWeight="900" fontSize="42" fill="black">C</text>
        </mask>
      </defs> */}
      <polygon points="25,25 80,50 25,75" fill="currentColor" stroke="currentColor" color="white" strokeWidth="12" strokeLinejoin="round" mask="url(#c-cutout-mask-btn)"/>
    </svg>
  )
}