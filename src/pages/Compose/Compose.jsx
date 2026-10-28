import { useEffect, useRef, useState } from "react";
import { useSearchParams, useNavigate } from "react-router";
import { ColorPicker } from "../../components/ColorPicker";
export default function Compose({ notes, setNotes }) {
  const [headerInput, setHeaderInput] = useState('')
  const [bodyInput, setBodyInput] = useState('')
  const [currentColor, setCurrentColor] = useState('red');
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
    }
  }, [])
  function handleSaveNote() {
    if (mode === 'edit') {
      noteIdRef.current = id
      setNotes(prev => {
        return prev.map(note => (
          note.id === id ? {
            ...note,
            head: headerInput,
            body: bodyInput
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
          body: bodyInput
        }
      ])
    }
    setHeaderInput('')
    setBodyInput('')
    navigate(`/note/${noteIdRef.current}`)
  }
  return (
    <>
      <ColorPicker setCurrentColor={setCurrentColor} />
      <div style={{ background: currentColor?.background }}>
        <textarea
          rows="2"
          style={{
            color: currentColor?.text,
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
            color: currentColor?.text,
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
