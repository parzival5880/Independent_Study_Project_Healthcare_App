// import React, { useState } from 'react';
// import Login from './Login';
// import Register from './Register';
// import './App.css';

// const App = () => {
//   const [currentView, setCurrentView] = useState('login');
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const handleLoginSuccess = () => {
//     setIsLoggedIn(true);
//     console.log('User logged in successfully!');
//   };

//   return (
//     <div className="App">
//       {!isLoggedIn ? (
//         currentView === 'login' ? (
//           <Login
//             onSuccess={handleLoginSuccess}
//             onSwitchToRegister={() => setCurrentView('register')}
//           />
//         ) : (
//           <Register
//             onSuccess={() => setCurrentView('login')}
//             onSwitchToLogin={() => setCurrentView('login')}
//           />
//         )
//       ) : (
//         <div className="flex items-center justify-center h-screen">
//           <h2 className="text-2xl font-bold">Welcome, you are logged in!</h2>
//         </div>
//       )}
//     </div>
//   );
// };

// export default App;





import React, { useState } from 'react';
import Login from './Login';
import Register from './Register';
import Dashboard from './Dashboard';
import AccessLogs from './AccessLogs';
import AccountRequests from './AccountRequests';
import AuthorizedUsers from './AuthorizedUsers';
import SensorLogs from './SensorLogs';
import SensorManagement from './SensorManagement';
import SensorModifications from './SensorModifications';
import { useRouter } from './Router';
import './App.css';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { currentPath, navigate } = useRouter();

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    navigate('/dashboard');
  };

  const renderContent = () => {
    if (!isLoggedIn) {
      return currentPath === '/register' ? (
        <Register onSuccess={() => navigate('/login')} onSwitchToLogin={() => navigate('/login')} />
      ) : (
        <Login onSuccess={handleLoginSuccess} onSwitchToRegister={() => navigate('/register')} />
      );
    }

    switch (currentPath) {
      case '/dashboard':
        return <Dashboard />;
      case '/dashboard/access-logs':
        return <AccessLogs />;
      case '/dashboard/account-requests':
        return <AccountRequests />;
      case '/dashboard/authorized-users':
        return <AuthorizedUsers />;
      case '/dashboard/sensor-logs':
        return <SensorLogs />;
      case '/dashboard/sensor-management':
        return <SensorManagement />;
      case '/dashboard/sensor-modifications':
        return <SensorModifications />;
      default:
        return <Dashboard />;
    }
  };

  return <div className="App">{renderContent()}</div>;
};

export default App;