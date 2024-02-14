"use client";

import { useRouter } from "next/navigation";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

type Login = {
  (username: string, password: string):
    | {
        success: boolean;
        token: string;
        message?: undefined;
      }
    | {
        success: boolean;
        message: string;
        token?: undefined;
      };
};

type AuthContextType = {
  token: string | null;
  login: Login;
  logout: () => void;
};
const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useState<string | null>(null);

  const router = useRouter();

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  const login = (username: string, password: string) => {
    if (username === "admin" && password === "password") {
      const token = Math.random().toString(36).substr(2);
      localStorage.setItem("token", token);
      setToken(token);
      return { success: true, token };
    } else {
      return { success: false, message: "Invalid username or password" };
    }
  };

  const logout = () => {
    setToken(null);
    localStorage.removeItem("token");
    router.push("/login");
  };

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
