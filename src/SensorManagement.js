import React, { useState } from 'react';
import AddSensorModal from './AddSensorModal';

const SensorManagement = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [editingSensor, setEditingSensor] = useState(null);
  const [sensors, setSensors] = useState([]);

  const handleAddOrUpdateSensor = (sensorDetails) => {
    if (editingSensor) {
      setSensors((prevSensors) =>
        prevSensors.map((sensor) =>
          sensor.id === editingSensor.id ? { ...sensorDetails, id: sensor.id } : sensor
        )
      );
      setEditingSensor(null);
    } else {
      const newSensor = { ...sensorDetails, id: Date.now() };
      setSensors((prevSensors) => [...prevSensors, newSensor]);
    }
    setModalOpen(false);
  };

  const handleEditSensor = (sensor) => {
    setEditingSensor(sensor);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-semibold mb-8">Sensor Management</h1>

      <button onClick={() => setModalOpen(true)} className="bg-blue-600 text-white px-4 py-2 rounded mb-4">+ Add Sensor</button>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sensors.map((sensor) => (
          <div key={sensor.id} className="bg-white p-4 rounded shadow cursor-pointer hover:shadow-lg" onClick={() => handleEditSensor(sensor)}>
            <h3 className="font-semibold text-lg">{sensor.SensorType}</h3>
            <p>Range: {sensor.RangeMin} - {sensor.RangeMax}</p>
            <p>Location: {sensor.Location}</p>
            <p>Status: {sensor.Status}</p>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <AddSensorModal
          onClose={() => setModalOpen(false)}
          onSubmit={handleAddOrUpdateSensor}
          initialData={editingSensor}
        />
      )}
    </div>
  );
};

export default SensorManagement;