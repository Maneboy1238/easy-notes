import { Link } from "react-router";

export function EditBtn({ id }) {
  const searchParams = new URLSearchParams({
    id,
    mode: "edit"
  })
  return (
    <button>
      <Link to={`note/compose?${searchParams}`}>
        Edit
      </Link>
    </button>
  )
}
