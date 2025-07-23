// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';

import Dashboard from './pages/Dashboard';
import Users from './pages/Users';
import Messages from './pages/messages';
import Salary from './pages/salary';
import Tasks from './pages/Tasks';
import JobApply from './pages/JobApply';

import HR from './hr/hr';
import Admin from './Admin/admin';
import Manager from './Manger/manger';

function App() {
  return (
    <Layout>
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
    </Layout>
  );
}

export default App;
