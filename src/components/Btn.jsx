import { Link } from "react-router-dom"

function Btn({ text, to, type, onClick, width = '400px', disabled = false }) {
  if (to) {
    return (
      <Link to={to} className={`btn btn-${type} btn-lg d-block mx-auto`} style={{ width: width }}>
        {text}
      </Link>
    )
  }
  return (
    <button
      className={`btn btn-${type} btn-lg d-block mx-auto`}
      onClick={onClick}
      style={{ width: width }}
      disabled={disabled}
    >
      {text}
    </button>
  )
}

export default Btn