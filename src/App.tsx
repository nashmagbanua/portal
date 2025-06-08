
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminPanel from './pages/admin/AdminPanel';
import UserManagement from './pages/admin/UserManagement';
import SecuritySettings from './pages/admin/SecuritySettings';
import SystemSettings from './pages/admin/SystemSettings';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/admin/users" element={<UserManagement />} />
        <Route path="/admin/security" element={<SecuritySettings />} />
        <Route path="/admin/settings" element={<SystemSettings />} />
      </Routes>
    </Router>
  );
}

export default App;
