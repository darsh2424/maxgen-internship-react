import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: sessionStorage.getItem("login") === "true",
  userData: JSON.parse(localStorage.getItem("Users")) || [],
  cartProducts: []
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.isLoggedIn = true;
    },
    logoutUser: (state) => {
      state.isLoggedIn = false;
    },
    registerUser: (state, action) => {
      state.isLoggedIn = true;
      state.userData.push(action.payload);
    },
  },
});

export const { loginUser, logoutUser, registerUser } = authSlice.actions;
export default authSlice.reducer;
