import axios from "axios";
import { setPaid } from ".";

const URL = import.meta.env.VITE_BACK_URL || "http://localhost:3001";

export const postPayment = (data, userId) => {
  return async (dispatch) => {
    try {
      // const res = await axios.post(`${URL}/membership`, {
      //   ...data,
      //   userId,
      // });
      // console.log("aqui", res);
      dispatch(setPaid(data));
    } catch (error) {
      console.log("error_paid", error);
    }
  };
};
