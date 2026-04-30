import React from "react"
import ReactDOM from "react-dom/client"
import './fixes.css';
import './animations.css';
import App from "./App"
import { GameProvider } from "./context/GameContext"
import { SoundProvider } from "./context/SoundContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SoundProvider>
      <GameProvider>
        <App />
      </GameProvider>
    </SoundProvider>
  </React.StrictMode>
)