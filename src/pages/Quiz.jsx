import CardBox from "../components/CardBox"
import Btn from "../components/Btn"
import QuestionBox from "../components/QuestionBox"
import StatsBox from "../components/StatsBox"

function Quiz() {
  return (
    <div className="container mt-5">

        <StatsBox />

        <QuestionBox
          question="¿Cuál es la capital de Francia?"
        />

        <div 
        className="mx-auto"
        style={{ width: '1300px', maxWidth: '90%', background: 'transparent', border: 'none', boxShadow: 'none' }}
        >
          <div className="card-body p-4">
            <div className="row g-2">
              <div className="col-6">
                <Btn text="Madrid" type="secondary" onClick={() => handleAnswer('Madrid')} width="100%" />
              </div>
              <div className="col-6">
                <Btn text="París" type="primary" onClick={() => handleAnswer('París')} width="100%" />
              </div>
              <div className="col-6">
                <Btn text="Roma" type="warning" onClick={() => handleAnswer('Roma')} width="100%" />
              </div>
              <div className="col-6">
                <Btn text="Berlín" type="light" onClick={() => handleAnswer('Berlín')} width="100%" />
              </div>
            </div>
          </div>
        </div>

        <div 
          className="card bg-primary bg-opacity-10 border-primary mb-4 my-5 shadow-sm"
          style={{ width: '1300px', marginLeft: 'auto', marginRight: 'auto' }}
        >
          <div className="card-body p-4">
            <h4 className="card-title text-center mb-3">Puntos obtenidos:</h4>
            <Btn text="Continuar" type="light" onClick={() => handleAnswer('Berlín')} width='640px' to="/result"/>
          </div>
        </div>
        
      </div>
  )
}

export default Quiz