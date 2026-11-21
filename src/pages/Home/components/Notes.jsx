import { useNavigate } from "react-router"
import { EditBtn } from "../../../components/EditBtn"
import { DelBtn } from "../../../components/DelBtn"
import { relativeTimeFromNow } from "../../../utils/date"
import { LuArrowRight } from "react-icons/lu"

export function Notes({ notes, setNotes }) {
  const navigate = useNavigate()
  return (
    <div className="flex flex-col gap-4 perspective-normal">
      {
        notes.map(note => (
          <div
            key={note.id}
            className="absolute size-64 rotate-x-[-10deg]">
            <div className="absolute z-20 flex gap-x-2 right-0 top-0">
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
            <div
              style={{
                background: note.color.light,
                clipPath: "url('#note-card')"
              }}
              className="flex flex-col justify-center w-full h-full relative z-10 gap-2 px-2 py-1 rounded-2xl shadow-md"
            >
              <div className="h-[15%] absolute top-0 left-0 p-2 flex items-center">{relativeTimeFromNow(note.createdAt)}</div>
              <div>
                <h2
                  style={{ color: note.color.dark }}
                  className="h-[70%] text-2xl font-bold my-4 flex items-center"
                >{note.head}</h2>
                <button
                  style={{
                    color: note.color.dark,
                    background: note.color.mid
                  }}
                  className="flex gap-x-1 text-lg items-center rounded-md px-2 py-1 my-2"
                  onClick={() => navigate(`/note/${note.id}`)}
                >
                  See more{" "}
                  <LuArrowRight className="icon" />
                </button>
              </div>
            </div>
          </div>

        ))
      }
    </div >
  )
}
