import CardBox from "../components/CardBox"
import Btn from "../components/Btn"
import ResultStats from "../components/ResultStats"

function Result() {
  return (
    <div className="container mt-5">
      <CardBox>

        <h1 className="text-center mb-4">
          📊 Resultados
        </h1>

        <ResultStats />

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

      </CardBox>
    </div>
  )
}

export default Result