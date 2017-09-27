import axios from 'axios'

const API_KEY = '73159aeecb90012fa048a38a5e33b991'
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},aus`;
  const request = axios.get(url);

  console.log("request:", request);
  
  return {
    type: FETCH_WEATHER,
    payload: request
  }
}
