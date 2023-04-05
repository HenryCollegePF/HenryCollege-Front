import axios from "axios";
import { addMembership } from ".";

const URL = "http://localhost:3001";

export const postMembership = (data, userId) => {
  return async (dispatch) => {
    try {
      const res = await axios.post(`${URL}/membership`, {
        ...data,
        userId,
      });
      dispatch(addMembership(res.data));
    } catch (error) {
      console.log("error_paid", error);
    }
  };
};
