//reducer
import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "users",
  initialState: {
    list: [],
    data: {},
    loggedUser: {},
    userById:[],
  },
  reducers: {
    setUserList: (state, action) => {
      state.list = action.payload;
    },
    logoutUser: (state, action) => {
      state.loggedUser = null;
    },
    logUser: (state, action) => {
      state.loggedUser = action.payload;
    },
    getUserById: (state,action) => {
      state.userById = action.payload
    },
  },
});

export const { setUserList, logoutUser, logUser,getUserById } = userSlice.actions;

export default userSlice.reducer;
