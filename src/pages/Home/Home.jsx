import { useNavigate } from "react-router";
import { Notes } from "./components/Notes";
import { currentDayAbbr } from "../../utils/date";
import { LuPlus } from "react-icons/lu";
import Ghost from "../../assets/ghost.svg"

export default function Home({ notes, setNotes }) {
  const navigate = useNavigate()
  return (
    <section className="page-layout items-center">
      <div className="flex justify-between w-full items-center dark:text-zinc-100 mb-6">
        <h2 className="font-bold text-2xl"> My Notes</h2>
        <span className='text-2xl flex items-end gap-2'>
          {currentDayAbbr()}
          <div className="size-4 bg-orange-600 rounded-full"></div>
        </span>
      </div>
      {notes.length === 0 && (
        <div className="dark:text-zinc-100 flex flex-col justify-center items-center gap-3 translate-y-[50%]">
          <img className="w-60" src={Ghost} />
          <h2 className="font-bold text-lg">Empty workspace</h2>
          <p className="text-sm">There are no notes in view right now. <br /> Select Create note below to begin</p>
          <button className="text-sm dark:bg-zinc-700 p-2 flex gap-1.5 rounded-md">
            Create note
            <LuPlus className="size-5" />
          </button>
        </div>
      )}
      {notes.length > 0 && (
        <>
          <button
            className="fixed bottom-5 right-4 z-40"
            onClick={() => navigate('/note/compose')}>
            <LuPlus className="icon bg-zinc-100 dark:bg-zinc-600 dark:stroke-zinc-100 shadow-lg" />
          </button>
          <Notes notes={notes} setNotes={setNotes} />
        </>
      )}
    </section>
  )
}
