import React, { useState } from 'react'
import { Link } from 'react-router'
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../redux/themeSlice";
import { logoutUser } from '../redux/authSlice';

const Navbar = () => {
    const screenMode = useSelector((state) => state.theme.screenMode);
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

    const dispatch = useDispatch();
    let userName = "";

    const userData = JSON.parse(localStorage.getItem("Users") || "[]"); // Ensure it's an array
    const loginEmail = sessionStorage.getItem("login_user");

    const user = userData.find(u => u.email === loginEmail);
    if (user) {
        userName = user.firstName;
    }

    const handleScreenMode = () => {
        dispatch(toggleTheme());
    };
    const handleLogOutClick = () => {
        sessionStorage.setItem("login", "false");
        sessionStorage.setItem("login_user", null);

        dispatch(logoutUser());
    };

    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <nav>
                {/* Main Logo */}
                <Link to="/">
                    <div className="home-link">
                        <img
                            src="https://pintola.in/cdn/shop/files/Pintola_Logo_PNG_200x.png?v=1655118347"
                            width="150"
                            height="45"
                            alt="Main-Logo"
                        />
                    </div>
                </Link>

                {/* Center Links (Responsive Menu) */}
                <div className={`center-link ${isOpen ? "open" : ""}`}>
                    <ul>
                        <li><Link to="/" onClick={() => setIsOpen(false)}>Store</Link></li>
                        <li><Link to="/about" onClick={() => setIsOpen(false)}>About Us</Link></li>
                        <li><Link to="/why-pintola" onClick={() => setIsOpen(false)}>Why Pintola?</Link></li>
                        <li><Link to="/recipe" onClick={() => setIsOpen(false)}>Recipes</Link></li>
                        <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact Us</Link></li>
                    </ul>
                </div>

                {/* Nav Links (User, Cart, Mode Switch) */}
                <div className="nav-link">
                    <ul>
                        {
                            !isLoggedIn ? (
                                <li>
                                    <Link to="/user">
                                        <i className="fa-solid fa-user"></i>
                                    </Link>
                                </li>
                            ) : (
                                <>
                                    <p>
                                        Hello {userName} !
                                    </p>
                                    <li>
                                        <button onClick={handleLogOutClick}>
                                            <i class="fa-solid fa-arrow-right-from-bracket"></i>
                                        </button>
                                    </li>
                                </>
                            )
                        }
                        <li>
                            <Link to="/cart">
                                <i className="fa-solid fa-cart-shopping"></i>
                            </Link>
                        </li>
                        <li>
                            <button onClick={handleScreenMode}>
                                {screenMode === "light" ? (
                                    <i className="fa-solid fa-circle-half-stroke"></i>
                                ) : (
                                    <i className="fa-solid fa-circle"></i>
                                )}
                            </button>
                        </li>
                        <li>
                            {/* Hamburger Button (Visible only on mobile) */}
                            <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
                                <i className="fa-solid fa-bars"></i>
                            </button>
                        </li>
                    </ul>
                </div>
            </nav>

            {/* Floating Chat Button */}
            <div className="fix-chat-btn">
                <a href="https://pintola.in">
                    <button>
                        <i className="fa-brands fa-whatsapp"></i>
                        <p>Chat With Us</p>
                    </button>
                </a>
            </div>        
        </>
    )
}

export default Navbar
