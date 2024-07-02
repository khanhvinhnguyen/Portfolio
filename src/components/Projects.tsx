"use client";
import React, { useEffect, useState } from "react";
import { ProjectItem } from ".";

interface Project {
  title: string;
  bgImg: string;
  projURL: string;
  mainTech: string;
}

const Projects = () => {
  const [projectList, setProjectList] = useState<Project[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const response = await fetch("/assets/data/projects.json");
      const data = await response.json();
      setProjectList(Object.values(data));
    };

    fetchProjects();
  }, []);

  return (
    <div
      id="projects"
      className={projectList.length <= 2 ? "w-full h-screen" : "w-full"}
    >
      <div className="max-w-[1240px] mx-auto px-2 py-28">
        <p className="text-xl text-[#5651e5] uppercase tracking-widest">
          Projects
        </p>
        <h2 className="py-4 uppercase">What I've Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projectList.map((project, index) => (
            <ProjectItem
              key={index}
              title={project.title}
              bgImg={project.bgImg}
              projURL={project.projURL}
              mainTech={project.mainTech}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
