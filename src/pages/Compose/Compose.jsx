import { useRef, useState } from "react";
import { LuChevronRight, LuImagePlus } from "react-icons/lu"
import { StickerContext } from "../../hooks/useStickerContext";
import { ColorPicker } from "./components/ColorPicker/ColorPicker";
import { InputBox } from "./components/InputBox/InputBox";
import { StickerLibrary } from "./components/StickerLibrary/StickerLibrary";

export default function Compose({ notes, setNotes }) {
  const [currentColorId, setCurrentColorId] = useState('1');
  const [sticker, setSticker] = useState([]);
  const [showStickerLibrary, setShowStickerLibrary] = useState(false)
  const dragConstraintsRef = useRef(null);
  const inputContainerRef = useRef(null);

  return (
    <>
      <ColorPicker setCurrentColorId={setCurrentColorId} />
      <div
        ref={dragConstraintsRef}
        style={{ background: 'teal' }}
      >
        {showStickerLibrary ? (
          <button onClick={() => setShowStickerLibrary(false)}>
            <LuChevronRight />
          </button>
        ) : (
          <button onClick={() => setShowStickerLibrary(true)}>
            <LuImagePlus />
          </button>
        )}

        {
          showStickerLibrary && (
            <StickerContext.Provider value={{ dragConstraintsRef, inputContainerRef, setSticker }}>
              <StickerLibrary />
            </StickerContext.Provider>
          )
        }

        <InputBox
          currentColorId={currentColorId}
          setCurrentColorId={setCurrentColorId}
          notes={notes}
          setNotes={setNotes}
          inputContainerRef={inputContainerRef}
          sticker={sticker}
          setSticker={setSticker}
        />
      </div>
    </>
  )

}
