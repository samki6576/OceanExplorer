// src/app/login/page.tsx
"use client";
import { useAuth } from "@/lib/auth";

export default function LoginPage() {
  const { login } = useAuth();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-50 to-blue-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">Sea Facts</h1>
        <button
          onClick={login}
          className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
        >
          Enter Demo Mode
        </button>
      </div>
    </div>
  );
}