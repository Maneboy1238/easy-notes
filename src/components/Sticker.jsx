import { forwardRef } from "react"
export const Sticker = forwardRef(({ sticker, mode }, ref) => {
  return (
    <div>
      <img
        ref={ref}
        src={sticker?.src}
        style={{
          position: mode === 'edit' || mode === 'note' ? 'absolute' : 'relative',
          zIndex: 100,
          left: `${sticker?.left * 100}%`,
          top: `${sticker?.top * 100}%`,
          width: '50px'
        }}
      />
    </div>
  )

})
