import { StickerItem } from "./StickerItem";
import { stickerCollections } from "./stickerData";

export function StickerLibrary() {
  return (
    <>
      {
        stickerCollections.map(collection => (
          <div key={collection.name}>
            <p>{collection.name}</p>
            <div style={{ display: 'flex' }}>
              {
                collection.stickers.map(sticker => (
                  <StickerItem
                    key={sticker.id}
                    sticker={sticker}
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
