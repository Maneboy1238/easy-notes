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
                  <div>
                    <img src={sticker} width='50' />
                  </div>
                ))
              }
            </div>
          </div>
        ))
      }
    </>
  )
}
