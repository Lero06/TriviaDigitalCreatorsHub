import "bootswatch/dist/vapor/bootstrap.min.css";
import './fixes.css';
import { useLocation } from "react-router-dom"
import { HashRouter, Routes, Route } from "react-router-dom"
import { GoogleOAuthProvider } from '@react-oauth/google'
import { GameProvider } from "./context/GameContext"
import { AuthProvider } from "./context/AuthContext"
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import Home from "./pages/Home"
import Quiz from "./pages/Quiz"
import Result from "./pages/Result"
import Login from "./pages/Login"
import { SoundProvider } from "./context/SoundContext";

function App() {
  const [started, setStarted] = useState(false)

  return (
    <GoogleOAuthProvider clientId="990774059411-v93gsaevr57omvge07qqnjr0pejg8p0v.apps.googleusercontent.com">
      <HashRouter>
        <SoundProvider>
          <GameProvider>
            <AuthProvider>
              {!started ? (
                <div
                  onClick={() => setStarted(true)}
                  style={{
                    height: "100vh",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    cursor: "pointer"
                  }}
                >
                  <h1>🎯 Cuestionados!</h1>
                  <p>Tocá cualquier parte para comenzar</p>
                </div>
              ) : (
                <AppRoutes />
              )}
            </AuthProvider>
          </GameProvider>
        </SoundProvider>
      </HashRouter>
    </GoogleOAuthProvider>
  )
}

function AppRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/result" element={<Result />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </AnimatePresence>
  )
}

export default App