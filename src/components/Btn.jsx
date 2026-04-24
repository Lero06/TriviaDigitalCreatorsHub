import { Link } from "react-router-dom"

function Btn({ text, to, type = "primary", onClick }) {
  if (to) {
    return (
      <Link to={to} className={`btn btn-${type} w-100`}>
        {text}
      </Link>
    )
  }

  return (
    <button
      className={`btn btn-${type} w-100`}
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export default Btn