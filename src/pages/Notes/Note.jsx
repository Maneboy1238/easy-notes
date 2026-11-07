import { useParams } from "react-router";
import { DelBtn } from "../../components/DelBtn";
import { EditBtn } from "../../components/EditBtn"
import { relativeTimeFromNow } from "../../utils/date";
export default function Note({ setNotes, notes }) {
  const { noteId } = useParams()
  const note = notes.find(note => noteId === note.id);

  return (
    <div
      style={{
        background: note.color.light,
        position: 'relative'
      }}>
      {note.sticker.map((sticker, i) => (
        <div key={i}>
          <img
            src={sticker?.src}
            style={{
              position: 'absolute',
              left: `${sticker?.left * 100}%`,
              top: `${sticker?.top * 100}%`,
              width: '50px'
            }}
          />
        </div>

      ))}
      <>
        <span>{relativeTimeFromNow(note.createdAt)}</span>
        <EditBtn id={noteId} />
        <DelBtn setNotes={setNotes} noteId={noteId} />
      </>
      <h2 style={{ color: note.color.dark }}>{note.head}</h2>
      <div style={{ color: note.color.dark }}>{note.body}</div>
    </div>
  )
}
