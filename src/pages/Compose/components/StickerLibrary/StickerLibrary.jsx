import { Sticker } from "./Sticker";
import { stickerData } from "./stickerData";

export function StickerLibrary({ dragConstraintsRef, inputContainerRef, setSticker }) {
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
                    key={sticker.src}
                    id={sticker.id}
                    src={sticker.src}
                    dragConstraintsRef={dragConstraintsRef}
                    inputContainerRef={inputContainerRef}
                    setSticker={setSticker}
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
