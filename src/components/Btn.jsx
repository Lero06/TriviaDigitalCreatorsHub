import { Link } from "react-router-dom"

function Btn({ text, to = "/", type = "primary" }) {
  return (
    <Link to={to} className={`btn btn-${type} w-100 mt-2`}>
      {text}
    </Link>
  )
}

export default Btn