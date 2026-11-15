import { useNavigate } from "react-router"
import { EditBtn } from "../../../components/EditBtn"
import { DelBtn } from "../../../components/DelBtn"
import { relativeTimeFromNow } from "../../../utils/date"
import { LuArrowRight } from "react-icons/lu"

export function Notes({ notes, setNotes }) {
  const navigate = useNavigate()
  return (
    <>
      {
        notes.map(note => (
          <div
            key={note.id}
            style={{ background: note.color.light }}
          >
            <>
              <span>{relativeTimeFromNow(note.createdAt)}</span>
              <EditBtn id={note.id} />
              <DelBtn setNotes={setNotes} noteId={note.id} />
            </>
            <div>
              <h2
                style={{ color: note.color.dark }}
              >{note.head}</h2>
              <button
                style={{
                  color: note.color.dark,
                  background: note.color.mid
                }}
                onClick={() => navigate(`/note/${note.id}`)}
              >
                See more{" "}
                <LuArrowRight />
              </button>
            </div>
          </div>

        ))
      }
    </>
  )
}
