import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {clearWeather, getWeather} from "../actions/weatherActions";

const WeatherComponent = () => {

  const dispatch = useDispatch();


  const weather = useSelector(state => state.weather);


  const fetchWeather = () => {
    dispatch(getWeather());
  };

  const removeWeather = () => {
    dispatch(clearWeather());
  };

  let celsius = weather.main ? Math.round(((weather.main.temp - 272.15) * 100) / 100) : null;

  console.log(weather);
  return (
    <>
      <button onClick={fetchWeather}>See the weather!</button>
      {celsius &&
      <p>It is {celsius} degrees outside</p>
      }
      <button onClick={removeWeather}>Remove the weather!</button>
    </>
  )
};

export default WeatherComponent;
