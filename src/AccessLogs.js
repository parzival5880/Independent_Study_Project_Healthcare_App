import React, { useState } from 'react';

const AccessLogs = () => {
  const [logs, setLogs] = useState([
    { AccessLogID: 'ACC001', SensorID: 'S001', UserID: 'U001', AccessTimeStamp: '2024-10-25T12:30:00', Action: 'Read' },
    // Add more static or dynamic log entries
  ]);

  return (
    <div className="max-w-4xl mx-auto py-8">
      <h2 className="text-2xl font-bold mb-4">Access Logs</h2>
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-4 py-2">Access Log ID</th>
            <th className="border px-4 py-2">Sensor ID</th>
            <th className="border px-4 py-2">User ID</th>
            <th className="border px-4 py-2">Timestamp</th>
            <th className="border px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {logs.map((log) => (
            <tr key={log.AccessLogID}>
              <td className="border px-4 py-2">{log.AccessLogID}</td>
              <td className="border px-4 py-2">{log.SensorID}</td>
              <td className="border px-4 py-2">{log.UserID}</td>
              <td className="border px-4 py-2">{new Date(log.AccessTimeStamp).toLocaleString()}</td>
              <td className="border px-4 py-2">{log.Action}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AccessLogs;