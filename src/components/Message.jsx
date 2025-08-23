import React, { useState } from 'react';
import { IoMdSend } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaChevronDown } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { IoChatboxSharp } from "react-icons/io5";
import { useMessage } from '../Context/MessageContext';

const Message = () => {
  const { showMessage, setShowMessage } = useMessage();
  const [home, setHome] = useState(true);
  const [chat, setChat] = useState(false);
  const [notification, setNotification] = useState(false);

  function handlehome() {
    setHome(true);
    setChat(false);
  }
  function handlechat() {
    setChat(true);
    setHome(false);
  }

  return (
    <>
      {/* ✅ MOBILE FULL PAGE */}
      <div className="sm:hidden w-screen h-screen fixed top-0 left-0 bg-white z-50">
        {/* Header */}
        <div className="h-[8rem] bg-[#843ef3]">
          <header className="pl-4 pt-6 flex flex-row items-center justify-between pr-4">
            <img src="/photoes/logo.jpeg" alt="Logo" className="w-12 h-12 rounded-full border border-gray-400" />
            <ul className="flex flex-row gap-3 text-2xl text-white">
              <li 
                className="w-10 h-10 flex justify-center items-center hover:bg-[#6b18f1] rounded-full cursor-pointer"
                onClick={() => setNotification(!notification)}>
                <BsThreeDotsVertical />
              </li>
              <li 
                className="w-10 h-10 flex justify-center items-center hover:bg-[#6b18f1] rounded-full cursor-pointer"
                onClick={() => setShowMessage(false)}>
                <FaChevronDown />
              </li>
            </ul>
          </header>
          <h1 className="text-3xl pl-4 mt-2 text-white font-semibold">Hi there 👋</h1>
          <p className="pl-4 text-gray-200 text-sm mt-1">Welcome to my website. How can I help you?</p>
        </div>

        {/* Chat body */}
        <div className="flex-1 p-4 overflow-y-auto">
          {home && <p>🏠 This is the home section of chat.</p>}
          {chat && <p>💬 Start chatting here...</p>}
        </div>

        {/* Tabs */}
        <div className="flex flex-row justify-around items-center h-20 border-t">
          <div 
            className={`flex flex-col items-center cursor-pointer ${home ? 'text-blue-700' : 'text-gray-400'}`}
            onClick={handlehome}>
            <IoMdHome size={'2rem'} />
            <span className={`text-sm font-mono ${home ? 'text-black' : ''}`}>Home</span>
          </div>
          <div 
            className={`flex flex-col items-center cursor-pointer ${chat ? 'text-blue-700' : 'text-gray-400'}`}
            onClick={handlechat}>
            <IoChatboxSharp size={'2rem'} />
            <span className={`text-sm font-mono ${chat ? 'text-black' : ''}`}>Chat</span>
          </div>
        </div>
      </div>

      {/* ✅ DESKTOP POPUP */}
      <div className={`${showMessage ? '' : 'hidden'} hidden sm:block`}>
        {/* Mini Card */}
        <div className="z-10 fixed grid grid-cols-2 items-center 
                        right-10 bottom-[16.4rem] 
                        bg-white shadow-2xl border border-gray-300
                        w-[23rem] rounded-2xl p-4">
          <div>
            <h2 className="text-black font-semibold text-xl">Chat with Me</h2>
            <p className="text-gray-600 text-base">I reply immediately</p>
          </div>
          <div className="flex justify-end items-center">
            <IoMdSend className="text-blue-600 text-4xl" />
          </div>
        </div>

        {/* Main Chat Box */}
        <div className="fixed right-2 bottom-2 
                        w-[28rem] h-[33rem] 
                        rounded-lg bg-white shadow-lg overflow-hidden">
          {/* Header */}
          <div className="h-[16rem] bg-[#843ef3]">
            <header className="pl-5 pt-6 flex flex-row items-center justify-between pr-4">
              <img src="/photoes/logo.jpeg" alt="Logo" className="w-16 h-16 rounded-full border border-gray-400" />
              <ul className="flex flex-row gap-3 text-3xl text-white">
                <li 
                  className="w-12 h-12 flex justify-center items-center hover:bg-[#6b18f1] rounded-full cursor-pointer"
                  onClick={() => setNotification(!notification)}>
                  <BsThreeDotsVertical />
                </li>
                <li 
                  className="w-12 h-12 flex justify-center items-center hover:bg-[#6b18f1] rounded-full cursor-pointer"
                  onClick={() => setShowMessage(false)}>
                  <FaChevronDown />
                </li>
              </ul>
            </header>
            <h1 className="text-4xl pl-5 mt-4 text-white font-semibold">Hi there 👋</h1>
            <p className="pl-5 text-gray-200 text-base mt-2">Welcome to my website. how can I help you?</p>
          </div>

          {/* Divider */}
          <div className="w-full h-[0.1rem] bg-gray-200 mt-2"></div>

          {/* Footer Tabs */}
          <div className="flex flex-row justify-around items-end h-[8rem]">
            <div 
              className={`flex flex-col items-center cursor-pointer ${home ? 'text-blue-700' : 'text-gray-400'}`}
              onClick={handlehome}>
              <IoMdHome size={'3rem'} />
              <span className={`text-2xl font-mono ${home ? 'text-black' : ''}`}>Home</span>
            </div>
            <div 
              className={`flex flex-col items-center cursor-pointer ${chat ? 'text-blue-700' : 'text-gray-400'}`}
              onClick={handlechat}>
              <IoChatboxSharp size={'3rem'} />
              <span className={`text-2xl font-mono ${chat ? 'text-black' : ''}`}>Chat</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Message;
