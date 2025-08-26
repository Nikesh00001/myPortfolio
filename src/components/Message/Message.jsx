import React, { useState } from "react";
import MobileChat from "./MobileChat";
import DesktopMiniCard from "./DesktopMiniCard";
import DesktopChatBox from "./DesktopChatBox";
import { useMessage } from "../../Context/MessageContext";

const Message = () => {
  const { showMessage, setShowMessage } = useMessage();
  const [home, setHome] = useState(true);
  const [chat, setChat] = useState(false);
  const [notification, setNotification] = useState(false);

  const handlehome = () => {
    setHome(true);
    setChat(false);
  };
  const handlechat = () => {
    setChat(true);
    setHome(false);
  };

  return (
    <>
      {/* Mobile */}
      <MobileChat
        home={home}
        chat={chat}
        notification={notification}
        setNotification={setNotification}
        handlehome={handlehome}
        handlechat={handlechat}
        setShowMessage={setShowMessage}
      />

      {/* Desktop */}
      {showMessage && (
        <>
          <DesktopMiniCard chat={chat}/>
          <DesktopChatBox
            home={home}
            chat={chat}
            notification={notification}
            setNotification={setNotification}
            handlehome={handlehome}
            handlechat={handlechat}
            setShowMessage={setShowMessage}
          />
        </>
      )}
    </>
  );
};

export default Message;
