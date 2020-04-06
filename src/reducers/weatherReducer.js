import {GET_WEATHER, CLEAR_WEATHER} from "../constants";


export const weatherReducer = (state={}, action) => {

  switch (action.type) {

    case GET_WEATHER:
      return action.data;

    case CLEAR_WEATHER:
      return {};

    default: return state;
  }
};
