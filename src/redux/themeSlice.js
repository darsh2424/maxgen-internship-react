import { createSlice } from "@reduxjs/toolkit";

const getSystemPreferredMode = () =>
  window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

const initialState = {
  screenMode: getSystemPreferredMode(),
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.screenMode = state.screenMode === "light" ? "dark" : "light";
      document.body.className = state.screenMode === "light" ? "body-light" : "body-dark";
    },
    setSystemTheme: (state, action) => {
      state.screenMode = action.payload;
      document.body.className = action.payload === "light" ? "body-light" : "body-dark";
    },
  },
});

export const { toggleTheme, setSystemTheme } = themeSlice.actions;
export default themeSlice.reducer;

// Listen for system theme changes and update Redux state dynamically
export const listenForSystemThemeChanges = (dispatch) => {
  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

  const handleChange = (e) => {
    dispatch(setSystemTheme(e.matches ? "dark" : "light"));
  };

  mediaQuery.addEventListener("change", handleChange);

  return () => {
    mediaQuery.removeEventListener("change", handleChange);
  };
};
