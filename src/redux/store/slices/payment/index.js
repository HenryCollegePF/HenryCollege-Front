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
  },
});

export const { setPaid } = userSlice.actions;

export default userSlice.reducer;
