"use client";
import { FC, useState } from "react";

type Props = {
  projects: string[];
};

const ProjectList: FC<Props> = ({ projects }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <ul className="mt-5">
      {projects.map((project) => (
        <li key={project} className="hover:bg-slate-300">
          <button
            className="py-4 pl-7 w-full h-full hover:bg-slate-300 text-left"
            onClick={() => setIsOpen(!isOpen)}
          >
            {project}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ProjectList;
