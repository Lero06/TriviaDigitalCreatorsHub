import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);          
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const loginGoogle = (credentialResponse) => {
        const userData = {
            name: credentialResponse.name,
            email: credentialResponse.email,
            picture: credentialResponse.picture,
            provider: "google"
        };
        setUser(userData);
        setIsAuthenticated(true);
        localStorage.setItem("user", JSON.stringify(userData));
    };

    const logout = () => {
        setUser(null);
        setIsAuthenticated(false);
        localStorage.removeItem("user");
    };

    const value = {
        user,
        isAuthenticated,
        loginGoogle,
        logout,
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}