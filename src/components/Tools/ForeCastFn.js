import moment from 'moment'

export const formatDate = (dtTime) => {
  const inputdate = moment.unix(dtTime)
  const date = inputdate.format('D')
  const day = inputdate.format('ddd')
  const hour = inputdate.format('ha')
  const today = moment().format('D')
  const showday = date === today ? 'Today' : day

  return ({ showday, day, hour })
}

export const getShowdayList = ({ weatherForecast }) => {
  const showDayList = []
  weatherForecast.map((listItem) => {
    const formattedDate = formatDate(listItem.dt)
    if (!showDayList.includes(formattedDate.showday)) {
      showDayList.push(formattedDate.showday)
    }
  })
  return showDayList
}

export const formatweatherForecast = (item) => {
  const time = formatDate(item.dt).hour
  const icon = `https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`
  const description = item.weather[0].description
  const rain = item.pop * 100
  const temp = Math.round(item.main.temp)
  return ({ time, icon, description, rain, temp })
}

export const getShowdayData = ({ weatherForecast }, day) => {
  const groupData = weatherForecast.filter((listItem) => {
    return formatDate(listItem.dt).showday === day
  })
  return groupData
}