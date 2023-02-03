import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   value: [],
// };

const initialState = {
  value: [],
};

export const bookmarksSlice = createSlice({
  name: "bookmarks",
  initialState,
  reducers: {
    addBookmarksToStore: (state, action) => {
      state.value.push(action.payload);
    },
    removeBookmarksFromStore: (state, action) => {
      state.value = state.value.filter((e) => e.url !== action.payload.url);
    },
  },
});

export const { addBookmarksToStore, removeBookmarksFromStore } =
  bookmarksSlice.actions;
export default bookmarksSlice.reducer;
