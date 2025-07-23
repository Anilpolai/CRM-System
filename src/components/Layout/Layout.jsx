// src/components/Layout/Layout.jsx
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from '../Navber/navbar';
import Sidebar from '../Sidebar/sidebar';

const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(prev => !prev);
  };

  return (
    <div>
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={sidebarOpen} />
      
      <div
        className={`content-area ${sidebarOpen ? 'ms-240' : 'ms-0'} p-4`}
        style={{
          marginLeft: sidebarOpen ? '240px' : '0',
          transition: 'margin 0.3s ease',
        }}>
        
      </div>
    </div>
  );
};

export default Layout;
