import { createSlice } from "@reduxjs/toolkit";
import NewProd from "../data/NewProd"; // Import your product data

const initialState = {
  isLoggedIn: sessionStorage.getItem("login") === "true",
  userData: JSON.parse(localStorage.getItem("Users")) || [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state) => {
      state.isLoggedIn = true;
      sessionStorage.setItem("login", "true");
    },
    logout: (state) => {
      state.isLoggedIn = false;
      sessionStorage.removeItem("login");
    },
    addToCart: (state, action) => {
      const userIndex = state.userData.findIndex(
        (user) => user.email === sessionStorage.getItem("login_user")
      );

      if (userIndex !== -1) {
        let cart = state.userData[userIndex].cart || [];
        if (!cart.includes(action.payload)) {
          cart.push(action.payload);
          state.userData[userIndex].cart = cart;
          localStorage.setItem("Users", JSON.stringify(state.userData));
          alert("Added Into Cart");
        } else {
          alert("Already In Cart");
        }
      } else {
        console.log("Something Wrong at Login!");
        alert("Did You Logged In?");
      }
    },
    removeFromCart: (state, action) => {
      const userIndex = state.userData.findIndex(
        (user) => user.email === sessionStorage.getItem("login_user")
      );

      if (userIndex !== -1) {
        let cart = state.userData[userIndex].cart || [];

        // Remove the item if it exists
        if (cart.includes(action.payload)) {
          cart = cart.filter((item) => item !== action.payload);
          state.userData[userIndex].cart = cart;
          localStorage.setItem("Users", JSON.stringify(state.userData));
          console.log("Removed From Cart");
        } else {
          alert("Item Not Found In Cart");
        }
      } else {
        console.log("Something Wrong at Login!");
        alert("Did You Logged In?");
      }
    },
    setUserData: (state, action) => {
      state.userData = action.payload;
      localStorage.setItem("Users", JSON.stringify(state.userData));
    },
    renderCart: (state) => {
      const userIndex = state.userData.findIndex(
        (user) => user.email === sessionStorage.getItem("login_user")
      );

      if (userIndex !== -1) {
        const cart = state.userData[userIndex].cart || [];
        return {
          ...state,
          cartProducts: NewProd.filter((product) => cart.includes(product.index)),
        };
      }

      return { ...state, cartProducts: [] };
    },
  },
});

export const { login, logout, addToCart, removeFromCart, setUserData, renderCart } = userSlice.actions;
export default userSlice.reducer;
