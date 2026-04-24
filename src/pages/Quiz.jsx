import CardBox from "../components/CardBox"
import Btn from "../components/Btn"
import QuestionBox from "../components/QuestionBox"
import StatsBox from "../components/StatsBox"

function Quiz() {
  return (
    <div className="container mt-5">
      <CardBox>

        <StatsBox />

        <QuestionBox
          question="¿Cuál es la capital de Francia?"
        />

        <div className="d-grid gap-2">

          <Btn text="Madrid" type="outline-primary" />
          <Btn text="París" type="outline-primary" />
          <Btn text="Roma" type="outline-primary" />
          <Btn text="Berlín" type="outline-primary" />

        </div>

      </CardBox>
    </div>
  )
}

export default Quiz