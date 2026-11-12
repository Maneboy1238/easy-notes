import { useRef } from "react";
import { motion } from "motion/react";
import { Sticker } from "../../../../components/Sticker";

const MotionSticker = motion.create(Sticker);

export function StickerItem({ data, inputContainerRef, dragConstraintsRef, setSticker }) {
  const stickerRef = useRef(null);

  function handleDragEnd() {
    if (!inputContainerRef.current && !stickerRef.current) return
    const inputContainer = inputContainerRef.current.getBoundingClientRect();
    const sticker = stickerRef.current.getBoundingClientRect();

    const isInside = sticker.top > inputContainer.top;
    if (isInside) {
      saveSticker(sticker, inputContainer)
    } else {
      console.log('the sticker is not inside')
    }
  }

  function saveSticker(sticker, inputContainer) {
    const top = (sticker.top - inputContainer.top) / inputContainer.height
    const left = (sticker.left - inputContainer.left) / inputContainer.width
    setSticker(prev => {
      const stickerDetails = prev.find(sticker => sticker.id === data.id);
      if (stickerDetails) {
        return prev.map(sticker => (
          sticker.stickerId === data.id ? (
            {
              ...sticker,
              top,
              left
            }
          ) : sticker
        ))
      } else {
        return [
          ...prev,
          {
            id: crypto.randomUUID(),
            stickerId: data.id,
            src: data.src,
            left,
            top
          }
        ]
      }
    }
    )
  }


  return (
    <MotionSticker
      ref={stickerRef}
      sticker={data}
      mode='library'
      drag
      dragMomentum={false}
      onDragEnd={handleDragEnd}
      dragConstraints={dragConstraintsRef}
    />
  )
}
