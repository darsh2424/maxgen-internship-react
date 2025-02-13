import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import CartCardGroup from "../components/CartCardGroup";
import { removeFromCart, renderCart } from "../redux/userSlice";

const Cart = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isLogin = sessionStorage.getItem("login_user");

    useEffect(() => {
        if (isLogin) {
            dispatch(renderCart());  // Fetch cart data when component loads
        }
    }, [dispatch, isLogin]);

    const cartItems = useSelector((state) => state.user.cartProducts || []);

    const handleRemoveFromCart = (productId) => {
        dispatch(removeFromCart(productId));
        dispatch(renderCart());  // Re-fetch cart after removal
    };

    const handleClick = () => {
        navigate("/user");
    };

    if (!isLogin || isLogin === "null") {
        return (
            <div className="user-page-control-button-group logout-group">
                <button className="logout-center-button" onClick={handleClick}>
                    You Need To Login First!
                </button>
            </div>
        );
    }

    return cartItems.length > 0 ? (
        <CartCardGroup heading="My Cart" cardData={cartItems} handleRemoveFromCart={handleRemoveFromCart} />
    ) : (
        <div className='card-group-container'>
            <div className="empty-cart">
                <p>Your cart is empty!</p>
            </div>
        </div>

    );
};

export default Cart;
