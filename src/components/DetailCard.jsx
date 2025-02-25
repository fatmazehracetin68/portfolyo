import Image from "next/image";
import React from "react";

const DetailCard = ({ project, onClose }) => {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start bg-white shadow-2xl rounded-lg p-6 max-w-5xl mx-auto border-2 border-[#500073]">
      {/* Resim Alanı */}
      <div className="w-full md:w-1/2 rounded-lg overflow-hidden">
        <Image
          className="object-cover w-full h-64 md:h-auto"
          src={project.image}
          width={500}
          height={300}
          alt={project.title}
        />
      </div>

      {/* İçerik Alanı */}
      <div className="mt-6 md:mt-0 md:ml-6 w-full md:w-1/2">
        {/* Başlık */}
        <h2 className="text-2xl font-bold text-[#500073]">{project.title}</h2>

        {/* Proje Açıklamaları */}
        <div className="mt-4 space-y-4">
          <p className="text-gray-700">
            <strong className="text-[#DF6D2D]">Proje Nedir?</strong> {project.comment}
          </p>
          <p className="text-gray-700">
            <strong className="text-[#DF6D2D]">Proje Detayı:</strong> {project.detail}
          </p>
          <p className="text-gray-700">
            <strong className="text-[#DF6D2D]">Github Linki:</strong>{" "}
            <a
              href={project.github}
              className="text-[#500073] hover:text-[#DF6D2D] hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.github}
            </a>
          </p>
          <p className="text-gray-700">
            <strong className="text-[#DF6D2D]">İncele:</strong>{" "}
            <a
              href={project.link}
              className="text-[#500073] hover:text-[#DF6D2D] hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.link}
            </a>
          </p>
        </div>

        {/* Geri Dön Butonu */}
        <button
          onClick={onClose}
          className="mt-6 px-6 py-2 bg-[#DF6D2D] text-white rounded-lg hover:bg-[#3a0054] transition-all duration-300"
        >
          Geri Dön
        </button>
      </div>
    </div>
  );
};

export default DetailCard;
