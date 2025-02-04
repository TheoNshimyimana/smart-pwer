
import { useState } from "react";
import { Thermometer, Droplet, Home } from "lucide-react";
import bgImage from "../assets/Bgg.webp";
import { IoPower } from "react-icons/io5";
import { HiLightBulb } from "react-icons/hi";
import { FcElectricity } from "react-icons/fc";
// import { MdElectricBolt } from "react-icons/md";

import { Switch } from "@headlessui/react";
// import { Lightbulb } from "lucide-react";


const rooms = ["KITCHEN", "DINING ROOM", "LIVING ROOM", "GARAGE", "BEDROOM"];

function Dashboard ()  {
  const [enabled, setEnabled] = useState({
    KITCHEN: true,
    "DINING ROOM": true,
    "LIVING ROOM": true,
    GARAGE: false,
    BEDROOM: false,
  });

  const toggleSwitch = (room) => {
    setEnabled((prev) => ({ ...prev, [room]: !prev[room] }));
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

        {/*  text-slate-400 pb-14 font-semibold mt-2 */}

        {/* Lights Card */}
        <div className="bg-white p-6 shadow-lg rounded-lg ">
      <div className="flex items-center uppercase pb-5 text-sm space-x-2 mb-4 text-slate-400 font-semibold">
        <HiLightBulb size={40} className="text-slate-400" />
        <span>LIGHTS</span>
      </div>
      <div className="space-y-8 text-[16px]">
        {rooms.map((room) => (
          <div key={room} className="flex justify-between items-center">
            <span className="text-black">{room}</span>
            <Switch
              checked={enabled[room]}
              onChange={() => toggleSwitch(room)}
              className={`${
                  enabled[room] ? "bg-green-500" : "bg-gray-300"
                } relative inline-flex h-6 w-11 items-center rounded-full`}
            >
              <span
                className={`${
                  enabled[room] ? "translate-x-6 bg-green-700" : "translate-x-1 bg-white"
                } inline-block h-4 w-4 transform rounded-full transition`}
              />
            </Switch>
          </div>
        ))}
      </div>
    </div>
      </div>
    </>
  );
};

export default Dashboard;
