function ResultStats() {
  return (
    <div className="mb-4 d-flex flex-column align-items-center">
      <div className="alert alert-success text-center" style={{ width: '400px', maxWidth: '90%' }}>
        ¡Juego terminado!
      </div>

      <ul className="list-group" style={{ width: '400px', maxWidth: '90%' }}>
        <li className="list-group-item d-flex justify-content-between">
          <span>Puntos</span>
          <strong>8</strong>
        </li>

        <li className="list-group-item d-flex justify-content-between">
          <span>Correctas</span>
          <strong>8</strong>
        </li>

        <li className="list-group-item d-flex justify-content-between">
          <span>Incorrectas</span>
          <strong>2</strong>
        </li>

        <li className="list-group-item d-flex justify-content-between">
          <span>Porcentaje</span>
          <strong>80%</strong>
        </li>
      </ul>
    </div>
  )
}

export default ResultStats