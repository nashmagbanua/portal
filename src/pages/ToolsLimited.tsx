
import React from 'react';
import ProfileModal from '@/components/ProfileModal';

const ToolsLimited = () => {
  const user = JSON.parse(localStorage.getItem('user') || '{}');

  const handleLogout = () => {
    localStorage.removeItem('user');
    window.location.href = '/';
  };

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold">Limited Tools Access</h1>
        <ProfileModal />
      </div>

      <div className="flex items-center space-x-2 mb-4">
        <div className="bg-gray-100 rounded-full w-10 h-10 flex items-center justify-center">
          {user.avatar ? user.avatar : '👤'}
        </div>
        <div>
          <p className="text-sm font-medium">{user.full_name || 'Unknown'}</p>
          <p className="text-xs text-gray-500">{user.role || 'Guest'}</p>
        </div>
        <button
          onClick={handleLogout}
          className="ml-auto bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-600"
        >
          Logout
        </button>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-gray-900">Opscrew / Guest Dashboard</h2>
          <p className="text-sm text-gray-600">
            Limited access to specific tools only.
          </p>
        </div>
        {/* Add limited tools display here */}
      </div>
    </div>
  );
};

export default ToolsLimited;
