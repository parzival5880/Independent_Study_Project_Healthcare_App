// // // Login.js
// // import React, { useState } from 'react';
// // import './Login.css';
// // import axios from 'axios';
// // import { Link } from 'react-router-dom'; // Import Link from react-router-dom

// // const Login = () => {
// //   const [formData, setFormData] = useState({ email: '', password: '' });
// //   const [error, setError] = useState('');
// //   const [successMessage, setSuccessMessage] = useState('');
// //   //Enviroment Variable
// //   const apiURL = process.env.REACT_APP_API_BASE_URL;
// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData({ ...formData, [name]: value });
// //   };
// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     try {
// //       const response = await axios.post(`${apiUrl}/token`, {
// //         username: formData.email,
// //         password: formData.password,
// //       });

// //       const { access_token, role } = response.data;
// //       alert('Login successful!');
// //       setSuccessMessage('Login successful!');
// //       setError('');
// //       localStorage.setItem('token', access_token);
// //       localStorage.setItem('role', role);
// //     } catch (error) {
// //       setError(error.response ? error.response.data.detail : 'Login failed. Please try again.');
// //       setSuccessMessage('');
// //     }
// //   };

// //   return (
// //     <div className="login-container">
// //       <header className="login-header">
// //         <span className="company-name">D.L. Healthcare Services</span>
// //       </header>

// //       <div className="login-form">
// //         <h2>Login</h2>
// //         <form onSubmit={handleSubmit}>
// //           <div className="form-group">
// //             <label>Email</label>
// //             <input
// //               type="email"
// //               name="email"
// //               value={formData.email}
// //               onChange={handleChange}
// //               required
// //             />
// //           </div>
// //           <div className="form-group">
// //             <label>Password</label>
// //             <input
// //               type="password"
// //               name="password"
// //               value={formData.password}
// //               onChange={handleChange}
// //               required
// //             />
// //           </div>
// //           {error && <p className="error-message">{error}</p>}
// //           {successMessage && <p className="success-message">{successMessage}</p>}
// //           <button type="submit" className="submit-button">
// //             Login
// //           </button>
// //         </form>
// //         <p className="first-time-user">
// //           First time user? <Link to="/signup">Sign Up</Link> {/* Link to sign-up page */}
// //         </p>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Login;


// import React, { useState } from 'react';
// import './Login.css';
// import axios from 'axios';
// import { Link } from 'react-router-dom';

// const Login = () => {
//   const [formData, setFormData] = useState({ email: '', password: '' });
//   const [error, setError] = useState('');
//   const [successMessage, setSuccessMessage] = useState('');

//   // Access environment variable
//   const apiUrl = process.env.REACT_APP_API_BASE_URL;

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post(`${apiUrl}/login`, {
//         username: formData.email,
//         password: formData.password,
//       });

//       const { access_token, role } = response.data;
//       alert('Login successful!');
//       setSuccessMessage('Login successful!');
//       setError('');
//       localStorage.setItem('token', access_token);
//       localStorage.setItem('role', role);
//     } catch (error) {
//       setError(error.response ? error.response.data.detail : 'Login failed. Please try again.');
//       setSuccessMessage('');
//     }
//   };

//   return (
//     <div className="login-container">
//       <header className="login-header">
//         <span className="company-name">D.L. Healthcare Services</span>
//       </header>

//       <div className="login-form">
//         <h2>Login</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label>Email</label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label>Password</label>
//             <input
//               type="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           {error && <p className="error-message">{error}</p>}
//           {successMessage && <p className="success-message">{successMessage}</p>}
//           <button type="submit" className="submit-button">
//             Login
//           </button>
//         </form>
//         <p className="first-time-user">
//           First time user? <Link to="/signup">Sign Up</Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;

// import React, { useState } from 'react';
// import './Login.css';
// import axios from 'axios';
// import { Link } from 'react-router-dom';

// const Login = () => {
//   const [formData, setFormData] = useState({ email: '', password: '' });
//   const [error, setError] = useState('');
//   const [successMessage, setSuccessMessage] = useState('');

//   // Access environment variable
//   const apiUrl = process.env.REACT_APP_API_BASE_URL;

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log("Attempting to login with:", {
//       email: formData.email,
//       password: formData.password,
//     }); // Log email and password for debugging

//     try {
//       const response = await axios.post(`${apiUrl}/login`, {
//         username: formData.email.trim(), // Ensure no trailing spaces
//         password: formData.password.trim(),
//       }, {
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });

//       console.log("Login response:", response.data); // Log the backend response

//       const { access_token, role } = response.data;
//       alert('Login successful!');
//       setSuccessMessage('Login successful!');
//       setError('');
//       localStorage.setItem('token', access_token);
//       localStorage.setItem('role', role);
//     } catch (error) {
//       console.error("Login error:", error); // Log the error for debugging
//       setError(error.response ? error.response.data.detail : 'Login failed. Please try again.');
//       setSuccessMessage('');
//     }
//   };

//   return (
//     <div className="login-container">
//       <header className="login-header">
//         <span className="company-name">D.L. Healthcare Services</span>
//       </header>

//       <div className="login-form">
//         <h2>Login</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label>Email</label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label>Password</label>
//             <input
//               type="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           {error && <p className="error-message">{error}</p>}
//           {successMessage && <p className="success-message">{successMessage}</p>}
//           <button type="submit" className="submit-button">
//             Login
//           </button>
//         </form>
//         <p className="first-time-user">
//           First time user? <Link to="/signup">Sign Up</Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;


import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // Access environment variable
  const apiUrl = process.env.REACT_APP_API_BASE_URL;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Attempting to login with:", {
      email: formData.email,
      password: formData.password,
    }); // Log email and password for debugging

    try {
      const response = await fetch(`${apiUrl}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: formData.email.trim(),
          password: formData.password.trim(),
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || 'Login failed. Please try again.');
      }

      const data = await response.json();
      console.log("Login response:", data); // Log the backend response

      const { access_token, role } = data;
      alert('Login successful!');
      setSuccessMessage('Login successful!');
      setError('');
      localStorage.setItem('token', access_token);
      localStorage.setItem('role', role);
    } catch (error) {
      console.error("Login error:", error); // Log the error for debugging
      setError(error.message);
      setSuccessMessage('');
    }
  };

  return (
    <div className="login-container">
      <header className="login-header">
        <span className="company-name">D.L. Healthcare Services</span>
      </header>

      <div className="login-form">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
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
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          {successMessage && <p className="success-message">{successMessage}</p>}
          <button type="submit" className="submit-button">
            Login
          </button>
        </form>
        <p className="first-time-user">
          First time user? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;