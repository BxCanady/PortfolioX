import React from 'react';

const Spacer = ({ className, height }) => {
  return <div className={`h-screen w-full bg-[#0a192f] h-${height} ${className}`} />;
};

export default Spacer;