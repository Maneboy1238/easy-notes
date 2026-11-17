import { Link, useParams } from "react-router";
import { DelBtn } from "../../components/DelBtn";
import { EditBtn } from "../../components/EditBtn"
import { relativeTimeFromNow } from "../../utils/date";
import { Sticker } from "../../components/Sticker";
import { LuArrowLeft } from "react-icons/lu";
import { Header } from "../../components/Header";
import { mode } from "../../constants/constants"
export default function Note({ setNotes, notes }) {
  const { noteId } = useParams()
  const note = notes.find(note => noteId === note.id);

  return (
    <section className="w-full h-screen min-h-screen flex flex-col gap-4 px-4 py-2 bg-zinc-200 dark:bg-zinc-900">
      <Header />
      <Link
        className="w-max"
        to="/"
      >
        <LuArrowLeft className="dark:stroke-zinc-100 w-auto size-6" />
      </Link>
      <div
        style={{
          background: note.color.light,
          position: 'relative',
          scrollbarWidth: "none"
        }}
        className="w-full px-3 py-3 mx-auto overflow-y-auto h-[80%] shadow-lg dark:shadow-black/10 flex flex-col rounded-lg"
      >
        {note.sticker.map(sticker => (
          <Sticker
            key={sticker.id}
            sticker={sticker}
            mode={mode.NOTE}
          />
        ))}
        <div className="w-full flex justify-between items-center mb-4">
          <span
            style={{ color: note.color.dark }}
            className="text-base capitalize"
          >{relativeTimeFromNow(note.createdAt)}</span>
          <div className="flex gap-x-2">
            <EditBtn id={noteId} color={note.color.dark} />
            <DelBtn setNotes={setNotes} noteId={noteId} color={note.color.dark} />
          </div>
        </div>
        <h2
          style={{
            color: note.color.dark
          }}
          className="text-2xl font-bold"
        >{note.head}</h2>
        <div
          style={{
            color: note.color.dark
          }}
          className="text-lg"
        >{note.body}</div>
      </div>
    </section>
  )
}
