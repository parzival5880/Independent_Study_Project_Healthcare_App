// import React, { useState } from 'react';

// const AuthorizedUsers = () => {
//   const [authorizedUsers, setAuthorizedUsers] = useState([
//     {
//       AuthorizationID: 'AUTH001',
//       PatientID: 'P001',
//       AuthorizedUserID: 'U001',
//       CanManageAccounts: true,
//       CreatedAt: '2024-10-25 12:30:00',
//       ExpiresAt: '2024-11-01 12:30:00',
//     },
//     {
//       AuthorizationID: 'AUTH002',
//       PatientID: 'P002',
//       AuthorizedUserID: 'U002',
//       CanManageAccounts: false,
//       CreatedAt: '2024-10-24 14:00:00',
//       ExpiresAt: '2024-10-31 14:00:00',
//     },
//   ]);

//   const [newUser, setNewUser] = useState({
//     PatientID: '',
//     AuthorizedUserID: '',
//     CanManageAccounts: false,
//   });

//   const handleAddUser = () => {
//     const newUserEntry = {
//       AuthorizationID: `AUTH${String(authorizedUsers.length + 1).padStart(3, '0')}`,
//       ...newUser,
//       CreatedAt: new Date().toISOString().slice(0, 19).replace('T', ' '),
//       ExpiresAt: new Date(new Date().setDate(new Date().getDate() + 7))
//         .toISOString()
//         .slice(0, 19)
//         .replace('T', ' '),
//     };
//     setAuthorizedUsers([...authorizedUsers, newUserEntry]);
//     setNewUser({ PatientID: '', AuthorizedUserID: '', CanManageAccounts: false });
//   };

//   return (
//     <div className="max-w-4xl mx-auto py-8">
//       <h2 className="text-2xl font-bold mb-4">Authorized Users</h2>

//       <div className="mb-6">
//         <input
//           type="text"
//           placeholder="Patient ID"
//           value={newUser.PatientID}
//           onChange={(e) => setNewUser({ ...newUser, PatientID: e.target.value })}
//           className="border p-2 rounded mb-2 mr-2"
//         />
//         <input
//           type="text"
//           placeholder="Authorized User ID"
//           value={newUser.AuthorizedUserID}
//           onChange={(e) => setNewUser({ ...newUser, AuthorizedUserID: e.target.value })}
//           className="border p-2 rounded mb-2 mr-2"
//         />
//         <label className="inline-flex items-center">
//           <input
//             type="checkbox"
//             checked={newUser.CanManageAccounts}
//             onChange={(e) => setNewUser({ ...newUser, CanManageAccounts: e.target.checked })}
//             className="mr-2"
//           />
//           Can Manage Accounts
//         </label>
//         <button
//           onClick={handleAddUser}
//           className="bg-blue-500 text-white px-4 py-2 rounded ml-2"
//         >
//           Add User
//         </button>
//       </div>

//       <table className="w-full border">
//         <thead>
//           <tr className="bg-gray-100">
//             <th className="border px-4 py-2">Authorization ID</th>
//             <th className="border px-4 py-2">Patient ID</th>
//             <th className="border px-4 py-2">User ID</th>
//             <th className="border px-4 py-2">Can Manage Accounts</th>
//             <th className="border px-4 py-2">Created At</th>
//             <th className="border px-4 py-2">Expires At</th>
//           </tr>
//         </thead>
//         <tbody>
//           {authorizedUsers.map((user) => (
//             <tr key={user.AuthorizationID}>
//               <td className="border px-4 py-2">{user.AuthorizationID}</td>
//               <td className="border px-4 py-2">{user.PatientID}</td>
//               <td className="border px-4 py-2">{user.AuthorizedUserID}</td>
//               <td className="border px-4 py-2">{user.CanManageAccounts ? 'Yes' : 'No'}</td>
//               <td className="border px-4 py-2">{user.CreatedAt}</td>
//               <td className="border px-4 py-2">{user.ExpiresAt}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default AuthorizedUsers;

// Updated 

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const AccountRequests = () => {
  const [requests, setRequests] = useState([
    {
      RequestID: 'REQ001',
      RequesterID: 'User001',
      RequestedRole: 'Admin',
      Status: 'Pending',
    },
    {
      RequestID: 'REQ002',
      RequesterID: 'User002',
      RequestedRole: 'User',
      Status: 'Approved',
    },
  ]);

  const [newRequest, setNewRequest] = useState({
    RequesterID: '',
    RequestedRole: '',
    Status: 'Pending',
  });

  const navigate = useNavigate(); // Initialize navigate function

  const handleAddRequest = () => {
    const newRequestID = `REQ${String(requests.length + 1).padStart(3, '0')}`;
    const newEntry = { ...newRequest, RequestID: newRequestID };
    setRequests([...requests, newEntry]);
    setNewRequest({ RequesterID: '', RequestedRole: '', Status: 'Pending' });
  };

  const handleUpdateStatus = (requestID, newStatus) => {
    const updatedRequests = requests.map((req) =>
      req.RequestID === requestID ? { ...req, Status: newStatus } : req
    );
    setRequests(updatedRequests);
  };

  return (
    <div className="max-w-4xl mx-auto py-8">
      <h2 className="text-2xl font-bold mb-4">Account Requests</h2>

      {/* Back to Dashboard Button */}
      <button
        onClick={() => navigate('/dashboard')}
        className="bg-gray-600 text-white px-4 py-2 rounded mb-4"
      >
        ← Back to Dashboard
      </button>

      {/* New Account Request Form */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Requester ID"
          value={newRequest.RequesterID}
          onChange={(e) => setNewRequest({ ...newRequest, RequesterID: e.target.value })}
          className="border p-2 rounded mb-2 mr-2"
        />
        <input
          type="text"
          placeholder="Requested Role"
          value={newRequest.RequestedRole}
          onChange={(e) => setNewRequest({ ...newRequest, RequestedRole: e.target.value })}
          className="border p-2 rounded mb-2 mr-2"
        />
        <button onClick={handleAddRequest} className="bg-blue-500 text-white px-4 py-2 rounded">
          Add Request
        </button>
      </div>

      {/* Account Requests Table */}
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-4 py-2">Request ID</th>
            <th className="border px-4 py-2">Requester ID</th>
            <th className="border px-4 py-2">Requested Role</th>
            <th className="border px-4 py-2">Status</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {requests.map((req) => (
            <tr key={req.RequestID}>
              <td className="border px-4 py-2">{req.RequestID}</td>
              <td className="border px-4 py-2">{req.RequesterID}</td>
              <td className="border px-4 py-2">{req.RequestedRole}</td>
              <td className="border px-4 py-2">{req.Status}</td>
              <td className="border px-4 py-2">
                {req.Status !== 'Approved' && (
                  <button
                    onClick={() => handleUpdateStatus(req.RequestID, 'Approved')}
                    className="bg-green-500 text-white px-2 py-1 rounded mr-2"
                  >
                    Approve
                  </button>
                )}
                {req.Status !== 'Rejected' && (
                  <button
                    onClick={() => handleUpdateStatus(req.RequestID, 'Rejected')}
                    className="bg-red-500 text-white px-2 py-1 rounded"
                  >
                    Reject
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AccountRequests;