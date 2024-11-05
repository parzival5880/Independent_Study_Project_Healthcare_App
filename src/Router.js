// import { useState } from 'react';

// export const useRouter = () => {
//   const [currentPath, setCurrentPath] = useState('/login'); // Default to login

//   const navigate = (path) => {
//     setCurrentPath(path);
//     window.history.pushState({}, '', path); // Update browser history
//   };

//   return { currentPath, navigate };
// };

import { useState } from 'react';

export const useRouter = () => {
  const [currentPath, setCurrentPath] = useState('/dashboard'); // Default path

  const navigate = (path) => {
    setCurrentPath(path);
    window.history.pushState({}, '', path); // Update browser history
  };

  return { currentPath, navigate };
};