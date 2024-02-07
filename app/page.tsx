"use client"; 
import { useState } from "react";

import NewProject from '@/components/NewProject.jsx';

export default function Home() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined, 
    projects: []
  })

  function handleAddProject(projectData) {
    setProjectsState((prevState) => {
      const projectId = Math.random();
      const newProject = {
        ...projectData,
        id: projectId
      };

      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject]
      }
    })
  }

  function handleCancelProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined, 
      };
    });
  }

  return (
    <NewProject onAdd={handleAddProject} onCancel={handleCancelProject} />
  );
}
