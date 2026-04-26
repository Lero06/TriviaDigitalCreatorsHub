import { useEffect, useState } from "react"
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
  const [respondido, setRespondido] = useState(false)
  const [respuestaSeleccionada, setRespuestaSeleccionada] = useState(null)
  const { dificultad, categoria } = useGame()
  const {
    preguntaActual,
    indexPreguntaActual,
    preguntasTotales,
    ultimosPuntos,
    puntaje,
    puntosPosibles,
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
    if (respondido) return
    setRespondido(true)
    setRespuestaSeleccionada(answer)
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
        <div className="row g-2">
          <div className="col-6">
            <Btn
              text={preguntaActual.answers[0]}
              type={respondido ? (preguntaActual.answers[0] === preguntaActual.correct ? "success" : "secondary") : "primary"}
              onClick={() => handleAnswer(preguntaActual.answers[0])}
              width="100%"
              disabled={respondido}
            />
          </div>
          <div className="col-6">
            <Btn
              text={preguntaActual.answers[1]}
              type={respondido ? (preguntaActual.answers[1] === preguntaActual.correct ? "success" : "secondary") : "warning"}
              onClick={() => handleAnswer(preguntaActual.answers[1])}
              width="100%"
              disabled={respondido}
            />
          </div>
          <div className="col-6">
            <Btn
              text={preguntaActual.answers[2]}
              type={respondido ? (preguntaActual.answers[2] === preguntaActual.correct ? "success" : "secondary") : "danger"}
              onClick={() => handleAnswer(preguntaActual.answers[2])}
              width="100%"
              disabled={respondido}
            />
          </div>
          <div className="col-6">
            <Btn
              text={preguntaActual.answers[3]}
              type={respondido ? (preguntaActual.answers[3] === preguntaActual.correct ? "success" : "secondary") : "info"}
              onClick={() => handleAnswer(preguntaActual.answers[3])}
              width="100%"
              disabled={respondido}
            />
          </div>
        </div>
      </div>

      {ultimosPuntos !== null && (
        <div
          className="card bg-primary bg-opacity-10 border-primary mb-4 my-5 shadow-sm"
          style={{ width: '1300px', marginLeft: 'auto', marginRight: 'auto' }}
        >
          <div className="card-body p-4">
            <h4 className="card-title text-center mb-3">
              Puntos obtenidos: {ultimosPuntos}/{puntosPosibles}
            </h4>
            <Btn text="Continuar" type="light" onClick={() => {
              siguientePregunta()
              reiniciar(tiempoPorPregunta)
              iniciar()
              setRespondido(false)
            }} width='640px' />
          </div>
        </div>
      )}
    </div>
  )
}

export default Quiz