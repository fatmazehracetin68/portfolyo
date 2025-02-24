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
  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Mobil İçin Menü Butonu */}
      <button
        className="lg:hidden fixed top-4 left-4 text-[#500073] text-3xl z-50"
        onClick={toggleSidebar}
      >
        <RxHamburgerMenu />
      </button>

      {/* Sidebar */}
      <aside
        className={`bg-[#500073] opacity-90 sticky top-0 left-0 min-h-screen w-64 p-5 transition-transform transform justify-between z-40 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:static`}
      >
        {/* Sidebar Başlık */}
        <h1 className="italic mt-10 text-xl text-center rotate-[-12deg] text-white">
          Fatma Zehra <br /> Çetin
        </h1>

        {/* Menü */}
        <nav className="mt-10">
          <ul className="fixed  translate-y-1/2">
            {[
              { href: "/home", label: "Anasayfa", icon: <RiHome3Line /> },
              { href: "/about", label: "Hakkımda", icon: <FaRegUser /> },
              { href: "/project", label: "Yazılım Projelerim", icon: <FaLaptopCode /> },
              { href: "/blog", label: "Blog", icon: <BsReverseLayoutTextSidebarReverse /> },
              { href: "/contact", label: "İletişim", icon: <RiMailAiLine /> },
            ].map(({ href, label, icon }) => (
              <li key={href} className="my-5">
                <Link
                  href={href}
                  className="flex items-center gap-3 text-lg hover:bg-[#DF6D2D] p-2 rounded-md transition-all text-white"
                >
                  {icon}
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default SideBar;
