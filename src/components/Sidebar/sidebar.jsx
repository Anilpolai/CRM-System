// src/components/Sidebar/sidebar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Accordion, Nav } from 'react-bootstrap';
import {
  BiHomeAlt, BiUser, BiChat, BiDollarCircle, BiTask, BiBriefcase, BiUserCircle
} from 'react-icons/bi';
import './sidebar.css';

const Sidebar = ({ isOpen }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <Nav className="flex-column p-3">
        <NavLink to="/" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'}>
          <BiHomeAlt /> <span>Dashboard</span>
        </NavLink>
        <NavLink to="/users" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'}>
          <BiUser /> <span>Users</span>
        </NavLink>
        <NavLink to="/messages" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'}>
          <BiChat /> <span>Messages</span>
        </NavLink>
        <NavLink to="/salary" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'}>
          <BiDollarCircle /> <span>Salary Payment</span>
        </NavLink>
        <NavLink to="/tasks" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'}>
          <BiTask /> <span>Tasks</span>
        </NavLink>
        <NavLink to="/job-apply" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'}>
          <BiBriefcase /> <span>Job Apply</span>
        </NavLink>

        <Accordion className="sidebar-accordion mt-2" alwaysOpen>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <BiUserCircle className="me-2" />
              <span>Roles</span>
            </Accordion.Header>
            <Accordion.Body>
              <NavLink to="/roles/hr" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'}>
                <BiUserCircle /> <span>HR</span>
              </NavLink>
              <NavLink to="/roles/admin" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'}>
                <BiUserCircle /> <span>Admin</span>
              </NavLink>
              <NavLink to="/roles/manager" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'}>
                <BiUserCircle /> <span>Manager</span>
              </NavLink>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Nav>
    </div>
  );
};

export default Sidebar;
