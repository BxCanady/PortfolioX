import React, { useEffect } from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from "react-scroll";

const Comments = () => {
  useEffect(() => {
    const loadDisqus = () => {
      window.disqus_config = function () {
        this.page.url = window.location.href;
        this.page.identifier = window.location.pathname;
      };
      const script = document.createElement('script');
      script.src = 'https://bcanady.disqus.com/embed.js';
      script.setAttribute('data-timestamp', +new Date());
      (document.head || document.body).appendChild(script);
    };

    loadDisqus();

    // Clean up function to remove Disqus script when component unmounts
    return () => {
      // Remove Disqus thread
      const disqusThread = document.getElementById('disqus_thread');
      if (disqusThread) {
        disqusThread.innerHTML = '';
      }

      // Remove Disqus script
      const disqusScript = document.querySelector('script[src^="https://bcanady.disqus.com/embed.js"]');
      if (disqusScript) {
        disqusScript.parentNode.removeChild(disqusScript);
      }
    };
  }, []);

  return (
<div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
    <div className="comments-container"  style={{ marginTop: '50px' }} >

      <div name="comments" className="w-full h-screen bg-[#0a192f] text-gray-300">
        <div id="disqus_thread" className="max-w-[1000px] mx-auto"></div>
        <div>
                                              <Link
                                                to="bloglist"
                                                smooth
                                                duration={500}
                                                className="animate-pulse group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
                                              >
                                               Blogs
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

export default Comments;
