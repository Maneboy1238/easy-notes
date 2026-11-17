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
          style={{
            stroke: color?.font,
            background: color?.background
          }}
          className="size-8 p-2 rounded-full"
        />
      </Link>
    </button>
  )
}
