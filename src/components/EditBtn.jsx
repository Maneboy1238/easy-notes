import { Link } from "react-router";
import { LuPencil } from "react-icons/lu";

export function EditBtn({ id }) {
  const searchParams = new URLSearchParams({
    id,
    mode: "edit"
  })
  return (
    <button>
      <Link to={`/note/compose?${searchParams}`}>
        <LuPencil />
      </Link>
    </button>
  )
}
