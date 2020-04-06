import {LOGIN,LOGOUT} from "../constants";

export const login = (username, password) => dispatch => {
  if(username === "iron man" && password === "jarvis"){
    dispatch({
      type: LOGIN,
      data: {
        username: username,
        password: password
      }
    });
  }
};

export const logout = () => dispatch => {
  dispatch({
    type: LOGOUT
  })
};
