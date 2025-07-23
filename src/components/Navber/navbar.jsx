import React, { useState, useEffect } from 'react';
import { Navbar, Button, Dropdown } from 'react-bootstrap';
import { BiStore, BiBell, BiCog } from 'react-icons/bi';
import { BsGridFill } from "react-icons/bs";
import { BsMoon, BsSun } from 'react-icons/bs';
import { IoMdArrowDropdown } from 'react-icons/io';
import './navbar.css';

const CustomNavbar = ({ toggleSidebar }) => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem("darkMode") === "true";
        setDarkMode(savedTheme);
    }, []);

    useEffect(() => {
        localStorage.setItem("darkMode", darkMode);
        document.body.classList.toggle("dark-mode", darkMode);
    }, [darkMode]);

    return (
        <>
            <Navbar collapseOnSelect expand="lg" className={`py-2 shadow-sm px-3 justify-content-between ${darkMode ? 'bg-dark' : 'bg-white'}`}>
                {/* Left: Logo and Sidebar Toggle */}
                <div className="d-flex align-items-center gap-3">
                    <div className="d-flex align-items-center gap-2">
                        <img src="/logo.png" alt="logo" width="30" height="30" />
                        <span className="fw-bold fs-5 text-uppercase text-primary">Code Mario</span>
                    </div>

                    <div
                        className=" navber-menu p-2"
                        style={{ cursor: 'pointer' }}
                        onClick={toggleSidebar}
                    >
                        <BsGridFill className="fs-5 text-secondary" />
                    </div>

                </div>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    {/* Right Section */}
                    <div className="d-flex flex-wrap align-items-center gap-3 mt-2 mt-lg-0 ms-auto">
                        {/* Theme Toggle */}
                        {darkMode ? (
                            <BsSun className="fs-5" onClick={() => setDarkMode(false)} style={{ cursor: 'pointer' }} />
                        ) : (
                            <BsMoon className="fs-5" onClick={() => setDarkMode(true)} style={{ cursor: 'pointer' }} />
                        )}

                        {/* Store Icon */}
                        <div className="position-relative">
                            <BiStore className="fs-5" />
                            <span className="badge bg-primary rounded-circle position-absolute top-0 start-100 translate-middle px-2">2</span>
                        </div>

                        {/* Bell Icon */}
                        <div className="position-relative">
                            <BiBell className="fs-5" />
                            <span className="badge bg-primary rounded-circle position-absolute top-0 start-100 translate-middle px-2">4</span>
                        </div>

                        {/* Weather */}
                        <Button variant="primary" className="rounded-pill px-3 fw-bold">🌦 15°</Button>

                        {/* User Dropdown */}
                        <Dropdown align="end">
                            <Dropdown.Toggle
                                variant="transparent"
                                id="dropdown-basic"
                                className="d-flex align-items-center gap-2 border-0 bg-transparent shadow-none p-0"
                            >
                                <img
                                    src="https://cdn-icons-png.flaticon.com/512/2202/2202112.png"
                                    alt="user"
                                    width="32"
                                    height="32"
                                    className="rounded-circle"
                                />
                                <div className="d-flex flex-column align-items-start">
                                    <span className={`fw-semibold ${darkMode ? 'text-light' : 'text-dark'}`}>Demo Das</span>
                                    <small className="text-muted">Admin</small>
                                </div>
                                <IoMdArrowDropdown className={`${darkMode ? 'text-light' : 'text-dark'}`} />
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

            {/* Settings Gear Floating Icon */}
            <div className="settings-icon">
                <BiCog size={22} />
            </div>
        </>
    );
};

export default CustomNavbar;
