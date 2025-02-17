import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import CartCardGroup from "../components/CartCardGroup";
import { removeFromCart, renderCart, updateCartQuantity } from "../redux/userSlice";

const Cart = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isLogin = sessionStorage.getItem("login_user");

    useEffect(() => {
        if (isLogin) {
            dispatch(renderCart()); 
        }
    }, [dispatch, isLogin]);

    const cartItems = useSelector((state) => state.user.cartProducts || []);

    // **Calculate total products, total price & discount**
    const handleRemoveFromCart = (productId) => {
        dispatch(removeFromCart(productId));
        dispatch(renderCart());  // Re-fetch cart after removal
    };
    
    const handleUpdateQuantity = (productId, quantity) => {
        dispatch(updateCartQuantity({ productId, quantity }));
        dispatch(renderCart());  // Ensure UI updates
    };


    // **Redirect to login if user is not logged in**
    if (!isLogin || isLogin === "null") {
        return (
            <div className="user-page-control-button-group logout-group">
                <button className="logout-center-button" onClick={() => navigate("/user")}>
                    You Need To Login First!
                </button>
            </div>
        );
    }

    return (
        <div className="cart-container">
            {/* Cart Items */}
            {cartItems.length > 0 ? (
                <CartCardGroup heading="My Cart" cardData={cartItems} handleRemoveFromCart={handleRemoveFromCart} handleUpdateQuantity={handleUpdateQuantity} />
            ) : (
                <div className="empty-cart">
                    <p>Your cart is empty!</p>
                </div>
            )}
        </div>
    );
};

export default Cart;
