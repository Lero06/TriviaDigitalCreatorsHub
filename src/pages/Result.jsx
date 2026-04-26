import { useLocation } from "react-router-dom"
import Btn from "../components/Btn"
import ResultStats from "../components/ResultStats"

function Result() {
  const location = useLocation()
  const { puntaje, respuestasCorrectas, preguntasTotales, dificultad } = location.state
  return (
    <div className="container mt-5">

      <h1 className="text-center mb-4">
        Resultados
      </h1>

      <ResultStats
        puntaje={puntaje}
        respuestasCorrectas={respuestasCorrectas}
        preguntasTotales={preguntasTotales}
        dificultad={dificultad}
      />

      <div className="d-grid gap-2">

        <Btn
          text="Jugar Otra Vez"
          to="/"
          type="primary"
        />

        <Btn
          text="Compartir Resultado"
          type="success"
        />

      </div>
    </div>
  )
}

export default Result