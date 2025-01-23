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
          </Routes>
          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}
const ThemeProvider = ({ children }) => {
  const [screenMode, setScreenMode] = useState("light");

  useEffect(() => {
    document.body.className = screenMode === "light" ? "body-light" : "body-dark"
  }, [screenMode])

  return (
    <ThemeContext.Provider value={{ screenMode, setScreenMode }}>
      {children}
    </ThemeContext.Provider>
  )
}
export const useTheme = () => useContext(ThemeContext);
export default App;
