import { useParams } from "react-router";
import { DelBtn } from "../../components/DelBtn";
import { EditBtn } from "../../components/EditBtn"
export default function Note({ setNotes, notes }) {
  const { noteId } = useParams()
  const note = notes.find(note => noteId === note.id);

  return (
    <div style={{ background: note.color.light }}>
      <>
        <EditBtn id={noteId} />
        <DelBtn setNotes={setNotes} noteId={noteId} />
      </>
      <h2 style={{ color: note.color.dark }}>{note.head}</h2>
      <div style={{ color: note.color.dark }}>{note.body}</div>
    </div>
  )
}
