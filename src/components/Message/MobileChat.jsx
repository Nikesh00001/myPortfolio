import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaChevronDown } from "react-icons/fa";
import { IoMdSend } from "react-icons/io";
import emailjs from "emailjs-com";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const MobileChat = ({
  home,
  notification,
  setNotification,
  handlehome,
  handlechat,
  setShowMessage,
}) => {
  const [message, setMessage] = useState("");
  const [loading,setLoading] =useState(false);
  const [success,setSuccess] =useState(false);

  const handleMessageSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    if (!message.trim()) return;

    emailjs
      .send(
        "service_565m1l8",
        "template_60uggjj",
        { message },
        "XRQ5BjHJILfIGNIuT"
      )
      .then(
        () => {
          setLoading(false);
          setSuccess(true);
          setMessage("");
          setTimeout(() => {
            setSuccess(false);
            
          }, 2000);
        },
        (err) => {
          alert("Failed to send message: " + err.text);
        }
      );
  };

  return (
    <div className="sm:hidden w-screen h-screen fixed top-0 left-0 bg-white z-50">
      {/* Header */}
      <div className="h-[10rem] bg-[#843ef3]">
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
      {
        success &&
         <p className="bg-green-100 text-green-700 font-medium ml-2 px-4 py-2 rounded-lg shadow">
          Message successfully sent
  </p>
      }

      {/* Chat input */}
      <form
        onSubmit={handleMessageSubmit}
        className="border-t border-gray-500 fixed bottom-[1rem] w-screen flex flex-row items-center px-4 py-2 bg-white"
      >
        <input
          type="text"
          placeholder="Write your Message here"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="flex-1 h-12 border-none outline-none text-lg"
        />
        {message.trim() !== "" && (
          <button
            type="submit"
            className="ml-3 text-3xl text-blue-600 hover:text-blue-800 transition"
          >
           { loading?<AiOutlineLoading3Quarters className="animate-spin"/> :<IoMdSend />
}
          </button>
        )}
      </form>
    </div>
  );
};

export default MobileChat;
