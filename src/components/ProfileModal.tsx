
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ProfileModal = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user') || '{}');

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/');
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Profile</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>User Profile</DialogTitle>
        </DialogHeader>
        <div className="space-y-2 text-sm">
          <p><strong>Name:</strong> {user.full_name || 'Unknown'}</p>
          <p><strong>Role:</strong> {user.role || 'N/A'}</p>
          <p><strong>Company ID:</strong> {user.company_id || 'N/A'}</p>
        </div>
        <Button onClick={handleLogout} className="mt-4 w-full" variant="destructive">
          <LogOut className="mr-2 h-4 w-4" /> Logout
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default ProfileModal;
