import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "payment",
  initialState: {
    paid: {},
  },
  reducers: {
    setPaid: (state, action) => {
      state.paid = action.payload;
    },
    clearSubscription: (state, action) => {
      state.paid = {};
    },
  },
});

export const { setPaid, clearSubscription } = userSlice.actions;

export default userSlice.reducer;
