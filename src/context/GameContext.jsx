import { createContext, useContext, useState } from "react";

const GameContext = createContext()

export function GameProvider({ children }) {
    const [category, setCategory] = useState("general")
    const [difficulty, setDifficulty] = useState("easy")

    const value = {
        category,
        setCategory,
        difficulty,
        setDifficulty,
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