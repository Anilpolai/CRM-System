import React from 'react';
import './dashboard.css';
import { FaUsers, FaTasks, FaCalendarAlt, FaClock } from 'react-icons/fa';
import CountUp from 'react-countup';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h2 className="mb-4">Dashboard</h2>
      
      <div className="dashboard-grid">
        <div className="dashboard-card">
          <div className="icon"><FaUsers /></div>
          <h4>Total Employees</h4>
          <p>
            <CountUp end={54} duration={2} />
          </p>
        </div>

        <div className="dashboard-card">
          <div className="icon"><FaTasks /></div>
          <h4>Active Tasks</h4>
          <p>
            <CountUp end={128} duration={2} />
          </p>
        </div>

        <div className="dashboard-card">
          <div className="icon"><FaCalendarAlt /></div>
          <h4>Upcoming Meetings</h4>
          <p>
            <CountUp end={3} duration={2} /> Today
          </p>
        </div>

        <div className="dashboard-card">
          <div className="icon"><FaClock /></div>
          <h4>Working Hours</h4>
          <p>
            <CountUp end={1420} duration={2} separator="," /> hrs
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
