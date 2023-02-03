import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

export const darkStatusSlice = createSlice({
  name: "darkStatus",
  initialState,
  reducers: {
    toggleDarkStatusInStore: (state) => {
      state.value = !state.value;
      console.log("State inside reducer = " + state.value);
      // state = 2;
      // console.log("State inside reducer = " + state);
    },
  },
});

export const { toggleDarkStatusInStore } = darkStatusSlice.actions;
export default darkStatusSlice.reducer;
