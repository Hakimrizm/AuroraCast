import { Card } from "flowbite-react";
import { BsCloudSun, BsCalendar2, BsCloudRain } from "react-icons/bs"
import { FaCloud } from "react-icons/fa6";
import { MdOutlineWbSunny } from "react-icons/md";

const Forecast = ({ forecast }) => {
  return (
    <>
      <h3 className='text-xl mt-4 mb-4 font-medium block'>5 Days Forecast</h3>

      <Card className='lg:w-96'>
        {forecast && forecast.list.slice(0, 5).map((day, index) => {
          const date = new Date(day.dt * 1000);
          const weatherCondition = day.weather[0].main;

          let WeatherIcon;
          if (weatherCondition === "Clear") {
            WeatherIcon = <MdOutlineWbSunny size={25} />;
          } else if (weatherCondition === "Clouds") {
            WeatherIcon = <FaCloud size={25} />;
          } else if (weatherCondition === "Rain") {
            WeatherIcon = <BsCloudRain size={25} />;
          } else {
            WeatherIcon = <BsCloudSun size={25} />; // Default jika tidak ada kondisi yang cocok
          }

          return (
            <div key={index} className='flex justify-between mt-2'>
              <div className='flex items-center font-semibold'>
                {WeatherIcon}
                <span className='ms-2'>{Math.round(day.main.temp)}°</span>
              </div>
              <span>{date.toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
              <span>{date.toLocaleDateString('id-ID', { weekday: 'long' })}</span>
            </div>
          );
        })}
      </Card>
    </>
  )
}

export default Forecast