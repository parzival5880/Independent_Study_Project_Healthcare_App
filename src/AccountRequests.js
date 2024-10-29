import React, { useState } from 'react';

const AccountRequests = () => {
  const [requests, setRequests] = useState([
    { RequestID: 'REQ001', RequesterID: 'User001', RequestedRole: 'Admin', Status: 'Pending' },
    // Add more requests if needed
  ]);

  return (
    <div className="max-w-4xl mx-auto py-8">
      <h2 className="text-2xl font-bold mb-4">Account Requests</h2>
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-4 py-2">Request ID</th>
            <th className="border px-4 py-2">Requester ID</th>
            <th className="border px-4 py-2">Requested Role</th>
            <th className="border px-4 py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {requests.map((req) => (
            <tr key={req.RequestID}>
              <td className="border px-4 py-2">{req.RequestID}</td>
              <td className="border px-4 py-2">{req.RequesterID}</td>
              <td className="border px-4 py-2">{req.RequestedRole}</td>
              <td className="border px-4 py-2">{req.Status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AccountRequests;