import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaChevronDown } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { IoChatboxSharp } from "react-icons/io5";

const MobileChat = ({
  home,
  chat,
  notification,
  setNotification,
  handlehome,
  handlechat,
  setShowMessage,
}) => {
  return (
    <div className="sm:hidden w-screen h-screen fixed top-0 left-0 bg-white z-50">
      {/* Header */}
      <div className="h-[8rem] bg-[#843ef3]">
        <header className="pl-4 pt-6 flex flex-row items-center justify-between pr-4">
          <img
            src="/photoes/logo.jpeg"
            alt="Logo"
            className="w-12 h-12 rounded-full border border-gray-400"
          />
          <ul className="flex flex-row gap-3 text-2xl text-white">
            <li
              className="w-10 h-10 flex justify-center items-center hover:bg-[#6b18f1] rounded-full cursor-pointer"
              onClick={() => setNotification(!notification)}
            >
              <BsThreeDotsVertical />
            </li>
            <li
              className="w-10 h-10 flex justify-center items-center hover:bg-[#6b18f1] rounded-full cursor-pointer"
              onClick={() => setShowMessage(false)}
            >
              <FaChevronDown />
            </li>
          </ul>
        </header>
        <h1 className="text-3xl pl-4 mt-2 text-white font-semibold">Hi there 👋</h1>
        <p className="pl-4 text-gray-200 text-sm mt-1">
          Welcome to my website. How can I help you?
        </p>
      </div>

      {/* Chat body */}
      <div className="flex-1 p-4 overflow-y-auto">
        {home && <p>🏠 This is the home section of chat.</p>}
        {chat && <p>💬 Start chatting here...</p>}
      </div>

      {/* Tabs */}
      <div className="flex flex-row justify-around items-center h-20 border-t">
        <div
          className={`flex flex-col items-center cursor-pointer ${home ? "text-blue-700" : "text-gray-400"}`}
          onClick={handlehome}
        >
          <IoMdHome size={"2rem"} />
          <span className={`text-sm font-mono ${home ? "text-black" : ""}`}>Home</span>
        </div>
        <div
          className={`flex flex-col items-center cursor-pointer ${chat ? "text-blue-700" : "text-gray-400"}`}
          onClick={handlechat}
        >
          <IoChatboxSharp size={"2rem"} />
          <span className={`text-sm font-mono ${chat ? "text-black" : ""}`}>Chat</span>
        </div>
      </div>
    </div>
  );
};

export default MobileChat;
