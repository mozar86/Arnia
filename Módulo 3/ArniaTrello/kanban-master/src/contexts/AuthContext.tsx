import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  ReactNode,
} from "react";
import apiService from "../services/api";

interface AuthProviderProps {
  children: ReactNode;
}

interface AuthContextData {
  token: string | null;
  signIn: (token: string) => void;
  signOut: () => void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
      apiService.defaults.headers.common.Authorization = `${storedToken}`;
    }
  }, []);

  const signIn = (token: string) => {
    localStorage.setItem("token", token);
    setToken(token);
    apiService.defaults.headers.common.Authorization = `${token}`;
  };

  const signOut = () => {
    localStorage.removeItem("token");
    setToken(null);
    delete apiService.defaults.headers.common.Authorization;
  };

  return (
    <AuthContext.Provider value={{ token, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
