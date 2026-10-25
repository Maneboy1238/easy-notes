import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
export default function Compose({ notes, setNotes }) {
  const [headerInput, setHeaderInput] = useState('')
  const [bodyInput, setBodyInput] = useState('')
  const [searchParams, setSearchParams] = useSearchParams()

  useEffect(() => {
    const mode = searchParams.get('mode')
    const id = searchParams.get('id')

    if (mode === 'edit') {
      const editedNote = notes.find(note => note.id === id);
      setHeaderInput(editedNote.head)
      setBodyInput(editedNote.body)
    }
  }, [])
  function handleSaveNote() {
    setNotes(prev => [
      ...prev,
      {
        id: crypto.randomUUID(),
        head: headerInput,
        body: bodyInput
      }
    ])
    setHeaderInput('')
    setBodyInput('')
  }
  return (
    <>
      <>
        <textarea
          rows="2"
          placeholder="Add a title"
          value={headerInput}
          onChange={(e) => setHeaderInput(e.target.value)}
        ></textarea>
        <textarea
          rows="10"
          value={bodyInput}
          placeholder="start writing"
          onChange={(e) => setBodyInput(e.target.value)}
        ></textarea>
        <button onClick={handleSaveNote}>Save</button>
      </>
    </>
  )

}
