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
    loginUser: (state) => {
      state.isLoggedIn = true;
      sessionStorage.setItem("login", "true");
    },
    logoutUser: (state) => {
      state.isLoggedIn = false;
      sessionStorage.removeItem("login");
    },    
    registerUser: (state, action) => {
      state.isLoggedIn = true;
      state.userData.push(action.payload);
    },
  },
});

export const { loginUser, logoutUser, registerUser } = authSlice.actions;
export default authSlice.reducer;
