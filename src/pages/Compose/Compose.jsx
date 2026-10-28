import { useEffect, useRef, useState } from "react";
import { useSearchParams, useNavigate } from "react-router";
import { ColorPicker } from "./components/ColorPicker/ColorPicker";
import { colors } from "./components/ColorPicker/ color";
export default function Compose({ notes, setNotes }) {
  const [headerInput, setHeaderInput] = useState('')
  const [bodyInput, setBodyInput] = useState('')
  const [currentColorId, setCurrentColorId] = useState('1');
  const noteIdRef = useRef('')
  const [searchParams, setSearchParams] = useSearchParams()
  const navigate = useNavigate('/')

  const mode = searchParams.get('mode')
  const id = searchParams.get('id')
  useEffect(() => {

    if (mode === 'edit') {
      const editedNote = notes.find(note => note.id === id);

      if (!editedNote) return

      setHeaderInput(editedNote.head)
      setBodyInput(editedNote.body)
      setCurrentColorId(editedNote.color.id)
    }
  }, [])
  const currentColor = colors.find(color => color.id === currentColorId)
  function handleSaveNote() {
    if (mode === 'edit') {
      noteIdRef.current = id
      setNotes(prev => {
        return prev.map(note => (
          note.id === id ? {
            ...note,
            head: headerInput,
            body: bodyInput,
            color: currentColor
          }
            : note
        ))
      })
    } else {
      const generateId = crypto.randomUUID()
      noteIdRef.current = generateId
      setNotes(prev => [
        ...prev,
        {
          id: generateId,
          head: headerInput,
          body: bodyInput,
          color: currentColor
        }
      ])
    }
    setHeaderInput('')
    setBodyInput('')
    navigate(`/note/${noteIdRef.current}`)
  }
  return (
    <>
      <ColorPicker setCurrentColorId={setCurrentColorId} />
      <div style={{ background: currentColor.light }}>
        <textarea
          rows="2"
          style={{
            color: currentColor.dark,
            background: 'transparent',
            border: 'none'
          }}
          placeholder="Add a title"
          value={headerInput}
          onChange={(e) => setHeaderInput(e.target.value)}
        ></textarea>
        <textarea
          rows="10"
          style={{
            color: currentColor.dark,
            background: 'transparent',
            border: 'none'
          }}
          value={bodyInput}
          placeholder="start writing"
          onChange={(e) => setBodyInput(e.target.value)}
        ></textarea>
        <button onClick={handleSaveNote}>Save</button>
      </div>
    </>
  )

}
