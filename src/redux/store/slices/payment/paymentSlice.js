import axios from "axios";
import { setPaid, clearSubscription } from ".";

const URL = "http://localhost:3001";

export const postPayment = (data, userId) => {
  return async (dispatch) => {
    try {
      const res = await axios.post(`${URL}/membership`, {
        ...data,
        userId,
      });
      dispatch(setPaid(res.data));
    } catch (error) {
      console.log("error_paid", error);
    }
  };
};

export const removeSubscription = () => {
  return (dispatch) => dispatch(clearSubscription());
};
