import React from 'react';
import { useRouter } from './Router';

const Navigation = () => {
  const { navigate } = useRouter();

  return (
    <nav className="bg-white shadow-sm p-4 flex justify-between items-center">
      <div className="text-xl font-bold text-blue-600 cursor-pointer" onClick={() => navigate('/dashboard')}>
        Healthcare Dashboard
      </div>
      <button onClick={() => navigate('/login')} className="text-red-500 hover:text-red-700">
        Logout
      </button>
    </nav>
  );
};

export default Navigation;