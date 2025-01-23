import React from 'react'

const Carousel = (props) => {
    return (
        <div className='carousel-container'>
            <div className='carousel-img'>
                {props.imgWidth ?
                    (<img width={props.imgWidth} src={props.source} alt="Carousel Pic" />)
                    :
                    (<img width="100%" src={props.source} alt="Carousel Pic" />
                    )}
            </div>
        </div>
    )
}

export default Carousel
