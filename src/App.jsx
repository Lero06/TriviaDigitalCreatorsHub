import "bootswatch/dist/vapor/bootstrap.min.css";
import './fixes.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { GoogleOAuthProvider } from '@react-oauth/google'
import { GameProvider } from "./context/GameContext"
import { AuthProvider } from "./context/AuthContext"
import Home from "./pages/Home"
import Quiz from "./pages/Quiz"
import Result from "./pages/Result"
import Login from "./pages/Login"


function App() {
  return (
    <GoogleOAuthProvider clientId="990774059411-v93gsaevr57omvge07qqnjr0pejg8p0v.apps.googleusercontent.com">
      <BrowserRouter>
        <GameProvider>
          <AuthProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/quiz" element={<Quiz />} />
              <Route path="/result" element={<Result />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </AuthProvider>
        </GameProvider>
      </BrowserRouter>
    </GoogleOAuthProvider>
  )
}

export default App