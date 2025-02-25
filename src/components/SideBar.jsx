"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa6";
import { BsReverseLayoutTextSidebarReverse } from "react-icons/bs";
import { RiMailAiLine, RiHome3Line } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Mobil İçin Menü Butonu */}
      <button
        className="lg:hidden fixed top-8 left-8 text-[#500073] text-3xl z-50"
        onClick={toggleSidebar}
      >
        <RxHamburgerMenu />
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed lg:sticky top-0 left-0 h-screen w-64 bg-[#500073] bg-opacity-90 p-5 flex flex-col items-center transition-transform duration-300 ease-in-out z-40 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        {/* Sidebar Başlık */}
        <h1 className="italic mt-36 text-2xl text-center rotate-[-12deg] text-white font-bold">
          Fatma Zehra <br /> Çetin
        </h1>

        {/* Menü */}
        <nav className="w-full mt-16">
          <ul>
            {[
              { href: "/home", label: "Anasayfa", icon: <RiHome3Line /> },
              { href: "/about", label: "Hakkımda", icon: <FaRegUser /> },
              { href: "/project", label: "Yazılım Projelerim", icon: <FaLaptopCode /> },
              { href: "/blog", label: "Blog", icon: <BsReverseLayoutTextSidebarReverse /> },
              { href: "/contact", label: "İletişim", icon: <RiMailAiLine /> },
            ].map(({ href, label, icon }, index) => (
              <li
                key={href}
                className="my-5 opacity-0 animate-slideInLeft"
                style={{ animationDelay: `${index * 0.3}s` }} // Her biri 0.3s gecikmeli girecek
              >
                <Link
                  href={href}
                  className="flex items-center gap-3 text-lg hover:bg-[#DF6D2D] p-2 rounded-md transition-all duration-200 text-white hover:text-white"
                  onClick={() => setIsOpen(false)} // Link'e tıklayınca sidebar kapansın
                >
                  {icon}
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Footer */}
        <div className="sticky bottom-0 bg-gray-200 p-2 rounded-md w-full mt-auto">
          <h3 className="text-sm text-gray-700 text-center">
            © 2025 <span className="text-[#DF6D2D]">Fatma Zehra Çetin.</span> Tüm hakları saklıdır.
          </h3>
        </div>
      </aside>

      {/* Menü Açıkken Kapatmak İçin Boş Alan */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
};

export default SideBar;
