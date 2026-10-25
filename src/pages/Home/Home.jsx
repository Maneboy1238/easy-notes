import { DelBtn } from "../../components/DelBtn";
import { EditBtn } from "../../components/EditBtn";

export default function Home({ notes, setNotes }) {
  return (
    <>
      {
        notes.map(note => (
          <div>
            <>
              <EditBtn id={note.id} />
              <DelBtn setNotes={setNotes} noteId={note.id} />
            </>
            <div>
              <h2>{note.head}</h2>
              <button>See more</button>
            </div>
          </div>

        ))
      }
    </>
  )
}
