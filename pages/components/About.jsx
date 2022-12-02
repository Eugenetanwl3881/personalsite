import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#4cd1ca]">
            About
          </p>
          <h2 className="py-4">Hi there! I'm Eugene</h2>
          <p className="py-2 text-gray-800">Thank you for visiting my site</p>
          <p className="py-2 text-gray-800">
            I am a Year 2 Computer Science Student studying at the National
            University of Singapore. I am a curious learner by nature and like
            to dabble around with things to learn and pick up new skills.
            Delving into the world of programming has given me this opportunity
            to constantly experiment, learn and pick up new skills. I am a firm
            believer of continuous learning and hence am excited about what the
            vast field of technology has to offer. In fact, this is my first
            time creating my personal site and I styled it with Tailwind CSS
            which I have just picked up. There are still many exciting
            frameworks that I have discovered while building this site as well
            which I plan to dabble with so do keep a look out for that as well.
          </p>
          <p className="py-2 text-gray-800">
            During my free time, I also enjoy outdoor activities like hiking and
            running. On the creative side of things, I do play the guitar as
            well. Some of my favourite musicians who inspire me include John
            Mayer, James Bay and Alicia Keys.
          </p>
          <p className="py-2 text-gray-600 underline cursor-pointer">
            <a
              href="https://github.com/Eugenetanwl3881"
              target="_blank"
              rel="noopener noreferrer"
            >
              Check out some of my projects
            </a>
          </p>
        </div>
        <div className="w-full h-auto m-auto rounded-xl shadow-lg shadow-teal-400 flex items-center justify-center p-4 hover:scale-110 ease-in duration-200">
          <Image
            src="/../public/assets/eugenetanwl3881.png"
            alt="My picture"
            width="0"
            height="0"
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
