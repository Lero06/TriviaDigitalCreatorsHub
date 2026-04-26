import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useGame } from "../context/GameContext"
import useGameLogic from "../hooks/useGameLogic"
import useTimer from "../hooks/useTimer"
import mockQuestions from "../mocks/questions"
import Btn from "../components/Btn"
import QuestionBox from "../components/QuestionBox"
import StatsBox from "../components/StatsBox"

function Quiz() {
  const navigate = useNavigate()
  const { dificultad, categoria } = useGame()
  const {
    preguntaActual,
    indexPreguntaActual,
    preguntasTotales,
    puntaje,
    isJuegoAcabado,
    tiempoPorPregunta,
    responderPregunta,
    siguientePregunta,
  } = useGameLogic(mockQuestions, dificultad)
  const {
    tiempoRestante,
    iniciar,
    parar,
    reiniciar,
    isTerminado,
  } = useTimer(tiempoPorPregunta)

  useEffect(() => {
    iniciar()
  }, [])

  useEffect(() => {
    if (isTerminado) {
      siguientePregunta()
      reiniciar(tiempoPorPregunta)
      iniciar()
    }
  }, [isTerminado])

  useEffect(() => {
    if (isJuegoAcabado) {
      navigate("/result", {
        state: {
          puntaje,
          respuestasCorrectas: 0,
          preguntasTotales,
          dificultad: dificultad
        }
      })
    }
  }, [isJuegoAcabado])

  function handleAnswer(answer) {
    parar()
    responderPregunta(preguntaActual.correct === answer, tiempoRestante)
  }

  if (!preguntaActual) return null

  return (
    <div className="container mt-5">

      <StatsBox
        preguntaActual={indexPreguntaActual + 1}
        preguntasTotales={preguntasTotales}
        tiempoRestante={tiempoRestante}
        puntos={puntaje}
      />

      <QuestionBox
        question={preguntaActual.question}
      />

      <div
        className="mx-auto"
        style={{ width: '1300px', maxWidth: '90%', background: 'transparent', border: 'none', boxShadow: 'none' }}
      >
        <div className="card-body p-4">
          <div className="row g-2">
            {preguntaActual.answers.map((answer) => (
              <div className="col-6" key={answer}>
                <Btn text={answer} type="secondary" onClick={() => handleAnswer(answer)} width="100%" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        className="card bg-primary bg-opacity-10 border-primary mb-4 my-5 shadow-sm"
        style={{ width: '1300px', marginLeft: 'auto', marginRight: 'auto' }}
      >
        <div className="card-body p-4">
          <h4 className="card-title text-center mb-3">Puntos obtenidos:</h4>
          <Btn text="Continuar" type="light" onClick={() => { siguientePregunta(); reiniciar(tiempoPorPregunta), iniciar()}} width='640px' />
        </div>
      </div>

    </div>
  )
}

export default Quiz