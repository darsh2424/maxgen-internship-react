import React from 'react'
import { useNavigate } from 'react-router'

const Footer = () => {
    const navigate=useNavigate()
    return (
        <>
            <footer>
                <div className="main-footer">
                    <div className="item">
                        <img className="footer-img"
                            src="https://pintola.in/cdn/shop/files/Pintola_Logo_PNG_e0a75445-bd35-450f-895e-ece13c165b78_200x.png?v=1668503333" alt="site-logo" />

                        <div className='follow'>
                            <h2>Follow us:</h2>
                            <ul>
                                <li><i className="fa-brands fa-twitter"></i></li>
                                <li><i className="fa-brands fa-facebook"></i></li>
                                <li><i className="fa-brands fa-youtube"></i></li>
                                <li><i className="fa-brands fa-instagram"></i></li>
                                <li><i className="fa-brands fa-linkedin"></i></li>
                            </ul>
                        </div>
                    </div>
                    <div className="item">
                        <ul>
                            <h2>Shop</h2>
                            <li><a href="/">All Product</a></li>
                            <li><a href="/">Peanut Butter</a></li>
                            <li><a href="/">Breakfast</a></li>
                            <li><a href="/">Premium Nut Buffers</a></li>
                            <li><a href="/">Wholegrain Rice Cakes</a></li>
                        </ul>
                    </div>
                    <div className="item">
                        <ul>
                            <h2>Pintola</h2>
                            <li><a href="#" onClick={()=>{navigate("/about")}}>About Us</a></li>
                            <li><a href="#" onClick={()=>navigate("/why-pintola")}>Why Pintola?</a></li>
                            <li><a href="/">Privacy</a></li>
                            <li><a href="/">Terms of Service</a></li>
                            <li><a href="/">FaQs</a></li>
                            <li><a href="/">Refund & Cancellation Policy</a></li>
                            <li><a href="/">Shipping Policy</a></li>
                            <li><a href="/">Return Order</a></li>
                        </ul>
                    </div>
                    <div className="item">
                        <h2>Stay in the loop</h2>
                        <input type="email" placeholder="Email" />
                        <button>Sign Up</button>
                    </div>
                    <div className="item download">
                        <h3>Download Product <br />Catalogue</h3>
                        <button id="download">Download</button>
                    </div>
                </div>
                <div className="second-footer">
                    <p> &copy; 2024 Pintola</p>
                </div>
            </footer>
        </>
    )
}

export default Footer
