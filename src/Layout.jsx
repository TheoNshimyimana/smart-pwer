import { Routes, Route } from "react-router-dom";
import App from "./App";
import Analytics from "./components/AnalyticsAndInsights";
import Monitoring from "./components/MonitoringAndControl";
import Payments from "./components/PaymentManagement";
import Maintenance from "./components/MaintenanceAndDetection";
import Dashboard from "./components/DashbordHome";
import TariffOptimization from "./components/TariffOptimization";

function Layout() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/home" element={<Dashboard />} />
      <Route path="/real-time-monitoring" element={<Monitoring />} />
      <Route path="/usage-analytics" element={<Analytics />} />
      <Route path="/payment-management" element={<Payments />} />
      <Route path="/fault-detection" element={<Maintenance />} />
      <Route path="/tariff-optimization" element={<TariffOptimization />} />
    </Routes>
  );
}

export default Layout;
