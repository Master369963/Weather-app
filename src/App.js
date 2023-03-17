import './App.css'
import { Container } from './components/styles/GlobalStyle.style';
import ForcastCard from './components/ForcastCard';
import WeatherCard from "./components/WeatherCard";
import { useState, useEffect } from 'react';
import moment from 'moment';
import ForecastSeed from './components/Tools/ForecastSeed';



function App() {
  const [weatherData, setWeatherData] = useState({
    description: '',
    icon: '',
    temperature: 0,
    feelTemp: 0,
    humilidy: 0,
    wind: 0,
    rain: 0,
    windDirect: 0,
    updatedTime: '',
    updatedDate: '',
  })
  const [weatherForecast, setweatherForecast] = useState({
    weatherForecast: ForecastSeed.list,
  })

  const [isLoading, setIsLoading] = useState(false)
  const [refreshBtnDisabled, setRefreshBtnDisabled] = useState(true)

  const fetchCurrentWeather = () => {
    try {
      return fetch('https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=c3cbce25f7dae705324902aaf56f6456')
        .then((response) => response.json())
        .then((Apidata) => {
          const date = moment.unix(Apidata.dt)
          const formattedDate = date.format('ddd, MMM D')
          const formmatedTime = date.format('HH:mm')
          const currentTime = moment().format('HH:mm')
          const activeBtnTime = date.add(15, 'minutes').format('HH:mm')
          const waitingTime = moment.duration(moment(activeBtnTime, 'HH:mm').diff(moment(currentTime, 'HH:mm'))).asMinutes()

          return {
            description: Apidata.weather[0].description,
            icon: `https://openweathermap.org/img/wn/${Apidata.weather[0].icon}@2x.png`,
            temperature: Math.round(Apidata.main.temp),
            feelTemp: Math.round(Apidata.main.feels_like),
            humilidy: Apidata.main.humidity,
            wind: Apidata.wind.speed.toFixed(1),
            rain: Apidata.rain ? Apidata.rain['1h'] : null,
            windDirect: Apidata.wind.deg,
            updatedTime: formmatedTime,
            updatedDate: formattedDate,
            waitToUpdate: waitingTime,
          }
        })
    } catch (error) {
      console.error(error)
      return null
    }
  }


  const fetchweatherForecast = () => {
    try {
      return fetch('https://api.openweathermap.org/data/2.5/forecast?q=London&units=metric&appid=c3cbce25f7dae705324902aaf56f6456')
        .then((response) => response.json())
        .then((Apidata) => {
          const trimData = Apidata.list.slice(0, 10)

          return {
            weatherForecast: trimData,
          }
        })
    } catch (error) {
      console.error(error)
      return null
    }
  }


  useEffect(() => {
    const fetchData = async () => {
      try {
        const [currentWeather, forecastWeather] = await Promise.all([
          fetchCurrentWeather(),
          fetchweatherForecast(),
        ])
        setWeatherData({ ...currentWeather })
        setweatherForecast({ ...forecastWeather })
        console.log('show', currentWeather)

        setTimeout(() => {
          setRefreshBtnDisabled(false)
        }, currentWeather.waitToUpdate * 60 * 1000)

      } catch (error) {
        console.error(error)
      }
    }
    console.log('useEffect')
    fetchData()
  }, [])

  const handleRefresh = async () => {
    setIsLoading(true)

    const [currentWeather, forecastWeather] = await Promise.all([
      fetchCurrentWeather(),
      fetchweatherForecast(),

    ])

    setWeatherData({ ...currentWeather })
    setweatherForecast({ ...forecastWeather })

    console.log(currentWeather)
    setTimeout(() => {
      setIsLoading(false);
      setRefreshBtnDisabled(true)
    }, 2000);
    setTimeout(() => {
      setRefreshBtnDisabled(false);
    }, currentWeather.waitToUpdate * 60 * 1000);
  }

  return (
    <>
      <Container>
        <WeatherCard
          weatherData={weatherData}
          handleRefresh={handleRefresh}
          isLoading={isLoading}
          disabled={refreshBtnDisabled} />
        <ForcastCard weatherForecast={weatherForecast} />
      </Container>
    </>
  )
}

export default App;
