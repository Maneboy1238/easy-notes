export function NotchedTopClipPathSvg() {
  return (
    <svg className="w-0 h-0 absolute">
      <defs>
        <clipPath id="note-card" clipPathUnits="objectBoundingBox">
          <path d="M 0,0
            L 1,0
            L 1,0.7
            Q 1,0.75
            0.9,0.75
            L 0.8,0.75
            Q 0.75,0.75
            0.75,0.75
            L 0.75,0.85
            Q 0.75,1
            0.65,1
            L 0,1
            "
          ></path>
        </clipPath>
      </defs>
    </svg>
  )
}
