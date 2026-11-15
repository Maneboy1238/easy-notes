import { LuTrash2 } from "react-icons/lu"
import { useNavigate } from "react-router"

export function DelBtn({ setNotes, noteId }) {
  const navigate = useNavigate()
  function handleDeleteNote() {
    setNotes(prev => {
      return prev.filter(note => note.id !== noteId)
    })
    navigate('/')
  }
  return (
    <button onClick={handleDeleteNote}>
      <LuTrash2 />
    </button>
  )
}
