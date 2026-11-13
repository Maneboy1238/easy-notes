export const input = {
  maxHeaderLength: 100,
  maxBodyLength: 2500
}

export const mode = {
  LIBRARY: "library",
  EDIT: "edit",
  NOTE: "note"
}

export function calculateStickerDimensionsRelativeToAContainer(element) {
  const sticker = element.sticker;
  const container = element.container

  const containerDimension = container.getBoundingClientRect();
  const stickerDimension = sticker.getBoundingClientRect();

  const top = (stickerDimension.top - containerDimension.top) / containerDimension.height
  const left = (stickerDimension.left - containerDimension.left) / containerDimension.width

  return {
    top,
    left
  }
}
