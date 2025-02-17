import React from 'react';

const Card = (props) => {
    return (
        <div className='card'>
            <a href={`product?id=${props.index}`}>
                <div className='card-img-container'>
                    <div className='card-img'>
                        <img src={props.img} alt="product-image" />
                    </div>
                    {props.discount && <p className='discount-div'>{props.discount}% Off</p>}
                </div>
                <div className='card-title'>
                    <p>{props.title}</p>
                </div>
                <div className='card-title'>
                    {props.discount ? (
                        <p>&#8377;{(props.price - Math.floor((props.price * props.discount) / 100))} <s className='dull-opacity'>&#8377;{props.price}</s> </p>
                    ) : (
                        <p>Price: &#8377;{props.price}</p>
                    )}
                </div>
            </a>
            {props.handleAddToCart &&
                <div className='card-button'>
                    <button id={(props.index) + "-button"} onClick={() => props.handleAddToCart(props.index)}>Add To Cart</button>
                </div>
            }
            {props.handleRemoveFromCart &&
                <>
                    <div className="card-quantity">
                        <button
                            className="quantity-btn minus"
                            onClick={() => props.handleUpdateQuantity(props.index, Math.max(1, props.quantity - 1))}
                            disabled={props.quantity <= 1}
                        >
                            −
                        </button>
                        <span className="quantity-value">{props.quantity}</span>
                        <button
                            className="quantity-btn plus"
                            onClick={() => props.handleUpdateQuantity(props.index, props.quantity + 1)}
                        >
                            +
                        </button>
                    </div>
                    <div className='card-button'>
                        <button id={(props.index) + "-button"} onClick={() => props.handleRemoveFromCart(props.index)}>Remove From Cart</button>
                    </div>
                </>
            }
        </div>
    );
};

export default Card;