// import Card from "./Card";
// import Chart from "./Chart";

// function Dashboard() {
//   return (
//     <div className="p-6 flex-1">
//       <h2 className="text-2xl font-semibold mb-4">Dashboard</h2>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//         <Card title="Total Power Used" value="120 kWh" />
//         <Card title="Cost" value="$45.30" />
//         <Card title="Peak Usage" value="4.2 kW" />
//       </div>
//       <div className="mt-6">
//         <Chart />
//       </div>
//     </div>
//   );
// }

// export default Dashboard;
import { useState } from "react";
import { Thermometer, Droplet, Home } from "lucide-react";
import bgImage from "../assets/Bgg.webp";
import { IoPower } from "react-icons/io5";
import { HiLightBulb } from "react-icons/hi";
import { FcElectricity } from "react-icons/fc";
import { MdElectricBolt } from "react-icons/md";

const Dashboard = () => {
  // Light control state
  const [lights, setLights] = useState({
    kitchen: false,
    dining: false,
    living: false,
    garage: false,
    bedroom: false,
  });

  // Function to toggle light state
  const toggleLight = (room) => {
    setLights((prevLights) => ({
      ...prevLights,
      [room]: !prevLights[room],
    }));
  };

  return (
    <>
      <div
        className="relative w-full h-screen bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-lg"></div>

        {/* Greeting */}
        <div className="absolute top-10 left-10 text-white text-2xl font-semibold">
          Good Morning!
        </div>

        {/* Date & Time */}
        <div className="absolute top-10 right-10 text-white text-right">
          <div>Friday</div>
          <div>9:00 AM</div>
          <div>29th April 2024</div>
        </div>

        {/* Main Dashboard */}
        <div className="flex items-center justify-center w-full h-full gap-44">
          {/* Outside Temperature */}
          <div className="text-white text-center z-10">
            <Thermometer size={50} />
            <div className="text-5xl font-semibold">
              40 <span className="text-base pl-2">°C</span>
            </div>
            <div className="text-[12px] pt-5 uppercase opacity-75">
              Outside Temp
            </div>
          </div>

          {/* Inside Temperature */}
          <div className="relative flex items-center justify-center w-64 h-64">
            <svg
              className="absolute"
              width="100%"
              height="100%"
              viewBox="0 0 100 100"
            >
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="#ddd"
                strokeWidth="4"
              />
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="url(#gradient)"
                strokeWidth="4"
                strokeDasharray="283"
                strokeDashoffset="80"
                strokeLinecap="round"
                transform="rotate(-90 50 50)"
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#4facfe" />
                  <stop offset="100%" stopColor="#00f2fe" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute flex flex-col items-center text-white font-semibold">
              <Home size={40} />
              <div className="text-5xl">
                27 <span className="text-base pl-2">°C</span>
              </div>
              <div className="text-[12px] pt-5 uppercase opacity-75">
                Inside Temp
              </div>
            </div>
          </div>

          {/* Humidity */}
          <div className="text-white text-center z-10">
            <Droplet size={50} />
            <div className="text-5xl font-semibold">
              65 <span className="text-base pl-2">%</span>
            </div>
            <div className="text-[12px] pt-5 uppercase opacity-75">
              Humidity
            </div>
          </div>
        </div>
      </div>

      {/* Power Consumption & Lights */}
      <div className="grid grid-cols-2 mt-4 pb-14 px-5 gap-4">
        {/* Power Card */}
        <div className="shadow p-6 bg-white rounded-lg hover:shadow-xl">
          <div className="flex gap-4">
            <IoPower size={40} className="text-slate-400" />
            <h1 className="uppercase text-sm text-slate-400 pb-14 font-semibold mt-2">
              Power
            </h1>
          </div>
          <section className="flex gap-5 justify-between transition-shadow">
            {["Active Kilowatts", "Total Watts", "Electricity"].map(
              (label, index) => (
                <main key={index}>
                  <div
                    className="mb-8"
                    style={{
                      filter:
                        "grayscale(100%) brightness(0) sepia(1) hue-rotate(190deg) saturate(500%) contrast(1.2)",
                    }}
                  >
                    <FcElectricity size={35} />
                  </div>
                  <div>
                    <h1 className="font-semibold text-slate-400 text-4xl pb-16">
                      {index === 0
                        ? "22 Kwz"
                        : index === 1
                        ? "76 Kwz"
                        : "50 KJ"}
                    </h1>
                  </div>
                  <div>
                    <h1 className="font-normal text-black text-sm pb-12">
                      {label}
                    </h1>
                  </div>
                </main>
              )
            )}
          </section>
        </div>

        {/* Lights Card */}
        <div className="shadow bg-white rounded-lg hover:shadow-xl transition-shadow">
          <main className="uppercase leading-10 p-6 text-sm">
            <div className="flex gap-4">
              <HiLightBulb size={40} className="text-slate-400" />
              <h1 className="text-sm text-slate-400 font-semibold mt-2 pb-10">
                Lights
              </h1>
            </div>

            {/* Light Switches */}
            {Object.keys(lights).map((room) => (
              <div
                key={room}
                className="flex justify-between items-center pb-2"
              >
                <p className="capitalize">{room.replace("_", " ")}</p>
                <MdElectricBolt
                  size={30}
                  className={`cursor-pointer transition ${
                    lights[room] ? "text-yellow-500" : "text-gray-400"
                  }`}
                  onClick={() => toggleLight(room)}
                />
              </div>
            ))}
          </main>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
