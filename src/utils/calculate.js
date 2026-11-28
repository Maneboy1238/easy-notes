export function calculateStickerTopAndLeftValues(stickerRef, inputContainerRef) {
  const inputContainer = inputContainerRef.current.getBoundingClientRect();
  const sticker = stickerRef.current.getBoundingClientRect();

}

export function randomRotation() {
  return Math.floor(Math.random() * 21) - 10
}
