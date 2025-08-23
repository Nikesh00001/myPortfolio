import React, { createContext, useContext, useState } from 'react'

export const MessageContext =createContext();
const MessageProvider= ({children}) => {
    const[showMessage,setShowMessage]=useState(false);
  return (
    <MessageContext.Provider value={{showMessage,setShowMessage}}>
        {children}
    </MessageContext.Provider>
  )
}

export default MessageProvider
export function useMessage(){
    return useContext(MessageContext);
}