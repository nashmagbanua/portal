
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Info, Phone, Mail, MapPin, LogOut, ArrowLeft, Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import UserAvatar from '@/components/UserAvatar';
import ProfileModal from '@/components/ProfileModal';

const InfoPage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(() => {
    return JSON.parse(localStorage.getItem('abnUser') || sessionStorage.getItem('abnUser') || '{}');
  });
  const [searchQuery, setSearchQuery] = useState('');
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('abnUser');
    sessionStorage.removeItem('abnUser');
    navigate('/auth');
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
                  placeholder="Search information..."
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
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-green-800">ABN Utilities Information</h1>
          <p className="text-green-600 mt-2">Welcome, Guest {user.full_name || 'User'}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="border-green-200">
            <CardHeader>
              <CardTitle className="flex items-center text-green-800">
                <Info className="w-5 h-5 mr-2" />
                About ABN Utilities
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                ABN Utilities is a leading provider of industrial utility solutions, 
                specializing in coal charging systems, pressure control, and maintenance tools.
              </p>
              <p className="text-gray-600">
                Our advanced monitoring systems ensure optimal performance and safety 
                across all industrial operations.
              </p>
            </CardContent>
          </Card>

          <Card className="border-green-200">
            <CardHeader>
              <CardTitle className="flex items-center text-green-800">
                <Phone className="w-5 h-5 mr-2" />
                Contact Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-green-600" />
                <span className="text-gray-600">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-green-600" />
                <span className="text-gray-600">info@abnutilities.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-green-600" />
                <span className="text-gray-600">123 Industrial Blvd, Tech City, TC 12345</span>
              </div>
            </CardContent>
          </Card>

          <Card className="border-green-200 md:col-span-2">
            <CardHeader>
              <CardTitle className="text-green-800">Services Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <h3 className="font-semibold text-green-800 mb-2">Coal Charging</h3>
                  <p className="text-sm text-gray-600">Advanced coal charging systems with real-time monitoring</p>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <h3 className="font-semibold text-green-800 mb-2">Pressure Control</h3>
                  <p className="text-sm text-gray-600">Precision pressure monitoring and control systems</p>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <h3 className="font-semibold text-green-800 mb-2">Maintenance</h3>
                  <p className="text-sm text-gray-600">Comprehensive maintenance and diagnostic tools</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
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

export default InfoPage;
