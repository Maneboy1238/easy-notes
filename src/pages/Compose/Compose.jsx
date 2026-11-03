import { useState } from "react";
import { ColorPicker } from "./components/ColorPicker/ColorPicker";
import { InputBox } from "./components/InputBox/InputBox";
import { StickerLibrary } from "./components/StickerLibrary/StickerLibrary";

export default function Compose({ notes, setNotes }) {
  const [currentColorId, setCurrentColorId] = useState('1');

  return (
    <>
      <ColorPicker setCurrentColorId={setCurrentColorId} />
      <div>
        <StickerLibrary />
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
