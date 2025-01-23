import React from 'react'
import Carousel from '../components/Carousel'
import Post from '../components/Post'
import CustReview from '../data/CustReview'
const WhyPintola = () => {
    const reviewPostData=CustReview
    return (
        <>
            <div className='why-pintola-container'>
                <Carousel imgWidth="85%" source="https://pintola.in/cdn/shop/files/Website_Banner-8_1200x450_438d4f4e-351e-46bb-84f0-1f08a41e1c73_1400x.jpg?v=1729848068" />

                {/* Top List  */}
                <div className='top-list-item-group'>
                    <TopListItem source="https://cdn.shopify.com/s/files/1/0538/2137/4655/files/WEBSITE_ICON-03_200x.png?v=1623249486" text="High Quality Product" />
                    <TopListItem source="https://cdn.shopify.com/s/files/1/0538/2137/4655/files/WEBSITE_ICON-01_200x.png?v=1623249486" text="High Protein - High Fiber" />
                    <TopListItem source="https://cdn.shopify.com/s/files/1/0538/2137/4655/files/WEBSITE_ICON-05_200x.png?v=1623249487" text="10 Lakh+ Happy Customer" />
                    <TopListItem source="https://cdn.shopify.com/s/files/1/0538/2137/4655/files/WEBSITE_ICON-04_200x.png?v=1623249486" text="Top Quality Certifications" />
                    <TopListItem source="https://cdn.shopify.com/s/files/1/0538/2137/4655/files/WEBSITE_ICON-02_200x.png?v=1623249488" text="100% Freshly Made" />
                </div>

                {/* Main List */}
                <div className='main-list-item-group'>
                    <MainListItem source="https://pintola.in/cdn/shop/files/01_0abe08d9-141c-4d13-8280-80056f8049c1_400x.png?v=1623301115" heading="Certified Organic Peanuts" text="We pick the best quality organic peanuts from organic farms certified by USDA Organic, SGS Organic, India Organic and Jaivik Bharat. Peanuts are checked for moisture and aflatoxin content" />

                    <MainListItemReverse source="https://pintola.in/cdn/shop/files/02_400x.png?v=1623301115"
                        heading="Sorting & Grading of Peanuts"
                        text="Only uniform big size nutritious peanuts are selected and handpicked. Small size peanuts and other dirt particles are rejected and removed" />

                    <MainListItem source="https://pintola.in/cdn/shop/files/03_400x.png?v=1623301116" heading="Continuous Roasting" text="Handpicked peanuts are then roasted according to batch size. Proper process control is followed to get identical roasting of every peanut. Roasted peanuts are cooled down & blanched. 100% batch inspection is done to assure that Pintola’s customers get the top quality products." />

                    <MainListItemReverse source="https://pintola.in/cdn/shop/files/04_400x.png?v=1623301115"
                        heading="Sorting"
                        text="Over-roasted peanuts are rejected under quality control process" />
                </div>

                {/* Reviews */}
                <Post heading="Happy Customers" postData={reviewPostData} boxShadow="true"/>
            </div>
        </>
    )
}

const MainListItem = (props) => {
    return (
        <>
            <div className='list-item'>
                <div className='list-item-img'>
                    <img src={props.source} alt="List Item" />
                </div>
                <div className='list-item-text'>
                    <h2>{props.heading}</h2>
                    <p>{props.text}</p>
                </div>
            </div>
        </>
    )
}
const MainListItemReverse = (props) => {
    return (
        <>
            <div className='list-item'>
                <div className='list-item-text'>
                    <h2>{props.heading}</h2>
                    <p>{props.text}</p>
                </div>
                <div className='list-item-img'>
                    <img src={props.source} alt="List Item" />
                </div>
            </div>
        </>
    )
}
const TopListItem = (props) => {
    return (
        <div className='list-item'>
            <div className='list-item-img'>
                <img src={props.source} alt="List Item" />
            </div>
            <div className='list-item-text'>
                <p>{props.text}</p>
            </div>
        </div>
    )
}

export default WhyPintola
