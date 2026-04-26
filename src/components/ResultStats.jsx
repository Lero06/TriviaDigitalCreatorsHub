function ResultStats({ puntaje, respuestasCorrectas, preguntasTotales, dificultad, categoria }) {
  return (
    <div className="mb-4 d-flex flex-column align-items-center">
      <div className="alert alert-success text-center" style={{ width: '400px', maxWidth: '90%' }}>
        ¡Juego terminado!
      </div>

      <ul className="list-group" style={{ width: '400px', maxWidth: '90%' }}>
        <li className="list-group-item d-flex justify-content-between">
          <span>Puntos</span>
          <strong>{puntaje}</strong>
        </li>

        <li className="list-group-item d-flex justify-content-between">
          <span>Dificultad</span>
          <strong>{dificultad}</strong>
        </li>

        <li className="list-group-item d-flex justify-content-between">
          <span>Categoria</span>
          <strong>{categoria}</strong>
        </li>

        <li className="list-group-item d-flex justify-content-between">
          <span>Preguntas</span>
          <strong>{preguntasTotales}</strong>
        </li>

        <li className="list-group-item d-flex justify-content-between">
          <span>Correctas</span>
          <strong>{respuestasCorrectas}</strong>
        </li>
      </ul>
    </div>
  )
}

export default ResultStats