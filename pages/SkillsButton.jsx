import React from "react";
import Image from "next/image";

const SkillsButton = ({ title, img, fileName }) => {
  return (
    <div className="p-6 shadow-xl shadow-teal-400 rounded-xl hover:scale-105 ease-in duration-200">
      <div className="grid grid-cols-2 gap-4 justify-center items-center">
        <div className="m-auto">
          <Image width="64" height="64" src={img} alt={fileName} />
        </div>
        <div className="flex-col items-center justify-center">
          <h3>{title}</h3>
        </div>
      </div>
    </div>
  );
};

export default SkillsButton;
