import { motion } from "motion/react"
import { useRef } from "react";
export function Sticker({ src, dragConstraintsRef, inputContainerRef }) {
  const stickerRef = useRef(null)
  function handleDragEnd() {
    if (!inputContainerRef.current && stickerRef.current) return
    const inputContainer = inputContainerRef.current.getBoundingClientRect();
    const sticker = stickerRef.current.getBoundingClientRect();

    const isInside = sticker.top > inputContainer.top;
    if (isInside) {
      console.log('the sticker is inside')
    } else {
      console.log('the sticker is not inside')
    }
  }
  return (
    <motion.div
      key={src}
      ref={stickerRef}
      style={{ display: 'inline-block' }}
      drag
      dragMomentum={false}
      dragConstraints={dragConstraintsRef}
      onDragEnd={handleDragEnd}
    >
      <img src={src} width='50' />
    </motion.div>

  )
}
