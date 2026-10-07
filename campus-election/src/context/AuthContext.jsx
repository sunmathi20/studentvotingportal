import { createContext, useContext, useState } from "react";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("electionUser");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const login = (studentId) => {
    const userData = {
      studentId,
      name: "Sunmathi",
    };

    localStorage.setItem("electionUser", JSON.stringify(userData));
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem("electionUser");
    localStorage.removeItem("votedCandidate");
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};