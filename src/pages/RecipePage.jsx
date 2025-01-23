import React from 'react'
import Recipe from '../components/Recipe'
import Receipe from '../data/Receipe'

const RecipePage = () => {
  return (
   <>
        <div className='container'>
           <Recipe pageHeading="Healthy & Delicious Recipes" RecipeData={Receipe}/>
        </div>
   </>
  )
}

export default RecipePage
