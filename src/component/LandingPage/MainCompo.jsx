import React from 'react';
import Header from '../Common/Header';
import Footer from '../Common/Footer';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../../App.css';
import { motion } from 'framer-motion';

function MainCompo() {
  return (
    <div className="bg-black h-full select-none"> {/* Prevent selection for the entire component */}
      {/* Flex column on small screens, flex row on larger screens */}
      <div className="flex flex-col md:flex-row justify-between items-center p-6 md:p-12">
        <div className="flex flex-col space-y-4 text-center md:text-left">
          {/* Motion applied to h1 for animation */}
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-blue-500 text-stroke transition-all duration-300 hover:text-white"
            initial={{ opacity: 0, y: 50 }} // Start hidden and slightly above
            animate={{ opacity: 1, y: 0 }} // Animate to visible and in position
            transition={{ duration: 0.5 }} // Smooth animation
          >
            Crypto Tracker
          </motion.h1>

          <motion.h2 
            initial={{ opacity: 0, y: 40 }} // Start hidden and slightly above
            animate={{ opacity: 1, y: 0 }} // Animate to visible and in position
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-4xl md:text-6xl mb-2 mt-3 font-bold text-gray-300"
          >
            Real Time
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 40 }} // Start hidden and slightly above
            animate={{ opacity: 1, y: 0 }} // Animate to visible and in position
            transition={{ duration: 1, delay: 0.5 }}
            className="text-lg text-gray-400 max-w-md mx-auto md:mx-0 mt-2 mb-3"
          >
            Stay updated with the latest trends in cryptocurrency and track your favorite coins in real time.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 40 }} // Start hidden and slightly above
            animate={{ opacity: 1, y: 0 }} // Animate to visible and in position
            transition={{ duration: 1, delay: 0.5 }}
            className="flex justify-center md:justify-start gap-5 space-x-4 mt-6"
          >
            {/* Link to the Dashboard page */}
            <Link to="/dashboard" style={{ textDecoration: 'none' }}> {/* Prevent underline on link */}
              <button className="bg-blue-500 text-white px-4 py-2 w-36 rounded-xl shadow-md transition-all duration-300 transform hover:scale-105 hover:bg-white hover:text-blue-500">
                Dashboard
              </button>
            </Link>
            <button className="bg-black border-2 border-blue-500 text-blue-500 px-4 py-2 w-36 rounded-xl shadow-md transition-all duration-300 transform hover:scale-105 hover:text-blue-500 hover:bg-white">
              Share
            </button>
          </motion.div>
        </div>

        {/* Image Section */}
        <div className="relative w-full md:w-1/3 flex justify-center items-center mt-8 md:mt-0"> {/* Set full width for small screens */}
          <div className="relative h-[300px] md:h-[600px] w-[80%] md:w-full"> {/* Adjust height and width for responsiveness */}
            <motion.img 
              initial={{ y: -10 }} // Start hidden and slightly above
              animate={{ y: 10 }} // Animate to visible and in position
              transition={{ duration: 2, type: "smooth", repeatType: "mirror", repeat: Infinity }}
              src={require('../../assests/iphone.png')} // Ensure correct path for images
              alt="Crypto" 
              className="absolute z-40 h-full md:h-[500px] object-cover" 
            />
            <img 
              src={require('../../assests/gradient.png')} // Ensure correct path for images
              alt="Gradient" 
              className="absolute top-2 left-2 h-full md:h-[500px] object-cover" 
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainCompo;
