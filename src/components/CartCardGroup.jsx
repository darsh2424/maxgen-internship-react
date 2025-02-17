import React from 'react'
import Card from './Card'

const CartCardGroup = (props) => {
    const cardData = props.cardData;

    // Calculate total items and total price
    const totalItems = cardData.reduce((total, item) => total + (item.quantity || 1), 0);
    const totalAmount = cardData.reduce((total, item) => total + (item.price * (item.quantity || 1)), 0);

    return (
        <>
            <div className="cart-footer">
                <span className="total-items">Total Items: {totalItems}</span>
                <span className="separator">|</span>
                <span className="total-amount">Total: ₹{totalAmount.toFixed(2)}</span>
                <button className="purchase-btn">Purchase</button>
            </div>

            <div className='card-group-container'>
                <h2>{props.heading}</h2>
                <div className='card-group'>
                    {cardData.map((card, index) => {
                        const cartItem = cardData.find(item => item.index === card.index);
                        const quantity = cartItem.quantity || 1; // Default quantity = 1 if not in cart

                        return (
                            <Card
                                key={index}
                                index={card.index}
                                img={card.imgSrc}
                                title={card.title}
                                price={card.price}
                                discount={card.discount}
                                quantity={quantity}
                                handleUpdateQuantity={props.handleUpdateQuantity}
                                handleRemoveFromCart={props.handleRemoveFromCart}
                            />
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default CartCardGroup;
