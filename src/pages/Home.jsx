import React from 'react'
import Carousel from '../components/Carousel'
import CardGroup from '../components/CardGroup'
// import best from '../data/Best'
import NewProd from '../data/NewProd'
import Post from '../components/Post'
import postData from '../data/Post'
import { useTheme } from '../App'

const best = [...NewProd].sort((a, b) => b.totalPurchase - a.totalPurchase).slice(0, 4)
const bestProdData = best
const allProdData = NewProd
const PostData = postData
const Home = () => {
    const {handleAddToCart}=useTheme();
    return (
        <>
            <Carousel source={"https://pintola.in/cdn/shop/files/Banner1_642cda2b-0a1b-4354-bbae-60727ecddbff_2000x.jpg?v=1731999399"} />
            <CardGroup heading="Shop Our Best Sellers" cardData={bestProdData} handleAddToCart={handleAddToCart} />
            <CardGroup heading="Newly Launched" cardData={allProdData} handleAddToCart={handleAddToCart} />
            <Post heading="Follow Us On Instagram @Pintola.in" postData={PostData} />
        </>
    )
}
export default Home
