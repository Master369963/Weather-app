import './App.css'
import { Container } from './components/styles/GlobalStyle.style';
import ForcastCard from './components/ForcastCard';
import WeatherCard from "./components/WeatherCard";
import { useState, useEffect } from 'react';
import moment from 'moment';
import { apiKey, weather_URL } from './components/Tools/Api';


function App() {
  const [weatherData, setWeatherData] = useState({
    // description: '',
    // icon: '',
    // temperature: 0,
    // feelTemp: 0,
    // humilidy: 0,
    // wind: 0,
    // rain: 0,
    // windDirect: 0,
    // updatedTime: '',
    // updatedDate: '',
  })
  const [weatherForecast, setweatherForecast] = useState({
    weatherForecast: [],
  })
  const [isLoading, setIsLoading] = useState(false)
  const [refreshBtnDisabled, setRefreshBtnDisabled] = useState(true)
  const [displayCity, setDisplayCity] = useState({
    city: 'London',
    lat: 51.5073,
    lon: -0.1276,
  })

  const onSearchChangeHandler = (searchValue) => {
    const [lat, lon] = searchValue.value.split(" ")
    setDisplayCity({ lat, lon, city: searchValue.label })


    console.log('app', searchValue, lat, lon)

  }

  const fetchCurrentWeather = () => {
    try {
      return fetch(`${weather_URL}/weather?lat=${displayCity.lat}&lon=${displayCity.lon}&units=metric&appid=${apiKey}`)
        .then((response) => response.json())
        .then((apiData) => {
          const date = moment.unix(apiData.dt)
          const formattedDate = date.format('ddd, MMM D')
          const formmatedTime = date.format('HH:mm')
          const currentTime = moment().format('HH:mm')
          const activeBtnTime = date.add(15, 'minutes').format('HH:mm')
          const waitingTime = moment.duration(moment(activeBtnTime, 'HH:mm').diff(moment(currentTime, 'HH:mm'))).asMinutes()

          return {
            description: apiData.weather[0].description,
            icon: `https://openweathermap.org/img/wn/${apiData.weather[0].icon}@2x.png`,
            temperature: Math.round(apiData.main.temp),
            feelTemp: Math.round(apiData.main.feels_like),
            humilidy: apiData.main.humidity,
            wind: apiData.wind.speed.toFixed(1),
            rain: apiData.rain ? apiData.rain['1h'] : null,
            windDirect: apiData.wind.deg,
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
      return fetch(`${weather_URL}/forecast?lat=${displayCity.lat}&lon=${displayCity.lon}&units=metric&appid=${apiKey}`)
        .then((response) => response.json())
        .then((apiData) => {
          const trimData = apiData.list.slice(0, 10)

          return {
            weatherForecast: apiData.list,
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

        setTimeout(() => {
          setRefreshBtnDisabled(false)
        }, currentWeather.waitToUpdate * 60 * 1000)

      } catch (error) {
        console.error(error)
      }
    }
    fetchData()
  }, [displayCity])

  const handleRefresh = async () => {
    setIsLoading(true)

    const [currentWeather, forecastWeather] = await Promise.all([
      fetchCurrentWeather(),
      fetchweatherForecast(),
    ])

    setWeatherData({ ...currentWeather })
    setweatherForecast({ ...forecastWeather })

    setTimeout(() => {
      setIsLoading(false);
      setRefreshBtnDisabled(true)

      setTimeout(() => {
        setRefreshBtnDisabled(false);
      }, currentWeather.waitToUpdate * 60 * 1000);
    }, 2000);
  }
  return (
    <>
      <Container>
        <WeatherCard
          weatherData={weatherData}
          handleRefresh={handleRefresh}
          isLoading={isLoading}
          disabled={refreshBtnDisabled}
          searchHandler={onSearchChangeHandler}
          displayCity={displayCity.city}
        />
        <ForcastCard weatherForecast={weatherForecast} />
      </Container>
    </>
  )
}

export default App;
