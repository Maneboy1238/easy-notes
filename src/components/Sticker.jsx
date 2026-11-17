import { forwardRef } from "react"
export const Sticker = forwardRef(({ sticker, mode, handleDeleteSticker }, ref) => {
  return (
    <div>
      {mode === 'edit' && (
        <button onClick={handleDeleteSticker}>Delete</button>
      )}
      <img
        ref={ref}
        src={sticker?.src}
        style={{
          position: mode === 'edit' || mode === 'note' ? 'absolute' : 'relative',
          zIndex: 100,
          left: `${sticker?.left * 100}%`,
          top: `${sticker?.top * 100}%`,
        }}
        className="size-16"
      />
    </div>
  )

})
