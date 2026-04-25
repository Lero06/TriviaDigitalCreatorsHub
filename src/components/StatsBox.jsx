function StatsBox() {
  return (
    <div className="d-flex justify-content-around mb-4">

      <div className="text-center">
        <div className="fw-bold mt-1">Pregunta</div>
        <span className="badge bg-primary mt-1 fs-6">1/10</span>
      </div>
      
      <div className="text-center">
        <div className="fw-bold mt-1">Tiempo</div>
        <span className="badge bg-warning text-dark mt-1 fs-6">15s</span>
      </div>
      
      <div className="text-center">
        <div className="fw-bold mt-1">Puntos</div>
        <span className="badge bg-success mt-1 fs-6">0</span>
      </div>
    </div>
  )
}

export default StatsBox