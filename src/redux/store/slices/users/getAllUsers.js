import axios from "axios";
import { setUserList, postUser } from ".";

const URL = "http://localhost:3001";

//Get users

export const getAllUsers = () => {
  return async (dispatch) => {
    try {
      let res = await axios.get(`${URL}/students`);
      dispatch(setUserList(res.data));
    } catch (error) {
      console.log("error_redux", error);
    }
  };
};

//Post users

export const postNewUser = (user) => {
  return async (dispatch) => {
    try {
      const res = await axios.post(`${URL}/students`, user);
      dispatch(postUser(res.data));
      alert("Registro exitoso");
    } catch (error) {
      console.log("error_redux", error);
    }
  };
};
