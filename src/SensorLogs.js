// import React, { useState, useEffect } from 'react';

// const SensorLogs = () => {
//   const [logs, setLogs] = useState([]);
//   const [newLog, setNewLog] = useState({
//     SensorID: '',
//     Value: '',
//     WarningFlag: 'Normal',
//   });

//   useEffect(() => {
//     const mockLogs = [
//       { LogID: '1', SensorID: '101', Value: '45', WarningFlag: 'Normal' },
//       { LogID: '2', SensorID: '102', Value: '60', WarningFlag: 'Warning' },
//     ];
//     setLogs(mockLogs);
//   }, []);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setNewLog((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleAddLog = (e) => {
//     e.preventDefault();
//     const logID = logs.length + 1; 
//     const newLogEntry = { LogID: logID.toString(), ...newLog };
//     setLogs((prev) => [...prev, newLogEntry]);
//     setNewLog({ SensorID: '', Value: '', WarningFlag: 'Normal' });
//   };

//   return (
//     <div className="max-w-4xl mx-auto py-8">
//       <h2 className="text-2xl font-bold mb-4">Sensor Logs</h2>

//       <form onSubmit={handleAddLog} className="mb-6">
//         <div className="grid grid-cols-3 gap-4 mb-4">
//           <input type="text" name="SensorID" value={newLog.SensorID} onChange={handleChange} placeholder="Sensor ID" className="border p-2 rounded" required />
//           <input type="number" name="Value" value={newLog.Value} onChange={handleChange} placeholder="Value" className="border p-2 rounded" required />
//           <select name="WarningFlag" value={newLog.WarningFlag} onChange={handleChange} className="border p-2 rounded">
//             <option value="Normal">Normal</option>
//             <option value="Warning">Warning</option>
//             <option value="Danger">Danger</option>
//           </select>
//         </div>
//         <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Add Log</button>
//       </form>

//       <table className="w-full border">
//         <thead>
//           <tr className="bg-gray-100">
//             <th className="border px-4 py-2">Log ID</th>
//             <th className="border px-4 py-2">Sensor ID</th>
//             <th className="border px-4 py-2">Value</th>
//             <th className="border px-4 py-2">Warning Flag</th>
//           </tr>
//         </thead>
//         <tbody>
//           {logs.map((log) => (
//             <tr key={log.LogID}>
//               <td className="border px-4 py-2">{log.LogID}</td>
//               <td className="border px-4 py-2">{log.SensorID}</td>
//               <td className="border px-4 py-2">{log.Value}</td>
//               <td className="border px-4 py-2">{log.WarningFlag}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default SensorLogs;

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const SensorLogs = () => {
  const [logs, setLogs] = useState([]);
  const [newLog, setNewLog] = useState({
    SensorID: '',
    Value: '',
    WarningFlag: 'Normal',
  });
  const navigate = useNavigate(); // Initialize navigate function

  // Mock fetching logs (replace with real API fetch when integrating)
  useEffect(() => {
    const mockLogs = [
      { LogID: '1', SensorID: '101', Value: '45', WarningFlag: 'Normal' },
      { LogID: '2', SensorID: '102', Value: '60', WarningFlag: 'Warning' },
    ];
    setLogs(mockLogs);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewLog((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddLog = (e) => {
    e.preventDefault();
    const logID = logs.length + 1; // Mock LogID
    const newLogEntry = { LogID: logID.toString(), ...newLog };
    setLogs((prev) => [...prev, newLogEntry]);
    setNewLog({ SensorID: '', Value: '', WarningFlag: 'Normal' });
  };

  return (
    <div className="max-w-4xl mx-auto py-8">
      <h2 className="text-2xl font-bold mb-4">Sensor Logs</h2>

      {/* Back to Dashboard Button */}
      <button
        onClick={() => navigate('/dashboard')}
        className="bg-gray-600 text-white px-4 py-2 rounded mb-4"
      >
        ← Back to Dashboard
      </button>

      {/* Log Form */}
      <form onSubmit={handleAddLog} className="mb-6">
        <div className="grid grid-cols-3 gap-4 mb-4">
          <input
            type="text"
            name="SensorID"
            value={newLog.SensorID}
            onChange={handleChange}
            placeholder="Sensor ID"
            className="border p-2 rounded"
            required
          />
          <input
            type="number"
            name="Value"
            value={newLog.Value}
            onChange={handleChange}
            placeholder="Value"
            className="border p-2 rounded"
            required
          />
          <select
            name="WarningFlag"
            value={newLog.WarningFlag}
            onChange={handleChange}
            className="border p-2 rounded"
          >
            <option value="Normal">Normal</option>
            <option value="Warning">Warning</option>
            <option value="Danger">Danger</option>
          </select>
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Add Log
        </button>
      </form>

      {/* Log Table */}
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-4 py-2">Log ID</th>
            <th className="border px-4 py-2">Sensor ID</th>
            <th className="border px-4 py-2">Value</th>
            <th className="border px-4 py-2">Warning Flag</th>
          </tr>
        </thead>
        <tbody>
          {logs.map((log) => (
            <tr key={log.LogID}>
              <td className="border px-4 py-2">{log.LogID}</td>
              <td className="border px-4 py-2">{log.SensorID}</td>
              <td className="border px-4 py-2">{log.Value}</td>
              <td className="border px-4 py-2">{log.WarningFlag}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SensorLogs;