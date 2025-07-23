import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  BiHomeAlt, BiUser, BiChat, BiDollarCircle, BiTask, BiClipboard, BiBriefcase
} from 'react-icons/bi';
import './sidebar.css';

const Sidebar = ({ isOpen }) => {
  const location = useLocation();
  const current = location.pathname;

  const menuItems = [
    { name: "Dashboard", icon: <BiHomeAlt />, path: "/" },
    { name: "Users", icon: <BiUser />, path: "/users" },
    { name: "Messages", icon: <BiChat />, path: "/messages" },
    { name: "Salary Payment", icon: <BiDollarCircle />, path: "/salary" },
    { name: "Tasks", icon: <BiTask />, path: "/tasks" },
    // { name: "Project Status", icon: <BiClipboard />, path: "/projects" },
    { name: "Job Apply", icon: <BiBriefcase />, path: "/job-apply" },
  ];

  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <ul className="list-unstyled p-3 m-0">
        {menuItems.map((item) => (
          <li key={item.name} className={current === item.path ? "active" : ""}>
            <Link to={item.path} className="sidebar-link">
              {item.icon}
              <span>{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
