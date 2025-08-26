import React, { useState } from 'react'
import { FaInstagram, FaFacebook, FaLinkedin, FaGithub} from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { useMessage } from '../Context/MessageContext';

const Home = () => {
  const{sideBar,setSideBar}=useMessage();
  const [description] = useState(
    "I'm a web developer passionate about creating smooth, responsive experiences with React. I also enjoy experimenting with FastAPI and MongoDB to expand my skills."
  );

  return (
    <section id="home" className="flex items-center min-h-screen px-2 sm:px-6 lg:px-1">
      
      {/* Sidebar UL (left middle side, unchanged) */}
     <ul className="hidden sm:flex flex-col items-center justify-center 
               transition-all duration-500 ease-in-out opacity-100 translate-x-0 
               bg-white shadow-[2px_4px_6px_rgba(0,0,0,0.2),2px_-4px_6px_rgba(0,0,0,0.2)] 
               w-12 sm:w-16 md:w-20 h-64 md:h-80 lg:h-96 
               text-2xl md:text-3xl lg:text-4xl gap-6 p-4 rounded ">
  <a href="https://www.instagram.com/nikesh_gautam1/"><li><FaInstagram /></li></a>
  <a href="https://www.facebook.com/Nikesh.Gautam.np/"><li><FaFacebook /></li></a>
  <a href="https://www.linkedin.com/in/nikesh-gautam-110018380/"><li><FaLinkedin /></li></a>
  <a href="https://github.com/Nikesh00001"><li><FaGithub /></li></a>
  <a href="nikeshgautam005@gmail.com"><li><SiGmail /></li></a>
</ul>


      {/* Main Content (styled similar to About) */}
      <div className="flex flex-col items-center text-center mx-auto gap-6 lg:gap-10 max-w-4xl">
        
        {/* Heading */}
        <div className="flex items-center text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-extrabold text-gray-900 font-mono">
            HEY, I'M NIKESH
          </h2>
        </div>
        
        {/* Description */}
        <p className="text-gray-700 font-sans text-base sm:text-lg md:text-xl lg:text-2xl 
                      max-w-3xl mx-auto leading-relaxed">
          {description}
        </p>

        {/* Button */}
        <a href="#projects">
          <button className="mt-6 sm:mt-8 lg:mt-10 px-8 py-3 sm:px-10 sm:py-4 
                           font-bold text-white text-lg sm:text-xl lg:text-2xl 
                           rounded-lg shadow-xl bg-[#843ef3] hover:bg-[#6d2cd8] transition">
          PROJECTS
        </button>
        </a>
      </div>
    </section>
  )
}

export default Home
