import React from 'react'

const Card = (props) => {

    return (
        <a href={props.source}>
            <div className='card'>
                <div className='card-img'>
                    <img src={props.img} alt="product-image" />
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
                {props.handleAddToCart &&
                    <div className='card-button'>
                        <button id={(props.index) + "-button"} onClick={() => props.handleAddToCart(props.index)}>Add To Cart</button>
                    </div>
                }
                {props.handleRemoveFromCart &&
                    <div className='card-button'>
                        <button id={(props.index) + "-button"} onClick={() => props.handleAddToCart(props.index)}>Remove From Cart</button>
                    </div>
                }
            </div>
        </a>
    )
}

export default Card
