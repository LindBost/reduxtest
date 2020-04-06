import {combineReducers} from "redux";
import {dogReducer} from "./dogReducer";
import {loginReducer} from "./loginReducer";
import {weatherReducer} from "./weatherReducer";

export const rootReducer = combineReducers({
  dogs: dogReducer,
  inLoggedUser: loginReducer,
  weather: weatherReducer
});
