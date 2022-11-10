import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();
const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    Notifications: false,
}

export const ContextProvider = ({ children }) => {
    const [activeMenu, setActiveMenu] = useState(true);
    const [isClicked, setIsClicked] = useState(initialState);
    const clickHandler = clicked => {
      setIsClicked({...initialState, [clicked]: true});
    };
    const [screenSize, setScreenSize] = useState(undefined);

  return (
    <StateContext.Provider value={{ 
      activeMenu, 
      setActiveMenu,
      isClicked,
      setIsClicked,
      clickHandler,
      screenSize,
      setScreenSize }}>
        {children}
    </StateContext.Provider>
  )
};

export const useStateContext = () => useContext(StateContext);