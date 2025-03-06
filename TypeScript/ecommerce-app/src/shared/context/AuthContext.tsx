// import React, { createContext, useContext, useState, useEffect } from "react";
// import { isAuthenticated, login, signup, logout } from "../utils/auth";

// interface AuthContextType {
//   user: any;
//   loginUser: (email: string, password: string) => boolean;
//   signupUser: (name: string, email: string, password: string) => boolean;
//   logoutUser: () => void;
// }

// const AuthContext = createContext<AuthContextType | null>(null);

// export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//   const [user, setUser] = useState<any>(null);

//   useEffect(() => {
//     const savedUser = localStorage.getItem("user");
//     if (savedUser) setUser(JSON.parse(savedUser));
//   }, []);

//   const loginUser = (email: string, password: string) => {
//     const success = login(email, password);
//     if (success) setUser(JSON.parse(localStorage.getItem("user")!));
//     return success;
//   };

//   const signupUser = (name: string, email: string, password: string) => {
//     return signup(name, email, password);
//   };

//   const logoutUser = () => {
//     logout();
//     setUser(null);
//   };

//   return (
//     <AuthContext.Provider value={{ user, loginUser, signupUser, logoutUser }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => {
//   return useContext(AuthContext)!;
// };
