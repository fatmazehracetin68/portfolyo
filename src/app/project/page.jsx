"use client";
import DetailCard from "@/components/DetailCard";
import ProjectCard from "@/components/ProjectCard";
import React, { useState } from "react";
import { FaReact } from "react-icons/fa";
import { DiFirebase } from "react-icons/di";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiFormik } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript } from "react-icons/si";

const projects = [
  {
    id: 1,
    title: "patiNerede",
    text: "Kaybolan hayvanları sahipleri ile buluşturmak amacıyla oluşturulmuş bir projedir",
    comment:
      "Kaybolan hayvanları sahipleri ile buluşturmak amacıyla oluşturulmuş bir projedir.Anasayfa, Kayıp Hayvanlar, Bulunan Hayvanlar, Yuvasına Kavuşanlar, KayıpVar Formu ve Kayıp Buldum Formundan oluşmaktadır. Kaybım Var sayfasında doldurulan formdaki veriler Kayıplar sayfasına düşer. Kayıp buldum formundaki veriler ise bulunan hayvanlar sayfasına düşer. Bulunan hayvanlar sayfasındaki hayvanın sahibi bulunduysa butona tıklanır ve hayvan artık yuvasına kavuşanlar sayfasında gösterilir.",
    image: "/patinerede1.png",
    detail:
      "Proje esnasında React , stillendirmeler için Tailwind , verileri kaydetmek için Firebase ve form verilerini doğrulamak için Yup kullanılmıştır.",
    github: "https://github.com/fatmazehracetin68/patiNerede",
    technologies: [FaReact, DiFirebase, RiTailwindCssFill, SiFormik],
    link: "https://patinerede.vercel.app",
  },
  {
    id: 2,
    title: "KICKS Shoes",
    text: "Ayakkabı satışı yapan bir site için oluşturulmuş projedir",
    image: "/shose.png",
    detail:
      "React Query ile oluşturulmuş, Tailwind ile stillendirilmiş bu proje bir ayakkabı satış sitesidir. Anasayfada ayakkabılar için filtreleme özellikleri bulunmaktadır. Her ayakkabı için detay sayfası bulunmakta ve bu sayfada ayakkabı görselleri, numara, renk , açıklama gibi özellikler yer almaktadır.",
    github: "https://github.com/fatmazehracetin68/shoes",
    technologies: [FaReact, RiTailwindCssFill, SiTypescript],
  },
  {
    id: 3,
    title: "Cafe Menü",
    text: "Hamburger ürünleri satan bir cafeye ait menüdür.",
    image: "/cafe.png",
    detail:
      "HTML CSS ve React kullanarak oluşturmuş olduğum Burger Shop projemde bir Burger Restorantına ait burger çeşitleri tanıtılmış, fiyat bilgisi sunulan bir menü oluşturulmuş ve müşterilerle iletişime geçecekleri bir form bölümü oluşturulmuştur.",
    github: "https://github.com/fatmazehracetin68/cafe-menu",
    technologies: [FaHtml5, FaCss3Alt, IoLogoJavascript],
  },
];

const Project = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="">
      <h1 className="text-[#DF6D2D] text-center font-bold py-10 text-2xl md:text-3xl">
        PROJELERİM
      </h1>
      {selectedProject ? (
        <DetailCard project={selectedProject} onClose={() => setSelectedProject(null)} />
      ) : (
        <div className="container mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Project;
