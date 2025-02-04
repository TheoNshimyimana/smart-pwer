// import { useState } from "react";
// import axios from "axios";
// import Modal from "../components/ModalPop";

// function Login() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [isModalOpen, setIsModalOpen] = useState(false); // Manage modal state

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setIsModalOpen(true); // Open modal when login button is clicked
//   };

//   return (
//     <>
//       <div className="flex h-screen items-center justify-center bg-gradient-to-b from-sky-600 to-sky-200 pt-16">
//         <div className="login">
//           <form onSubmit={handleSubmit}>
//             <div className="header">
//               <div className="text">Login</div>
//               <div className="underline"></div>
//             </div>
//             <div className="inputs">
//               <div className="input">
//                 <input
//                   type="text"
//                   placeholder="Username"
//                   value={username}
//                   onChange={(e) => setUsername(e.target.value)}
//                 />
//               </div>
//               <div className="input">
//                 <input
//                   type="password"
//                   placeholder="Password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                 />
//               </div>
//             </div>
//             <div className="submit-container">
//               <button type="submit" className="submit">
//                 Login
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>

//       {/* Modal */}
//       <Modal
//         isOpen={isModalOpen}
//         onClose={() => setIsModalOpen(false)}
//         title="Login Confirmation"
//       >
//         <p>Are you sure you want to proceed with login?</p>
//       </Modal>
//     </>
//   );
// }

// export default Login;

import { useState } from "react";
import { FaFacebook, FaGoogle, FaApple } from "react-icons/fa";
import REG from "../assets/reg-logo.png";

 function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex h-1/2 mt-44 bg-red-600">
      {/* Left Section */}
      <div className="hidden md:flex flex-col justify-center items-center w-1/2 bg-white p-10">
        <img
          src={REG}
          alt="Company Logo"
          className="w-full h-full mb-4"
        />
        
      </div>

      {/* Right Section */}
      <div className="flex flex-col justify-center items-center w-full md:w-1/2 p-10 bg-gray-50">
        <h2 className="text-3xl font-semibold mb-6">Sign in</h2>
        <p className="text-gray-600 mb-4">
          If you don’t have an account, <a href="/register" className="text-red-500 font-bold">Register here!</a>
        </p>

        {/* Email Input */}
        <input
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-red-500"
        />

        {/* Password Input */}
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-red-500"
        />

        {/* Remember Me & Forgot Password */}
        <div className="flex justify-between w-full text-sm text-gray-600 mb-4">
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" /> Remember me
          </label>
          <a href="/forgot-password" className="text-red-500">Forgot Password?</a>
        </div>

        {/* Login Button */}
        <button className="w-full bg-rd-500 text-white py-3 rounded-lg text-lg shadow-md hover:bg-red-600">
          Login
        </button>

        {/* Social Login */}
        <p className="text-gray-600 mt-6">or continue with</p>
        <div className="flex space-x-4 mt-3">
          <FaFacebook className="text-blue-600 text-2xl cursor-pointer" />
          <FaApple className="text-black text-2xl cursor-pointer" />
          <FaGoogle className="text-red-500 text-2xl cursor-pointer" />
        </div>
      </div>
    </div>
  );
}


export default Login;
