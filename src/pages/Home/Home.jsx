import { useNavigate } from "react-router";
import { Notes } from "./components/Notes";
import { currentDayAbbr } from "../../utils/date";
import { LuPlus } from "react-icons/lu";

export default function Home({ notes, setNotes }) {
  const navigate = useNavigate()
  return (
    <>
      <button onClick={() => navigate('/note/compose')}>
        <LuPlus />
      </button>
      <>
        <span>{currentDayAbbr()}</span>
      </>
      <Notes notes={notes} setNotes={setNotes} />
    </>
  )
}
