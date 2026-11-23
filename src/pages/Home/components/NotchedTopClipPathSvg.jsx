export function NotchedTopClipPathSvg() {
  return (
    <svg className="w-0 h-0 absolute">
      <defs>
        <clipPath id="note-card" clipPathUnits="objectBoundingBox">
          <path d="M 0,0
            L 1,0
            L 1,0.75
            Q 1,0.8
            0.95,0.8
            L 0.85,0.8
            Q 0.8,0.8
            0.8,0.85
            L 0.8,0.95
            Q 0.8,1
            0.7,1
            L 0,1
            "
          ></path>
        </clipPath>
      </defs>
    </svg>
  )
}
