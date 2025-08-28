import React from "react";
import { IoMdSend } from "react-icons/io";

const DesktopMiniCard = () => {
  return (
    <div
      className={`
        z-10 fixed grid grid-cols-2 items-center 
        right-10 bottom-[16.4rem] 
        bg-white shadow-2xl border border-gray-300 
        w-[23rem] rounded-2xl p-4
      `}
    >
      <div>
        <h2 className="text-black font-semibold text-xl">Chat with Me</h2>
        <p className="text-gray-600 text-base">I reply immediately</p>
      </div>
      <div className="flex justify-end items-center">
        <IoMdSend className="text-blue-600 text-4xl" />
      </div>
    </div>
  );
};

export default DesktopMiniCard;
