'use client';

import { useEffect, useState } from 'react';

export default function AdminDashboard() {
  const [requests, setRequests] = useState<any[]>([]);

  useEffect(() => {
    const fetchRequests = async () => {
      const res = await fetch('/api/submit-request');
      const data = await res.json();
      setRequests(data.requests);
    };
    fetchRequests();
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
      {requests.length === 0 ? (
        <p>No requests yet.</p>
      ) : (
        <ul className="space-y-4">
          {requests.map((req, index) => (
            <li key={index} className="border p-4 rounded-md bg-white shadow">
              <p><strong>Name:</strong> {req.name}</p>
              <p><strong>Email:</strong> {req.email}</p>
              <p><strong>Student ID:</strong> {req.studentId}</p>
              <p><strong>Type:</strong> {req.type}</p>
              <p><strong>Purpose:</strong> {req.purpose}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
