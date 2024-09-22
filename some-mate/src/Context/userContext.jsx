import { createContext, useContext, useState } from 'react';

const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState({
    gender: '',
    name: '',
    openChatLink: '',
    userId: '',
    password: '',
    age: '',
    profile: '',
    mbti: '',
  });

  const updateUser = (newData) => {
    setUserData(prev => ({ ...prev, ...newData }));
  };

  return (
    <UserContext.Provider value={{ userData, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
