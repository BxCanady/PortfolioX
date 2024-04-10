import React, { useState, useEffect } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import me from "../assets/me.png";
import { Link } from "react-scroll";

const Home = () => {
  const [isStacked, setIsStacked] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsStacked(window.innerWidth <= 768); // Change the threshold according to your design
    };

    window.addEventListener("resize", handleResize);

    // Call handleResize initially
    handleResize();

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div name="home" className="h-screen w-full bg-[#0a192f]">
      <div className="max-w-screen-lg mx-auto flex flex-col-reverse items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full md:w-1/2">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Software Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md m-4">
            I realized that scalability was not just a technical challenge ~ but
            a mindset.<br></br>
            My journey as a <strong>Software Developer</strong> has been a
            testament to the power of perseverance and the thrill of innovation.
          </p>
          {isStacked && (
            <img
              src={me}
              alt="my profile"
              className="animate-pulse:10% rounded-2xl mx-auto w-2/3 md:w-full m-4"
              style={{
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)", // Adjust the shadow properties as needed
              }}
            />
          )}
          <div>
            <Link
              to="about"
              smooth
              duration={500}
              className="animate-pulse group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              About Me
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight size={25} className="ml-3" />
              </span>
            </Link>
          </div>
        </div>
        {!isStacked && (
          <div className="md:w-1/2">
            <img
              src={me}
              alt="my profile"
              className="animate-pulse:10% rounded-2xl mx-auto w-2/3 md:w-full m-4"
              style={{
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)", // Adjust the shadow properties as needed
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
