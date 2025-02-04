import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/SidebarLeft";
import Analytics from "./components/AnalyticsAndInsights";
import Monitoring from "./components/MonitoringAndControl";
import Payments from "./components/PaymentManagement";
import Maintenance from "./components/MaintenanceAndDetection";
// import Navbar from "./components/NavbarHeader";
import ForgotPassword from "./Pages/ForgotPasswd";
import Login from "./Pages/LoginPage";
import ResetPassword from "./Pages/ResetPasswod";
import Signup from "./Pages/SignupPage";
import Dashboard from "./components/DashbordHome";
import TariffOptimization from "./components/TariffOptimization";

const App = () => {
  return (
    <Router>
      <div className="flex h-screen">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content Area */}
        <div className="flex flex-col flex-grow">
          {/* Navbar at the Top */}
          {/* <Navbar /> */}

          {/* Main Content Below Navbar */}
          <main className=" flex-grow overflow-auto">
            <Routes>
              <Route path="/login" element={<Login />} />z
              <Route path="/signup" element={<Signup />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/reset-password" element={<ResetPassword />} />
              <Route path="/" element={<Dashboard />} />
              <Route path="/real-time-monitoring" element={<Monitoring />} />
              <Route path="/usage-analytics" element={<Analytics />} />
              <Route path="/payment-management" element={<Payments />} />
              <Route path="/fault-detection" element={<Maintenance />} />
              <Route path="/tariff-optimization" element={<TariffOptimization />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
};

export default App;
