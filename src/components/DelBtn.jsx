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
    <button onClick={handleDeleteNote}>Delete</button>
  )
}
