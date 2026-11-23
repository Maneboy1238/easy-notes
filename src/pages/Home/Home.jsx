import { useNavigate } from "react-router";
import { Notes } from "./components/Notes";
import { currentDayAbbr } from "../../utils/date";
import { LuPlus } from "react-icons/lu";
import { NotchedTopClipPathSvg } from "./components/NotchedTopClipPathSvg";

export default function Home({ notes, setNotes }) {
  const navigate = useNavigate()
  return (
    <section className="page-layout">
      <NotchedTopClipPathSvg />
      <button
        className="fixed bottom-5 right-4 z-40"
        onClick={() => navigate('/note/compose')}>
        <LuPlus className="icon dark:bg-zinc-600 dark:stroke-zinc-100 shadow-lg" />
      </button>
      <div className="flex justify-between w-full items-center text-zinc-100 mb-6">
        <h2 className="font-bold text-2xl">Current <br /> Notes</h2>
        <span className='text-2xl flex items-end gap-2'>
          {currentDayAbbr()}
          <div className="size-4 bg-orange-600 rounded-full"></div>
        </span>
      </div>
      <Notes notes={notes} setNotes={setNotes} />
    </section>
  )
}
