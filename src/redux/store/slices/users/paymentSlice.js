import axios from "axios";
import { addMembership } from ".";

const URL = "http://localhost:3001";

export const postMembership = (data, userId) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(`${URL}/membership`, {
        ...data,
        userId,
      });
      dispatch(addMembership(data));
    } catch (error) {
      console.log("error_paid", error);
    }
  };
};
