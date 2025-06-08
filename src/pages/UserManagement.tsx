
import React, { useEffect, useState } from 'react';
import { collection, getDocs, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { db } from '@/firebase'; // make sure your firebase config is exported from this path
import { Button } from '@/components/ui/button';

const UserManagement = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const querySnapshot = await getDocs(collection(db, 'users'));
    const data = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setUsers(data);
  };

  const handleApprove = async (id) => {
    await updateDoc(doc(db, 'users', id), { isApproved: true });
    fetchUsers();
  };

  const handleReject = async (id) => {
    await deleteDoc(doc(db, 'users', id));
    fetchUsers();
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Pending Users</h2>
      <div className="space-y-4">
        {users
          .filter((u) => u.isApproved === false)
          .map((user) => (
            <div key={user.id} className="p-4 border rounded bg-white shadow">
              <p><strong>Name:</strong> {user.full_name}</p>
              <p><strong>ID:</strong> {user.company_id}</p>
              <p><strong>Role:</strong> {user.role}</p>
              <p><strong>Birthday:</strong> {user.birthday}</p>
              <div className="flex gap-2 mt-2">
                <Button onClick={() => handleApprove(user.id)}>Approve</Button>
                <Button variant="destructive" onClick={() => handleReject(user.id)}>Reject</Button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default UserManagement;
