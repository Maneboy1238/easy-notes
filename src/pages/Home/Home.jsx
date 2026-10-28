import { useNavigate } from "react-router";
import { DelBtn } from "../../components/DelBtn";
import { EditBtn } from "../../components/EditBtn";

export default function Home({ notes, setNotes }) {
  const navigate = useNavigate()
  return (
    <>
      <button onClick={() => navigate('/note/compose')}>Create Project</button>
      {
        notes.map(note => (
          <div
            key={note.id}
            style={{ background: note.color.light }}
          >
            <>
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
              >See more</button>
            </div>
          </div>

        ))
      }
    </>
  )
}
