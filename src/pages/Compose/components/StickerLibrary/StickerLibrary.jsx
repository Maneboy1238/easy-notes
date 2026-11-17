import { StickerItem } from "./StickerItem";
import { stickerCollections } from "./stickerData";

export function StickerLibrary({ noteSticker }) {
  return (
    <>
      {
        stickerCollections.map(collection => (
          <div key={collection.name}>
            <p>{collection.name}</p>
            <div style={{ display: 'flex' }}>
              {
                collection.stickers.map(stickerItem => {

                  const stickerExists = noteSticker.find(sticker => sticker.id === stickerItem.id)
                  return (
                    !stickerExists && (
                      <StickerItem
                        key={stickerItem.id}
                        sticker={stickerItem}
                      />
                    )
                  )
                })
              }
            </div>
          </div>
        ))
      }
    </>
  )
}
