"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa6";
import { BsReverseLayoutTextSidebarReverse } from "react-icons/bs";
import { RiMailAiLine } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";
import { RiHome3Line } from "react-icons/ri";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="relative min-h-screen bg-[#500073]">
        <div
          className="lg:hidden text-3xl absolute top-4 left-4 text-white"
          onClick={toggleSidebar}
        >
          <RxHamburgerMenu />
        </div>

        <div
          className={`bg-[#500073] opacity-80  flex flex-col p-5 fixed top-0 left-0 h-full w-64 transition-all transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } lg:translate-x-0 lg:static lg:w-64 lg:h-auto`}
        >
          <div>
            <h1 className="italic mt-10 text-xl text-center rotate-[-12deg] text-white">
              Fatma Zehra <br /> Çetin
            </h1>
          </div>
          <div className="mt-48">
            <ul>
              <li className="my-5 text-lg flex items-center gap-3 hover:bg-[#DF6D2D] p-2 rounded-md transition-all text-white">
                <RiHome3Line />
                <Link href="/home">Anasayfa</Link>
              </li>
              <li className="my-5 text-lg flex items-center gap-3 hover:bg-[#DF6D2D] p-2 rounded-md transition-all text-white">
                <FaRegUser />
                <Link href="/about">Hakkımda</Link>
              </li>
              <li className="my-5 text-lg flex items-center gap-3 hover:bg-[#DF6D2D] p-2 rounded-md transition-all text-white">
                <FaLaptopCode />
                <Link href="/project">Yazılım Projelerim</Link>
              </li>
              <li className="my-5 text-lg flex items-center gap-3 hover:bg-[#DF6D2D] p-2 rounded-md transition-all text-white">
                <BsReverseLayoutTextSidebarReverse />
                <Link href="/blog">Blog</Link>
              </li>
              <li className="my-5 text-lg flex items-center gap-3 hover:bg-[#DF6D2D] p-2 rounded-md transition-all text-white">
                <RiMailAiLine />
                <Link href="/contact">İletişim</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
