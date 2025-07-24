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

  // Show loading animation on route change
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 700); // Adjust timing if needed
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <Layout>
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
    </Layout>
  );
}

export default App;
