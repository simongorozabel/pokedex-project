import { createContext, useState } from "react";

export const UserNameContext = createContext(null);

export const UserNameProvider = ({ children }) => {
  const [userName, setUserName] = useState("");

  const saveUserName = (newUserName) => {
    setUserName(newUserName);
  };

  const removeUserName = () => {
    setUserName("");
  };

  const value = { userName, saveUserName, removeUserName };

  return (
    <UserNameContext.Provider value={value}>
      {children}
    </UserNameContext.Provider>
  );
};
