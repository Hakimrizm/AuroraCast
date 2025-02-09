import { Navbar, DarkThemeToggle, TextInput, Button, Card, Badge } from 'flowbite-react'
import { useState } from 'react'
import { BsCloudSun, BsCalendar2, BsCloudRain } from "react-icons/bs"
import { FiMapPin } from "react-icons/fi";
import { FaWind, FaRegMoon, FaRegEye, FaTemperatureThreeQuarters, FaCloud} from "react-icons/fa6";
import { WiDegrees } from "react-icons/wi";
import { MdOutlineWbSunny } from "react-icons/md";
import { IoWaterOutline } from "react-icons/io5";
import { TiWaves } from "react-icons/ti";

function App() {
  const [count, setCount] = useState(0)
  
  function searchLocation(e) {
    e.preventDefault()
    alert("ok!")
    console.log("Hello, World!");
  }

  return (
    <>
      <Navbar fluid rounded className='shadow sticky top-0'>
        <Navbar.Brand  href="">
          {/* <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" /> */}
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">☀️WeatherApp</span>
        </Navbar.Brand>
        <div className='flex items-center'>
          <div>
            <form onSubmit={searchLocation}>
              <TextInput id="search" type="text" placeholder="E.g: London"/>
            </form>
          </div>
          <div className='ms-4'>
            <Button color='purple'>Current Location</Button>
          </div>
        </div>
      </Navbar>

      <div className='container mx-auto px-4 flex md:flex-row flex-col mt-5'>
        <div className='basis-1/2'>
          <Card className="lg:w-96">
            <div className='flex justify-between items-center '>
              <h2 className='text-4xl font-semibold'>5°C</h2>
              <BsCloudSun size={70}/>
            </div>
            <span className='text-slate-600'>Broken Clouds</span>
            <hr />
            <div className='flex items-center text-slate-600'>
              <BsCalendar2 />
              <span className='ms-2'>Wendsday 1, 2025</span>
            </div>
            <div className='flex items-center text-slate-600'>
              <FiMapPin />
              <span className='ms-2'>Bandung</span>
            </div>
          </Card>

          <h3 className='text-xl mt-4 mb-4 font-medium block'>5 Days Forecast</h3>

          <Card className='lg:w-96'>
            <div className='flex justify-between'>
              <div className='flex items-center font-semibold'>
                <BsCloudRain size={25}/>
                <span className='ms-2'>7°</span>
              </div>
              <span>2 Mar</span>
              <span>Wendnesday</span>
            </div>

            <div className='flex justify-between mt-2'>
              <div className='flex items-center font-semibold'>
                <BsCloudRain size={25}/>
                <span className='ms-2'>0°</span>
              </div>
              <span>3 Mar</span>
              <span>Wendnesday</span>
            </div>

            <div className='flex justify-between mt-2'>
              <div className='flex items-center font-semibold'>
                <BsCloudRain size={25}/>
                <span className='ms-2'>1°</span>
              </div>
              <span>4 Mar</span>
              <span>Wendnesday</span>
            </div>

            <div className='flex justify-between mt-2'>
              <div className='flex items-center font-semibold'>
                <BsCloudRain size={25}/>
                <span className='ms-2'>20°</span>
              </div>
              <span>5 Mar</span>
              <span>Wendnesday</span>
            </div>

            <div className='flex justify-between mt-2'>
              <div className='flex items-center font-semibold'>
                <BsCloudRain size={25}/>
                <span className='ms-2'>18°</span>
              </div>
              <span>6 Mar</span>
              <span>Wendnesday</span>
            </div>
          </Card>
        </div>
        <div className='basis-full'>
          {/* Card One */}
          <Card>
            <h5 className='text-xl font-medium'>Today's Info</h5>

            <div className='grid lg:grid-cols-2 gap-4'>
              <Card className='bg-slate-100'>
                <div className='flex justify-between items-center'>
                  <span className='text-slate-600'>Air Quality Index</span>
                  <Badge color="green">Good</Badge>
                </div>
                <div className='flex justify-between items-center'>
                  <FaWind size={25}/>
                  <div className='text-center'>
                    <span className='text-slate-600 block text-xs'>PM25</span>
                    <span className='block text-2xl font-medium'>3.90</span>
                  </div>
                  <div className='text-center'>
                    <span className='text-slate-600 block text-xs'>SO2</span>
                    <span className='block text-2xl font-medium'>7.75</span>
                  </div>
                  <div className='text-center'>
                    <span className='text-slate-600 block text-xs'>NO2</span>
                    <span className='block text-2xl font-medium'>33.6</span>
                  </div>
                  <div className='text-center'>
                    <span className='text-slate-600 block text-xs'>03</span>
                    <span className='block text-2xl font-medium'>38.6</span>
                  </div>
                </div>
              </Card>
              <Card className='bg-slate-100'>
                <div className='flex justify-between items-center'>
                  <span className='text-slate-600'>Sunrise And Sunset</span>
                </div>
                <div className='flex justify-between items-center'>
                  <div className='text-center flex items-center'>
                    <MdOutlineWbSunny size={30} />
                    <span className='block text-2xl font-medium ms-2'>09.10 AM</span>
                  </div>
                  <div className='text-center flex items-center'>
                    <FaRegMoon size={25}/>
                    <span className='block text-2xl font-medium ms-2'>05:39 PM</span>
                  </div>
                </div>
              </Card>
            </div>
            
            <div className='flex flex-wrap justify-between'>
              <Card className='bg-slate-100 lg:w-48'>
                <span className='text-slate-600'>Humidity</span>
                <div className='text-center flex justify-between items-center'>
                  <IoWaterOutline size={35}/>
                  <span className='block text-2xl font-medium ms-2'>82%</span>
                </div>
              </Card>
              <Card className='bg-slate-100'>
                <span className='text-slate-600'>Pressure</span>
                <div className='text-center flex justify-between items-center'>
                  <TiWaves size={40} />
                  <span className='block text-2xl font-medium ms-2'>1025 hPa</span>
                </div>
              </Card>
              <Card className='bg-slate-100 lg:w-48'>
                <span className='text-slate-600'>Visibility</span>
                <div className='text-center flex justify-between items-center'>
                  <FaRegEye size={35} />
                  <span className='block text-2xl font-medium ms-2'>10km</span>
                </div>
              </Card>
              <Card className='bg-slate-100'>
                <span className='text-slate-600'>Feels Like</span>
                <div className='text-center flex justify-between items-center'>
                  <FaTemperatureThreeQuarters size={35} />
                  <span className='block text-2xl font-medium ms-2'>23°C</span>
                </div>
              </Card>
            </div>
          </Card>

          {/* Card Two */}
          <h3 className='text-xl mt-4 font-medium block'>Today At</h3>
          <div className='flex flex-wrap lg:justify-between justify-center'>
            <Card className='bg-slate-100 w-32 d-flex flex-row justify-center mt-4'>
              <span>9 PM</span>
              <FaCloud size={35} />
              <span className='text-center'>4°C</span>
            </Card>
            <Card className='bg-slate-100 w-32 d-flex flex-row justify-center ms-4 mt-4'>
              <span>9 PM</span>
              <FaCloud size={35} />
              <span className='text-center'>4°C</span>
            </Card>
            <Card className='bg-slate-100 w-32 d-flex flex-row justify-center ms-4 mt-4'>
              <span>9 PM</span>
              <FaCloud size={35} />
              <span className='text-center'>4°C</span>
            </Card>
            <Card className='bg-slate-100 w-32 d-flex flex-row justify-center ms-4 mt-4'>
              <span>9 PM</span>
              <FaCloud size={35} />
              <span className='text-center'>4°C</span>
            </Card>
            <Card className='bg-slate-100 w-32 d-flex flex-row justify-center ms-4 mt-4'>
              <span>9 PM</span>
              <FaCloud size={35} />
              <span className='text-center'>4°C</span>
            </Card>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
