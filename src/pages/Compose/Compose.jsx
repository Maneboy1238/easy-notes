import { useState } from "react";
import { ColorPicker } from "./components/ColorPicker/ColorPicker";
import { InputBox } from "./components/InputBox/InputBox";

export default function Compose({ notes, setNotes }) {
  const [currentColorId, setCurrentColorId] = useState('1');

  return (
    <>
      <ColorPicker setCurrentColorId={setCurrentColorId} />
      <InputBox
        currentColorId={currentColorId}
        setCurrentColorId={setCurrentColorId}
        notes={notes}
        setNotes={setNotes}
      />
    </>
  )

}
