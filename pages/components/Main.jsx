import React from "react";
import Typical from "react-typical";
import { useEffect, useState } from "react";
import ReactTyped from "react-typed";
import { FaEnvelope, FaFile, FaGithub, FaLinkedin } from "react-icons/fa";

const Main = () => {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            Welcome
          </p>
          <h1 className="py-4 text-gray-700">
            Hey there! I'm <span className="text-[#40acac]">Eugene</span>
          </h1>
          <h1 className="py-2 text-gray-700 flex">
            <p>
              I am a{" "}
              {domLoaded && (
                <ReactTyped
                  strings={[
                    "Computer Science Student 💻",
                    "Software Engineer 🔧",
                    "Tech Enthusiast ✌",
                    "Curious Learner 💡",
                    "Nature Lover 🌲",
                  ]}
                  typeSpeed={40}
                  backSpeed={60}
                  loop
                />
              )}
            </p>
          </h1>
          <p className="py-4 font-medium text-teal-600">
            Check out my experiences and projects from these links below!
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <a
              href="https://www.linkedin.com/in/eugenetanwl/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-teal-600 p-6 cursor-pointer hover:scale-125 ease-in duration-200">
                <FaLinkedin />
              </div>
            </a>
            <a
              href="https://github.com/Eugenetanwl3881"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-teal-600 p-6 cursor-pointer hover:scale-125 ease-in duration-200">
                <FaGithub />
              </div>
            </a>
            <a
              href="mailto:eugene.tan.wl@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-teal-600 p-6 cursor-pointer hover:scale-125 ease-in duration-200">
                <FaEnvelope />
              </div>
            </a>
            <a
              href="https://drive.google.com/file/d/1KMvI57P3RLxIgh-1ZibuVGotGgBmb6rI/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-teal-600 p-6 cursor-pointer hover:scale-125 ease-in duration-200">
                <FaFile />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
