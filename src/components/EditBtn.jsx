import { Link } from "react-router";
import { LuPencil } from "react-icons/lu";

export function EditBtn({ id, color }) {
  const searchParams = new URLSearchParams({
    id,
    mode: "edit"
  })
  return (
    <button>
      <Link to={`/note/compose?${searchParams}`}>
        <LuPencil
          style={{ stroke: color }}
          className="size-4"
        />
      </Link>
    </button>
  )
}
