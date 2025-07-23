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
        <NavLink to="/" className="sidebar-link" activeclassname="active">
          <BiHomeAlt /> <span>Dashboard</span>
        </NavLink>
        <NavLink to="/users" className="sidebar-link" activeclassname="active">
          <BiUser /> <span>Users</span>
        </NavLink>
        <NavLink to="/messages" className="sidebar-link" activeclassname="active">
          <BiChat /> <span>Messages</span>
        </NavLink>
        <NavLink to="/salary" className="sidebar-link" activeclassname="active">
          <BiDollarCircle /> <span>Salary Payment</span>
        </NavLink>
        <NavLink to="/tasks" className="sidebar-link" activeclassname="active">
          <BiTask /> <span>Tasks</span>
        </NavLink>
        <NavLink to="/job-apply" className="sidebar-link" activeclassname="active">
          <BiBriefcase /> <span>Job Apply</span>
        </NavLink>

        {/* Roles Accordion with Routing */}
        <Accordion className="sidebar-accordion mt-2" alwaysOpen>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <BiUserCircle className="me-2" />
              <span>Roles</span>
            </Accordion.Header>
            <Accordion.Body>
              <NavLink to="/roles/hr" className="sidebar-link" activeclassname="active">
                <BiUserCircle /> <span>HR</span>
              </NavLink>
              <NavLink to="/roles/admin" className="sidebar-link" activeclassname="active">
                <BiUserCircle /> <span>Admin</span>
              </NavLink>
              <NavLink to="/roles/manager" className="sidebar-link" activeclassname="active">
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
