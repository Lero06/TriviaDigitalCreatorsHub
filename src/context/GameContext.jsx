import { createContext, useContext, useState } from "react";
import { getQuestions } from "../services/api";

const GameContext = createContext()

export function GameProvider({ children }) {
    const [categoria, setCategoria] = useState("anime")
    const [dificultad, setDificultad] = useState("easy")
    const [questions, setQuestions] = useState([])      
    const [loading, setLoading] = useState(false)       
    const [error, setError] = useState(null) 

     const fetchQuestions = async () => {
        setLoading(true)           
        setError(null) 
    
         try {
            const data = await getQuestions(categoria, dificultad)
            setQuestions(data)     
            setError(null)         
            
        } catch (err) {
            setError(err.message)
            setQuestions([])       
        } finally {
            setLoading(false)
        }
    }

    const value = {
        categoria,
        setCategoria,
        dificultad,
        setDificultad,
        questions,
        setQuestions,
        loading,
        setLoading,
        error,
        setError,
        fetchQuestions,
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