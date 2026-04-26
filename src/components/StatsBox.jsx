function StatsBox({ preguntaActual, preguntasTotales, tiempoRestante, puntos}) {
  return (
    <div className="d-flex justify-content-around mb-4">

      <div className="text-center">
        <div className="fw-bold mt-1">Pregunta</div>
        <span className="badge bg-primary mt-1 fs-6">{preguntaActual}/{preguntasTotales}</span>
      </div>
      
      <div className="text-center">
        <div className="fw-bold mt-1">Tiempo</div>
        <span className="badge bg-warning text-dark mt-1 fs-6">{tiempoRestante}s</span>
      </div>
      
      <div className="text-center">
        <div className="fw-bold mt-1">Puntos</div>
        <span className="badge bg-success mt-1 fs-6">{puntos}</span>
      </div>
    </div>
  )
}

export default StatsBox