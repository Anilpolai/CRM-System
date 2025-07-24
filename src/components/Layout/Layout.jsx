// src/components/Layout/Layout.jsx
import React, { useState } from 'react';
import Navbar from '../Navber/navbar';
import Sidebar from '../Sidebar/sidebar';

const Layout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true); // Sidebar default open

  const toggleSidebar = () => {
    setSidebarOpen(prev => !prev);
  };

  return (
    <div className="d-flex">
      <Sidebar isOpen={sidebarOpen} />
      <div className="flex-grow-1">
        <Navbar toggleSidebar={toggleSidebar} />
        <div
          className="content-area p-4"
          style={{
            marginLeft: sidebarOpen ? '240px' : '0',
            transition: 'margin 0.3s ease',
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
