import React from 'react';
import { Link } from 'react-router-dom';
import TemporaryDrawer from '../Common/Temp'; // Assuming temp.jsx is the drawer component
import Button from '@mui/material/Button'; // Import Button from Material-UI

function Header() {
  return (
    <div className="bg-black text-white h-20 sticky top-0 flex justify-between items-center w-full px-6 shadow-lg z-50">
      <h1 className="font-bold text-3xl">
        Cryptotracker<span className="text-blue-800">.</span>
      </h1>

      {/* Show ul on screens larger than 800px, hide on smaller */}
      <ul className="hidden md:flex gap-6 text-xl cursor-pointer">
        <li className="hover:text-gray-400 transition-all">
          <Link to="/">Home</Link>
        </li>
        <li className="hover:text-gray-400 transition-all">
          <Link to="/compare">Compare</Link>
        </li>
        <li className="hover:text-gray-400 transition-all">
          <Link to="/wishlist">Wishlist</Link>
        </li>
        <li>
          {/* Dashboard as a Button */}
          <Link to="/dashboard" style={{ textDecoration: 'none' }}> {/* Prevent underline on Link */}
            <Button
              variant="contained"
              sx={{
                backgroundColor: 'blue', // Change to your desired color
                color: 'white',
                '&:hover': {
                  backgroundColor: 'darkblue', // Darker color on hover
                  boxShadow: '0 0 10px 2px rgba(0, 0, 255, 0.5)', // Glowing blue shadow
                },
                borderRadius: '5px', // Adjust border radius
                padding: '10px 20px', // Adjust padding
              }}
            >
              Dashboard
            </Button>
          </Link>
        </li>
      </ul>

      {/* Show TemporaryDrawer on screens smaller than 800px */}
      <div className="md:hidden">
        <TemporaryDrawer />
      </div>
    </div>
  );
}

export default Header;
