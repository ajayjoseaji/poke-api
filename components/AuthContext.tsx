"use client";

import { usePathname, useRouter } from "next/navigation";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { Loading } from "./Loading";

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
  isLoggedin: boolean;
  login: Login;
  logout: () => void;
};
const AuthContext = createContext<AuthContextType | null>(null);
const publicRoutes = ["/login", "/"];

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const pathname = usePathname();
  const router = useRouter();

  const isLoggedin = !!token;

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    }
    setLoading(false);
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

  const shouldRedirectToLogin = !isLoggedin && !publicRoutes.includes(pathname);
  const shouldRedirectToDashboard = isLoggedin && pathname === "/login";

  useEffect(() => {
    if (!loading && shouldRedirectToLogin) {
      router.push("/login");
    }
    if (!loading && shouldRedirectToDashboard) {
      router.push("/dashboard");
    }
  }, [shouldRedirectToLogin, shouldRedirectToDashboard, loading]);

  if (loading || shouldRedirectToLogin || shouldRedirectToDashboard) {
    return <Loading />;
  }

  return (
    <AuthContext.Provider value={{ isLoggedin, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
