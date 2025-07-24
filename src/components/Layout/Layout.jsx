// src/components/Layout/Layout.jsx
import React, { useState, useEffect } from 'react';
import Navbar from '../Navber/navbar';
import Sidebar from '../Sidebar/sidebar';

const Layout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(prev => !prev);
  };

  // Responsive check
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth <= 768) {
        setSidebarOpen(false);
      }
    };

    handleResize(); // initial
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {/* Optional: Backdrop for mobile sidebar */}
      {isMobile && sidebarOpen && (
        <div
          className="sidebar-backdrop"
          onClick={toggleSidebar}
        ></div>
      )}

      <div className="d-flex">
        <Sidebar isOpen={sidebarOpen} />
        <div className="flex-grow-1">
          <Navbar toggleSidebar={toggleSidebar} />
          <div
            className="content-area p-4"
            style={{
              marginLeft: !isMobile && sidebarOpen ? '240px' : '0',
              transition: 'margin 0.3s ease',
            }}
          >
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
