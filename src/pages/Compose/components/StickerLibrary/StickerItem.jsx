import { useRef } from "react";
import { motion } from "motion/react";
import { Sticker } from "../../../../components/Sticker";
import { useStickerContext } from "../../../../hooks/useStickerContext";
import { calculateStickerDimensionsRelativeToAContainer, mode } from "../../../../constants/constants";

const MotionSticker = motion.create(Sticker);

export function StickerItem({ sticker }) {
  const stickerRef = useRef(null);
  const { setSticker, dragConstraintsRef, inputContainerRef: referenceRef } = useStickerContext()

  function handleDragEnd() {
    if (!referenceRef.current && !stickerRef.current) return

    const referenceDimension = referenceRef.current.getBoundingClientRect();
    const stickerDimension = stickerRef.current.getBoundingClientRect();

    const isInside = stickerDimension.top > referenceDimension.top;
    if (isInside) {
      const { top, left } = calculateStickerDimensionsRelativeToAContainer({ sticker: stickerRef.current, container: referenceRef.current })
      saveSticker({ top, left })
    } else {
      console.log('the sticker is not inside')
    }

  }

  function saveSticker({ top, left }) {
    setSticker(prev => {
      const stickerExists = prev.find(stickerItem => stickerItem.id === sticker.id);
      if (stickerExists) {
        return prev.map(stickerItem => (
          stickerItem.id === sticker.id ? (
            {
              ...stickerItem,
              top,
              left
            }
          ) : stickerItem
        ))
      } else {
        return [
          ...prev,
          {
            id: sticker.id,
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
