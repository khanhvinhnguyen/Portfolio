import React from "react";
import projectData from "../../public/data/projects.json";
import { ProjectItem } from ".";

const Projects = () => {
  const projectList = Object.values(projectData);
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
