import React from 'react'

const Recipe = (props) => {
    let recipeData = props.RecipeData
    return (
        <>
            <div className='post-container'>
                <h2>{props.pageHeading}</h2>
                <div className='recipe-group'>
                    {recipeData.map((p, index) => (
                        <div className='receipe' key={index}>
                            <div className='receipe-img-container'>
                                <img key={index} alt="post-img" src={p.imgUrl} />
                            </div>
                            <div className='receipe-content-container'>
                                <h2>{p.text}</h2>
                                <p>1min Read</p>
                                <button>Read More</button>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </>
    )
}

export default Recipe
