import { Sticker } from "./Sticker";
import { stickerData } from "./stickerData";

export function StickerLibrary({ dragConstraintsRef, inputContainerRef }) {
  return (
    <>
      {
        stickerData.map(stickers => (
          <div key={stickers.collection}>
            <p>{stickers.collection}</p>
            <div>
              {
                stickers.stickers.map(sticker => (
                  <Sticker
                    src={sticker}
                    dragConstraintsRef={dragConstraintsRef}
                    inputContainerRef={inputContainerRef}
                  />
                ))
              }
            </div>
          </div>
        ))
      }
    </>
  )
}
