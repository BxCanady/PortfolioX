import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { HiArrowNarrowRight } from "react-icons/hi";

const About = () => {
  const [isStacked, setIsStacked] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsStacked(window.innerWidth <= 768); // Adjust the breakpoint as needed
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      name="about"
      id="about"
      className="w-full min-h-screen bg-[#0a192f] text-gray-300 flex justify-center items-center"
    >
      <div className="max-w-screen-lg px-4 py-8 md:px-8 md:py-16 bg-cyan-800 rounded-md flex flex-col justify-center items-center w-full">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold mb-4 border-b-4 border-cyan-500">
            About
          </h2>
          <p className="text-2xl">
            Hi. I'm Brandon, nice to meet you. Please take a look around.
          </p>
        </div>
        <div className="max-w-screen-md md:w-full grid md:grid-cols-2 gap-8">
          <div className="text-center md:text-right">
            <p className="text-lg font-semibold mb-2">Software Developer</p>
            <p>
              I'm a Software Developer with an education in Software Engineering
              from Southern New Hampshire University. Proficient in the MERN
              stack (MongoDB, Express.js, React, Node.js) with hands-on
              experience in utilizing associated frameworks such as Redux and
              Next.js.
            </p>
          </div>
          <div className="text-center md:text-left">
            <p className="text-lg font-semibold mb-2">Quick Learner</p>
            <p>
              I'm a quick learner adept at mastering new languages like Python
              and Java. Eager to leverage expertise in software development
              trends to contribute to dynamic projects and further advance my
              career. In addition to software development, I am also an IT
              Specialist and Data Analyst.
            </p>
          </div>
        </div>
        {!isStacked && (
          <div className="mt-8">
            <Link
              to="skills"
              smooth
              duration={500}
              className="animate-pulse group text-white w-fit px-6 py-3 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Skills
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight size={25} className="ml-3" />
              </span>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default About;
