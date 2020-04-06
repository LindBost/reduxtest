import React from 'react';
import {useSelector} from "react-redux";
import ClassComponent from './ClassComponent';
import FunctionalComponent from './FunctionalComponent';
import LogInComponent from "./LogInComponent";
import WeatherComponent from "./WeatherComponent";

const Main = () => {
  const style = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly"
  };

  const loggedInUser = useSelector(state => state.inLoggedUser);

  return (
    <div>
        <LogInComponent/>
      <WeatherComponent/>
      {loggedInUser.isLoggedIn &&
        <div style={style}>
        <ClassComponent/>
        <FunctionalComponent/>

        </div>
      }
    </div>
  )
};

export default Main;
