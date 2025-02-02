import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Analytics from "./components/Analytics";
import Monitoring from "./components/Monitoring";
import Payments from "./components/Payments";
import Maintenance from "./components/Maintenance";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import ForgotPassword from "./Pages/ForgotPassword";
import Login from "./Pages/Login";
import ResetPassword from "./Pages/ResetPassword";
import Signup from "./Pages/Signup";

const App = () => {
  return (
    <Router>
      <div className="flex h-screen">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content Area */}
        <div className="flex flex-col flex-grow">
          {/* Navbar at the Top */}
          <Navbar />

          {/* Main Content Below Navbar */}
          <main className=" flex-grow overflow-auto">
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/reset-password" element={<ResetPassword />} />
              <Route path="/home" element={<Dashboard />} />
              <Route path="/real-time-monitoring" element={<Monitoring />} />
              <Route path="/usage-analytics" element={<Analytics />} />
              <Route path="/payment-management" element={<Payments />} />
              <Route path="/fault-detection" element={<Maintenance />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
};

export default App;
