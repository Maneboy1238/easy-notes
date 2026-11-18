import { Link, useParams } from "react-router";
import { DelBtn } from "../../components/DelBtn";
import { EditBtn } from "../../components/EditBtn"
import { Sticker } from "../../components/Sticker";
import { LuArrowLeft } from "react-icons/lu";
import { mode } from "../../constants/constants"
export default function Note({ setNotes, notes }) {
  const { noteId } = useParams()
  const note = notes.find(note => noteId === note.id);

  return (
    <section
      style={{ background: note.color.light }}
      className="page-layout">
      <div className="w-full flex justify-between items-center mb-4">
        <Link
          className="w-max"
          to="/"
        >
          <LuArrowLeft
            style={{ background: note.color.mid }}
            className="icon stroke-zinc-100 w-auto" />
        </Link>
        <div className="flex gap-x-2">
          <EditBtn
            id={noteId}
            color={{
              font: note.color.dark,
              background: note.color.mid
            }}
          />
          <DelBtn
            setNotes={setNotes}
            noteId={noteId}
            color={{
              font: note.color.dark,
              background: note.color.mid
            }}
          />
        </div>
      </div>
      <div
        style={{
          position: 'relative',
          scrollbarWidth: "none"
        }}
        className="note-content"
      >
        {note.sticker.map(sticker => (
          <Sticker
            key={sticker.id}
            sticker={sticker}
            mode={mode.NOTE}
          />
        ))}
        <h2
          style={{
            color: note.color.dark
          }}
          className="note-header"
        >{note.head}</h2>
        <pre
          style={{
            color: note.color.dark
          }}
          className="text-lg whitespace-pre-wrap wrap-break-word"
        >{note.body}</pre>
      </div>
    </section>
  )
}
