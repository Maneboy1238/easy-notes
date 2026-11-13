import { createContext, useContext } from "react";

export const StickerContext = createContext(undefined);

export function useStickerContext() {
  const sticker = useContext(StickerContext)
  if (sticker === undefined) throw new Error('Context must be used within a sticker provider and given values')

  return sticker
}
