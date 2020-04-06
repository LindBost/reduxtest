import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {login, logout} from "../actions/loginActions";


const Login = () => {

  const loggedInUser = useSelector(state => state.inLoggedUser);

  const [user, setUser] = useState({
    username: "",
    password: ""
  });

  const dispatch = useDispatch();

  function updateState(e) {
    setUser({...user, [e.target.name]: e.target.value});
  }

  function submitUser() {
    dispatch(login(user.username, user.password))
  }

  function logOut() {
    dispatch(logout())
  }

  return (
    <>
      {!loggedInUser.isLoggedIn ?
        <>
          <input onChange={updateState} name="username" type="text" placeholder="username"/>
          <input onChange={updateState} name="password" type="password" placeholder="password"/>
          <button onClick={submitUser}>Login!</button>
        </> :
        <>
          <h5>Welcome {loggedInUser.username}</h5>
          <button onClick={logOut}>Logout!</button>
        </>
      }
    </>
  )
};

export default Login;
