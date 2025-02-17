import React from 'react'
import Carousel from '../components/Carousel'
import NewProd from '../data/NewProd'
import { useLocation } from 'react-router';
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/userSlice";


const ProdDesciption = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const id = queryParams.get("id");
    const product = NewProd.find((prod) => prod.index === parseInt(id));
    const dispatch = useDispatch();

    const handleAddToCart = (productId) => {
        dispatch(addToCart({ productId, quantity: 1 }));
    }    
    return (
        <>
            {product &&
                <div className='description-container'>
                    <div className='description-items'>
                        <div className='description-item'>
                            <div className='description-img'>
                                <img src={product.imgSrc} alt="product-img" />
                            </div>
                        </div>
                        <div className='description-item'>
                            <div className='description-data'>
                                <h1>{product.title}</h1>
                            </div>
                            <div className='description-data'>
                                <p className="discount">- {product.discount}%</p>
                                <p className="discount">&#8377;{(product.price - Math.floor((product.price * product.discount) / 100))}</p>
                            </div>
                            <div className='description-data'>
                                <s><h3>MRP. &#8377;{product.price}</h3></s>
                            </div>
                            <div className='description-data'>
                                <button id={(product.index) + "-button"} onClick={() => handleAddToCart(product.index)}>Add To Cart</button>
                            </div>
                            <div className='description-data-points'>
                                <p dangerouslySetInnerHTML={{ __html: product.desc.replace(/\n/g, "<br/>") }} />
                            </div>
                        </div>
                    </div>
                </div>
            }
            <div className='description-carousel-gorup'>
                <Carousel source="https://pintola.in/cdn/shop/files/Desktop_01_347eacbd-6eac-4572-a8f1-58334b031f12_1600x.png?v=1691845635" imgWidth="100%" />
                <Carousel source="https://pintola.in/cdn/shop/files/Desktop_03_a9cf0cd5-eca0-486d-9fad-e10020616b91_1600x.png?v=1691845635" imgWidth="100%" />
                <Carousel source="https://pintola.in/cdn/shop/files/Desktop_04_b91a1419-30e1-4ec5-b9c0-414ea564b31e_1600x.png?v=1691845635" imgWidth="100%" />
                <Carousel source="https://pintola.in/cdn/shop/files/Desktop_05_f0a4f169-0ab7-447e-9023-5c8b9a8eef15_1600x.png?v=1691845635" imgWidth="100%" />
                <Carousel source="https://pintola.in/cdn/shop/files/Desktop_06_d574f89f-804f-4592-b01e-3acded5859cb_1600x.png?v=1691845634" imgWidth="100%" />
                <Carousel source="https://pintola.in/cdn/shop/files/Desktop_07_2218d82f-e753-4d2b-977e-c792e611300e_1600x.png?v=1691845635" imgWidth="100%" />
            </div>
        </>
    )
}

export default ProdDesciption
