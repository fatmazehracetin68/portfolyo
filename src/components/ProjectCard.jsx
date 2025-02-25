import Image from "next/image";
import React from "react";

const ProjectCard = ({ project, onClick }) => {
  return (
    <div
      className="p-2 border-2 border-[#500073] bg-white rounded-lg w-full max-w-md mx-auto flex flex-col shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden"
      onClick={onClick}
    >
      {/* Resim Alanı */}
      <div className="relative w-full h-56 overflow-hidden ">
        <Image
          src={project.image}
          alt={project.title}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 hover:scale-110"
        />
      </div>

      {/* İçerik Alanı */}
      <div className="p-4 flex flex-col flex-1">
        {/* Başlık */}
        <h3 className="text-xl font-bold text-[#500073] mb-2">{project.title}</h3>

        {/* Açıklama */}
        <p className="text-sm text-gray-600 flex-1">{project.text}</p>

        {/* Teknolojiler */}
        <div className="flex gap-3 mt-4">
          {(project.technologies || []).map((Icon, index) => (
            <div
              key={index}
              className="text-2xl text-[#500073] hover:text-[#DF6D2D] transition-colors duration-200"
            >
              <Icon />
            </div>
          ))}
        </div>
      </div>

      {/* Alt Çubuk (Opsiyonel) */}
      <div className="bg-[#DF6D2D] p-2 text-center">
        <span className="text-sm text-white font-medium">Detayları Gör</span>
      </div>
    </div>
  );
};

export default ProjectCard;
