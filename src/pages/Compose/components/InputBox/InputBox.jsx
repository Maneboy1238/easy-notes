import { useSearchParams, useNavigate } from "react-router"
import { useState, useEffect, useRef } from "react"
import { InputSticker } from "./InputSticker"
import { colors } from "../ColorPicker/ color"
import { input, mode } from "../../../../constants/constants"

export function InputBox({ sticker, currentColorId, setCurrentColorId, setNotes, notes, inputContainerRef, noteSticker, setNoteSticker }) {
  const [headerInput, setHeaderInput] = useState('')
  const [bodyInput, setBodyInput] = useState('')
  const noteIdRef = useRef('')
  const headerInputRef = useRef(null)
  const bodyInputRef = useRef(null)

  const [searchParams,] = useSearchParams()
  const currentMode = searchParams.get('mode')
  const id = searchParams.get('id')

  const navigate = useNavigate()

  useEffect(() => {
    if (currentMode === mode.EDIT) {
      const editedNote = notes.find(note => note.id === id);
      if (!editedNote) return

      setNoteSticker(editedNote.sticker)
      setHeaderInput(editedNote.head)
      setBodyInput(editedNote.body)
      setCurrentColorId(editedNote.color.id)
    }
  }, [])


  const currentColor = colors.find(color => color.id === currentColorId)

  function handleSaveNote() {
    if (currentMode === mode.EDIT) {
      noteIdRef.current = id
      setNotes(prev => {
        return prev.map(note => (
          note.id === id ? {
            ...note,
            head: headerInput,
            body: bodyInput,
            color: currentColor,
            sticker: [
              ...sticker,
              ...noteSticker
            ],
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
        position: currentMode === mode.EDIT && 'relative',
      }}
      ref={inputContainerRef}
    >
      {currentMode === mode.EDIT && noteSticker.length > 0 ? (
        noteSticker.map(sticker => (
          <InputSticker
            key={sticker.id}
            setNoteSticker={setNoteSticker}
            inputContainerRef={inputContainerRef}
            sticker={sticker}
          />

        ))
      ) : ''}
      <>
        <textarea
          ref={headerInputRef}
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
          onDrop={(e) => e.preventDefault()}
        ></textarea>
        <div>
          <span>{headerInput.length}</span>
          /{input.maxHeaderLength}</div>

      </>
      <>
        <textarea
          ref={bodyInputRef}
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
          onDrop={(e) => e.preventDefault()}
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
