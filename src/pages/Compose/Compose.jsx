import { useRef, useState } from "react";
import { LuChevronLeft, LuImagePlus } from "react-icons/lu"
import { StickerContext } from "../../hooks/useStickerContext";
import { ColorPicker } from "./components/ColorPicker/ColorPicker";
import { InputBox } from "./components/InputBox/InputBox";
import { StickerLibrary } from "./components/StickerLibrary/StickerLibrary";
import { colors } from "./components/ColorPicker/ color.js";

export default function Compose({ notes, setNotes }) {
  const [currentColorId, setCurrentColorId] = useState('1');
  const [sticker, setSticker] = useState([]);
  const [noteSticker, setNoteSticker] = useState([])
  const [showStickerLibrary, setShowStickerLibrary] = useState(false)
  const dragConstraintsRef = useRef(null);
  const inputContainerRef = useRef(null);

  const currentColor = colors.find(color => color.id === currentColorId)

  return (
    <div
      className="page-layout"
      style={{
        background: currentColor.light
      }}
    >
      <ColorPicker
        setCurrentColorId={setCurrentColorId}
        currentColorId={currentColorId}
      />
      <div
        ref={dragConstraintsRef}
        className="note-content gap-4"
      >
        {showStickerLibrary ? (
          <button onClick={() => setShowStickerLibrary(false)}>
            <LuChevronLeft
              style={{
                background: currentColor.mid,
                stroke: currentColor.dark
              }}
              className="icon"
            />
          </button>
        ) : (
          <button onClick={() => setShowStickerLibrary(true)}>
            <LuImagePlus
              style={{
                background: currentColor.mid,
                stroke: currentColor.dark
              }}
              className="icon"
            />
          </button>
        )}

        {
          showStickerLibrary && (
            <StickerContext.Provider value={{ dragConstraintsRef, inputContainerRef, setSticker }}>
              <StickerLibrary
                noteSticker={noteSticker}
                currentColor={currentColor}
              />
            </StickerContext.Provider>
          )
        }

        <InputBox
          currentColor={currentColor}
          setCurrentColorId={setCurrentColorId}
          notes={notes}
          setNotes={setNotes}
          inputContainerRef={inputContainerRef}
          sticker={sticker}
          setSticker={setSticker}
          noteSticker={noteSticker}
          setNoteSticker={setNoteSticker}
        />
      </div>
    </div>
  )

}
