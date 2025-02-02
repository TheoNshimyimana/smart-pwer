import { useState } from "react";
// import Modal from "./Modal";  // Import Modal component
import Login from "../Pages/Login";  // Import Login component
import Signup from "../Pages/Signup";  // Import Signup component
import Modal from "./Modal";

function Navbar() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentModal, setCurrentModal] = useState("login");

  const handleOpenModal = (modalType) => {
    setCurrentModal(modalType);
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Smart Power Management System</h1>
        <div className="space-x-4">
          <button
            onClick={() => handleOpenModal("login")}
            className="bg-white text-blue-500 font-semibold px-4 py-2 rounded"
          >
            Login
          </button>

          <button
            onClick={() => handleOpenModal("signup")}
            className="bg-yellow-900 font-semibold px-4 py-2 rounded"
          >
            Register
          </button>
        </div>
      </nav>

      {/* Modal for Login, Signup */}
      <Modal isVisible={isModalVisible} onClose={handleCloseModal}>
        {currentModal === "login" && <Login onClose={handleCloseModal} />}
        {currentModal === "signup" && <Signup />}
      </Modal>
    </>
  );
}

export default Navbar;
