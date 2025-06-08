
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const AdminPanel = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <Button asChild>
          <Link to="/admin/users" className="w-full h-full text-left">
            <Card>
              <CardHeader>
                <CardTitle>User Management</CardTitle>
              </CardHeader>
              <CardContent>
                Approve or remove user access
              </CardContent>
            </Card>
          </Link>
        </Button>
        <Button asChild>
          <Link to="/admin/security" className="w-full h-full text-left">
            <Card>
              <CardHeader>
                <CardTitle>Security Settings</CardTitle>
              </CardHeader>
              <CardContent>
                Manage access roles and restrictions
              </CardContent>
            </Card>
          </Link>
        </Button>
        <Button asChild>
          <Link to="/admin/settings" className="w-full h-full text-left">
            <Card>
              <CardHeader>
                <CardTitle>System Settings</CardTitle>
              </CardHeader>
              <CardContent>
                Configure system options
              </CardContent>
            </Card>
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default AdminPanel;
