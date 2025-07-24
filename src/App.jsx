// src/App.jsx
import { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import PageLoader from './components/PageLoader/PageLoader';

// Pages
import Dashboard from './pages/Dashboard';
import Users from './pages/Users';
import Messages from './pages/messages';
import Salary from './pages/salary';
import Tasks from './pages/Tasks';
import JobApply from './pages/JobApply';

// Roles
import HR from './hr/hr';
import Admin from './Admin/admin';
import Manager from './Manger/manger';

function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  // Show loader on route change
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 500); // Keep timing short for snappy feel
    return () => clearTimeout(timer);
  }, [location]);

  // Load saved theme and dark mode from localStorage
  useEffect(() => {
    const savedColor = localStorage.getItem('primaryColor');
    const darkMode = localStorage.getItem('darkMode') === 'true';

    if (savedColor) {
      document.documentElement.style.setProperty('--primary', savedColor);
      document.documentElement.style.setProperty('--primary-hover', hexToRGBA(savedColor, 0.1));
      document.documentElement.style.setProperty('--primary-active', hexToRGBA(savedColor, 0.2));
    }

    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, []);

  // Convert HEX to RGBA for hover/active variants
  const hexToRGBA = (hex, opacity) => {
    let r = 0, g = 0, b = 0;
    if (hex.length === 4) {
      r = parseInt(hex[1] + hex[1], 16);
      g = parseInt(hex[2] + hex[2], 16);
      b = parseInt(hex[3] + hex[3], 16);
    } else if (hex.length === 7) {
      r = parseInt(hex.substring(1, 3), 16);
      g = parseInt(hex.substring(3, 5), 16);
      b = parseInt(hex.substring(5, 7), 16);
    }
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
  };

  return (
    <Layout>
      <div className="fade-wrapper">
        {loading ? (
          <PageLoader />
        ) : (
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/users" element={<Users />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/salary" element={<Salary />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/job-apply" element={<JobApply />} />
            <Route path="/roles/hr" element={<HR />} />
            <Route path="/roles/admin" element={<Admin />} />
            <Route path="/roles/manager" element={<Manager />} />
          </Routes>
        )}
      </div>
    </Layout>
  );
}

export default App;
