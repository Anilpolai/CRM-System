// Sidebar.jsx
import React from 'react';
import { BiHomeAlt, BiUser, BiChat, BiCog } from 'react-icons/bi';
import './sidebar.css';

const Sidebar = ({ isOpen }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <ul className="list-unstyled p-3">
        <li><BiHomeAlt /> <span>Home</span></li>
        <li><BiUser /> <span>Users</span></li>
        <li><BiChat /> <span>Messages</span></li>
        <li><BiCog /> <span>Settings</span></li>
      </ul>
    </div>
  );
};

export default Sidebar;
