"use client";
import { Project } from "@/app/page";
import { FC } from "react";

type Props = {
  projects: Project[];
  setSelected: (value: Project) => void;
};

const ProjectList: FC<Props> = ({ projects, setSelected }) => {
  return (
    <ul className="mt-5">
      {projects.map((project) => (
        <li key={project.title} className="hover:bg-slate-300">
          <button
            className="py-4 pl-7 w-full h-full hover:bg-slate-300 text-left"
            onClick={() => setSelected(project)}
          >
            {project.title}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ProjectList;
