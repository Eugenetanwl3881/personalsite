import React from "react";
import ProjectItem from "./ProjectItem";
import foodremImg from "../../public/assets/projects/foodrem.png";
import maybestocksImg from "../../public/assets/projects/maybestocks.png";
import bobImg from "../../public/assets/projects/bob.png";
import uselesstranslatorImg from "../../public/assets/projects/uselesstranslator.png";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#4cd1ca]">
          Projects
        </p>
        <h2 className="py-4">Stuff I have worked on </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="FoodRem: Inventory Management"
            backgroundImg={foodremImg}
            builtWith="Built with Java"
            projectUrl="https://github.com/Eugenetanwl3881/tp/tree/master"
          />
          <ProjectItem
            title="MaybeStocks: Stock Trading App"
            backgroundImg={maybestocksImg}
            builtWith="React"
            projectUrl="https://github.com/Eugenetanwl3881/MaybeStocks"
          />
          <ProjectItem
            title="Bob: Your Personal Chat Bot"
            backgroundImg={bobImg}
            builtWith="Built with Java"
            projectUrl="https://github.com/Eugenetanwl3881/ip"
          />
          <ProjectItem
            title="Useless Translator"
            backgroundImg={uselesstranslatorImg}
            builtWith="React"
            projectUrl="https://github.com/3s1g/useless-translator"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
