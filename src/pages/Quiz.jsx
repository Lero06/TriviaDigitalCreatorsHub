import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useGame } from "../context/GameContext"
import { motion, AnimatePresence } from "framer-motion"
import { PageTransition } from "../components/PageTransition"
import { useSound2 } from "../context/SoundContext"
import useGameLogic from "../hooks/useGameLogic"
import useTimer from "../hooks/useTimer"
import Btn from "../components/Btn"
import QuestionBox from "../components/QuestionBox"
import StatsBox from "../components/StatsBox"

function Quiz() {
  const navigate = useNavigate()
  const [respondido, setRespondido] = useState(false)
  const [respuestaSeleccionada, setRespuestaSeleccionada] = useState(null)
  const { iniciarDurante, seleccionarRespuesta, iniciarAcabar, detenerTodo } = useSound2()
  const { dificultad, categoria, questions, loading, error } = useGame()
  const {
    preguntaActual,
    indexPreguntaActual,
    preguntasTotales,
    preguntasCorrectas,
    ultimosPuntos,
    puntaje,
    puntosPosibles,
    isJuegoAcabado,
    tiempoPorPregunta,
    responderPregunta,
    siguientePregunta,
  } = useGameLogic(questions, dificultad)
  const {
    tiempoRestante,
    iniciar,
    parar,
    reiniciar,
    isTerminado,
  } = useTimer(tiempoPorPregunta)

  useEffect(() => {
    if (questions.length > 0) iniciar()
  }, [questions])

  useEffect(() => { iniciarDurante() }, [])

  useEffect(() => {
    if (!loading && questions.length === 0 && !error) navigate("/")
  }, [loading, questions])

  useEffect(() => {
    if (isTerminado) {
      handleAnswer()
    }
  }, [isTerminado])

  useEffect(() => {
    if (isJuegoAcabado) {
      navigate("/result", {
        state: {
          puntaje,
          respuestasCorrectas: preguntasCorrectas,
          preguntasTotales,
          dificultad,
          categoria,
        }
      })
      detenerTodo()
      iniciarAcabar()
    }
  }, [isJuegoAcabado])

  function handleAnswer(answer) {
    if (respondido) return
    setRespondido(true)
    setRespuestaSeleccionada(answer)
    parar()
    responderPregunta(preguntaActual.correct === answer, tiempoRestante)
    seleccionarRespuesta()
  }

  if (error) {
    return (
      <div
        className="container"
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          paddingTop: "150px",
        }}
      >
        <div className="alert alert-danger" role="alert">
          <h3>Error al cargar preguntas</h3>
          <p>{error}</p>
        </div>
        <Btn text="Volver al Inicio" to="/" type="primary" />
      </div>
    )
  }

  if (!preguntaActual) return null

  return (
    <PageTransition>
      <div
        className="container"
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          paddingTop: "150px",
        }}
      >
        <StatsBox
          preguntaActual={indexPreguntaActual + 1}
          preguntasTotales={preguntasTotales}
          tiempoRestante={tiempoRestante}
          puntos={puntaje}
        />

        <AnimatePresence mode="wait">
          <motion.div
            key={indexPreguntaActual}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <QuestionBox question={preguntaActual.question} />
          </motion.div>
        </AnimatePresence>

        <div
          className="mx-auto"
          style={{ width: '1300px', maxWidth: '90%', background: 'transparent', border: 'none', boxShadow: 'none' }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={indexPreguntaActual}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.3 }}
              className="row g-2"
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
            </motion.div>
          </AnimatePresence>
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
                iniciarDurante()
                
                setRespondido(false)
              }} width='640px' />
            </div>
          </div>
        )}
      </div>
    </PageTransition>
  )
}

export default Quiz