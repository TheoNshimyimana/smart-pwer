import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Dashboard from "./components/Dashboard";
import Monitoring from "./components/Monitoring";
import Analytics from "./components/Analytics";
import Payments from "./components/Payments";
import Maintenance from "./components/Maintenance";
import TokenGeneration from "./components/TokenGeneration";
import Sidebar from "./components/Sidebar";
import Navbar from "./Components/Navbar";
import Dashboard from "./Components/Dashboard";
// import Navbar from "./components/Navbar";

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
          <main className="p-6 flex-grow overflow-auto">
            <Routes>
              <Route path="/home" element={<Dashboard />} />
              <Route path="/real-time-monitoring" element={<Monitoring />} />
              <Route path="/usage-analytics" element={<Analytics />} />
              <Route path="/payment-management" element={<Payments />} />
              <Route path="/fault-detection" element={<Maintenance />} />
              <Route path="/tariff-optimization" element={<TokenGeneration />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
};

export default App;
