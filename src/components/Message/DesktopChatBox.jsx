import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaChevronDown } from "react-icons/fa";
import { IoMdHome, IoMdSend } from "react-icons/io";
import { IoChatboxSharp } from "react-icons/io5";
import emailjs from "emailjs-com";

const DesktopChatBox = ({
  home,
  chat,
  notification,
  setNotification,
  handlehome,
  handlechat,
  setShowMessage,
}) => {
const[message,setMessage]=useState('');
const handleMessageSubmit=(e)=>{
e.preventDefault();
if(!message.trim()) return;
emailjs.send(
    "service_565m1l8",
    "template_60uggjj",
     { message },
    "XRQ5BjHJILfIGNIuT",
).then(
        () => {
          alert("Message sent successfully!");
          setMessage("");
        },
        (err) => {
          alert("Failed to send message: " + err.text);
        }
      );
}

  return (
    <div className={`fixed right-2 bottom-2 
                    w-[28rem] ${chat?'h-[44rem]':'h-[33rem]'}  
                    rounded-lg bg-white shadow-lg overflow-hidden hidden sm:block`}>
      {/* Header */}
      <div className={`${chat?'h-[10rem]':'h-[16rem]'} bg-[#843ef3]`}>
        <header className="pl-5 pt-6 flex flex-row items-center justify-between pr-4">
          <img
            src="/photoes/logo.jpeg"
            alt="Logo"
            className="w-16 h-16 rounded-full border border-gray-400"
          />
          <ul className="flex flex-row gap-3 text-3xl text-white">
            <li
              className="w-12 h-12 flex justify-center items-center hover:bg-[#6b18f1] rounded-full cursor-pointer"
              onClick={() => setNotification(!notification)}
            >
              <BsThreeDotsVertical />
            </li>
            <li
              className="w-12 h-12 flex justify-center items-center hover:bg-[#6b18f1] rounded-full cursor-pointer"
              onClick={() => setShowMessage(false)}
            >
              <FaChevronDown />
            </li>
          </ul>
          
        </header>
        {
            chat && <div className="mt-5 ml-6 text-xl font-semibold text-gray-300">
                I reply immediately
            </div>
          }
        <div className={`${chat?'hidden':''}`}>
        <h1 className="text-4xl pl-5 mt-4 text-white font-semibold">Hi there 👋</h1>
        <p className="pl-5 text-gray-200 text-base mt-2">
          Welcome to my website. how can I help you?
        </p>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-[0.1rem] bg-gray-200 mt-2"></div>

      {/* Footer Tabs */}
      <div className={`flex flex-col justify-end  ${chat?'h-[33rem]':'h-[8rem]'} `}>
        {
            chat && <form onSubmit={handleMessageSubmit} className="border border-gray-500 rounded-3xl w-[20rem] h-[3rem] flex flex-row justify-between ml-[4rem]"> 
            <input
            type="text"
            placeholder="Write your Message here"
            value={message}
            onChange={(e)=>{setMessage(e.target.value)}}
            className="w-[16rem] border-none outline-none ml-4 text-xl"
            />
            <button type="submit" className="mr-4 text-3xl text-blue-600"><IoMdSend/></button>
            </form>
            
           
        }
        <div className="flex flex-row justify-around ">
        <div
          className={`flex flex-col items-center cursor-pointer ${home ? "text-blue-700" : "text-gray-400"}`}
          onClick={handlehome}
        >
          <IoMdHome size={"3rem"} />
          <span className={`text-2xl font-mono ${home ? "text-black" : ""}`}>Home</span>
        </div>
        <div
          className={`flex flex-col items-center cursor-pointer ${chat ? "text-blue-700" : "text-gray-400"}`}
          onClick={handlechat}
        >
          <IoChatboxSharp size={"3rem"} />
          <span className={`text-2xl font-mono ${chat ? "text-black" : ""}`}>Chat</span>
        </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopChatBox;
