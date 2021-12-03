import { toast } from "react-toastify";
import jwtDecode from "jwt-decode";
import { LOGIN, SIGNUP } from "../constants/ActionTypes";

const initialState = {
  token: localStorage.getItem("token"),
  email: null,
  id: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP:
    case LOGIN:
      toast("Welcome...", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      return {
        ...initialState,
        email: action.payload.email,
        id: Date.now(),
      };
    default:
      return state;
  }
};

export default authReducer;
