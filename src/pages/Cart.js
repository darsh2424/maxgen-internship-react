import React from 'react'
import { useNavigate } from 'react-router';
import NewProd from '../data/NewProd';
import CartCardGroup from '../components/CartCardGroup';
import { useTheme } from '../App';

const Cart = () => {
    const navigate = useNavigate();
    const {handleRemoveFromCart}=useTheme();
    const handleClick = () => {
        navigate("/user");
    }
    const isLogin = sessionStorage.getItem("login_user")
    console.log(isLogin)
    if (isLogin !== "null") {
        let current_user_cart = {}
        let user_cart = JSON.parse(localStorage.getItem('Users')) || {};
        // console.log(user_cart)
        let user_index = user_cart.findIndex(u => u.email = sessionStorage.getItem("login_user"))
        console.log(user_index)
        if (user_cart[user_index]) {
            current_user_cart = user_cart[user_index]
            let cart = current_user_cart["cart"]
            let products = NewProd
            let filtered_prod = products.filter(product => cart.includes(product.index))
            // console.log(filtered_prod)

            return (
                <>
                    <CartCardGroup heading="My Cart" cardData={filtered_prod} handleRemoveFromCart={handleRemoveFromCart} />
                </>
            )
        } else {
            console.log("Something Wrong at Login!")
            return null
        }
    } else {
        return (
            <>
                <div className="user-page-control-button-group logout-group">
                    <button className="logout-center-button" onClick={handleClick}>
                        You Need To Login First!
                    </button>
                </div>
            </>
        )
    }

}

export default Cart
