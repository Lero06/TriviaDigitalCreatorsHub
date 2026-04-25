function CardBox({ children }) {
  return (
    <div
      className="card border-primary p-4 mx-auto my-5"
      style={{ maxWidth: "500px" }}
    >
      {children}
    </div>
  )
}

export default CardBox