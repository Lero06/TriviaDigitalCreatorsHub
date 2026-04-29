import { useGame } from "../context/GameContext"
import { useNavigate } from "react-router-dom"
import { PageTransition } from "../components/PageTransition"
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
    <PageTransition>
      <div
        className="container"
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          paddingTop: "200px",
        }}
      >
      <h1 className="text-center text-warning">Digital Quiz Hub</h1>

      <SelectInput
        label="Categoría"
        value={categoria}
        onChange={(e) => setCategoria(e.target.value)}
        options={[
          { value: "anime", name: "Anime" },
          { value: "games", name: "Videojuegos" },
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
      <Btn
        text={loading ? "Cargando preguntas..." : "Jugar Ahora"}
        type="success"
        onClick={handleJugarAhora}
        disabled={loading}
      />
    </div>
    </PageTransition>
  )
}

export default Home