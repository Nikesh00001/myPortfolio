import React from 'react';
import { FaInstagram, FaFacebook, FaLinkedin, FaGithub, FaYahoo } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-100 py-8 mt-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Copyright */}
        <p className="text-gray-600 text-sm sm:text-base">
          &copy; {new Date().getFullYear()} Nikesh Gautam. All rights reserved.
        </p>

        {/* Social Icons */}
        <div className="flex gap-4 text-gray-800 text-xl">
          <a href="https://www.instagram.com/nikesh_gautam1/" className="hover:text-[#843ef3] transition"><FaInstagram /></a>
          <a href="https://www.facebook.com/Nikesh.Gautam.np/" className="hover:text-[#843ef3] transition"><FaFacebook /></a>
          <a href="https://www.linkedin.com/in/nikesh-gautam-110018380/" className="hover:text-[#843ef3] transition"><FaLinkedin /></a>
          <a href="https://github.com/Nikesh00001" className="hover:text-[#843ef3] transition"><FaGithub /></a>
          <a href="#" className="hover:text-[#843ef3] transition"><FaYahoo /></a>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
