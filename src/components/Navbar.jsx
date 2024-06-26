import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full z-50 bg-[#0a192f] text-gray-300">
      <div>
        <h1
          className="animate-pulse group font-thin text-2xl italic font-serif"
          style={{ marginLeft: "50px" }}
        >
          Brandon X. Canady
        </h1>
      </div>
      <div className="max-w-[1000px] mx-auto px-4">
        <div className="flex justify-between items-center h-[80px]">
          {/* menu */}
          <ul className="hidden md:flex gap-x-8">
            <li>
              <Link
                to="home"
                smooth={true}
                duration={500}
                className="hover:text-blue-500"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="about"
                smooth={true}
                duration={500}
                className="hover:text-blue-500"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="skills"
                smooth={true}
                duration={500}
                className="hover:text-blue-500"
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                to="work"
                smooth={true}
                duration={500}
                className="hover:text-blue-500"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="bloglist"
                smooth={true}
                duration={500}
                className="hover:text-blue-500"
              >
                Blogs
              </Link>
            </li>
            <li>
              <Link
                to="comments"
                smooth={true}
                duration={500}
                className="hover:text-blue-500"
              >
                Comments
              </Link>
            </li>
          </ul>
          {/* Hamburger */}
          <div onClick={handleClick} className="md:hidden z-50">
            {!nav ? <FaBars /> : <FaTimes />}
          </div>
        </div>
        {/* Mobile menu */}
        <ul
          className={
            !nav
              ? "hidden"
              : "absolute top-[80px] left-0 w-full bg-[#0a192f] flex flex-col justify-center items-center"
          }
        >
          <li className="py-6 text-4xl">
            <Link onClick={handleClick} to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li className="py-6 text-4xl">
            <Link onClick={handleClick} to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li className="py-6 text-4xl">
            <Link
              onClick={handleClick}
              to="skills"
              smooth={true}
              duration={500}
            >
              Skills
            </Link>
          </li>
          <li className="py-6 text-4xl">
            <Link onClick={handleClick} to="work" smooth={true} duration={500}>
              Work
            </Link>
          </li>
          <li className="py-6 text-4xl">
            <Link
              onClick={handleClick}
              to="bloglist"
              smooth={true}
              duration={500}
            >
              Blogs
            </Link>
          </li>
          <li className="py-6 text-4xl">
            <a
              href="https://www.linkedin.com/in/brandon-canady-252-"
              target="_blank"
              rel="noopener noreferrer"
            >
              Linkedin
            </a>
          </li>
          <li className="py-6 text-4xl">
            <Link
              onClick={handleClick}
              to="comments"
              smooth={true}
              duration={500}
            >
              Comments
            </Link>
          </li>
        </ul>
      </div>
      {/* Social icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/brandon-canady-252-"
              target="_blank"
              rel="noopener noreferrer"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/BxCanady"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="mailto:canadybrandon82@aol.com"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="/"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
