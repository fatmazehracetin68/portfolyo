"use client";
import DetailCard from "@/components/DetailCard";
import ProjectCard from "@/components/ProjectCard";
import React, { useState } from "react";
import { FaReact } from "react-icons/fa";
import { DiFirebase } from "react-icons/di";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiFormik } from "react-icons/si";

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
  },
  {
    id: 2,
    title: "Cafe Menü",
    comment: "İhtiyaç sahiplerine gıda yardımı sağlamak için oluşturulmuş bir platformdur.",
    image: "/zekaoyunları.jpeg",
    detail:
      "HTML,CSS ve Javascript kullanılarak oluşturulmuş cafe menü projesidir. Seçilen menü türüne göre filtreleme yaparak menüleri getirmektedir. Responsive tasarıma sahiptir.",
    github: "https://github.com/fatmazehracetin68/cafe-menu",
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
