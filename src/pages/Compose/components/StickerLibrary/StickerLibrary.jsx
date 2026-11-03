import { motion } from 'motion/react'
import { stickerData } from "./stickerData";

export function StickerLibrary() {
  return (
    <>
      {
        stickerData.map(stickers => (
          <div key={stickers.collection}>
            <p>{stickers.collection}</p>
            <div>
              {
                stickers.stickers.map(sticker => (
                  <motion.div drag>
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
