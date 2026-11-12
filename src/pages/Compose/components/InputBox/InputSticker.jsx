import { motion } from "motion/react"
import { Sticker } from "../../../../components/Sticker.jsx"
import { useRef } from "react"

const MotionSticker = motion.create(Sticker)

export function InputSticker({ stickerDetails, setNoteSticker, inputContainerRef }) {
  const stickerRef = useRef(null)

  function handleDragEnd() {
    if (!inputContainerRef.current && !stickerRef.current) return
    const inputContainer = inputContainerRef.current.getBoundingClientRect();
    const sticker = stickerRef.current.getBoundingClientRect();
    const top = (sticker.top - inputContainer.top) / inputContainer.height
    const left = (sticker.left - inputContainer.left) / inputContainer.width
    setNoteSticker(prev => {
      return prev.map(sticker => {
        if (sticker.id === stickerDetails.id) {
          return {
            ...sticker,
            top,
            left
          }
        }
        return sticker
      })
    })
  }

  function handleDeleteSticker() {
    setNoteSticker(prev => prev.filter(sticker => sticker.id !== stickerDetails.id))
  }

  return (
    <>
      <button
        onClick={handleDeleteSticker}
        style={{
          position: 'absolute'
        }}
      >Delete</button>
      <MotionSticker
        ref={stickerRef}
        drag
        dragConstraints={inputContainerRef}
        sticker={stickerDetails}
        mode="edit"
        onDragEnd={handleDragEnd}
        dragMomentum={false}
      />
    </>

  )
}
