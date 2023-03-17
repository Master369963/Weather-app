import { Humidity, Wind, Rain } from './Tools/Icon'
import { IoMdRefresh } from 'react-icons/io'
import { Location, Image, Button, UpdateBox, CurrentWeather, Temperature, InfoBox, MainContent, TitleBox, InfoGroup, } from './styles/WeatherCard'
import { Card, ImgCaption, GeneralContent, StrongContent } from './styles/GlobalStyle.style'
import { useEffect, useState } from 'react'
import moment from 'moment/moment'

const WeatherCard = () => {
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

  const fetchCurrentWeather = () => {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=c3cbce25f7dae705324902aaf56f6456')
      .then((response) => response.json())
      .then((Apidata) => {
        const date = moment.unix(Apidata.dt)
        const formattedDate = date.format('ddd, MMM D')
        const formmatedTime = date.format('HH:mm')

        setWeatherData((preState) => ({
          ...preState,
          description: Apidata.weather[0].description,
          icon: `https://openweathermap.org/img/wn/${Apidata.weather[0].icon}@2x.png`,
          temperature: Math.round(Apidata.main.temp),
          feelTemp: Math.round(Apidata.main.feels_like),
          humilidy: Apidata.main.humidity,
          wind: Apidata.wind.speed,
          rain: Apidata.rain ? Apidata.rain['1h'] : null,
          windDirect: Apidata.wind.deg,
          updatedTime: formmatedTime,
          updatedDate: formattedDate,
        }))
      })
  }

  useEffect(() => {
    console.log('useEffect')
    fetchCurrentWeather()
  }, [])

  const refreshInfo = () => {
    console.log('click')
    fetchCurrentWeather()
  }

  return (
    <Card>
      <MainContent >
        <TitleBox>
          <Location>London</Location>
          <GeneralContent >{weatherData.updatedDate}</GeneralContent>
        </TitleBox>
        <StrongContent mb='1rem'>{weatherData.description}</StrongContent>
        <CurrentWeather>
          <div>
            <Temperature>{weatherData.temperature}<span>°C</span></Temperature>
            <ImgCaption>Feels like {weatherData.feelTemp}°C</ImgCaption>
          </div>
          <Image src={weatherData.icon} alt="weather icon" />
        </CurrentWeather>
      </MainContent>
      <InfoGroup>
        <InfoBox>
          <Rain />
          <div>
            <span>{weatherData.rain ? weatherData.rain : '0'}mm</span>
          </div>
        </InfoBox>

        <InfoBox>
          <Humidity />
          <span>{weatherData.humilidy}%</span>
        </InfoBox>
        <InfoBox>
          <Wind />
          <div>
            <span>{weatherData.wind}m/s</span>
          </div>
        </InfoBox>
      </InfoGroup>
      <UpdateBox>
        <span>Last Update Time: {weatherData.updatedTime}</span>
        <Button onClick={refreshInfo}><IoMdRefresh /></Button>
      </UpdateBox>
    </Card>
  )
}

export default WeatherCard