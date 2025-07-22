// src/components/Sidebar.jsx
import React from 'react';
import { BiHomeAlt, BiUser, BiChat, BiCog } from 'react-icons/bi';
import './sidebar.css'; // Make sure this file name is all lowercase

const Sidebar = ({ isOpen }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <ul className="list-unstyled p-3 m-0">
        <li>
          <BiHomeAlt size={20} /> <span>Home</span>
        </li>
        <li>
          <BiUser size={20} /> <span>Users</span>
        </li>
        <li>
          <BiChat size={20} /> <span>Messages</span>
        </li>
        <li>
          <BiCog size={20} /> <span>Settings</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
