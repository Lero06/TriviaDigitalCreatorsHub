function CardBox({ children }) {
  return (
    <div
      className="card shadow p-4 mx-auto"
      style={{ maxWidth: "500px" }}
    >
      {children}
    </div>
  )
}

export default CardBox