import React, { useState } from "react";
import Card from "./ui/Card"; // Importing the Card component
import { Line, Doughnut } from "react-chartjs-2";
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

// Registering chart components
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

const Monitoring = () => {
  const weeklyData = {
    labels: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    datasets: [
      {
        label: "Used",
        data: [30, 34, 28, 35, 33, 25, 40],
        borderColor: "#E63946",
        backgroundColor: "rgba(230, 57, 70, 0.5)",
        
      },
      {
        label: "Remaining",
        data: [13, 37, 15, 40, 37, 30, 30],
        borderColor: "#2A9D8F",
        backgroundColor: "rgba(42, 157, 143, 0.5)",
        
      },
    ],
  };

  const monthlyUsageData = {
    labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
    datasets: [
      {
        label: "Monthly Usage",
        data: [20, 150, 100, 120, 160, 80, 140, 130, 170, 210],
        borderColor: "#2A9D8F",
        backgroundColor: "rgba(42, 157, 143, 0.3)",
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const doughnutOptions = {
    cutout: "70%", // Adjusting the width of the Doughnut charts
  };

  const doughnutData = {
    labels: ["TV", "Fridge", "Lights", "Others"],
    datasets: [
      {
        data: [23, 12, 40, 25],
        backgroundColor: ["#E63946", "#2A9D8F"],
        weight: 2,
      },
    ],
  };

  const doughnutData2 = {
    labels: ["Used", "Remaining"],
    datasets: [
      {
        data: [1378363, 1872631],
        backgroundColor: ["#E63946", "#2A9D8F"],
      },
    ],
  };

  return (
    <div className=" p-4 bg-white ">
      {/* Summary Cards */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <Card title="Total Payments" value="Rwf. 20,000" className="bg-red-800" />
        <Card title="Total KiloWatts" value="60" className="bg-blue-100" />
        <Card title="Remaining KiloWatts" value="22" className="bg-green-100" />
      </div>

      {/* Main Content */}
      <div className="bg-white p-6 rounded-lg shadow-md border border-green-700">
        <h2 className="text-lg font-semibold mb-4">Control your electricity</h2>

        {/* Line Chart */}
        <div className="h-40">
          <Line data={weeklyData} options={{ responsive: true, maintainAspectRatio: false }} />
        </div>

        {/* Charts */}
        <div className="grid grid-cols-3 mt-4 pb-14 px-5 gap-4  ">
          <div className="flex justify-center mt-6">
            <div className="w-full border border-slate-300 p-4 rounded-lg">
              <h3 className="text-sm font-semibold text-center pb-5">
                Things that are consuming electricity
              </h3>
              <Doughnut data={doughnutData} options={doughnutOptions} />
            </div>
          </div>
          <div className="flex justify-center mt-6">
            <div className="w-full h-96 border border-slate-300 p-4 rounded-lg">
              <h3 className="text-sm font-semibold text-center pb-5">
                Monthly Usage
              </h3>
              <Line data={monthlyUsageData} options={{ responsive: true, maintainAspectRatio: false }} />
            </div>
          </div>
          <div className="flex justify-center mt-6">
            <div className=" w-full border border-slate-300 p-4 rounded-lg">
              <h3 className="text-sm font-semibold text-center pb-5">
                Usage Breakdown
              </h3>
              <Doughnut data={doughnutData2} options={doughnutOptions} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Monitoring;
