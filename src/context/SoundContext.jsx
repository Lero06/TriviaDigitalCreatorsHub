import { createContext, useContext, useState } from "react"
import useSound from "use-sound"

const SoundContext = createContext()

export function SoundProvider({ children }) {
  const [volume, setVolume] = useState(0.3)

  const [playMenu, { stop: stopMenu }] = useSound('sounds/Menu.mp3', { loop: true, volume })
  const [playDurante, { stop: stopDurante }] = useSound('sounds/DurantePregunta.mp3', { loop: true, volume })
  const [playSeleccionar] = useSound('sounds/SeleccionarPregunta.mp3', { volume })
  const [playAcabar] = useSound('sounds/AcabarJuego.mp3', { volume })

  function iniciarMenu() {
    stopDurante()
    playMenu()
  }

  function iniciarDurante() {
    stopMenu()
    playDurante()
  }

  function seleccionarRespuesta() {
    stopDurante()
    playSeleccionar()
  }

  function iniciarAcabar() {
    stopMenu()
    stopDurante()
    playAcabar()
  }

  function detenerTodo() {
    stopMenu()
    stopDurante()
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