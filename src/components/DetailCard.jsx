import Image from "next/image";
import React from "react";

const DetailCard = ({ project, onClose }) => {
  if (!project) return null; // Eğer project yoksa hata almamak için

  return (
    <div className="flex flex-col md:flex-row items-center md:items-start bg-[#E5D9F2] shadow-lg rounded-lg p-6 max-w-5xl mx-auto">
      {/* Resim Alanı */}
      <Image
        className="object-cover my-auto w-full md:w-1/2 rounded-lg"
        src={project.image}
        width={400}
        height={250}
        alt={project.title}
      />

      {/* İçerik Alanı */}
      <div className="mt-4 md:mt-0 md:ml-6 w-full md:w-1/2">
        <h2 className="text-xl font-bold text-gray-800">{project.title}</h2>
        <p className="text-gray-600 mt-2">
          <strong>Proje Nedir?</strong> {project.comment}
        </p>
        <p className="text-gray-600 mt-2">
          <strong>Proje Detayı:</strong> {project.detail}
        </p>
        <p className="text-gray-600 mt-2">
          <strong>Github Linki:</strong>
          <a
            href={project.github}
            className="text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {project.github}
          </a>
        </p>

        {/* Geri Dön Butonu */}
        <button
          onClick={onClose}
          className="mt-6 px-6 py-2 bg-[#DF6D2D] text-white rounded-lg hover:bg-[#c45620] transition-all duration-300"
        >
          Geri Dön
        </button>
      </div>
    </div>
  );
};

export default DetailCard;
