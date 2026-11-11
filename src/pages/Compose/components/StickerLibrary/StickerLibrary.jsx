import { StickerItem } from "./StickerItem";
import { stickerData } from "./stickerData";

export function StickerLibrary({ dragConstraintsRef, inputContainerRef, setSticker }) {
  return (
    <>
      {
        stickerData.map(stickers => (
          <div key={stickers.collection}>
            <p>{stickers.collection}</p>
            <div style={{ display: 'flex' }}>
              {
                stickers.stickers.map(sticker => (
                  <StickerItem
                    key={sticker.src}
                    data={sticker}
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
