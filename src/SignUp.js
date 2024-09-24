// SignUp.js
import React, { useState } from 'react';
import './SignUp.css';
import axios from 'axios';

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    contactNumber: '',
    email: '',
    role: '',
  });

  const [serverError, setServerError] = useState('');
   // Access the environment variable
  const apiUrl = process.env.REACT_APP_API_SIGNUP_URL;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('${apiUrl}/register', {
        FirstName: formData.firstName,
        LastName: formData.lastName,
        Email: formData.email,
        Number: formData.contactNumber,
        Role: formData.role,
      });

      alert('User registered successfully. Please check your email to verify your account.');
      setFormData({
        firstName: '',
        lastName: '',
        contactNumber: '',
        email: '',
        role: '',
      });
      setServerError('');
    } catch (error) {
      setServerError(error.response ? error.response.data.detail : 'Registration failed');
    }
  };

  return (
    <div className="signup-container">
      <header className="signup-header">
        <span className="company-name">D.L. Healthcare Services</span>
      </header>

      <div className="signup-form">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Contact Number</label>
            <input
              type="tel"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Role</label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              required
            >
              <option value="">Select a role</option>
              <option value="patient">Patient</option>
              <option value="doctor">Healthcare Provider</option>
              <option value="nurse">Healthcare Assistant</option>
              <option value="admin">Caregiver</option>
            </select>
          </div>
          {serverError && <p className="error-message">{serverError}</p>}
          <button type="submit" className="submit-button">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;