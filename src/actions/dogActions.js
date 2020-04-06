import {GET_DOGS, CLEAR_DOGS} from "../constants";

export const getDogs = () => async dispatch => {
  const response = await fetch('https://dog.ceo/api/breeds/list/all');
  const results =  await response.json();


  dispatch({
    type: GET_DOGS,
    data: Object.keys(results.message)
  })
};

export const clearDogs = () => async dispatch => {
  dispatch({
    type: CLEAR_DOGS
  })
}


