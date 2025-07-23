import React, { useState, useEffect } from 'react';
import { Navbar, Button } from 'react-bootstrap';
import { BiStore, BiBell, BiCog } from 'react-icons/bi';
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
        if (darkMode) {
            document.body.classList.add("dark-mode");
        } else {
            document.body.classList.remove("dark-mode");
        }
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
                        className="bg-light rounded-circle p-2"
                        style={{ cursor: 'pointer' }}
                        onClick={toggleSidebar}
                    >
                        <i className="bi bi-grid fs-5 text-secondary"></i>
                    </div>
                </div>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    {/* Right: Icons, Weather, User Info */}
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
                            <span className="badge bg-primary rounded-circle position-absolute top-0 start-100 translate-middle px-2">
                                2
                            </span>
                        </div>

                        {/* Bell Icon */}
                        <div className="position-relative">
                            <BiBell className="fs-5" />
                            <span className="badge bg-primary rounded-circle position-absolute top-0 start-100 translate-middle px-2">
                                4
                            </span>
                        </div>

                        {/* Weather */}
                        <Button variant="primary" className="rounded-pill px-3 fw-bold">
                            🌦 15°
                        </Button>

                        {/* User Info */}
                        <div className="d-flex align-items-center gap-2">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/2202/2202112.png"
                                alt="user"
                                width="32"
                                height="32"
                                className="rounded-circle"
                            />
                            <div className="d-flex flex-column">
                                <span className="fw-semibold">Demo Das</span>
                                <small className="text-muted">
                                    Admin <IoMdArrowDropdown />
                                </small>
                            </div>
                        </div>
                    </div>
                </Navbar.Collapse>
            </Navbar>

            {/* Settings Icon (Bottom Right) */}
            <div className="settings-icon">
                <BiCog size={22} />
            </div>
        </>
    );
};

export default CustomNavbar;
