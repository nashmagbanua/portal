
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Auth from './pages/Auth';
import AdminPanel from './pages/AdminPanel';
import ToolsDashboard from './pages/ToolsDashboard';
import ToolsLimited from './pages/ToolsLimited';
import NotFound from './pages/NotFound';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/dashboard/mantech" element={<ToolsDashboard />} />
        <Route path="/dashboard/opscrew" element={<ToolsLimited />} />
        <Route path="/guest" element={<ToolsLimited />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
