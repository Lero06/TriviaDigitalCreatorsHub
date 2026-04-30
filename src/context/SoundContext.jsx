import { createContext, useContext, useState } from "react"
import useSound from "use-sound"

const SoundContext = createContext()

export function SoundProvider({ children }) {
  const [volume, setVolume] = useState(0.3)

  const [playMenu, { stop: stopMenu }] = useSound('sounds/Menu.mp3', { loop: true, volume })
  const [playDurante, { stop: stopDurante }] = useSound('sounds/DurantePregunta.mp3', { loop: true, volume })
  const [playSeleccionar, { stop: stopSeleccionar}] = useSound('sounds/SeleccionarPregunta.mp3', { volume })
  const [playAcabar, {stop: stopAcabar}] = useSound('sounds/AcabarJuego.mp3', { volume })

  function iniciarMenu() {
    stopDurante()
    playMenu()
  }

  function iniciarDurante() {
    stopMenu()
    stopSeleccionar()
    playDurante()
  }

  function seleccionarRespuesta() {
    stopDurante()
    playSeleccionar()
  }

  function iniciarAcabar() {
    stopMenu()
    stopDurante()
    stopSeleccionar()
    playAcabar()
  }

  function detenerTodo() {
    stopMenu()
    stopDurante()
    stopAcabar()
  }

  return (
    <SoundContext.Provider value={{
      iniciarMenu,
      iniciarDurante,
      seleccionarRespuesta,
      iniciarAcabar,
      detenerTodo,
      setVolume,
      volume,
    }}>
      {children}
    </SoundContext.Provider>
  )
}

export function useSound2() {
  return useContext(SoundContext)
}