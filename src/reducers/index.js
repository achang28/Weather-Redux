import { combineReducers } from "redux"; 
import WeatherReducer from './r_weather';

let reducers = {
  weather: WeatherReducer
};

let allReducers = combineReducers(reducers);
export default allReducers;