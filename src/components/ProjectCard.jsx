import Image from "next/image";
import React from "react";

const ProjectCard = ({ project, onClick }) => {
  return (
    <div
      className="border-4 border-[#500073] bg-[#E5D9F2] rounded-md w-full max-w-md mx-auto flex flex-col shadow-xl justify-start items-center hover:scale-105 transition-transform duration-300 cursor-pointer"
      onClick={onClick}
    >
      <Image
        className="object-contain w-full p-3 rounded-md "
        src={project.image}
        width={400}
        height={150}
        alt={project.title}
      />
      <div className="py-1 px-4 text-start rounded-b-md bg-[#E5D9F2] w-full">
        <h3 className="sm:text-base text-2xl font-bold text-gray-800 my-2">{project.title}</h3>
        <h3>{project.text}</h3>
      </div>
      <div className="flex gap-3 text-3xl mt-2 bg-[#DF6D2D]  p-2 rounded-md">
        {(project.technologies || []).map((Icon, index) => (
          <Icon key={index} />
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
