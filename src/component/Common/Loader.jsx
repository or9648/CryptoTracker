// src/component/Common/Loader.jsx
import React from 'react';

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="animate-spin h-10 w-10 border-4 border-t-transparent border-blue-500 rounded-full"></div>
      <p className="ml-2 text-white">Loading...</p>
    </div>
  );
};

export default Loader;
