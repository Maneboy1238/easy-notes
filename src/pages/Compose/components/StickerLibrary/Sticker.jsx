import { motion } from "motion/react"
import { useRef } from "react";
export function Sticker({ src, dragConstraintsRef, inputContainerRef, setSticker }) {
  const stickerRef = useRef(null)
  function handleDragEnd(src) {
    if (!inputContainerRef.current && stickerRef.current) return
    const inputContainer = inputContainerRef.current.getBoundingClientRect();
    const sticker = stickerRef.current.getBoundingClientRect();

    const isInside = sticker.top > inputContainer.top;
    if (isInside) {
      saveSticker(sticker, inputContainer, src)
    } else {
      console.log('the sticker is not inside')
    }
  }
  function saveSticker(sticker, inputContainer, src) {
    const top = (sticker.top - inputContainer.top) / inputContainer.height
    const left = (sticker.left - inputContainer.left) / inputContainer.width
    setSticker({
      top,
      left,
      src
    })
  }
  return (
    <motion.div
      key={src}
      ref={stickerRef}
      style={{ display: 'inline-block' }}
      drag
      dragMomentum={false}
      dragConstraints={dragConstraintsRef}
      onDragEnd={() => handleDragEnd(src)}
    >
      <img src={src} width='50' />
    </motion.div>

  )
}
