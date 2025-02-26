import { useEffect, useState } from 'react'
import { Navbar, TextInput, Button } from 'flowbite-react'

import Loading from './components/Loading';
import WeatherDetails from './components/WeatherDetails';
import CurrentLocation from './components/CurrentLocation';
import Forecast from './components/Forecast';

function App() {
  const [location, setLocation] = useState({
    latitude: "51.50767044533506",
    longitude: "-0.1277524181146935"
  })
  const [datasCurrLocation, setDatasCurrLocation] = useState(null)
  const [forecast, setForecast] = useState(null)
  const [loading, setLoading] = useState(true)
  const [city, setCity] = useState("")

  const apiKey = "2996a07a593c316597710c1863841231"

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLocation({
          latitude: String(position.coords.latitude),
          longitude: String(position.coords.longitude)
        })
      })
    }else {
      alert("Geolocation is not supported by this browser.")
    }
  }

  useEffect(() => {
    const getWeather = async () => {
      if (!location.latitude || !location.longitude) return;

      setLoading(true)

      try {
        const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${location.latitude}&lon=${location.longitude}&units=metric&appid=${apiKey}`
        const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${location.latitude}&lon=${location.longitude}&units=metric&appid=${apiKey}`

        const [weatherRes, forecastRes] = await Promise.all([
          fetch(weatherUrl),
          fetch(forecastUrl),
        ])

        if (!weatherRes.ok || !forecastRes.ok) throw new Error("Failed to fetch data")

        const weatherData = await weatherRes.json()
        const forecastData = await forecastRes.json()
        setDatasCurrLocation(weatherData)
        setForecast(forecastData)
      }catch(e) {
        console.log(e)
      }finally {
        setLoading(false)
      }
    }

    getWeather()
  }, [location])

  const searchLocation = async (e) => {
    e.preventDefault()

    try {
      const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(city)}`)
      const result = await response.json()
  
      if (result.length < 0) {
        alert("City not found!")
        return
      }

      setLocation({
        latitude: result[0].lat,
        longitude: result[0].lon
      })
    } catch(e) {
      throw new Error(e)
    }
  }

  return (
    <>
    { loading && <Loading /> }
    
    {
      !loading && (
        <>
          <Navbar fluid rounded className='shadow sticky top-0'>
            <Navbar.Brand  href="">
              <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">☀️WeatherApp</span>
            </Navbar.Brand>
            <div className='flex items-center'>
              <div>
                <form onSubmit={searchLocation}>
                  <TextInput
                    id="search"
                    type="text"
                    placeholder="E.g: London"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  />
                </form>
              </div>
              <div className='ms-4'>
                <Button color='purple' onClick={() => getLocation()}>Current Location</Button>
              </div>
            </div>
          </Navbar>

          <div className='container mx-auto px-4 flex md:flex-row flex-col mt-5'>
            <div className='basis-1/2'>
              <CurrentLocation datasCurrLocation={datasCurrLocation} />

              <Forecast forecast={forecast} />
            </div>
            <WeatherDetails datasCurrLocation={datasCurrLocation} forecast={forecast} />
          </div>
        </>
      )
    }
    </>
  )
}

export default App
