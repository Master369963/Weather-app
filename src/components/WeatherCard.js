import { Humidity, Wind, Rain, Refresh } from './Tools/Icon'
import { LogoBox, Location, Image, Button, UpdateBox, CurrentWeather, Temperature, InfoBox, MainContent, TitleBox, InfoGroup, BtnCaption, } from './styles/WeatherCard'
import { ImgCaption, GeneralContent, StrongContent, StickyCard } from './styles/GlobalStyle.style'
import logo from './styles/happyday logo.png'
import WeatherSetting from './SearchCity'


const WeatherCard = ({ weatherData, handleRefresh, isLoading, disabled, searchHandler, displayCity }) => {

  return (
    <StickyCard>
      <LogoBox>
        <img src={logo} alt="logo" />
      </LogoBox>
      <WeatherSetting onSearchChange={searchHandler} />
      <MainContent >
        <TitleBox>
          <Location>{displayCity}</Location>
          <GeneralContent>{weatherData.updatedDate}</GeneralContent>
        </TitleBox>
        <StrongContent mb='1rem'>{weatherData.description}</StrongContent>
        <CurrentWeather>
          <div>
            <Temperature>{weatherData.temperature}<span>°C</span></Temperature>
            <ImgCaption>Feels like {weatherData.feelTemp}°C</ImgCaption>
          </div>
          <Image>
            {weatherData.icon &&
              <img src={weatherData.icon} alt="weather icon" />
            }
          </Image>
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
        <span>Last Update Time: {weatherData.updatedTime || '--:--'}</span>
        <Button
          onClick={handleRefresh}
          $loading={isLoading}
          $disabled={disabled}
          title="Please wait 15 minutes before refreshing again"><Refresh /></Button>
      </UpdateBox>
      <BtnCaption $disabled={disabled}>Please wait 15 mins before refreshing.</BtnCaption>
    </StickyCard>
  )
}

export default WeatherCard

