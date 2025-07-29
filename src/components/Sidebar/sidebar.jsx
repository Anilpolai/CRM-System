// import React from 'react';
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
          <span className="icon-bg"><BiHomeAlt /></span> <span>Dashboard</span>
        </NavLink>

        <NavLink to="/users" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'}>
          <span className="icon-bg"><BiUser /></span> <span>Users</span>
        </NavLink>

        <NavLink to="/messages" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'}>
          <span className="icon-bg"><BiChat /></span> <span>Messages</span>
        </NavLink>

        <NavLink to="/salary" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'}>
          <span className="icon-bg"><BiDollarCircle /></span> <span>Salary Payment</span>
        </NavLink>

        <NavLink to="/tasks" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'}>
          <span className="icon-bg"><BiTask /></span> <span>Tasks</span>
        </NavLink>

        <NavLink to="/job-apply" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'}>
          <span className="icon-bg"><BiBriefcase /></span> <span>Job Apply</span>
        </NavLink>

        <NavLink to="/enployees" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'}>
          <span className="icon-bg"><BiBriefcase /></span> <span>Enployees</span>
        </NavLink>

        <Accordion className="sidebar-accordion mt-2" alwaysOpen>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <span className="icon-bg"><BiUserCircle /></span> <span>Roles</span>
            </Accordion.Header>
            <Accordion.Body>
              <NavLink to="/roles/hr" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'}>
                <span className="icon-bg"><BiUserCircle /></span> <span>HR</span>
              </NavLink>
              <NavLink to="/roles/admin" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'}>
                <span className="icon-bg"><BiUserCircle /></span> <span>Admin</span>
              </NavLink>
              <NavLink to="/roles/manager" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'}>
                <span className="icon-bg"><BiUserCircle /></span> <span>Manager</span>
              </NavLink>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Nav>
    </div>
  );
};

export default Sidebar;
