import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { SiShopware } from 'react-icons/si';
import { MdOutlineCancel } from 'react-icons/md';
import { Tooltip } from '@mui/material';
import { links } from '../data/dummy';
import { useStateContext } from '../context/ContextProvider';



const Sidebar = () => {
  const { activeMenu, setActiveMenu, screenSize, setScreenSize } = useStateContext();
  const activeLink = "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2";
  const normalLink = "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-gray-700 text-md dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2";

  const closeSidebarHandler = () => {
    if (activeMenu && screenSize <= 900) setActiveMenu(false)
  };

  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
       {activeMenu && (
        <>
          <div className="flex justify-between items-center">
            <Link 
              to="/"
              onClick={ closeSidebarHandler }
              className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900"
              >
                <SiShopware className="text-3xl"/> <span>Shoppy</span>
              </Link>
              <Tooltip
                title="Menu"
                placement="bottom">
                  <button 
                    className="text-xl text-red-600 rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden"
                    type="button"
                    onClick={() => setActiveMenu(!activeMenu)}>
                    <MdOutlineCancel />
                  </button>
                </Tooltip>
          </div>
          <div className="mt-10">
            {links.map(link => (
              <div 
                key={link.title}>
                  <p className="text-gray-400 m-3 mt-4 uppercase">
                    {link.title}</p>
                  {link.links.map(item => (
                    <NavLink
                    to={`/${item.name}`}
                    key={item.name}
                    onClick={ closeSidebarHandler }
                    className={({ activeMenu }) => 
                      activeMenu ? activeLink : normalLink}
                    >
                      {item.icon}
                      <span className="capitalize">{item.name}</span>
                    </NavLink>
                  ))}
              </div>
            ))}
          </div>
        </>
       )}
    </div>
  )
};

export default Sidebar; 