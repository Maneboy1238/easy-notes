import { useNavigate } from "react-router"
import { relativeTimeFromNow } from "../../../utils/date"

export function Notes({ notes }) {
  const navigate = useNavigate()
  return (
    <div className="flex max-w-[1200px] w-full grid grid-cols-[repeat(auto-fill,minmax(17rem,1fr))] justify-items-center gap-10">
      {
        notes.map(note => (
          <div
            style={{
              background: note.color.light,
            }}
            onClick={() => navigate(`/note/${note.id}`)}
            className="flex flex-col gap-4 w-full max-w-[22rem] h-56 px-2 py-3 shadow-lg relative"
          >
            <div className="absolute -top-[5%] right-0 bg-orange-600 w-20 h-6 rotate-[30deg] shadow-md"></div>
            <div
              style={{
                color: note.color.dark,
                background: note.color.mid
              }}
              className="text-sm py-1.5 w-fit px-3 rounded-2xl">{relativeTimeFromNow(note.createdAt)}</div>
            <div className="flex flex-col gap-2">
              <h2
                style={{ color: note.color.dark }}
                className="text-lg font-bold"
              >{note.head}</h2>
              <p className="text-sm line-clamp-3 ">{note.body}</p>
            </div>
          </div>
        ))
      }
    </div >
  )
}
