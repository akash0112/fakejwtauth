import axios from "axios";
import jwtDecode from "jwt-decode";
import { toast } from "react-toastify";
import { LOGIN, SIGNUP } from "../constants/ActionTypes";
const signupcredential=localStorage.getItem("token");
const signupuser=jwtDecode(signupcredential)
console.log(signupuser.email);
export const register = (user) => {
  return (dispatch) => {
    axios
      .post(`${process.env.REACT_APP_API}/register`, user)
      .then((token) => {
        // console.log("register",token.data.access_token);
        localStorage.setItem("token", token.data.access_token);
      const user=  jwtDecode(token.data.access_token)
        dispatch({
          type: SIGNUP,
          payload: user,
        });
      })
      .catch((error) => {
        toast.error(error.response?.data, {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      });
  };
};

export const login = (user) => {
  return (dispatch) => {
    axios
      .post(`${process.env.REACT_APP_API}/login`, user)
      .then((token) => {
        localStorage.setItem("token", token.data.access_token);
        console.log("login",token.data.access_token);
      const user=  jwtDecode(token.data.access_token)
        dispatch({
          type: LOGIN,
          payload: user,
        });
      })
      .catch((error) => {
        toast.error(error.response?.data, {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      });
  };
};