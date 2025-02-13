import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { setUserData } from "./redux/userSlice";
// import './App.css';
import Aboutus from "./pages/Aboutus";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhyPintola from "./pages/WhyPintola";
import RecipePage from "./pages/RecipePage";
import ContactUs from "./pages/ContactUs";
import User from "./pages/User";
import Cart from "./pages/Cart";
import ProdDesciption from "./pages/ProdDesciption";

function App() {
  const dispatch = useDispatch();
  const screenMode = useSelector((state) => state.theme.screenMode);
  
  useEffect(() => {
    dispatch(setUserData(JSON.parse(localStorage.getItem("Users")) || []));
  }, [dispatch]);

  useEffect(() => {
    document.body.className = screenMode === "light" ? "body-light" : "body-dark";
  }, [screenMode]);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/why-pintola" element={<WhyPintola />} />
        <Route path="/recipe" element={<RecipePage />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/user" element={<User />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product" element={<ProdDesciption/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
