import { Link, useParams } from "react-router";
import { DelBtn } from "../../components/DelBtn";
import { EditBtn } from "../../components/EditBtn"
import { relativeTimeFromNow } from "../../utils/date";
import { Sticker } from "../../components/Sticker";
import { LuArrowLeft } from "react-icons/lu";
export default function Note({ setNotes, notes }) {
  const { noteId } = useParams()
  const note = notes.find(note => noteId === note.id);

  return (
    <>
      <Link to="/">
        <LuArrowLeft />
      </Link>
      <div
        style={{
          background: note.color.light,
          position: 'relative'
        }}>
        {note.sticker.map(sticker => (
          <Sticker
            key={sticker.id}
            sticker={sticker}
            mode='note'
          />
        ))}
        <>
          <span>{relativeTimeFromNow(note.createdAt)}</span>
          <EditBtn id={noteId} />
          <DelBtn setNotes={setNotes} noteId={noteId} />
        </>
        <h2 style={{ color: note.color.dark }}>{note.head}</h2>
        <div style={{ color: note.color.dark }}>{note.body}</div>
      </div>
    </>
  )
}
