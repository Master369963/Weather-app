import './styles/Forcast.style'
import { ForcastImg, ItemBox, SubTitle, ForecastContent, BoldContent, ForecastWrapper, TimeBox, DescriptionContent } from './styles/Forcast.style'
import { Card, FlexCenterBox, GeneralContent, ImgCaption, StrongContent } from './styles/GlobalStyle.style'
import { Clock } from './Tools/Icon'
import { getShowdayList, formatweatherForecast, getShowdayData } from './Tools/ForeCastFn'

const ForecastCard = ({ weatherForecast }) => {

  const showday = getShowdayList(weatherForecast)
  return (
    <Card>
      <ForecastContent>
        <DescriptionContent mb='1rem' size='1.4rem'>3 hour ForeCast</DescriptionContent>

        {showday.map((day) => {
          const showdayData = getShowdayData(weatherForecast, day)
          const showdayOutput = showdayData.map((item, index) => {
            const formattedData = formatweatherForecast(item)
            return (
              <FlexCenterBox gap='1rem' key={index}>
                <TimeBox>
                  <Clock />
                  <StrongContent>{formattedData.time}</StrongContent>
                </TimeBox>
                <ForcastImg>
                  <img src={formattedData.icon} alt="" />
                  {formattedData.rain > 0 ? <ImgCaption>{formattedData.rain}%</ImgCaption> : null}
                </ForcastImg>
                <DescriptionContent>{formattedData.description}</DescriptionContent>
                <BoldContent>{formattedData.temp}°C</BoldContent>
              </FlexCenterBox>
            )
          })

          return (
            <ItemBox key={day}>
              <SubTitle>{day}</SubTitle>
              <ForecastWrapper>{showdayOutput}</ForecastWrapper>
            </ItemBox>
          )
        })}

      </ForecastContent>
    </Card >
  )
}

export default ForecastCard