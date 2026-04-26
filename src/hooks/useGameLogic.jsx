import { useState } from "react";

const CONFIG_DIFICULTAD = {
    easy: { multiplicador: 1, tiempoPorPregunta: 60 },
    medium: { multiplicador: 2, tiempoPorPregunta: 45 },
    hard: { multiplicador: 3, tiempoPorPregunta: 30 },
}

const PUNTOS_BASE = 100

export default function useGameLogic(preguntas, dificultad) {
    const [indexPreguntaActual, setIndexPreguntaActual] = useState(0)
    const [puntaje, setPuntaje] = useState(0)

    const config = CONFIG_DIFICULTAD[dificultad]

    const preguntaActual = preguntas[indexPreguntaActual]

    const preguntasTotales = preguntas.length

    const isJuegoAcabado = indexPreguntaActual >= preguntasTotales

    function responderPregunta(isCorrecta, tiempoRestante) {
        if (isCorrecta) {
            const bonusPorTiempo = tiempoRestante / config.tiempoPorPregunta
            const puntos = Math.round(PUNTOS_BASE * config.multiplicador * bonusPorTiempo)
            setPuntaje(puntaje => puntaje + puntos)
        }
    }

    function siguientePregunta() {
        setIndexPreguntaActual(indexPreguntaActual => indexPreguntaActual + 1)
    }

    return {
        preguntaActual,
        indexPreguntaActual,
        preguntasTotales,
        puntaje,
        isJuegoAcabado,
        tiempoPorPregunta: config.tiempoPorPregunta,
        responderPregunta,
        siguientePregunta,
    }
}