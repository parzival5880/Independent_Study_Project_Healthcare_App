import React, { useState } from 'react';
import Login from './Login';
import Register from './Register';
import './App.css';

const App = () => {
  const [currentView, setCurrentView] = useState('login');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    console.log('User logged in successfully!');
  };

  return (
    <div className="App">
      {!isLoggedIn ? (
        currentView === 'login' ? (
          <Login
            onSuccess={handleLoginSuccess}
            onSwitchToRegister={() => setCurrentView('register')}
          />
        ) : (
          <Register
            onSuccess={() => setCurrentView('login')}
            onSwitchToLogin={() => setCurrentView('login')}
          />
        )
      ) : (
        <div className="flex items-center justify-center h-screen">
          <h2 className="text-2xl font-bold">Welcome, you are logged in!</h2>
        </div>
      )}
    </div>
  );
};

export default App;
