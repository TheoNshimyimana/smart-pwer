import { Line, Pie, Bar } from "react-chartjs-2";
import { Search, Download } from "lucide-react";
import { useMemo } from "react";
import Button from "./interface/Button";
import StatsCard from "./interface/statisCard";
import "chart.js/auto";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const Analytics = () => {
  // Optimized Data
  const lineData = useMemo(
    () => ({
      labels: ["SEP", "OCT", "NOV", "DEC", "JAN", "FEB"],
      datasets: [
        {
          label: "Electricity Usage",
          data: [30, 40, 35, 50, 45, 55],
          borderColor: "#22C55E",
          backgroundColor: "rgba(34, 197, 94, 0.2)",
          tension: 0.4,
        },
        {
          label: "Expenses",
          data: [50, 60, 55, 70, 65, 75],
          borderColor: "#8B4513",
          backgroundColor: "rgba(139, 69, 19, 0.2)",
          tension: 0.4,
        },
      ],
    }),
    []
  );

  const pieData = useMemo(
    () => ({
      labels: ["Walts Used", "Walts Remaining"],
      datasets: [
        {
          data: [63, 37],
          backgroundColor: ["#22C55E", "#8B4513"],
          hoverOffset: 4,
        },
      ],
    }),
    []
  );

  const barData = useMemo(
    () => ({
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      datasets: [
        {
          label: "Electricity Consumption",
          data: [40, 50, 70, 45, 55, 65, 60],
          backgroundColor: "#ff3b30",
          borderRadius: 8,
        },
      ],
    }),
    []
  );

  const barOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: {
      y: { beginAtZero: true, grid: { display: false } },
      x: { grid: { display: false } },
    },
  };

  return (
    <>
      {/* Search Bar */}
      <div className="w-full flex justify-between items-center p-4 mt-8 bg-white shadow-lg rounded-xl mb-6">
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

      {/* Stats Summary */}
      <div className="flex gap-5 justify-between mx-3 my-12">
        <StatsCard title="Total Payment" value={56} className="bg-slate-300 " />
        <StatsCard
          title="Total Kilowatts"
          value={320}
          className="bg-slate-300 "
        />
        <StatsCard
          title="Remaining Kilowatts"
          value={59}
          className="bg-slate-300 "
        />
      </div>

      {/* Charts Section */}
      <div className="p-6 bg-white shadow-md rounded-lg flex flex-col md:flex-row gap-6">
        {/* Left: Line Chart */}
        <div className="w-full md:w-2/3">
          <h2 className="text-3xl font-bold text-blue-900 mt-4">RWF. 20,000</h2>
          <p className="text-gray-500">Watts</p>
          <p className="text-green-500 font-semibold">✅ electricity usage</p>
          <p className="text-gray-700 font-semibold mt-4">
            Expenses <span className="text-black text-lg">$1000.30</span>
          </p>
          <Line data={lineData} />
        </div>

        {/* Right: Pie Chart */}
        <div className="w-full md:w-1/3 text-center">
          <h3 className="text-lg font-bold text-blue-900">Payment Analysis</h3>
          <p className="text-gray-500">Monthly ▼ May</p>
          <Pie data={pieData} />
          <div className="flex justify-around mt-4">
            <p className="text-green-500">● Walts Used 63%</p>
            <p className="text-brown-700">● Walts Remaining 37%</p>
          </div>
        </div>
      </div>

      {/* Bar Chart & Stats Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6">
        {/* Bar Chart */}
        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <h2 className="text-lg font-semibold mb-4">
            Electricity Consumption
          </h2>
          <div className="h-60">
            <Bar data={barData} options={barOptions} />
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid gap-4">
          <StatsCard
            title="Avg. Consumption"
            value={14}
            unit="Units/Day"
            trend="+3.56% from last month"
          />
          <StatsCard
            title="Total Consumption"
            value={764}
            unit="Units"
            trend="+45 from last month"
            className="bg-gray-100"
          />
        </div>

        {/* Download Report Button */}
        <div className="flex justify-end">
          <Button className="bg-red-500 text-white flex items-center">
            <Download className="mr-2" size={62} /> Download Report
          </Button>
        </div>
      </div>
    </>
  );
};

export default Analytics;
