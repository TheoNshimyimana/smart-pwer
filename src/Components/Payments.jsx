import { useState } from "react";
import { Search, AlertCircle } from "lucide-react";
import { Doughnut, Bar } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from "chart.js";
import Mtn from "../assets/mtn.jpg";
import CreditCard from "../assets/credit-card.png";
import Airtel from "../assets/airtel.png";

ChartJS.register(ArcElement, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const PaymentOptions = () => {
  const [totalKiloWatts, setTotalKiloWatts] = useState(45);
  const [remainingKiloWatts, setRemainingKiloWatts] = useState(22);
  

  const doughnutData = {
    labels: ["BK", "Airtel Money", "Other Banks", "MTN Money"],
    datasets: [
      {
        data: [10, 20, 30, 40],
        backgroundColor: ["#3b82f6", "#ef4444", "#d1d5db", "#facc15"],
        hoverBackgroundColor: ["#2563eb", "#dc2626", "#9ca3af", "#eab308"],
      },
    ],
  };

  const barData = {
    labels: ["17", "18", "19", "20", "21", "22", "23", "24", "25"],
    datasets: [
      {
        label: "Payments",
        data: [30, 35, 32, 40, 28, 33, 36, 30, 38],
        backgroundColor: "#6366f1",
        borderRadius: 5,
      },
    ],
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen flex flex-col items-center font-sans">
      {/* Top Navigation */}
      <div className="w-full flex justify-between items-center p-4 bg-white shadow-lg rounded-xl mb-6">
        <div className="flex items-center gap-3 bg-gray-200 px-4 py-2 rounded-full w-1/2">
          <Search className="text-gray-500" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent w-full focus:outline-none"
          />
        </div>
        <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
      </div>

      {/* Status Indicators */}
      <div className="flex gap-8 justify-between my-12">
        <div className="flex items-center gap-3 px-6 py-5 bg-slate-300 rounded-xl shadow-md">
          <div className="w-6 h-6 bg-green-500 rounded-full"></div>
          <span className="text-gray-700 font-semibold">Total KiloWatts: </span>
          <h1 className="font-bold text-2xl text-[#343C6A]">{totalKiloWatts}</h1>
          
        </div>
        <div className="flex items-center gap-3 px-6 py-5 bg-slate-300 rounded-xl shadow-md">
          <div className="w-6 h-6 bg-red-500 rounded-full"></div>
          <span className="text-gray-700 font-semibold">Remaining KiloWatts: </span>
         <h1 className="font-bold text-2xl text-[#343C6A]">{ remainingKiloWatts}</h1>
        </div>
        <div className="flex items-center gap-3 px-6 py-5  bg-red-400 rounded-xl shadow-md">
          <div className="w-6 h-6 rounded-full"></div>
          <span className="text-gray-700 text-2xl font-bold">Recent Payments: </span>

        </div>
      </div>

      {/* Payment Options */}
      <h2 className="text-3xl font-bold mb-6 text-[#343C6A]">Choose Payment Method</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="flex flex-col items-center p-5 bg-yellow-400 rounded-xl shadow-lg hover:scale-105 transition-transform">
          <img src={Mtn} alt="MTN Mobile Money" className="w-40 h-24 object-cover rounded-lg" />
          <span className="text-lg font-semibold mt-2 text-white">Mobile Money</span>
        </div>
        <div className="flex flex-col items-center p-5 bg-blue-500 rounded-xl shadow-lg hover:scale-105 transition-transform">
          <img src={CreditCard} alt="Credit Card" className="w-48 h-28 object-cover rounded-lg" />
          <span className="text-lg font-semibold mt-2 text-white">Credit Card</span>
        </div>
        <div className="flex flex-col items-center p-5 bg-red-500 rounded-xl shadow-lg hover:scale-105 transition-transform">
          <img src={Airtel} alt="Airtel Money" className="w-40 h-24 object-cover rounded-lg" />
          <span className="text-lg font-semibold mt-2 text-white">Airtel Money</span>
        </div>
      </div>

      {/* Charts Section */}
      <div className="mt-10 w-full max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-8">
        <div className="flex flex-col items-center">
          <h3 className="text-2xl font-semibold mb-6 text-[#343C6A]">Transaction Breakdown</h3>
          <div className="w-44 h-44">
            <Doughnut data={doughnutData} />
          </div>
        </div>
        <div className="flex flex-col items-center w-full">
          <h3 className="text-2xl font-bold mb-6 text-[#343C6A] ">Weekly Payments</h3>
          <div className="w-full max-w-4xl">
            <Bar data={barData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentOptions;
