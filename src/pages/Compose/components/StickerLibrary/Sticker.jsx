import { motion } from "motion/react"
import { useRef } from "react";
export function Sticker({ data, id, src, mode, dragConstraintsRef, inputContainerRef, setSticker }) {
  const stickerRef = useRef(null)
  function handleDragEnd(src) {
    if (!inputContainerRef.current && stickerRef.current) return
    const inputContainer = inputContainerRef.current.getBoundingClientRect();
    const sticker = stickerRef.current.getBoundingClientRect();

    const isInside = sticker.top > inputContainer.top;
    if (mode === 'edit') {
      saveSticker(sticker, inputContainer, src)
    } else {
      if (isInside) {
        saveSticker(sticker, inputContainer, src)
      } else {
        console.log('the sticker is not inside')
      }
    }
  }
  function saveSticker(sticker, inputContainer, src) {
    const top = (sticker.top - inputContainer.top) / inputContainer.height
    const left = (sticker.left - inputContainer.left) / inputContainer.width
    if (mode === 'edit') {
      setSticker(prev => {
        return prev.map(stickerDetails => {
          if (stickerDetails.id === id) {
            return {
              ...stickerDetails,
              top,
              left,
            }
          } else {
            return stickerDetails
          }
        }
        )
      })
    } else {
      setSticker(prev => [
        ...prev,
        {
          id,
          src,
          top,
          left
        }
      ])
    }
  }
  return (
    <motion.div
      key={src}
      ref={stickerRef}
      style={{
        display: 'inline-block',
        position: mode === 'edit' ? 'absolute' : 'relative',
        zIndex: 500,
        left: `${data?.left * 100}%`,
        top: `${data?.top * 100}%`,
      }}
      drag
      dragMomentum={false}
      dragConstraints={dragConstraintsRef}
      onDragEnd={() => handleDragEnd(src)}
    >
      <img src={src} width='50' />
    </motion.div>

  )
}
