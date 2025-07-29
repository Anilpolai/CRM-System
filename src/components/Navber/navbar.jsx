import React, { useState, useEffect } from 'react';
import { Navbar, Button, Dropdown } from 'react-bootstrap';
import { BiStore, BiBell, BiCog } from 'react-icons/bi';
import { BsGridFill, BsMoon, BsSun } from 'react-icons/bs';
import './navbar.css';
import ThemeSettings from '../Settings/Settings';

const CustomNavbar = ({ toggleSidebar }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('darkMode') === 'true';
    setDarkMode(savedTheme);
    document.body.classList.toggle('dark-mode', savedTheme);

    const savedColor = localStorage.getItem('primaryColor');
    if (savedColor) {
      document.documentElement.style.setProperty('--primary', savedColor);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
    document.body.classList.toggle('dark-mode', darkMode);
  }, [darkMode]);

  return (
    <>
      <Navbar
        fixed="top"
        collapseOnSelect
        expand="lg"
        className={`custom-navbar py-2 shadow-sm px-3 justify-content-between ${darkMode ? 'bg-dark' : 'bg-white'}`}
      >
        {/* Left: Logo & Toggle */}
        <div className="d-flex align-items-center gap-3">
          <div className="d-flex align-items-center gap-2">
            <img src="/logo.png" alt="logo" width="30" height="30" />
            <span className="fw-bold fs-5 text-uppercase text-primary">Code Mario</span>
            <div className="logo-color-dot"></div>
          </div>
          <div className="navber-menu-icon" title="Toggle Sidebar" onClick={toggleSidebar}>
            <BsGridFill className="fs-5" />
          </div>
        </div>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <div className="d-flex flex-wrap align-items-center gap-3 mt-2 mt-lg-0 ms-auto">
            {/* Theme Toggle */}
            <div
              className="theme-toggle"
              onClick={() => setDarkMode(prev => !prev)}
              title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {darkMode ? <BsSun size={18} /> : <BsMoon size={18} />}
            </div>

            <div className="position-relative">
              <BiStore className="fs-5" />
              <span className="badge bg-primary rounded-circle position-absolute top-0 start-100 translate-middle px-2">2</span>
            </div>

            <div className="position-relative">
              <BiBell className="fs-5" />
              <span className="badge bg-primary rounded-circle position-absolute top-0 start-100 translate-middle px-2">4</span>
            </div>

            <Button variant="primary" className="rounded-pill px-3 fw-bold">🌦 15°</Button>

            <Dropdown align="end">
              <Dropdown.Toggle
                variant="transparent"
                className="d-flex align-items-center gap-2 border-0 bg-transparent shadow-none p-0"
              >
                <img src="https://cdn-icons-png.flaticon.com/512/2202/2202112.png" alt="user" width="32" height="32" className="rounded-circle" />
                <div className="d-flex flex-column align-items-start">
                  <span className={`fw-semibold ${darkMode ? 'text-light' : 'text-dark'}`}>Demo Das</span>
                  <small className="text-muted">Admin</small>
                </div>
              </Dropdown.Toggle>

              <Dropdown.Menu className="dropdown-menu-end mt-2">
                <Dropdown.Item href="#/profile">Profile</Dropdown.Item>
                <Dropdown.Item href="#/settings">Settings</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#/logout">Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </Navbar.Collapse>
      </Navbar>

      {/* Floating settings icon */}
      <div className="settings-icon" onClick={() => setShowSettings(true)}>
        <BiCog size={22} />
      </div>

      <ThemeSettings
        show={showSettings}
        onHide={() => setShowSettings(false)}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
    </>
  );
};

export default CustomNavbar;
