import axios from 'axios';

const URL = import.meta.env.VITE_BACK_URL || "http://localhost:3001";

const AUTH_TOKEN_ID = "auth-token";

export const getAuthToken = () => {
  const token = localStorage.getItem(AUTH_TOKEN_ID);

  if (!token) {
    throw new Error("El usuario no ha iniciado sesion.");
  }

  return token;
};

export const setAuthToken = (token) => {
  localStorage.setItem(AUTH_TOKEN_ID, token);
};

export const getUserDataByAuthId = async (auth0Id, token) => {
  const { data } = await axios.get(`${URL}/students/${auth0Id}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })

  return data
}