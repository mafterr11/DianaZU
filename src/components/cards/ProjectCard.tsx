import Image from "next/image";
import React from "react";

interface IProps {
  imageUrl: string;
  title: string;
  description?: string;
}

function ProjectCard({ imageUrl, title, description }: IProps) {
  return (
    <div className="rounded-[14px] px-[5px] transition-all duration-500 ease-in-out hover:-translate-y-2">
      <div className="bg-[#FFEBDB] px-[27px] py-4">
        <Image width={800} height={800} src={imageUrl} alt="service icon" />
      </div>
      <p className="my-4 mt-8 text-[19px] text-primary">{title}</p>
      <p className="my-4 text-[19px] font-semibold">{description}</p>
    </div>
  );
}

export default ProjectCard;
