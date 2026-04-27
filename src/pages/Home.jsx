import { useGame } from "../context/GameContext"
import { useNavigate } from "react-router-dom"
import Btn from "../components/Btn"
import SelectInput from "../components/SelectInput"

function Home() {
  const { categoria, setCategoria, dificultad, setDificultad, fetchQuestions, loading, error } = useGame()
  const navigate = useNavigate()

  const handleJugarAhora = async () => {
    try {
      await fetchQuestions()

      navigate("/quiz")
      
    } catch (err) {
      console.error("Error al cargar preguntas:", err)
    }
  }

  return (
    <div className="container mt-5">
        <h1 className="text-center text-secondary">Trivia Game</h1>

        <h4 className="text-center text-secondary">
          Pon a prueba tus conocimientos
        </h4>

        <SelectInput
          label="Categoría"
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
          options={[
            { value: "anime", name: "Anime" },
            { value: "games", name: "Videojuego" },
            { value: "films", name: "Peliculas" },
            { value: "computers", name: "ITI" }
          ]}
        />

        <SelectInput
          label="Dificultad"
          value={dificultad}
          onChange={(e) => setDificultad(e.target.value)}
          options={[
            { value: "easy", name: "Fácil" },
            { value: "medium", name: "Media" },
            { value: "hard", name: "Difícil" }
          ]}
        />

        <Btn text= {loading ? "Cargando preguntas..." : "Jugar Ahora"} type="secondary " onClick={handleJugarAhora} disabled={loading} />
        
    </div>
  )
}

export default Home