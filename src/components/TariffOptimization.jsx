import { Search } from "lucide-react";

const TariffOptimization = () => {
  return (
    <>
     
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

      <div className="flex gap-5 justify-between mx-3 my-12">
        <div className="flex items-center gap-3 px-6 py-5 bg-slate-300 rounded-xl shadow-md">
          <div className="w-8 h-8 bg-green-500 items-center justify-center text-black font-bold  rounded-full"></div>
          <span className="text-gray-700 font-semibold">Total Paymente: </span>
          <h1 className="font-bold text-2xl text-[#343C6A]">56</h1>
        </div>
        <div className="flex items-center gap-3 px-6 py-5 bg-slate-300 rounded-xl shadow-md">
          <div className="w-6 h-6 bg-red-500 rounded-full"></div>
          <span className="text-gray-700 font-semibold">Total KiloWatts: </span>
          <h1 className="font-bold text-2xl text-[#343C6A]">320</h1>
        </div>
        <div className="flex items-center gap-3 px-6 py-5 bg-slate-300 rounded-xl shadow-md">
          <div className="w-6 h-6 bg-red-500 rounded-full"></div>
          <span className="text-gray-700 font-semibold">
            Remaining KiloWatts{" "}
          </span>
          <h1 className="font-bold text-2xl text-[#343C6A]">59</h1>
        </div>
      </div>

      {/* Cards */}

      <div className="flex gap-5 justify-between text-wrap mx-3 my-12">
        <div className="bg-yellow-100 p-6 rounded-2xl shadow-lg text-center w-80">
          <h2 className="text-4xl font-bold text-red-500 mb-6">Residential</h2>
          <div className="flex justify-between items-center mt-4 text-lg">
            <div>
              <p className="text-red-500 text-base">from</p>
              <p className="text-blue-700 text-3xl font-bold">200 Rwf</p>
            </div>
            <div>
              <p className="text-red-500 text-base">To</p>
              <p className="text-blue-700 text-3xl font-bold">100K</p>
            </div>
          </div>
          <hr className="my-4 border-gray-300" />
          <ul className="text-blue-700 space-y-8 text-left">
            <li className="flex items-center gap-2">
              <span className="text-yellow-500">✅</span> 5 months
            </li>
            <li className="flex items-center gap-2">
              <span className="text-yellow-500">✅</span> 10 people
            </li>
            <li className="flex items-center gap-2">
              <span className="text-yellow-500">✅</span> Discount on 10%
            </li>
          </ul>
          <button className="bg-red-500 text-white font-bold py-2 px-12 rounded-full mt-12 shadow-md hover:bg-red-600">
            BUY
          </button>
        </div>
        <div className="bg-yellow-100 p-6 rounded-2xl shadow-lg text-center w-80">
          <h2 className="text-4xl font-bold text-red-500 mb-6">
            Non Residential
          </h2>
          <div className="flex justify-between items-center mt-4 text-lg">
            <div>
              <p className="text-red-500 text-base">from</p>
              <p className="text-blue-700 text-3xl font-bold">1000 Rwf</p>
            </div>
            <div>
              <p className="text-red-500 text-base">To</p>
              <p className="text-blue-700 text-3xl font-bold">100K</p>
            </div>
          </div>
          <hr className="my-4 border-gray-300" />
          <ul className="text-blue-700 space-y-8 text-left">
            <li className="flex items-center gap-2">
              <span className="text-yellow-500">✅</span> 5 months
            </li>
            <li className="flex items-center gap-2">
              <span className="text-yellow-500">✅</span> 10 people
            </li>
            <li className="flex items-center gap-2">
              <span className="text-yellow-500">✅</span> Discount on 10%
            </li>
          </ul>
          <button className="bg-red-500 text-white font-bold py-2 px-12 rounded-full mt-12 shadow-md hover:bg-red-600">
            BUY
          </button>
        </div>
        <div className="bg-yellow-100 p-6 rounded-2xl shadow-lg text-center w-80">
          <h2 className="text-4xl font-bold text-red-500 mb-6">Telecom Towers</h2>
          <div className="flex justify-between items-center mt-4 text-lg">
            <div>
              <p className="text-red-500 text-base">from</p>
              <p className="text-blue-700 text-3xl font-bold">500000 Rwf</p>
            </div>
            <div>
              <p className="text-red-500 text-base">To</p>
              <p className="text-blue-700 text-3xl font-bold">1M</p>
            </div>
          </div>
          <hr className="my-4 border-gray-300" />
          <ul className="text-blue-700 space-y-8 text-left">
            <li className="flex items-center gap-2">
              <span className="text-yellow-500">✅</span> 5 months
            </li>
            <li className="flex items-center gap-2">
              <span className="text-yellow-500">✅</span> 10 people
            </li>
            <li className="flex items-center gap-2">
              <span className="text-yellow-500">✅</span> Discount on 10%
            </li>
          </ul>
          <button className="bg-red-500 text-white font-bold py-2 px-12 rounded-full mt-12 shadow-md hover:bg-red-600">
            BUY
          </button>
        </div>
      </div>
    </>
  );
};

export default TariffOptimization;
