import { createContext, useContext, useEffect, useState } from "react";
import apiService from "../services/api";

interface AuthProviderProps {
    children: React.ReactNode;
}

interface AuthContextData {
    token: string | null;
    signIn: (token: string) => void;
    signOut: () => void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider = ({children}: AuthProviderProps) => (
    const [token, setToken] = useState<string | null>(null);

    useEffect(() => {
        const localToken = localStorage.getItem('token');
        if (localToken) {
            setToken(localToken);
            apiService.defaults.headers.common.Authorization = `${token}`;
    }
}, []);

    const signIn = (token: string) => {
        localStorage.setItem("token", token);
        setToken(token);
        apiService.defaults.headers.common.Authorization = `${token}`;
    }

    const signOut = () => {
        localStorage.removeItem("token");
        setToken(null);
        delete apiService.defaults.headers.common.Authorization;
    }

    return (
        <AuthContext.Provider value={{ token, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    );
);

export const useAuth = () => useContext(AuthContext);