
import React, { useState, useMemo } from 'react';
import ProfileModal from '@/components/ProfileModal';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Wrench, Zap, Gauge, Activity, Search, LogOut, ArrowLeft, Droplet, Beaker, ClipboardList, FileText, Flame } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import UserAvatar from '@/components/UserAvatar';
import ProfileModal from '@/components/ProfileModal';

const ToolsDashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(() => {
    return JSON.parse(localStorage.getItem('abnUser') || sessionStorage.getItem('abnUser') || '{}');
  });
  const [searchQuery, setSearchQuery] = useState('');
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);

  const tools = [
  {
    id: 'boiler',
    title: 'Boiler Guardian Nexus',
    description: 'Advanced boiler monitoring and control system',
    icon: Flame,
    path: 'https://boiler-guardian-nexus.vercel.app/'
  },
  {
    id: 'water-treatment',
    title: 'Green GPM Tracker',
    description: 'Water treatment monitoring and optimization',
    icon: Droplet,
    path: 'https://green-gpm-tracker.vercel.app/'
  },
  {
    id: 'wwtp-power',
    title: 'Power Pulse Monitor',
    description: 'WWTP power monitoring and analytics',
    icon: Activity,
    path: 'https://power-pulse-monitor-app.vercel.app/'
  },
  {
    id: 'chemical-inventory',
    title: 'Chem Stock Tracker Lite',
    description: 'Chemical inventory management system',
    icon: Beaker,
    path: 'https://chem-stock-tracker-lite.vercel.app/'
  },
  {
    id: 'pm-workorder',
    title: 'PM Workorder',
    description: 'Preventive maintenance work order management',
    icon: ClipboardList,
    path: 'https://pm-workorder.vercel.app/' // kung meron ka na
  },
  {
    id: 'digital-logsheets',
    title: 'Digital Logsheets',
    description: 'Digital logging and record keeping system',
    icon: FileText,
    path: 'https://digital-logsheets.vercel.app/' // placeholder kung wala pa
  }
];

  const filteredTools = useMemo(() => {
    return tools.filter(tool =>
      tool.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const handleLogout = () => {
    localStorage.removeItem('abnUser');
    sessionStorage.removeItem('abnUser');
    navigate('/auth');
  };

  const handleToolClick = (url: string) => {
  window.location.href = url; // open in same tab
  // window.open(url, "_blank"); // ← if gusto mo new tab
};

  const handleUserUpdate = (updatedUser: any) => {
    setUser(updatedUser);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-green-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
      <div className="ml-auto">
        <ProfileModal />
      </div>
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigate('/auth')}
                className="text-green-600 hover:text-green-700 hover:bg-green-50"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Login
              </Button>
              <div className="text-lg font-semibold text-green-800">ABN Utilities</div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search tools..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 w-64 border-green-200 focus:border-green-500"
                />
              </div>
              
              <div className="flex items-center space-x-2">
                <button onClick={() => setIsProfileModalOpen(true)}>
                  <UserAvatar avatar={user.avatar || 'avatar1'} size="md" />
                </button>
                <Button
                  onClick={handleLogout}
                  variant="outline"
                  size="sm"
                  className="border-green-600 text-green-600 hover:bg-green-50"
                >
                  <LogOut className="w-4 h-4 mr-2" />
                  Logout
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-green-800">Tools Dashboard</h1>
          <p className="text-green-600 mt-2">Welcome, {user.full_name || 'User'}</p>
          <p className="text-sm text-green-500">Full Access - All Tools Available</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTools.map((tool) => {
            const IconComponent = tool.icon;
            return (
              <Card key={tool.id} className="border-green-200 hover:shadow-lg transition-all duration-200 hover:scale-[1.02]">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center text-green-800">
                    <IconComponent className="w-5 h-5 mr-2" />
                    {tool.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{tool.description}</p>
                  <Button 
                    onClick={() => handleToolClick(tool.path)}
                    className="w-full bg-green-600 hover:bg-green-700"
                  >
                    Open Tool
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {filteredTools.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No tools found matching your search.</p>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-green-200 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <p className="text-center text-sm text-green-600">
            © 2025 ABN Utilities. All rights reserved.
          </p>
        </div>
      </footer>

      <ProfileModal
        isOpen={isProfileModalOpen}
        onClose={() => setIsProfileModalOpen(false)}
        user={user}
        onUserUpdate={handleUserUpdate}
      />
    </div>
  );
};

export default ToolsDashboard;
