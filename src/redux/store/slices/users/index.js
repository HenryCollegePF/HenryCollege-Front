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
    logoutUser: (state, action) => {
      state.loggedUser = null;
    },
    logUser: (state, action) => {
      state.loggedUser = action.payload;
    },
  },
});

export const { setUserList, logoutUser, logUser } = userSlice.actions;

export default userSlice.reducer;
