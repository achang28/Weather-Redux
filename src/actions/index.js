import axios from 'axios';
const API_KEY = "efb1fffdbea56abf394bf21383f0bfe8";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = "FETCH_WEATHER";

function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url); // promise is returned from get call

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}

export default fetchWeather;