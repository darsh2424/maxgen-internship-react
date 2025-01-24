import React from 'react'
import { Link } from 'react-router'
import { useTheme } from '../App'
const Navbar = () => {
    const { screenMode, setScreenMode } = useTheme();
    

    const handleScreenMode = () => {
        setScreenMode((screenMode) => (screenMode === "light" ? "dark" : "light"))
    }
    return (
        <>
            <nav>
                <Link to="/">
                    <div className='home-link'>

                        <img src="https://pintola.in/cdn/shop/files/Pintola_Logo_PNG_200x.png?v=1655118347" width="150" height="45" alt="Main-Logo" />

                    </div>
                </Link>
                <div className='center-link'>
                    <ul>
                        <li>
                            <Link to="/">
                                Store
                            </Link>
                        </li>
                        <li>
                            <Link to="/about">
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link to='/why-pintola'>
                                Why Pintola?
                            </Link>
                        </li>
                        <li>
                            <Link to='/recipe'>
                                Recipes
                            </Link>
                        </li>
                        <li>
                            <Link to='/contact'>
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className='nav-link'>
                    <ul>
                        <li>
                            <Link to='/user'>
                                <i className="fa-solid fa-user"></i>
                            </Link>
                        </li>
                        {/* <li><i className="fa-solid fa-magnifying-glass"></i></li> */}
                        <li><i className="fa-solid fa-cart-shopping"></i></li>
                        <li>
                            <button onClick={handleScreenMode}>
                                {
                                    screenMode === "light"
                                        ? (<i className="fa-solid fa-circle-half-stroke"></i>)
                                        : (<i className="fa-solid fa-circle"></i>)
                                }
                            </button>
                        </li>
                    </ul>
                </div>
            </nav>

            <div className='fix-chat-btn'>
                <a href='/'>
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
