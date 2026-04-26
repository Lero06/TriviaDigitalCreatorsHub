import { useGame } from "../context/GameContext"
import CardBox from "../components/CardBox"
import Btn from "../components/Btn"
import ResultStats from "../components/ResultStats"
import { useState } from "react"

function Result({ puntaje, respuestasCorrectas, preguntasTotales }) {
  const [showModal, setShowModal] = useState(false)
  const { dificultad } = useGame()

  const textoPorCompartir = `🎯 Trivia Game
🏆 Puntos: ${puntaje}
✅ Respuestas correctas: ${respuestasCorrectas}/${preguntasTotales}
💪 Dificultad: ${dificultad}
¡Jugá vos también!`

  const encodedText = encodeURIComponent(textoPorCompartir)

  const platformas = [
    {
      name: "Twitter / X",
      color: "dark",
      url: `https://twitter.com/intent/tweet?text=${encodedText}`
    },
    {
      name: "Facebook",
      color: "primary",
      url: `https://www.facebook.com/sharer/sharer.php?quote=${encodedText}`
    },
    {
      name: "WhatsApp",
      color: "success",
      url: `https://wa.me/?text=${encodedText}`
    },
  ]

  function handleShare(url) {
    window.open(url, "_blank")
  }

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Resultados</h1>
      <ResultStats />

      <div className="d-grid gap-2">
        <Btn text="Jugar Otra Vez" to="/" type="primary" />
        
        <button
          type = "button"
          className="btn btn-success btn-lg d-block mx-auto"
          onClick={() => setShowModal(true)}
          style={{width: 400}}
        >
          Compartir Resultado
        </button>
      </div>

      <div
        className={`modal fade ${showModal ? "show d-block" : ""}`}
        style={{ backgroundColor: showModal ? "rgba(0,0,0,0.5)" : "" }}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">

            <div className="modal-header">
              <h5 className="modal-title">🔗 Compartir en</h5>
              <button
                type="button"
                className="btn-close"
                onClick={() => setShowModal(false)}
              />
            </div>

            <div className="modal-body d-grid gap-2">
              {platformas.map(platform => (
                <button
                  key={platform.name}
                  className={`btn btn-${platform.color}`}
                  onClick={() => handleShare(platform.url)}
                >
                  {platform.name}
                </button>
              ))}
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Result