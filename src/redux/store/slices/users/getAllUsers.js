import axios from "axios";
import { setUserList, logoutUser, logUser } from ".";
import { getAuthToken, setAuthToken } from "../../../../utils/auth";

const URL = import.meta.env.VITE_BACK_URL || "http://localhost:3001";

//Get users

export const getAllUsers = () => {
  return async (dispatch) => {
    try {
      const token = getAuthToken();
      const res = await axios.get(`${URL}/students`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch(setUserList(res.data));
    } catch (error) {
      console.log("error_getAllUSers", error);
    }
  };
};

//Post users

export const postNewUser = (user) => {
  return async (dispatch) => {
    try {
      await axios.post(`${URL}/students`, user);
      alert("Registro exitoso 🎉🎉🎉");
    } catch (error) {
      console.log("err_post_slice", error);
    }
  };
};

export const loginUser = (user) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(`${URL}/students/login`, user);

      setAuthToken(data.auth.access_token);
      dispatch(logUser(data));
    } catch (error) {
      alert("No estas registrado, por favor registrate 😊");
      console.log("err_login_slice", error);
    }
  };
};

export const logout = () => (dispatch) => {
  return dispatch(logoutUser());
};
