import { useRef, useState } from "react";
import { ColorPicker } from "./components/ColorPicker/ColorPicker";
import { InputBox } from "./components/InputBox/InputBox";
import { StickerLibrary } from "./components/StickerLibrary/StickerLibrary";

export default function Compose({ notes, setNotes }) {
  const [currentColorId, setCurrentColorId] = useState('1');
  const dragConstraintsRef = useRef(null);

  return (
    <>
      <ColorPicker setCurrentColorId={setCurrentColorId} />
      <div ref={dragConstraintsRef}>
        <StickerLibrary dragConstraintsRef={dragConstraintsRef} />
        <InputBox
          currentColorId={currentColorId}
          setCurrentColorId={setCurrentColorId}
          notes={notes}
          setNotes={setNotes}
        />
      </div>
    </>
  )

}
