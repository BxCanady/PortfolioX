import React from 'react';
import bgsoon from '../assets/bgsoon.gif';

const ComingSoon = () => {
    return (
        <div name="soon" className="relative w-full h-screen">
            <img src={bgsoon} alt="Coming Soon" className="object-contain w-full h-full absolute top-0 left-auto z-0" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-10">
                <h1 className="text-2xl md:text-4xl font-bold mb-4">Coming Soon</h1>



            </div>
        </div>
    );
};

export default ComingSoon;
