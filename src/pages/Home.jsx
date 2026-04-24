import { useState } from "react"

import Btn from "../components/Btn"
import SelectInput from "../components/SelectInput"
import CardBox from "../components/CardBox"

function Home() {
  const [category, setCategory] = useState("general")
  const [difficulty, setDifficulty] = useState("easy")

  return (
    <div className="container mt-5">
      <CardBox>
        <h1 className="text-center mb-3">🎯 Trivia Game</h1>

        <p className="text-center text-muted">
          Pon a prueba tus conocimientos
        </p>

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

        <Btn text="Jugar Ahora" to="/quiz" />
      </CardBox>
    </div>
  )
}

export default Home