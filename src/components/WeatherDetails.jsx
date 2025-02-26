import { FaCloud, FaCloudRain, FaSun, FaSnowflake, FaBolt, FaRegMoon, FaWind } from 'react-icons/fa'
import { MdOutlineWbSunny } from 'react-icons/md'
import { Card, Badge } from 'flowbite-react'

const WeatherDetails = ({ datasCurrLocation, forecast }) => {
  const getWeatherIcon = (weather) => {
    if (!weather) return <FaCloud size={25} />
    
    const main = weather.toLowerCase()
    if (main.includes('rain')) return <FaCloudRain size={25} />
    if (main.includes('clear')) return <FaSun size={25} />
    if (main.includes('cloud')) return <FaCloud size={25} />
    if (main.includes('snow')) return <FaSnowflake size={25} />
    if (main.includes('thunderstorm')) return <FaBolt size={25} />
    
    return <FaCloud size={25} />
  }

  return (
    <div className='basis-full'>
      <Card>
        <h5 className='text-xl font-medium'>Today's Info</h5>
        <div className='grid lg:grid-cols-2 gap-4'>
          <Card className='bg-slate-100'>
            <div className='flex justify-between items-center'>
              <span className='text-slate-600'>Air Quality Index</span>
              <Badge color='green'>Good</Badge>
            </div>
            <div className='flex justify-between items-center'>
              <FaWind size={25} />
              <span className='text-2xl font-medium'>{datasCurrLocation?.wind?.speed} m/s</span>
            </div>
          </Card>
          <Card className='bg-slate-100'>
            <div className='flex justify-between items-center'>
              <span className='text-slate-600'>Sunrise And Sunset</span>
            </div>
            <div className='flex justify-between items-center'>
              <div className='text-center flex items-center'>
                <MdOutlineWbSunny size={30} />
                <span className='block text-2xl font-medium ms-2'>
                  {new Date(datasCurrLocation?.sys?.sunrise * 1000).toLocaleTimeString()}
                </span>
              </div>
              <div className='text-center flex items-center'>
                <FaRegMoon size={25} />
                <span className='block text-2xl font-medium ms-2'>
                  {new Date(datasCurrLocation?.sys?.sunset * 1000).toLocaleTimeString()}
                </span>
              </div>
            </div>
          </Card>
        </div>

        <h3 className='text-xl mt-4 font-medium block'>Today At</h3>
        <div className='flex flex-wrap lg:justify-between justify-center'>
          {forecast && forecast.list.slice(0, 5).map((hourly, index) => {
            const date = new Date(hourly.dt * 1000)
            return (
              <Card key={index} className='bg-slate-100 w-32 d-flex flex-row justify-center mt-4'>
                <span>{date.getHours()}:00</span>
                {getWeatherIcon(hourly.weather[0]?.main)}
                <span className='text-center'>{Math.round(hourly.main.temp)}°C</span>
              </Card>
            )
          })}
        </div>
      </Card>
    </div>
  )
}

export default WeatherDetails