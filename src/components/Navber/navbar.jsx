import React from 'react';
import { Navbar, Button } from 'react-bootstrap';
import { BiStore, BiBell } from 'react-icons/bi';
import { BsMoon } from 'react-icons/bs';
import { IoMdArrowDropdown } from 'react-icons/io';
import './navbar.css'; // Assuming you have a CSS file for styling
import { BiCog } from 'react-icons/bi';

const CustomNavbar = ({ toggleSidebar }) => {
    return (
        <>
            <Navbar expand="lg" className="bg-white py-2 shadow-sm px-3 justify-content-between">
                {/* Left: Logo and Grid Icon */}
                <div className="d-flex align-items-center gap-3">
                    {/* Logo */}
                    <div className="d-flex align-items-center gap-2">
                        <img src="/logo.png" alt="logo" width="30" height="30" />
                        <span className="fw-bold fs-5 text-uppercase text-primary">Code Mario</span>
                    </div>

                    {/* Grid Icon to toggle sidebar */}
                    <div
                        className="bg-light rounded-circle p-2"
                        style={{ cursor: 'pointer' }}
                        onClick={toggleSidebar}
                    >
                        <i className="bi bi-grid fs-5 text-secondary"></i>
                    </div>
                </div>

                {/* Right: Icons and Profile */}
                <div className="d-flex align-items-center gap-3">
                    {/* Theme Switch */}
                    <BsMoon className="fs-5" />

                    {/* Store Icon with badge */}
                    <div className="position-relative">
                        <BiStore className="fs-5" />
                        <span className="badge bg-primary rounded-circle position-absolute top-0 start-100 translate-middle px-2">
                            2
                        </span>
                    </div>

                    {/* Bell Icon with badge */}
                    <div className="position-relative">
                        <BiBell className="fs-5" />
                        <span className="badge bg-primary rounded-circle position-absolute top-0 start-100 translate-middle px-2">
                            4
                        </span>
                    </div>

                    {/* Weather Button */}
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

            </Navbar>
            {/* Settings icon fixed at bottom right */}
            <div className="settings-icon">
                <BiCog size={22} />
            </div>
        </>
    );
};

export default CustomNavbar;
