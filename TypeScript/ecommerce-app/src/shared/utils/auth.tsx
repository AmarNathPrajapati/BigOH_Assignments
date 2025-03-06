// export const isAuthenticated = () => {
//     return localStorage.getItem("user") !== null;
//   };
  
//   export const login = (email: string, password: string) => {
//     const users = JSON.parse(localStorage.getItem("users") || "[]");
//     const user = users.find((u: any) => u.email === email && u.password === password);
  
//     if (user) {
//       localStorage.setItem("user", JSON.stringify(user));
//       return true;
//     }
//     return false;
//   };
  
//   export const signup = (name: string, email: string, password: string) => {
//     const users = JSON.parse(localStorage.getItem("users") || "[]");
//     const exists = users.some((u: any) => u.email === email);
  
//     if (!exists) {
//       const newUser = { name, email, password };
//       users.push(newUser);
//       localStorage.setItem("users", JSON.stringify(users));
//       return true;
//     }
//     return false;
//   };
  
//   export const logout = () => {
//     localStorage.removeItem("user");
//   };
  