import { forwardRef } from "react"
import { LuX } from "react-icons/lu"
export const Sticker = forwardRef(({ sticker, mode, handleDeleteSticker }, ref) => {
  return (
    <div
      style={{
        position: mode === 'library' ? 'relative' : 'absolute',
        left: `${sticker?.left * 100}%`,
        top: `${sticker?.top * 100}%`,
      }}
      className="size-16 z-50"
    >
      {mode === 'edit' && (
        <button
          className="absolute"
          onClick={handleDeleteSticker}
        >
          <LuX className="stroke-zinc-100 icon" />
        </button>
      )}
      <img
        ref={ref}
        src={sticker?.src}
        className="w-full h-full object-contain"
      />
    </div>
  )

})
