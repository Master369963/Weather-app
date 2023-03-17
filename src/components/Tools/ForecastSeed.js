
const ForecastSeed = {
  "cod": "200",
  "message": 0,
  "cnt": 40,
  "list": [{
    "dt": 1678903200,
    "main": {
      "temp": 7.34,
      "feels_like": 5.28,
      "temp_min": 6.87,
      "temp_max": 7.34,
      "pressure": 1013,
      "sea_level": 1013,
      "grnd_level": 1011,
      "humidity": 81,
      "temp_kf": 0.47
    },
    "weather": [{
      "id": 802,
      "main":
        "Clouds",
      "description": "scattered clouds",
      "icon": "03d"
    }],
    "clouds": { "all": 40 },
    "wind": {
      "speed": 3.05,
      "deg": 192,
      "gust": 7.52
    },
    "visibility": 10000,
    "pop": 0,
    "sys": { "pod": "d" },
    "dt_txt": "2023-03-15 18:00:00"
  },
  {
    "dt": 1678914000,
    "main": {
      "temp": 7.23,
      "feels_like": 4.44,
      "temp_min": 7,
      "temp_max": 7.23,
      "pressure": 1013,
      "sea_level": 1013,
      "grnd_level": 1010,
      "humidity": 81,
      "temp_kf": 0.23
    },
    "weather": [{
      "id": 500,
      "main":
        "Rain",
      "description": "light rain",
      "icon": "10n"
    }],
    "clouds": { "all": 60 },
    "wind": {
      "speed": 4.32, "deg": 169,
      "gust": 11.37
    },
    "visibility": 10000,
    "pop": 0.51,
    "rain": { "3h": 0.35 },
    "sys": { "pod": "n" },
    "dt_txt": "2023-03-15 21:00:00"
  }],
  "city": {
    "id": 2643743,
    "name": "London",
    "coord": { "lat": 51.5085, "lon": -0.1257 },
    "country": "GB",
    "population": 1000000,
    "timezone": 0,
    "sunrise": 1678860938,
    "sunset": 1678903415
  }
}

export default ForecastSeed