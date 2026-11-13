import { useRef } from "react";
import { motion } from "motion/react";
import { Sticker } from "../../../../components/Sticker";
import { useStickerContext } from "../../../../hooks/useStickerContext";
import { mode } from "../../../../constants/constants";

const MotionSticker = motion.create(Sticker);

export function StickerItem({ sticker }) {
  const stickerRef = useRef(null);
  const { setSticker, dragConstraintsRef, inputContainerRef: referenceRef } = useStickerContext()

  function handleDragEnd() {
    if (!referenceRef.current && !stickerRef.current) return

    const referenceDimensions = referenceRef.current.getBoundingClientRect();
    const stickerDimensions = stickerRef.current.getBoundingClientRect();

    const isInside = stickerDimensions.top > referenceDimensions.top;
    if (isInside) {
      saveSticker({ sticker: stickerDimensions, reference: referenceDimensions })
    } else {
      console.log('the sticker is not inside')
    }
  }

  function saveSticker(dimensions) {
    const top = (dimensions.sticker.top - dimensions.reference.top) / dimensions.reference.height
    const left = (dimensions.sticker.left - dimensions.reference.left) / dimensions.reference.width
    setSticker(prev => {
      const stickerExists = prev.find(stickerItem => stickerItem.id === sticker.id);
      if (stickerExists) {
        return prev.map(stickerItem => (
          stickerItem.stickerId === sticker.id ? (
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
            stickerId: sticker.id,
            src: sticker.src,
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
      sticker={sticker}
      mode={mode.LIBRARY}
      drag
      dragMomentum={false}
      onDragEnd={handleDragEnd}
      dragConstraints={dragConstraintsRef}
    />
  )
}
