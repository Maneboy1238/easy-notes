import { useSearchParams, useNavigate } from "react-router"
import { useState, useEffect, useRef } from "react"
import { Sticker } from '../StickerLibrary/Sticker'
import { colors } from "../ColorPicker/ color"
import { input } from "../../../../constants/input"

export function InputBox({ setSticker, sticker, currentColorId, setCurrentColorId, setNotes, notes, inputContainerRef }) {
  const [headerInput, setHeaderInput] = useState('')
  const [bodyInput, setBodyInput] = useState('')
  const [note, setNote] = useState(undefined)
  const noteIdRef = useRef('')

  const [searchParams, setSearchParams] = useSearchParams()
  const mode = searchParams.get('mode')
  const id = searchParams.get('id')

  const navigate = useNavigate()

  console.log(sticker)
  useEffect(() => {

    if (mode === 'edit') {
      const editedNote = notes.find(note => note.id === id);

      if (!editedNote) return

      setNote(editedNote)
      setHeaderInput(editedNote.head)
      setSticker(editedNote.sticker)
      setBodyInput(editedNote.body)
      setCurrentColorId(editedNote.color.id)
    }
  }, [mode, id])

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
            color: currentColor,
            sticker,
            createdAt: Date.now()
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
          color: currentColor,
          sticker,
          createdAt: Date.now()
        }
      ])
    }

    setHeaderInput('')
    setBodyInput('')
    navigate(`/note/${noteIdRef.current}`)
  }

  function checkIfInputIsEmpty() {
    const isInputNotEmpty = headerInput.trim() && bodyInput.trim()
    if (isInputNotEmpty) {
      return false
    } else {
      return true
    }
  }

  return (

    <div
      style={{
        background: currentColor.light,
        position: mode === 'edit' && 'relative',
      }}
      ref={inputContainerRef}
    >
      {note?.sticker.length > 0 && (
        note.sticker.map(image => (
          <Sticker
            key={image.id}
            id={image.id}
            dragConstraintsRef={inputContainerRef}
            inputContainerRef={inputContainerRef}
            setSticker={setSticker}
            src={image.src}
            data={image}
            mode='edit'
            stickerData={sticker}
          />
        ))
      )}
      <>
        <textarea
          rows="2"
          style={{
            color: currentColor.dark,
            background: 'transparent',
            border: 'none'
          }}
          maxLength={input.maxHeaderLength}
          placeholder="Add a title"
          value={headerInput}
          onChange={(e) => setHeaderInput(e.target.value)}
        ></textarea>
        <div>
          <span>{headerInput.length}</span>
          /{input.maxHeaderLength}</div>

      </>
      <>
        <textarea
          rows="10"
          style={{
            color: currentColor.dark,
            background: 'transparent',
            border: 'none'
          }}
          maxLength={input.maxBodyLength}
          value={bodyInput}
          placeholder="start writing"
          onChange={(e) => setBodyInput(e.target.value)}
        ></textarea>
        <div>
          <span>{bodyInput.length}</span>
          /{input.maxBodyLength}</div>

      </>
      <button
        onClick={handleSaveNote}
        disabled={checkIfInputIsEmpty()}
      >Save</button>
    </div>
  )
}
