import { useState } from "react";
import axios from "axios";
import Modal from "../components/Modal";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // Manage modal state

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsModalOpen(true); // Open modal when login button is clicked
  };

  return (
    <>
      <div className="flex h-screen items-center justify-center bg-gradient-to-b from-sky-600 to-sky-200 pt-16">
        <div className="login">
          <form onSubmit={handleSubmit}>
            <div className="header">
              <div className="text">Login</div>
              <div className="underline"></div>
            </div>
            <div className="inputs">
              <div className="input">
                <input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="input">
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="submit-container">
              <button type="submit" className="submit">Login</button>
            </div>
          </form>
        </div>
      </div>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Login Confirmation">
        <p>Are you sure you want to proceed with login?</p>
      </Modal>
    </>
  );
}

export default Login;
