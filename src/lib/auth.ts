// src/lib/auth.tsx
"use client";

import { createContext, useContext, useState, ReactNode, useCallback } from "react";
import { useRouter } from "next/navigation";
import { useEffect as reactUseEffect } from "react";

type User = {
  id: string;
  name: string;
  email: string;
  avatar?: string;
};

type AuthContextType = {
  user: User | null;
  login: () => Promise<void>;
  logout: () => Promise<void>;
  isAuthenticated: boolean;
};

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();
// In AuthProvider
useEffect(() => {
  const storedUser = localStorage.getItem("user");
  if (storedUser) setUser(JSON.parse(storedUser));
}, []);

  const login = useCallback(async () => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 500));
      
      setUser({
        id: "demo-user-123",
        name: "Ocean Explorer",
        email: "demo@seafacts.com",
        avatar: "/images/avatar.png"
      });
      router.push("/dashboard");
    } catch (error) {
      console.error("Login failed:", error);
    }
  }, [router]);

  const logout = useCallback(async () => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 300));
      
      setUser(null);
      router.push("/");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  }, [router]);

  const value = {
    user,
    login,
    logout,
    isAuthenticated: !!user
  };

  return (
    
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

// Removed duplicate useEffect implementation

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

function customUseEffect(arg0: () => void, arg1: never[]) {
  throw new Error("Function not implemented.");
}
