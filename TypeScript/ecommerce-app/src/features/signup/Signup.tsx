// import React, { useState } from "react";
// import { useAuth } from "../../shared/context/AuthContext";
// import { useNavigate } from "react-router-dom";

// const Signup = () => {
//   const { signupUser } = useAuth();
//   const navigate = useNavigate();
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSignup = () => {
//     if (signupUser(name, email, password)) {
//       navigate("/login");
//     } else {
//       alert("User already exists!");
//     }
//   };

//   return (
//     <div>
//       <h2>Signup</h2>
//       <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} />
//       <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
//       <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
//       <button onClick={handleSignup}>Signup</button>
//     </div>
//   );
// };

// export default Signup;
