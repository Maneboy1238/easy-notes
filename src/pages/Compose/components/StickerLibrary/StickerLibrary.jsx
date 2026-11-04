import { motion } from 'motion/react'
import { stickerData } from "./stickerData";

export function StickerLibrary({ dragConstraintsRef }) {
  return (
    <>
      {
        stickerData.map(stickers => (
          <div key={stickers.collection}>
            <p>{stickers.collection}</p>
            <div>
              {
                stickers.stickers.map(sticker => (
                  <motion.div
                    drag
                    dragConstraints={dragConstraintsRef}
                  >
                    <img src={sticker} width='50' />
                  </motion.div>
                ))
              }
            </div>
          </div>
        ))
      }
    </>
  )
}
