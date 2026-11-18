import { StickerItem } from "./StickerItem";
import { stickerCollections } from "./stickerData";

export function StickerLibrary({ noteSticker, currentColor }) {
  return (
    <>
      {
        stickerCollections.map(collection => (
          <div
            className="flex flex-col gap-2"
            key={collection.name}>
            <p
              style={{ color: currentColor.dark }}
              className="text-base"
            >{collection.name}</p>
            <div className="flex gap-4">
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
