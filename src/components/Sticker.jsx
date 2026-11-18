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
      className="size-16 z-40"
    >
      {mode === 'edit' && (
        <button
          className="absolute -top-2 -right-4 z-50"
          onClick={handleDeleteSticker}
        >
          <LuX className="stroke-zinc-100 bg-zinc-900/40 icon" />
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
