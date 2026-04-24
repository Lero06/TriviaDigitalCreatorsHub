function Button({ text, onClick, styleType = "primary" }) {
  return (
    <button
      className={`btn btn-${styleType} m-2`}
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export default Button