import { createContext, useContext, useState } from "react";

const GameContext = createContext()

export function GameProvider({ children }) {
    const [categoria, setCategoria] = useState("general")
    const [dificultad, setDificultad] = useState("easy")

    const value = {
        categoria,
        setCategoria,
        dificultad,
        setDificultad,
    }

    return (
        <GameContext.Provider value={value}>
            {children}
        </GameContext.Provider>
    )
}

export function useGame() {
    return useContext(GameContext)
}