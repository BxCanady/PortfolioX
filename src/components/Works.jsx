import React, { useState, useEffect } from 'react';
import awsp from '../assets/awsp.png';
import tsxx from '../assets/tsxx.png';
import docman from '../assets/docman.gif';
import next from '../assets/next.png';
import socialapp from '../assets/socialapp.gif';
import typescript from '../assets/typescript.gif';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from "react-scroll";
import ComingSoon from './ComingSoon';

const Works = () => {
const [showComingSoon, setShowComingSoon] = useState(false); // State to manage showing the ComingSoon component

  const handleDemoClick = () => {
     setShowComingSoon(true);
   };

   useEffect(() => {
     if (showComingSoon) {
       const timeout = setTimeout(() => {
         setShowComingSoon(false);
       }, 5000);

       return () => clearTimeout(timeout);
     }
   }, [showComingSoon]);

  return (
    <div name="work" className="w-full h-screen bg-[#0a192f] text-gray-300">
    {showComingSoon ? ( // Conditionally render the ComingSoon component
            <ComingSoon />
          ) : (
      <div className="max-w-[1000px] mx-auto p-4">
        <div className="pb-8 w-full flex justify-center items-center flex-col">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-cyan-500">Work</p>
          <p className="py-6 text-2xl">Check out some of my most recent work </p>
          <p className="py-6 text-1xl text-blue-400">(:hover to get a glimpse)</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">

        <div
                    style={{ backgroundImage: `url(${next})` }}
                    className="shadow-lg shadow-[#040c16] group container rounded-md flex  justify-center items-center mx-auto content-div relative transition-all duration-300 hover:w-[400px] hover:h-[400px]  z-20  "
                  >
                    <div className="absolute inset-0 flex justify-center items-center flex-col opacity-0 group-hover:opacity-100 z-20 ">
                      <p className="text-center font-bold text-lg text-green-400">Ecommerce Site built with Next.js, Shopify & Stripe API</p>
                      <div className="pt-8 text-center">
                        <a href="https://www.socialstatuspgh.com"
                         target="_blank" rel="noopener noreferrer"
                        >
                          <button className="animate-pulse group text-white px-4 py-3 m-2 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
                            Demo
                          </button>
                        </a>
                        <a href="/"
                         target="_blank" rel="noopener noreferrer"
                        >
                          <button className="animate-pulse group text-white px-4 py-3 m-2 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
                            Code
                          </button>
                        </a>
                      </div>
                    </div>
                    <div className="absolute inset-0 rounded-md flex bg-auto bg-center opacity-0 group-hover:opacity-100" style={{ backgroundImage: `url(${socialapp})`,
                      backgroundSize: 'contain', backgroundRepeat: 'no-repeat', marginTop: '-420px' }}></div>
                  </div>

          <div
            style={{ backgroundImage: `url(${tsxx})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto  content-div  relative transition-all duration-300 hover:w-[400px] hover:h-[400px] z-10 "
          >
            <div className=" inset-0 flex justify-center items-center flex-col opacity-0 group-hover:opacity-100 z-10">
              <p className="text-center font-bold text-lg text-green-400">Typescript Inventory Management App</p>
              <p className="text-center font-bold text-lg text-green-400">Built with Refine framework for CRUD-heavy web applications</p>
              <div className="pt-8 text-center">
                 <button className="animate-pulse group text-white px-4 py-3 m-2 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
                                        onClick={handleDemoClick}
                                        >
                                          Demo
                                        </button>
                <a href="/"
                 target="_blank" rel="noopener noreferrer"
                >
                  <button className="animate-pulse group text-white px-4 py-3 m-2 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
                    Code
                  </button>
                </a>
              </div>
            </div>
            <div className="absolute inset-0 rounded-md flex bg-auto bg-center opacity-0 group-hover:opacity-100 z=1" style={{ backgroundImage: `url(${typescript})`,
            backgroundSize: 'contain', backgroundRepeat: 'no-repeat', marginTop: '-485px'}}></div>
          </div>

         <div
                    style={{ backgroundImage: `url(${awsp})` }}
                    className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div relative transition-all duration-300 hover:w-[400px] hover:h-[400px]  "
                  >
                    <div className="absolute inset-0 flex justify-center items-center flex-col opacity-0 group-hover:opacity-100 z-10">
                      <p className="text-center font-bold text-lg text-green-400">Python document reformatter chart visualizer built with Posgres, AWS Amplify & Lambda and React for frontend</p>
                      <div className="pt-8 text-center">

                          <button className="animate-pulse group text-white px-4 py-3 m-2 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
                          onClick={handleDemoClick}
                          >
                            Demo
                          </button>

                        <a href="/"
                         target="_blank" rel="noopener noreferrer"
                        >
                          <button className="animate-pulse group text-white px-4 py-3 m-2 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
                            Code
                          </button>
                        </a>
                      </div>
                    </div>
                    <div className="absolute inset-0 rounded-md flex bg-auto bg-center opacity-0 group-hover:opacity-100 " style={{ backgroundImage: `url(${docman})`,
                      backgroundSize: 'contain', backgroundRepeat: 'no-repeat', marginTop: '-525px'}}></div>
                  </div>
        </div>
         <div>
                                  <Link
                                    to="bloglist"
                                    smooth
                                    duration={500}
                                    className="animate-pulse group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer z-50"
                                  >
                                    Blogs
                                    <span className="group-hover:rotate-90 duration-300 ">
                                      <HiArrowNarrowRight size={25} className="ml-3 z-50" />
                                    </span>
                                  </Link>
                               </div>
                                       </div>
                                     )}
                                   </div>
                                 );
                               };

export default Works;