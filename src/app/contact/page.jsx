"use client";
import React from "react";
import { RiMailSendLine } from "react-icons/ri";
import { FaLocationDot } from "react-icons/fa6";
import { collection, addDoc } from "firebase/firestore";
import { useState } from "react";
import { db } from "@/firebase";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Sayfanın yenilenmesini engelle

    if (!email || !message) {
      alert("Lütfen tüm alanları doldurun.");
      return;
    }

    setLoading(true); // Yükleniyor durumuna al
    setSuccess(false); // Başarı mesajını sıfırla
    try {
      const docRef = await addDoc(collection(db, "messages"), {
        email: email?.trim() || "Bilinmiyor",
        message: message?.trim() || "Boş mesaj",
        createdAt: new Date().toISOString(),
      });

      console.log("Mesaj başarıyla gönderildi:", docRef.id);
    } catch (error) {
      console.error("Firestore'a yazarken hata oluştu:", error);
      alert(`Hata: ${error.message}`);
    }
    setLoading(false); // Yükleniyor durumunu kaldır
  };

  return (
    <div className="px-4 py-10">
      <h1 className="text-[#DF6D2D] text-center font-bold text-2xl md:text-3xl">İLETİŞİM</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        {/* Sol Kısım */}
        <div className="flex flex-col justify-center items-start border-2 border-[#E5D9F2] p-6 rounded-md shadow-lg">
          <p className="mb-4 text-lg">
            Herhangi bir sorunuz veya öneriniz için benimle iletişime geçmekten çekinmeyin. En kısa
            sürede dönüş sağlamaktan memnuniyet duyarım!
          </p>
          <div className="flex flex-col gap-4 w-full ">
            <div className="flex items-center gap-3 bg-[#E5D9F2] p-4 rounded-md">
              <RiMailSendLine className="text-[#500073] font-bold text-2xl" />
              <p className="text-sm">fatimatuzehra.cetin@gmail.com</p>
            </div>
            <div className="flex items-center gap-3 bg-[#E5D9F2] p-4 rounded-md">
              <FaLocationDot className="text-[#500073] font-bold text-2xl" />
              <p className="text-sm">Etimesgut / Ankara</p>
            </div>
          </div>
        </div>

        {/* Form Kısmı */}
        <form onSubmit={handleSubmit} className="bg-[#E5D9F2] p-6 rounded-md shadow-lg">
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-semibold">
              E-posta adresiniz
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="E-posta adresinizi girin"
              className="w-full p-2 mt-1 border border-gray-300 rounded-md"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-semibold">
              Mesajınız
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Mesajınızı buraya yazın"
              className="w-full p-2 mt-1 border border-gray-300 rounded-md"
              rows="4"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-[#DF6D2D] text-white py-2 rounded-md hover:bg-[#c35d00]"
              disabled={loading}
            >
              {loading ? "Gönderiliyor..." : "Gönder"}
            </button>
          </div>
          {success && <p className="text-green-600 mt-2">Mesajınız başarıyla gönderildi!</p>}
        </form>
      </div>
    </div>
  );
};

export default Contact;
