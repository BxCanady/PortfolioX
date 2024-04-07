import React, { useEffect } from 'react';


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
    <div  name="comments" className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
      <div className="comments-container" style={{ marginTop: '50px' }}>
        <div className="w-full h-screen bg-[#0a192f] text-gray-300">
          <div id="disqus_thread" className="max-w-[1000px] mx-auto"></div>
        </div>
      </div>
    </div>
  );
};

export default Comments;
