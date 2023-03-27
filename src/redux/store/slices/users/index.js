//reducer
import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "users",
  initialState: {
    list: [],
    data: {},
    loggedUser: {},
  },
  reducers: {
    setUserList: (state, action) => {
      state.list = action.payload;
    },
    deleteToken: (state, action) => {
      state.authToken = [];
    },
    logUser: (state, action) => {
      state.loggedUser = action.payload;
    },
  },
});

export const { setUserList, deleteToken, logUser } = userSlice.actions;

export default userSlice.reducer;
