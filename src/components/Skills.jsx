import React, { useState, useEffect } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Skills = () => {
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
    <div name="skills" className="w-full h-screen bg-[#0a192f] text-gray-300">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className=" w-full flex justify-center items-center flex-col mb-7">
          <p className="text-4xl font-bold inline border-b-4 border-cyan-500 text-center ">
            Skills
          </p>
          <p className="py-4 text-2xl">
            I enjoy diving into and learning new things. Here's a list of
            technologies I've worked with
          </p>
        </div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <p className="my-4">REACT/JS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <p className="my-4">PYTHON</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <p className="my-4">TYPESCRIPT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <p className="my-4">JAVA</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <p className="my-4">HTML/CSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <p className="my-4">NODE JS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <p className="my-4">MONGO DB</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <p className="my-4">AWS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <p className="my-4">DJANGO</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <p className="my-4">NEXT.JS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <p className="my-4">API/REST/SOAP</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500;">
            <p className="my-4"> Postgres/GraphQl</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500;">
            <p className="my-4"> GIT/CIRCLE CI</p>
          </div>
          <div className="w-full bg-[#0a192f] h-100px bg-[#0a192f] text-gray-300"></div>
        </div>
        {!isStacked && ( // Conditionally render the link if not stacked
          <div>
            <Link
              to="work"
              smooth
              duration={500}
              className="animate-pulse group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer z-50"
            >
              Projects
              <span className="group-hover:rotate-90 duration-300 ">
                <HiArrowNarrowRight size={25} className="ml-3 z-50" />
              </span>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Skills;
