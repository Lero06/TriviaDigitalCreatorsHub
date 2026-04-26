import { useState, useEffect, useRef} from "react"

export default function useTimer(tiempoInicial) {
    const [tiempoRestante, setTiempoRestante] = useState(tiempoInicial)
    const [estaCorriendo, setEstaCorreindo] = useState(false)

    useEffect(() => {
        if (!estaCorriendo || tiempoRestante <= 0) return

        const intervalo = setInterval(() => {
            setTiempoRestante(tiempoRestante => tiempoRestante - 1)
        }, 1000)

        return () => clearInterval(intervalo)
    }, [estaCorriendo, tiempoRestante])

    function iniciar() { setEstaCorreindo(true) }

    function parar() { setEstaCorreindo(false) }

    function reiniciar(nuevoTiempo = tiempoInicial) {
        setEstaCorreindo(false)
        setTiempoRestante(nuevoTiempo)
    }

    const isTerminado = tiempoRestante <= 0

    return {
        tiempoRestante,
        iniciar,
        parar,
        reiniciar,
        isTerminado,
    }
}