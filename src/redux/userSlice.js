import { createSlice } from "@reduxjs/toolkit";
import NewProd from "../data/NewProd"; // Import your product data

const initialState = {
  isLoggedIn: sessionStorage.getItem("login") === "true",
  userData: JSON.parse(localStorage.getItem("Users")) || [],
  cartProducts: []
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
      const userIndex = state.userData.find(
        (user) => user.email === sessionStorage.getItem("login_user")
      );

      if (userIndex !== -1) {
        let cart = state.userData[userIndex].cart;

        if (!Array.isArray(cart)) {
          cart = []; // ✅ Ensure cart is an array
        }

        // Check if the product already exists in the cart
        const existingItem = cart.find((item) => item.productId === action.payload.productId);

        if (existingItem) {
          // If product exists, increase quantity
          existingItem.quantity += action.payload.quantity || 1;
        } else {
          // If product does not exist, add new item
          cart.push({ productId: action.payload.productId, quantity: action.payload.quantity || 1 });
        }

        // Update the state
        state.userData[userIndex].cart = cart;
        localStorage.setItem("Users", JSON.stringify(state.userData));

        alert("Added Into Cart");
      } else {
        console.log("Something Wrong at Login!");
        alert("Did You Log In?");
      }
    },

    removeFromCart: (state, action) => {
      const productId = action.payload;
      const loggedInUserEmail = sessionStorage.getItem("login_user");
    
      const userIndex = state.userData.findIndex(user => user.email === loggedInUserEmail);
    
      if (userIndex !== -1) {
        let cart = state.userData[userIndex].cart || [];
    
        // ✅ Remove the product by filtering it out
        cart = cart.filter(item => item.productId !== productId);
    
        // ✅ Update the cart in state
        state.userData[userIndex].cart = cart;
        localStorage.setItem("Users", JSON.stringify(state.userData));
      } else {
        alert("Something went wrong. Please log in again.");
      }
    },
    

    setUserData: (state, action) => {
      state.userData = action.payload;
      localStorage.setItem("Users", JSON.stringify(state.userData));
    },
    updateCartQuantity: (state, action) => {
      const { productId, quantity } = action.payload;
      const loggedInUserEmail = sessionStorage.getItem("login_user");
    
      const userIndex = state.userData.findIndex(user => user.email === loggedInUserEmail);
    
      if (userIndex !== -1) {
        let cart = state.userData[userIndex].cart || [];
       
        // Find product in cart
        const productIndex = cart.findIndex((item) => item.productId === productId);

        if (productIndex !== -1) {
          if (quantity > 0) {
            cart[productIndex].quantity = quantity;  // ✅ Update existing product's quantity
          } else {
            cart.splice(productIndex, 1);  // ✅ Remove item if quantity is 0
          }
        }
    
        // ✅ Update cart in state
        state.userData[userIndex].cart = cart;
        localStorage.setItem("Users", JSON.stringify(state.userData));
      } else {
        alert("Something went wrong. Please log in again.");
      }
    },
    

    renderCart: (state) => {
      const userIndex = state.userData.findIndex(
        (user) => user.email === sessionStorage.getItem("login_user")
      );

      if (userIndex !== -1) {
        const cart = state.userData[userIndex].cart || {};
        return {
          ...state,
          cartProducts: NewProd.filter((product) => cart[product.index])
            .map(product => ({
              ...product,
              quantity: cart[product.index].quantity  // Attach quantity
            }))
        };
      }

      return { ...state, cartProducts: [] };
    }


  },
});

export const { login, logout, addToCart, updateCartQuantity, removeFromCart, setUserData, renderCart } = userSlice.actions;
export default userSlice.reducer;
