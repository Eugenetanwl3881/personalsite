import React from "react";
import Image from "next/image";
import SkillsButton from "../SkillsButton";
import htmlImg from "../../public/assets/html.png";
import cssImg from "../../public/assets/css.png";
import javascriptImg from "../../public/assets/javascript.png";
import gitImg from "../../public/assets/git.png";
import javaImg from "../../public/assets/java.png";
import pythonImg from "../../public/assets/python.png";
import reactImg from "../../public/assets/react.png";
import firebaseImg from "../../public/assets/firebase.png";
import nextjsImg from "../../public/assets/nextjs.png";
import tailwindImg from "../../public/assets/tailwind.png";

const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#4cd1ca]">
          Skills
        </p>
        <h2 className="py-4">What I Can Do</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <SkillsButton title="HTML" img={htmlImg} fileName="HTML" />
          <SkillsButton title="CSS" img={cssImg} fileName="CSS" />
          <SkillsButton
            title="JavaScript"
            img={javascriptImg}
            fileName="Javascript"
          />
          <SkillsButton title="Git" img={gitImg} fileName="Git" />
          <SkillsButton title="Java" img={javaImg} fileName="Java" />
          <SkillsButton title="Python" img={pythonImg} fileName="Python" />
          <SkillsButton title="React" img={reactImg} fileName="React" />
          <SkillsButton
            title="Firebase"
            img={firebaseImg}
            fileName="Firebase"
          />
          <SkillsButton title="Next" img={nextjsImg} fileName="Nextjs" />
          <SkillsButton
            title="Tailwind"
            img={tailwindImg}
            fileName="Tailwind"
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
