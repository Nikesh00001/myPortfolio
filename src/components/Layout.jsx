import React, { useState } from 'react'
import NavBar from './NavBar'
import { Outlet, useNavigate, } from 'react-router-dom'
import Footer from './Footer'
import { FaRegMessage } from "react-icons/fa6";
import Message from './Message';
import { FaInstagram, FaFacebook, FaLinkedin, FaYahoo, FaGithub } from "react-icons/fa";
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import { useMessage } from '../Context/MessageContext';

const Layout = () => {
  const{showMessage,setShowMessage}=useMessage();
  const [hover, setHover] = useState(false);
  const navigate = useNavigate();
  function handleMessage() {
    if (window.innerWidth < 600) {
      navigate('/message');
    }
    else {


      setShowMessage(true);
    }


  };
  function handlehover() {
    setHover(true);
  }
  function nextHoverHandle() {

    setHover(false);
  }
  return (
    <div className='bg-[#f3f2f2f1]'>
      <NavBar />
      <Outlet />

      <div className={`fixed  right-[0.3rem] w-[5rem] sm:w-[16rem] bottom-[4rem] flex flex-row justify-end gap-4.5 ${hover?'hidden':''} `} onClick={handleMessage}>
        <div className="hidden sm:flex items-center justify-center 
                sm:w-[10rem] sm:h-[3rem] p-3 sm:mt-2 
                bg-white rounded-2xl shadow-md 
                hover:shadow-lg hover:scale-105 
                transition-transform duration-300 ease-in-out cursor-pointer">
          <span className="font-medium text-gray-700">Chat with me 👋</span>
        </div>

        <div className=' bg-[#843ef3] w-[4rem] h-[4rem] rounded-full p-4 hover:w-[4.4rem] hover:h-[4.4rem] hover:p-5 hover:shadow-2xl' >
          <FaRegMessage size={'2rem'} color='white' />
        </div>
      </div>
      {
        showMessage && (
          <Message />
        )
      }
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>

  )
}

export default Layout