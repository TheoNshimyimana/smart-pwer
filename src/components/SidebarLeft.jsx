import { Link } from "react-router-dom";
import { useState } from "react";
import { FiLogOut } from "react-icons/fi";
import sidebarBg from "../assets/sidebar-bg.png"; // Ensure the correct path

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState("Usage Analytics and Insights");

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Real-time Monitoring and Control", path: "/real-time-monitoring" },
    { name: "Usage Analytics and Insights", path: "/usage-analytics" },
    { name: "Payment Management and Alerts", path: "/payment-management" },
    { name: "Fault Detection and Maintenance", path: "/fault-detection" },
    {
      name: "Tariff Optimization and Incentives",
      path: "/tariff-optimization",
    },
  ];

  return (
    <div
      className="min-w-72 min-h-screen flex flex-col justify-between relative shadow-xl"
      style={{
        backgroundImage: `url(${sidebarBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark Overlay for Readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Sidebar Content */}
      <div className="relative z-10 flex flex-col h-full pl-6 pt-20">
        {/* Navigation Links */}
        <nav className="flex-grow ">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`block py-3 pl-2 my-4 rounded-l-full font-medium text-black transition-all duration-300 relative ${
                activeItem === item.name
                  ? "bg-white text-black font-semibold shadow-md border-l-4 "
                  : "hover:bg-white "
              }`}
              onClick={() => setActiveItem(item.name)}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Logout Button */}
        <div className="mt-20 pb-10">
          <button
            className="w-full flex items-center justify-center gap-3 px-4 py-3 rounded-lg bg-red-600 text-white font-semibold hover:bg-red-500 transition shadow-lg"
            onClick={() => alert("Logging out...")}
          >
            <FiLogOut size={20} />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
