import { useRef, useState } from "react";
import { ColorPicker } from "./components/ColorPicker/ColorPicker";
import { InputBox } from "./components/InputBox/InputBox";
import { StickerLibrary } from "./components/StickerLibrary/StickerLibrary";

export default function Compose({ notes, setNotes }) {
  const [currentColorId, setCurrentColorId] = useState('1');
  const [sticker, setSticker] = useState(undefined);
  const dragConstraintsRef = useRef(null);
  const inputContainerRef = useRef(null);

  return (
    <>
      <ColorPicker setCurrentColorId={setCurrentColorId} />
      <div
        ref={dragConstraintsRef}
        style={{ background: 'teal' }}
      >
        <StickerLibrary
          dragConstraintsRef={dragConstraintsRef}
          inputContainerRef={inputContainerRef}
          setSticker={setSticker}
        />
        <InputBox
          currentColorId={currentColorId}
          setCurrentColorId={setCurrentColorId}
          notes={notes}
          setNotes={setNotes}
          inputContainerRef={inputContainerRef}
          sticker={sticker}
        />
      </div>
    </>
  )

}
