export function NotchedTopClipPathSvg() {
  return (
    <svg className="w-0 h-0 absolute">
      <defs>
        <clipPath id="note-card" clipPathUnits="objectBoundingBox">
          <path d="M 0,0
            L 0.63,0
            L 0.63,0.15
            0.7,0.2
            L 0.95,0.2
            Q 1,0.2
            1,0.3
            L 1,1
            L 0,1 Z"
          ></path>
        </clipPath>
      </defs>
    </svg>
  )
}
