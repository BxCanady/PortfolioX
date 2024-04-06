import React from "react";
import { Link } from "react-scroll";
import { HiArrowNarrowRight } from "react-icons/hi";

const About = () => {
  return (
    <div
      name="about"
      id="about"
      className="w-full h-screen bg-[#0a192f] text-gray-300"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="py-16 rounded-md bg-cyan-800 flex flex-col justify-center items-center w-4/6">
          <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 mb-4">
            <div className="sm:text-right pb-8 pl-4">
              <p className="text-4xl font-bold inline border-b-4 border-cyan-500">
                About
              </p>
            </div>
            <div></div>
          </div>
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
            <div className="sm:text-right text-4xl font-bold">
              <p>
                Hi. I'm Brandon, nice to meet you. Please take a look around.
              </p>
            </div>
            <div>
              <p>
                I'm a Software Developer with an education in
                Software Engineering from Southern New Hampshire University.
                Proficient in the MERN stack (MongoDB, Express.js, React,
                Node.js) with hands-on experience in utilizing associated
                frameworks such as Redux and Next.js.
              </p>
              <p>
                I'm a quick learner adept at mastering new languages like
                Python and Java. Eager to leverage expertise in software
                development trends to contribute to dynamic projects and
                further advance my career. In addition to software development,
                I am also an IT Specialist and Data Analyst.
              </p>
            </div>
          </div>
          <div>
            <Link
              to="skills"
              smooth
              duration={500}
              className="animate-pulse group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Skills
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight size={25} className="ml-3" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
