"use client";
import { useRouter } from "next/navigation";
import { signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "@/firebaseConfig";

export default function AdminDashboard() {
  const [user, setUser] = useState(auth.currentUser);
  const router = useRouter();

  // useEffect(() => {
  //   const unsubscribe = auth.onAuthStateChanged((user) => {
  //     if (!user) {
  //       router.push("/admin/login");
  //     } else {
  //       setUser(user);
  //     }
  //   });

  //   return () => unsubscribe();
  // }, [router]);

  const handleLogout = async () => {
    await signOut(auth);
    router.push("/admin/login");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-2xl font-bold">Admin Paneli</h1>
      <p>Hoş geldin,Fatma Zehra </p>
      <button className="bg-purple-400 text-white px-4 py-2 mt-4 rounded">Bloglarım</button>
      <button onClick={handleLogout} className="bg-purple-700 text-white px-4 py-2 mt-4 rounded">
        Çıkış Yap
      </button>
    </div>
  );
}
