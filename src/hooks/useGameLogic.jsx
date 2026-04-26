import { useState } from "react";

const CONFIG_DIFICULTAD = {
    easy: { multiplicador: 1, tiempoPorPregunta: 60 },
    medium: { multiplicador: 2, tiempoPorPregunta: 45 },
    hard: { multiplicador: 3, tiempoPorPregunta: 30 },
}

const PUNTOS_BASE = 100

export default function useGameLogic(preguntas, dificultad) {
    const [ultimosPuntos, setUltimosPuntos] = useState(null)
    const [indexPreguntaActual, setIndexPreguntaActual] = useState(0)
    const [puntaje, setPuntaje] = useState(0)

    const config = CONFIG_DIFICULTAD[dificultad]

    const preguntaActual = preguntas[indexPreguntaActual]

    const preguntasTotales = preguntas.length

    const isJuegoAcabado = indexPreguntaActual >= preguntasTotales
    
    const puntosPosibles = PUNTOS_BASE * config.multiplicador

    function responderPregunta(isCorrecta, tiempoRestante) {
        if (isCorrecta) {
            const bonusPorTiempo = tiempoRestante / config.tiempoPorPregunta
            const puntos = Math.round(puntosPosibles * bonusPorTiempo)
            setPuntaje(puntaje => puntaje + puntos)
            setUltimosPuntos(puntos)
        } else {
            setUltimosPuntos(0)
        }
    }

    function siguientePregunta() {
        setIndexPreguntaActual(indexPreguntaActual => indexPreguntaActual + 1)
        setUltimosPuntos(null)
    }

    return {
        preguntaActual,
        indexPreguntaActual,
        preguntasTotales,
        ultimosPuntos,
        puntaje,
        puntosPosibles,
        isJuegoAcabado,
        tiempoPorPregunta: config.tiempoPorPregunta,
        responderPregunta,
        siguientePregunta,
    }
}