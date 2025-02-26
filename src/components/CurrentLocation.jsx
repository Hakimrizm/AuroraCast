import { Card } from "flowbite-react"
import { BsCloudSun, BsCalendar2 } from "react-icons/bs"
import { FiMapPin } from "react-icons/fi";

const CurrentLocation = ({ datasCurrLocation }) => {
  return (
    <Card className="lg:w-96">
      <div className='flex justify-between items-center '>
        <h2 className='text-4xl font-semibold'>{Math.round(datasCurrLocation.main.temp)}°C</h2>
        <BsCloudSun size={70}/>
      </div>
      <span className='text-slate-600'>{datasCurrLocation.weather[0].description}</span>
      <hr />
      <div className='flex items-center text-slate-600'>
        <BsCalendar2 />
        <span className='ms-2'>{new Date(datasCurrLocation.dt * 1000).toLocaleDateString()}</span>
      </div>
      <div className='flex items-center text-slate-600'>
        <FiMapPin />
        <span className='ms-2'>{datasCurrLocation.name}</span>
      </div>
    </Card>
  )
}

export default CurrentLocation