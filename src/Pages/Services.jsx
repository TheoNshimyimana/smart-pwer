
import  { forwardRef } from 'react'

import AirCond from '../images/air.jpeg'
import MilkCooler from '../images/MilkCooler.webp'
import MicroWave from '../images/MicroWave.jpeg'
import Dryer from '../images/dryer.webp'
import CarRef from '../images/CarRefrigeration.jpg'
import ColdRoom from '../images/ColdRoom.jpg'
import WashingMachine from '../images/washingMachine.jpeg'
import Freezer from '../images/freezer.avif'

import Pump from '../images/waterpump.jpg'
import Motor1 from '../images/motorInstall.webp'
import Motor from '../images/MtorInstall.jpg'
import MotorRewind from '../images/MotorRewind.jpg'



import { Link } from 'react-router-dom'

const Services = forwardRef((props, ref) => {
  return (
    <section className="bg-[#243642] pt-4">
     
      <main id="services" className="pt-4" ref={ref}>
        <h1 className=" font-semibold text-custom-blue text-3xl text-center mb-10">
          Our Core Services in Refrigeration and Air conditioning system
        </h1>
        <div className="flex-wrap grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-4 pb-14 px-5 gap-4">
          
          <div className="shadow  py-6 bg-white rounded-lg hover:shadow-xl transition-shadow">
            <div className="text-center flex flex-col items-center">
              <img className='max-h-56 min-w-full' src={AirCond} alt="" />
              <h1 className="text-custom-blue text-lg font-bold mt-2">
              Air conditioning installation and maintenance  with gas recharging 
              </h1>
              <Link to="/training">
                <button className="mt-6 px-4 py-1 font-bold bg-custom-blue text-white rounded hover:bg-custom-blue transition-colors">
                  Details
                </button>
              </Link>
            </div>
          </div>

         
          <div className="shadow py-6 bg-white rounded-lg hover:shadow-xl transition-shadow">
            <div className="text-center flex flex-col items-center">
            <img className='max-h-56 min-w-full' src={MilkCooler} alt="" />
              <h1 className="text-custom-blue text-lg font-bold mt-2">
              Milk-cooler installation and maintenance with gas recharging 
              </h1>
              <Link to="/cbs_implementation">
                <button className="mt-6 px-4 py-1 bg-custom-blue text-white rounded hover:bg-custom-blue transition-colors">
                  Details
                </button>
              </Link>
            </div>
          </div>

          
          <div className="shadow py-6 bg-white rounded-lg hover:shadow-xl transition-shadow">
            <div className="text-center flex flex-col items-center">
            <img className='max-h-56 min-w-full' src={Freezer} alt="" />
              <h1 className="text-custom-blue text-lg font-bold mt-2">
              Fridge and freezer maintenance 
              </h1>
              <Link to="/data_engineering">
                <button className="mt-6 px-4 py-1 bg-custom-blue text-white rounded hover:bg-custom-blue transition-colors">
                  Details
                </button>
              </Link>
            </div>
          </div>

          
          <div className="shadow py-6 bg-white rounded-lg hover:shadow-xl transition-shadow">
            <div className="text-center flex flex-col items-center">
            <img className='max-h-56 min-w-full' src={CarRef} alt="" />
              <h1 className="text-custom-blue text-lg font-bold mt-2">
              Car refrigeration system repair and gas recharging  
              </h1>
              <Link to="/project_management">
                <button className="mt-6 px-4 py-1 bg-custom-blue text-white rounded hover:bg-custom-blue transition-colors">
                  Details
                </button>
              </Link>
            </div>
          </div>

       
          <div className="shadow py-6 bg-white rounded-lg hover:shadow-xl transition-shadow">
            <div className="text-center flex flex-col items-center">
            <img className='max-h-56 min-w-full' src={Dryer} alt="" />
              <h1 className="text-custom-blue text-lg font-bold mt-2">
              Industrial compressed air dryer maintenance and gas recharging 
              </h1>
              <Link to="/integration">
                <button className="mt-6 px-4 py-1 bg-custom-blue text-white rounded hover:bg-custom-blue transition-colors">
                  Details
                </button>
              </Link>
            </div>
          </div>

         
          <div className="shadow py-6 bg-white rounded-lg hover:shadow-xl transition-shadow">
            <div className="text-center flex flex-col items-center">
            <img className='max-h-56 min-w-full' src={ColdRoom} alt="" />
              <h1 className="text-custom-blue text-lg font-bold mt-2">
              Cold room installation and maintenance 
              </h1>
              <Link to="/quality_insurance">
                <button className="mt-6 px-4 py-1 bg-custom-blue text-white rounded hover:bg-custom-blue transition-colors">
                  Details
                </button>
              </Link>
            </div>
          </div>

          
          <div className="shadow py-6 bg-white rounded-lg hover:shadow-xl transition-shadow">
            <div className="text-center flex flex-col items-center">
            <img className='max-h-56 min-w-full' src={WashingMachine} alt="" />
              <h1 className="text-custom-blue text-lg font-bold mt-2">
              Washing machine repair 
              </h1>
              <Link to="/process_optimisation">
                <button className="mt-6 px-4 py-1 bg-custom-blue text-white rounded hover:bg-custom-blue transition-colors">
                  Details
                </button>
              </Link>
            </div>
          </div>

          
          <div className="shadow px-4 py-6 bg-white rounded-lg hover:shadow-xl transition-shadow">
            <div className="text-center flex flex-col items-center">
            <img className='max-h-56 min-w-full' src={MicroWave} alt="" />
              <h1 className="text-custom-blue text-lg font-bold mt-2">
              Microwave repair
              </h1>
              <Link to="/management_information">
                <button className="mt-6 px-4 py-1 bg-custom-blue text-white rounded hover:bg-custom-blue transition-colors">
                  Details
                </button>
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Products */}
      <main className="px-6 py-4" id="products">
        <h1 className="font-semibold text-custom-blue text-3xl text-center mb-10">
        Our Core Services in Electric Motors
        </h1>
        <div className="flex-wrap grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-4 gap-8">
          
          <div className="relative shadow rounded-lg  bg-white ">
            <div className="text-center flex flex-col  items-center">
            <img className='max-h-56 min-w-full' src={Motor} alt="" />
              <h1 className="text-custom-blue text-xl pt-6 font-bold">AC and DC motor rewinding </h1>
              <p className="mt-4 mb-6 text-gray-600 leading-8 text-left">
                
              </p>
            </div>
          </div>

          
          <div className="relative shadow  rounded-lg  bg-white ">
            <div className="text-center flex flex-col items-center">
            <img className='max-h-56 min-w-full' src={MotorRewind} alt="" />

              <h1 className="text-custom-blue text-xl pt-6 font-bold">
              Single-phase and three-phase motor rewinding 
              </h1>
              <p className="mt-4 mb-6 text-gray-600 leading-8 text-left">
               
              </p>
            </div>
          </div>

          
          <div className="relative shadow  rounded-lg  bg-white pb-4">
            <div className="text-center flex flex-col items-center">
            <img className='max-h-56 min-w-full' src={Motor1} alt="" />

              <h1 className="text-custom-blue pt-6 text-xl font-bold">
              Single-phase and three-phase motor installation 
              </h1>
              <p className="mt-4 mb-6 text-gray-600 leading-8 text-left">
               
              </p>
            </div>
          </div>

          
          <div className="relative shadow pb-5 rounded-lg bg-white ">
            <div className="text-center flex flex-col items-center">
            <img className='max-h-56 min-w-full' src={Pump} alt="" />

              <h1 className="text-custom-blue pt-6  text-xl font-bold">
              Pump rewinding 
              </h1>
              <p className="mt-4 mb-6 text-gray-600 leading-8 text-left">
                
              </p>
            </div>
          </div>
        </div>
      </main>
    </section>
  )
})

Services.displayName = 'Services'

export default Services
