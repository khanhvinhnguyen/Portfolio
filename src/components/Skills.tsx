import React from "react";

import SkillItem from "./SkillItem";

import { IconType } from "react-icons";
import { BiLogoPostgresql } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs } from "react-icons/fa";
import { GrGraphQl } from "react-icons/gr";
import { IoLogoJavascript } from "react-icons/io5";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiNestjs } from "react-icons/si";
import { TbBrandThreejs } from "react-icons/tb";

// https://react-icons.github.io/react-icons/search/#q=
const skillList: {
  img: IconType;
  name: string;
}[] = [
  { img: FaHtml5, name: "HTML5" },
  { img: FaCss3Alt, name: "CSS3" },
  { img: IoLogoJavascript, name: "JavaScript" },
  { img: FaReact, name: "ReactJS" },
  { img: RiNextjsFill, name: "NextJS" },
  { img: RiTailwindCssFill, name: "TailwindCSS" },
  { img: FaNodeJs, name: "NodeJS" },
  { img: SiNestjs, name: "NestJS" },
  { img: TbBrandThreejs, name: "ThreeJS" },
  { img: BiLogoPostgresql, name: "PostgreSQL" },
  { img: GrGraphQl, name: "GraphQL" },
  { img: BsGithub, name: "Github" },
];

const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] h-full mx-auto flex flex-col justify-center">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Skills
        </p>
        <h2 className="py-4 capitalize">What I Can Do</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillList.map((skill, index) => {
            const Icon = skill.img;
            const nameSkill = skill.name;

            return <SkillItem iconSkill={Icon} nameSkill={nameSkill} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
