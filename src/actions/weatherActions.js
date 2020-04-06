import {GET_WEATHER, CLEAR_WEATHER} from "../constants";

export const getWeather  = () => async dispatch => {
  const response = await fetch('http://api.openweathermap.org/data/2.5/weather?lat=59.404579&lon=17.957100&appid=0d2869dd4acd44af07ce21b017767633')
  const results =  await response.json();

  dispatch({
    type: GET_WEATHER,
    data: results
  });

}

export const clearWeather = () => async dispatch => {

  dispatch({
    type: CLEAR_WEATHER
  })
}
