// import React, { useState, useEffect } from 'react';

// const AddSensorModal = ({ onClose, onSubmit, initialData }) => {
//   const [sensorDetails, setSensorDetails] = useState({
//     SensorType: '',
//     RangeMin: '',
//     RangeMax: '',
//     AbsoluteMin: '',
//     AbsoluteMax: '',
//     CurrentValue: '',
//     Status: 'Active',
//     Location: '',
//     DataCollectionFrequency: '',
//     SensorCategory: '',
//   });

//   // Pre-fill the form if editing existing data
//   useEffect(() => {
//     if (initialData) {
//       setSensorDetails(initialData);
//     }
//   }, [initialData]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setSensorDetails((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSubmit(sensorDetails); // Submit the form data to parent component
//     onClose(); // Close modal after submission
//   };

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//       <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
//         <h2 className="text-2xl font-bold mb-4">
//           {initialData ? 'Update Sensor' : 'Add New Sensor'}
//         </h2>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label className="block mb-1 font-medium">Sensor Type</label>
//             <input
//               type="text"
//               name="SensorType"
//               value={sensorDetails.SensorType}
//               onChange={handleChange}
//               className="w-full border rounded p-2"
//               required
//             />
//           </div>

//           <div className="grid grid-cols-2 gap-4 mb-4">
//             <div>
//               <label className="block mb-1 font-medium">Range Min</label>
//               <input
//                 type="number"
//                 name="RangeMin"
//                 value={sensorDetails.RangeMin}
//                 onChange={handleChange}
//                 className="w-full border rounded p-2"
//               />
//             </div>
//             <div>
//               <label className="block mb-1 font-medium">Range Max</label>
//               <input
//                 type="number"
//                 name="RangeMax"
//                 value={sensorDetails.RangeMax}
//                 onChange={handleChange}
//                 className="w-full border rounded p-2"
//               />
//             </div>
//           </div>

//           <div className="grid grid-cols-2 gap-4 mb-4">
//             <div>
//               <label className="block mb-1 font-medium">Absolute Min</label>
//               <input
//                 type="number"
//                 name="AbsoluteMin"
//                 value={sensorDetails.AbsoluteMin}
//                 onChange={handleChange}
//                 className="w-full border rounded p-2"
//               />
//             </div>
//             <div>
//               <label className="block mb-1 font-medium">Absolute Max</label>
//               <input
//                 type="number"
//                 name="AbsoluteMax"
//                 value={sensorDetails.AbsoluteMax}
//                 onChange={handleChange}
//                 className="w-full border rounded p-2"
//               />
//             </div>
//           </div>

//           <div className="mb-4">
//             <label className="block mb-1 font-medium">Current Value</label>
//             <input
//               type="number"
//               name="CurrentValue"
//               value={sensorDetails.CurrentValue}
//               onChange={handleChange}
//               className="w-full border rounded p-2"
//             />
//           </div>

//           <div className="mb-4">
//             <label className="block mb-1 font-medium">Status</label>
//             <select
//               name="Status"
//               value={sensorDetails.Status}
//               onChange={handleChange}
//               className="w-full border rounded p-2"
//             >
//               <option value="Active">Active</option>
//               <option value="Inactive">Inactive</option>
//             </select>
//           </div>

//           <div className="mb-4">
//             <label className="block mb-1 font-medium">Location</label>
//             <input
//               type="text"
//               name="Location"
//               value={sensorDetails.Location}
//               onChange={handleChange}
//               className="w-full border rounded p-2"
//             />
//           </div>

//           <div className="mb-4">
//             <label className="block mb-1 font-medium">Data Collection Frequency</label>
//             <input
//               type="text"
//               name="DataCollectionFrequency"
//               value={sensorDetails.DataCollectionFrequency}
//               onChange={handleChange}
//               className="w-full border rounded p-2"
//             />
//           </div>

//           <div className="mb-4">
//             <label className="block mb-1 font-medium">Sensor Category</label>
//             <input
//               type="text"
//               name="SensorCategory"
//               value={sensorDetails.SensorCategory}
//               onChange={handleChange}
//               className="w-full border rounded p-2"
//             />
//           </div>

//           <div className="flex justify-end space-x-4">
//             <button
//               type="button"
//               onClick={onClose}
//               className="bg-gray-600 text-white px-4 py-2 rounded"
//             >
//               Cancel
//             </button>
//             <button
//               type="submit"
//               className="bg-blue-600 text-white px-4 py-2 rounded"
//             >
//               {initialData ? 'Update Sensor' : 'Add Sensor'}
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AddSensorModal;


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