"use client";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/admin");
    } catch (err) {
      setError("Giriş başarısız! Bilgilerinizi kontrol edin.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-grey-100">
      <form onSubmit={handleLogin} className="bg-[#E5D9F2] p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Admin Girişi</h2>
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 w-full mb-2"
          required
        />
        <input
          type="password"
          placeholder="Şifre"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 w-full mb-2"
          required
        />
        <button type="submit" className="bg-purple-700 text-white p-2 rounded w-full">
          Giriş Yap
        </button>
      </form>
    </div>
  );
}
