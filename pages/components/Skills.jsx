import React from "react";
import Image from "next/image";
import SkillsButton from "../SkillsButton";

const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#4cd1ca]">
          Skills
        </p>
        <h2 className="py-4">What I Can Do</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <SkillsButton title="HTML" fileName="html" />
          <SkillsButton title="CSS" fileName="css" />
          <SkillsButton title="JavaScript" fileName="javascript" />
          <SkillsButton title="Git" fileName="git" />
          <SkillsButton title="Java" fileName="java" />
          <SkillsButton title="Python" fileName="python" />
          <SkillsButton title="React" fileName="react" />
          <SkillsButton title="Firebase" fileName="firebase" />
          <SkillsButton title="Next" fileName="nextjs" />
          <SkillsButton title="Tailwind" fileName="tailwind" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
