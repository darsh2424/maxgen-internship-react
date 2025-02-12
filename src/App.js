// import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router';
// import './App.css';
import { createContext, useContext, useEffect, useState } from 'react';
import Aboutus from './pages/Aboutus';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhyPintola from './pages/WhyPintola';
import RecipePage from './pages/RecipePage';
import ContactUs from './pages/ContactUs';
import User from './pages/User';
import Cart from './pages/Cart';

const ThemeContext = createContext(null)

function App() {
  return (
    <>
      <ThemeProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<Aboutus />} />
            <Route path="/why-pintola" element={<WhyPintola />}></Route>
            <Route path="/recipe" element={<RecipePage />}></Route>
            <Route path="/contact" element={<ContactUs />}></Route>
            <Route path="/user" element={<User />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}
const ThemeProvider = ({ children }) => {
  const [screenMode, setScreenMode] = useState("light");
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    document.body.className = screenMode === "light" ? "body-light" : "body-dark"
  }, [screenMode])

  useEffect(() => {
    // if there is data in localstorage  
    if (localStorage.getItem("Users") != null) {
      const previous_data = localStorage.getItem("Users");
      setUserData(JSON.parse(previous_data))
    }
  }, [])

  const handleAddToCart = (id) => {
    // console.log(userData)
    if (sessionStorage.getItem("login") === "true") {
      let current_user_cart = {}
      let user_cart = JSON.parse(localStorage.getItem('Users')) || {};
      let user_index = user_cart.findIndex(u => u.email = sessionStorage.getItem("login_user"))
      // console.log(user_index)
      if (user_cart[user_index]) {
        current_user_cart = user_cart[user_index]

        let cart = current_user_cart["cart"]
        if (cart.includes(id)) {
          alert("Already In Cart")
        } else {
          cart.push(id)
          localStorage.setItem('Users', JSON.stringify(user_cart));
          alert("Added Into Cart")
        }
      } else {
        console.log("Something Wrong at Login!")
      }
    } else {
      alert("Please Login First")
    }
  }

  const handleRemoveFromCart = (id) => {
    
  }
  return (
    <ThemeContext.Provider value={{ screenMode, setScreenMode, isLoggedIn, setIsLoggedIn, userData, setUserData, handleAddToCart, handleRemoveFromCart }}>
      {children}
    </ThemeContext.Provider>
  )
}
export const useTheme = () => useContext(ThemeContext);
export default App;
