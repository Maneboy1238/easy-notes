import { motion } from "motion/react"
import { useRef } from "react"
import { Sticker } from "../../../../components/Sticker.jsx"
import { calculateStickerDimensionsRelativeToAContainer, mode } from "../../../../constants/constants.js"

const MotionSticker = motion.create(Sticker)

export function InputSticker({ sticker, setNoteSticker, inputContainerRef }) {
  const stickerRef = useRef(null)

  function handleDragEnd() {
    if (!inputContainerRef.current && !stickerRef.current) return
    const { top, left } = calculateStickerDimensionsRelativeToAContainer({ sticker: stickerRef.current, container: inputContainerRef.current })

    setNoteSticker(prev => {
      return prev.map(stickerItem => {
        if (stickerItem.id === sticker.id) {
          return {
            ...stickerItem,
            top,
            left
          }
        }
        return stickerItem
      })
    })
  }

  function handleDeleteSticker() {
    setNoteSticker(prev => prev.filter(stickerItem => stickerItem.id !== sticker.id))
  }

  return (
    <MotionSticker
      ref={stickerRef}
      sticker={sticker}
      mode={mode.EDIT}
      drag
      dragConstraints={inputContainerRef}
      handleDeleteSticker={handleDeleteSticker}
      onDragEnd={handleDragEnd}
      dragMomentum={false}
    />
  )
}
