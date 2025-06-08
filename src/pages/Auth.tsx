
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

// Firebase imports
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';

// Firebase config (replace with your actual config)
const firebaseConfig = {
  apiKey: "AIzaSyB0-PNkHDcLW356892joz-8KDVYRXQbShg",
  authDomain: "abnportal-fb070.firebaseapp.com",
  projectId: "abnportal-fb070",
  storageBucket: "abnportal-fb070.firebasestorage.app",
  messagingSenderId: "124537892733",
  appId: "1:124537892733:web:82725bb557f8521348a614"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const Auth = () => {
  const [isSignUp] = useState(false);
  const [companyId, setCompanyId] = useState('');
  const [selectedRole, setSelectedRole] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!companyId || !selectedRole) {
      toast({ title: 'Missing Info', description: 'Please fill all fields.' });
      return;
    }

    setLoading(true);

    try {
      if (companyId === "99999999") {
        localStorage.setItem("user", JSON.stringify({
          full_name: "Maintenance Admin",
          role: "Admin",
          company_id: "99999999",
          maintenance: true
        }));
        navigate("/admin?maintenance=true");
        return;
      }

      const q = query(
        collection(db, "users"),
        where("company_id", "==", companyId),
        where("role", "==", selectedRole)
      );

      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        toast({ title: "Error", description: "No matching account found." });
        setLoading(false);
        return;
      }

      const userDoc = querySnapshot.docs[0];
      const userData = userDoc.data();

      if (!userData.isApproved) {
        toast({ title: "Access Denied", description: "Account not yet approved." });
        setLoading(false);
        return;
      }

      localStorage.setItem("user", JSON.stringify(userData));

      if (userData.role === "Admin") {
        navigate("/admin");
      } else if (userData.role === "Mantech") {
        navigate("/dashboard/mantech");
      } else if (userData.role === "Opscrew") {
        navigate("/dashboard/opscrew");
      } else {
        navigate("/guest");
      }
    } catch (error) {
      console.error("Login error:", error);
      toast({ title: "Error", description: "Login failed." });
    }

    setLoading(false);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-center">Login</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSignIn}>
            <div className="mb-4">
              <Label>Company ID</Label>
              <Input
                value={companyId}
                onChange={(e) => setCompanyId(e.target.value)}
                placeholder="Enter your Company ID"
              />
            </div>
            <div className="mb-4">
              <Label>Role</Label>
              <Select onValueChange={(val) => setSelectedRole(val)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Admin">Admin</SelectItem>
                  <SelectItem value="Mantech">Mantech</SelectItem>
                  <SelectItem value="Opscrew">Opscrew</SelectItem>
                  <SelectItem value="Guest">Guest</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Signing In..." : "Sign In"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Auth;
