import { useSearchParams, useNavigate } from "react-router"
import { useState, useEffect, useRef } from "react"
import { InputSticker } from "./InputSticker"
import { input, mode } from "../../../../constants/constants"
import { LuArrowUp } from "react-icons/lu"

export function InputBox({ sticker, currentColor, setCurrentColorId, setNotes, notes, inputContainerRef, noteSticker, setNoteSticker }) {
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
        position: currentMode === mode.EDIT && 'relative',
      }}
      className="flex flex-col gap-4 mt-0 pt-0 w-full m-auto"
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
      <div className="textbox-container">
        <textarea
          ref={headerInputRef}
          style={{ color: currentColor.dark }}
          className="note-header textbox"
          maxLength={input.maxHeaderLength}
          placeholder="Add a title..."
          value={headerInput}
          onChange={(e) => setHeaderInput(e.target.value)}
          onDrop={(e) => e.preventDefault()}
        ></textarea>
        <div
          style={{
            color: currentColor.dark,
            opacity: 0.5
          }}
          className="ml-auto"
        >
          <span>{headerInput.length}</span>
          /{input.maxHeaderLength}</div>

      </div>
      <div className="textbox-container flex-1">
        <textarea
          ref={bodyInputRef}
          style={{
            color: currentColor.dark,
          }}
          className="text-lg textbox h-full"
          maxLength={input.maxBodyLength}
          value={bodyInput}
          placeholder="start writing..."
          onChange={(e) => setBodyInput(e.target.value)}
          onDrop={(e) => e.preventDefault()}
        ></textarea>
        <div
          style={{
            color: currentColor.dark,
            opacity: 0.5
          }}
          className="ml-auto"
        >
          <span>{bodyInput.length}</span>
          /{input.maxBodyLength}</div>

      </div>
      <button
        onClick={handleSaveNote}
        disabled={checkIfInputIsEmpty()}
        className="ml-auto disabled:opacity-50"
      >
        <LuArrowUp
          style={{
            background: currentColor.mid,
            color: currentColor.dark
          }}
          className="icon"
        />
      </button>
    </div>
  )
}
