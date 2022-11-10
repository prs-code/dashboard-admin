import React, { useEffect } from 'react';
//components
import { useStateContext } from '../context/ContextProvider';
import { Cart, Chat, Notifications, UserProfile } from './index';
//icons
import { HiOutlineMenuAlt1 } from 'react-icons/hi';
import { GoSearch } from 'react-icons/go';
import { FiShoppingBag } from 'react-icons/fi';
import { BsChatLeftDots } from 'react-icons/bs';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { Tooltip } from '@mui/material';
import avatar from '../data/avatar.jpg';

//component for NAVBAR options
const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <Tooltip
    title={title}
    placement="bottom">
      <button 
        type="button"
        onClick={customFunc}
        style={{ color }}
        className="relative text-xl rounded-full p-3 hover:bg-light-gray md:text-2xl"
        >
          <span 
            style={{ background: dotColor }}
            className="inline-flex absolute rounded-full h-2 w-2 right-2 top-2" />
          { icon }
        </button>
  </Tooltip>
);

const Navbar = () => {
  const { activeMenu, setActiveMenu, isClicked, setISClicked, clickHandler, screenSize, setScreenSize } = useStateContext();

  useEffect(() => { 
    const resizeHandler = () => setScreenSize(window.innerWidth);// for set size screen(responsive)
    window.addEventListener("resize", resizeHandler);//after change screen size set the size
    resizeHandler();// to get initial size
    return () => window.removeEventListener("resize", resizeHandler);
  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false)
    } else {
      setActiveMenu(true)
    }
  }, [screenSize])

  return (
    <div className="flex justify-between p-2 md:mx-6 relative">
      <NavButton title="Menu" customFunc={() => setActiveMenu(!activeMenu)} color="blue" icon={ <HiOutlineMenuAlt1 /> } />
      <div className="flex items-center">
      <NavButton 
        title="Cart" 
        customFunc={() => clickHandler("Cart")} 
        color="blue" 
        icon={ <FiShoppingBag /> } />
      <NavButton 
        title="Chat" 
        dotColor="#03C9d7" 
        customFunc={() => clickHandler("Chat")} 
        color="blue"  
        icon={ <BsChatLeftDots /> } />
      <NavButton 
        title="Notifications" 
        dotColor="#03C9d7" 
        customFunc={() => clickHandler("Notifications")} 
        color="blue"  
        icon={ <IoMdNotificationsOutline /> } />
      <Tooltip
        title="Profile user"
        placement="bottom">
          <div
            onClick={() => clickHandler("UserProfile")} 
            className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg">
              <img 
                src={avatar} 
                alt="user-profile"
                className="rounded-full w-12 h-12" />
              <p>
                <span className="text-14 text-gray-600">Hi, </span>{" "}
                <span className="text-14 font-bold text-gray-600 ml-1">Mostafa Mousavi</span>
              </p>
              <MdKeyboardArrowDown className="text-18 text-gray-600 font-bold" />
          </div>
      </Tooltip>
      { isClicked.Cart && <Cart /> }
      { isClicked.Chat && <Chat /> }
      { isClicked.Notifications && <Notifications /> }
      { isClicked.UserProfile && <UserProfile /> }
      </div>
    </div>
  )
}

export default Navbar