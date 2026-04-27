import { GoogleLogin } from '@react-oauth/google';
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import Btn from "../components/Btn"

function Login() {
  const { loginGoogle } = useAuth();
  const navigate = useNavigate();

  const handleGoogleSuccess = (credentialResponse) => {
    const decoded = jwtDecode(credentialResponse.credential);
    loginGoogle(decoded);
    navigate(-1);
  };

  const handleGoogleError = () => {
    console.error("Google login failed");
  };

  return (
    <div className="container mt-5 text-center">
      <h1 className="mb-4">Inicia Sesión</h1>

       <div 
        style={{ 
          display: 'flex',           
          justifyContent: 'center',  
          alignItems: 'center',      
          marginBottom: '30px',
          minHeight: '80px'          
        }}
      >
        <GoogleLogin
          onSuccess={handleGoogleSuccess}
          onError={handleGoogleError}
          size="large"
        />
      </div>

      <Btn text="Volver Atrás" onClick={() => navigate(-1)} type="secondary" style={{ width: '300px', maxWidth: '100%' }}/>
    </div>
  );
}

export default Login;