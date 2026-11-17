import { LuTrash2 } from "react-icons/lu"
import { useNavigate } from "react-router"

export function DelBtn({ setNotes, noteId, color }) {
  const navigate = useNavigate()
  function handleDeleteNote() {
    setNotes(prev => {
      return prev.filter(note => note.id !== noteId)
    })
    navigate('/')
  }
  return (
    <button onClick={handleDeleteNote}>
      <LuTrash2
        style={{
          stroke: color?.font,
          background: color?.background
        }}
        className="size-8 p-2 rounded-full"
      />
    </button>
  )
}
