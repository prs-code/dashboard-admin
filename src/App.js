import React,{ useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { Navbar, Footer, Sidebar, ThemeSetting } from './components';
import { Tooltip } from '@mui/material';
import { Ecommerc, Orders, Calendar, Employees, Customers, Kanban, Area, Line, Bar, Pie, Financial, ColorMapping, Calculator, Notes } from './pages';
import { useStateContext } from './context/ContextProvider';
import './App.css';

function App() {
  const { activeMenu } = useStateContext();

  return (
    <div className="flex relative dark:bg-main-dark-bg">
        <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
            <Tooltip 
              title="Setting" 
              placement="top-start"
              arrow>
                  <button 
                    type="button"
                    className="text-3xl text-white font-bold p-2 hover:drop-shadow-xl hover:bg-light-gray rounded-full"
                    style={{ background: "rgb(0, 0, 255, .8)" }}>
                    <FiSettings />
                  </button>
              </Tooltip>
        </div>
        {activeMenu ? (
          <div 
            className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
            <Sidebar />
          </div>
        ) : (
          <div 
            className="w-0 dark:bg-secondary-dark-bg">
            <Sidebar />
          </div>
        )}
        <div className={`dark:bg-main-bg bg-main-bg min-h-screen w-full ${activeMenu ? "md:ml-72" : "flex-2"}`}>
          <div className="fixed md:static bg-main-bg dark:bg-main-bg navbar w-full">
            <Navbar />
          </div>
        </div>
        <div>
          <Routes>
              {/* Dashboard */}
              <Route path= "/" element= { <Ecommerc /> } />
              <Route path= "/ecommerce" element= { <Ecommerc /> } />
              {/* Pages*/}
              <Route path= "/orders" element= { <Orders /> } />
              <Route path= "/employees" element= { <Employees />} />
              <Route path= "/customers" element= { <Customers />} />
              {/* Apps*/}
              <Route path= "/kanban" element= { <Kanban /> } />
              <Route path= "/notes" element= { <Notes />} />
              <Route path= "/calendar" element= { <Calendar />} />
              <Route path= "/calculator" element= { <Calculator />} />
              {/* Charts*/}
              <Route path= "/line" element= { <Line />} />
              <Route path= "/area" element= { <Area />} />
              <Route path= "/bar" element= { <Bar />} />
              <Route path= "/pie" element= { <Pie /> } />
              <Route path= "/financial" element= { <Financial /> } />
              <Route path= "/color-mapping" element= { <ColorMapping /> } />
          </Routes>
        </div>
    </div>
  )
}

export default App;