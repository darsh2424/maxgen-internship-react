import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  screenMode: "light",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.screenMode = state.screenMode === "light" ? "dark" : "light";
      document.body.className = state.screenMode === "light" ? "body-light" : "body-dark";
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
