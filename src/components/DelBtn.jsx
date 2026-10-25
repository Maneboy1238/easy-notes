export function DelBtn({ setNotes, noteId }) {
  function handleDeleteNote() {
    setNotes(prev => {
      return prev.filter(note => note.id !== noteId)
    })
  }
  return (
    <button onClick={handleDeleteNote}>Delete</button>
  )
}
