import React from 'react'
import Card from './Card'

const CartCardGroup = (props) => {
    const cardData = props.cardData
    return (
        <>
            <div className='card-group-container'>
                <h2>{props.heading}</h2>
                <div className='card-group'>
                    {cardData.map((card, index) => (
                        <Card
                            key={index}
                            index={card.index}
                            img={card.imgSrc}
                            title={card.title}
                            price={card.price}
                            discount={card.discount}
                            handleRemoveFromCart={props.handleRemoveFromCart} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default CartCardGroup
