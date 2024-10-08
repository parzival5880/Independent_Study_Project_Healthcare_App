// SensorManager.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './SensorManager.css';

const SensorManager = () => {
  const [sensors, setSensors] = useState([]);
  const [formData, setFormData] = useState({
    SensorType: '',
    RangeMin: '',
    RangeMax: '',
    AbsoluteMin: '',
    AbsoluteMax: '',
    CurrentValue: '',
    Status: 'Active',
    PatientID: '',
    Location: '',
    DataCollectionFrequency: '',
    SensorCategory: 'Body-attached',
  });
  const [selectedSensor, setSelectedSensor] = useState(null);

  // Fetch sensor details
  useEffect(() => {
    const fetchSensors = async () => {
      try {
        const response = await axios.get('/getsensordetails');
        setSensors(response.data);
      } catch (error) {
        console.error('Error fetching sensors:', error);
      }
    };
    fetchSensors();
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission for adding a new sensor
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/sensordetails', formData);
      alert(response.data.message);
      setSensors([...sensors, response.data]);
    } catch (error) {
      console.error('Error adding sensor:', error);
      alert('Failed to add sensor');
    }
  };

  // Handle form submission for updating a sensor
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`/updatesensordetails/${selectedSensor.SensorID}`, formData);
      alert(response.data.message);
      // Update the local list of sensors
      setSensors(
        sensors.map((sensor) =>
          sensor.SensorID === selectedSensor.SensorID ? { ...selectedSensor, ...formData } : sensor
        )
      );
      setSelectedSensor(null);
      setFormData({
        SensorType: '',
        RangeMin: '',
        RangeMax: '',
        AbsoluteMin: '',
        AbsoluteMax: '',
        CurrentValue: '',
        Status: 'Active',
        PatientID: '',
        Location: '',
        DataCollectionFrequency: '',
        SensorCategory: 'Body-attached',
      });
    } catch (error) {
      console.error('Error updating sensor:', error);
      alert('Failed to update sensor');
    }
  };

  // Handle selecting a sensor to update
  const handleEditClick = (sensor) => {
    setSelectedSensor(sensor);
    setFormData(sensor);
  };

  return (
    <div className="sensor-manager">
      <h2>Sensor Management</h2>

      <form onSubmit={selectedSensor ? handleUpdate : handleSubmit}>
        <h3>{selectedSensor ? 'Update Sensor' : 'Add New Sensor'}</h3>
        <input
          type="text"
          name="SensorType"
          placeholder="Sensor Type"
          value={formData.SensorType}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="RangeMin"
          placeholder="Range Min"
          value={formData.RangeMin}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="RangeMax"
          placeholder="Range Max"
          value={formData.RangeMax}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="AbsoluteMin"
          placeholder="Absolute Min"
          value={formData.AbsoluteMin}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="AbsoluteMax"
          placeholder="Absolute Max"
          value={formData.AbsoluteMax}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="CurrentValue"
          placeholder="Current Value"
          value={formData.CurrentValue}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="PatientID"
          placeholder="Patient ID"
          value={formData.PatientID}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="Location"
          placeholder="Location"
          value={formData.Location}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="DataCollectionFrequency"
          placeholder="Data Collection Frequency"
          value={formData.DataCollectionFrequency}
          onChange={handleChange}
          required
        />
        <select
          name="SensorCategory"
          value={formData.SensorCategory}
          onChange={handleChange}
          required
        >
          <option value="Body-attached">Body-attached</option>
          <option value="Environmental">Environmental</option>
        </select>
        <button type="submit">{selectedSensor ? 'Update Sensor' : 'Add Sensor'}</button>
      </form>

      <h3>All Sensors</h3>
      <div className="sensor-list">
        {sensors.length > 0 ? (
          sensors.map((sensor) => (
            <div key={sensor.SensorID} className="sensor-card">
              <h4>{sensor.SensorType}</h4>
              <p>ID: {sensor.SensorID}</p>
              <p>Location: {sensor.Location}</p>
              <p>Status: {sensor.Status}</p>
              <p>Range: {sensor.RangeMin} - {sensor.RangeMax}</p>
              <p>Current Value: {sensor.CurrentValue}</p>
              <button onClick={() => handleEditClick(sensor)}>Edit</button>
            </div>
          ))
        ) : (
          <p>No sensors available.</p>
        )}
      </div>
    </div>
  );
};

export default SensorManager;