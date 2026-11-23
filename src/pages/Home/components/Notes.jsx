import { useNavigate } from "react-router"
import { EditBtn } from "../../../components/EditBtn"
import { DelBtn } from "../../../components/DelBtn"
import { relativeTimeFromNow } from "../../../utils/date"
import { LuArrowUpRight } from "react-icons/lu"

export function Notes({ notes, setNotes }) {
  const navigate = useNavigate()
  return (
    <div className="flex w-full flex-1 items-center justify-center flex-col gap-6">
      {
        notes.map(note => (
          <div
            key={note.id}
            className="relative w-60 h-56">
            <div
              style={{
                background: note.color.light,
                clipPath: "url('#note-card')"
              }}
              className="flex flex-col gap-4 w-full h-full px-2 py-3 rounded-2xl shadow-md"
            >
              <div className="flex justify-between items-center w-full">
                <span className="">{relativeTimeFromNow(note.createdAt)}</span>
                <div className="flex gap-x-2">
                  <EditBtn
                    color={{ font: note.color.dark, background: note.color.mid }}
                    className="icon"
                    id={note.id} />
                  <DelBtn
                    color={{ font: note.color.dark, background: note.color.mid }}
                    className="icon"
                    setNotes={setNotes}
                    noteId={note.id} />
                </div>
              </div>
              <div>
                <h2
                  style={{ color: note.color.dark }}
                  className="text-2xl font-bold line-clamp-3"
                >{note.head}</h2>
              </div>
            </div>
            <button
              className="absolute right-0 bottom-0"
              onClick={() => navigate(`/note/${note.id}`)}
            >
              <LuArrowUpRight
                style={{
                  font: note.color.dark,
                  background: note.color.light
                }}
                className="icon" />
            </button>
          </div>

        ))
      }
    </div >
  )
}
