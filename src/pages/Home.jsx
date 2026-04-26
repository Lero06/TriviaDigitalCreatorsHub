import { useGame } from "../context/GameContext"
import Btn from "../components/Btn"
import SelectInput from "../components/SelectInput"

function Home() {
  const { category, setCategory, difficulty, setDifficulty } = useGame()

  return (
    <div className="container mt-5">
        <h1 className="text-center text-secondary">Trivia Game</h1>

        <h4 className="text-center text-secondary">
          Pon a prueba tus conocimientos
        </h4>

        <SelectInput
          label="Categoría"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          options={[
            { value: "general", name: "General" },
            { value: "science", name: "Ciencia" },
            { value: "sports", name: "Deportes" },
            { value: "history", name: "Historia" }
          ]}
        />

        <SelectInput
          label="Dificultad"
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
          options={[
            { value: "easy", name: "Fácil" },
            { value: "medium", name: "Media" },
            { value: "hard", name: "Difícil" }
          ]}
        />

        <Btn text="Jugar Ahora" to="/quiz" type="secondary " />
        
    </div>
  )
}

export default Home