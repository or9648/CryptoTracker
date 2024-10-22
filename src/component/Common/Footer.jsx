// src/component/Common/Footer.jsx
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

function Footer() {
  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  return (
    <div
      className="flex flex-col md:flex-row justify-between items-center bg-black h-auto p-4 md:p-6"
      style={{
        background: "linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(31, 83, 198, 1) 0%, rgba(0, 212, 255, 1) 100%)",
        backgroundSize: "400% 400%",
        animation: "gradient 15s ease infinite",
      }}
    >
      <h2
        className="cursor-pointer text-center text-white text-xl md:text-2xl mb-2 md:mb-0"
        onClick={topFunction}
      >
        CryptoTracker<span className="text-blue-400">.</span>
      </h2>
      <div className="flex justify-center md:justify-end items-center gap-4">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FacebookIcon className="text-white text-2xl md:text-3xl transition-transform duration-200 hover:scale-125" />
        </a>
        <a href="mailto:omrastogi12@gmail.com">
          <EmailIcon className="text-white text-2xl md:text-3xl transition-transform duration-200 hover:scale-125" />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <TwitterIcon className="text-white text-2xl md:text-3xl transition-transform duration-200 hover:scale-125" />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <InstagramIcon className="text-white text-2xl md:text-3xl transition-transform duration-200 hover:scale-125" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
