import React from 'react'
import Carousel from '../components/Carousel'
const ContactUs = () => {
    return (
        <>
            <Carousel imgWidth="85%" source="https://pintola.in/cdn/shop/files/Website_Banner-7_1200x450_e37ec709-0c3c-4fe1-900e-647467070929_1400x.jpg?v=1729848068" />

            {/* Contact Us Card */}
            <div className='contact-container'>
                <LeftContact />
                <RightContact />
            </div>

            <div className='map-container'>
                <iframe title="location" className='map' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14030.939852478883!2d72.721249!3d23.271269!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395dc66cd0000001%3A0xabd344b9cbc5a45!2sDas%20Foodtech%20Pvt.%20Ltd.!5e1!3m2!1sen!2sus!4v1737546607717!5m2!1sen!2sus" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"/>
            </div>
        </>
    )
}

const LeftContact = () => {
    return (
        <>
            <div className='contact-card-container'>
                <h2 className='orange-heading'>SAY HELLO!</h2>
                <div className='content'>
                    <p>
                        <b>Company </b> -
                        Das Foodtech Pvt Ltd
                    </p>
                </div>
                <div className='content'>
                    <p>
                        <b>Email </b> -
                        support@pintola.in
                    </p>
                </div>
                <div className='content'>
                    <p>
                        <b>Phone </b> -
                        91 78080 58080
                    </p>
                </div>
                <div className='content'>
                    <p>
                        <b>Corporate Office </b> -
                        304-305 Ganesh Glory, Jagatpur,<br />
                        SG Highway Ahmedabad- 382481
                    </p>
                </div>
                <div className='content'>
                    <p>
                        <b>Manufacturing Unit </b> -
                        Block No. 1234, Salal-Sonasan Road, At. Sonasan, Ta. Prantij, Dist, Himatnagar, Gujarat 383210
                    </p>
                </div>
                <div className='content'>
                    <p>
                        <b>Working Days </b> -
                        Monday to Saturday
                    </p>
                </div>
                <div className='content'>
                    <p>
                        <b>Timing </b> -
                        9am to 6pm
                    </p>
                </div>
                <div className='content follow'>
                    <h2 className='orange-heading'>FOLLOW US</h2>
                    <ul>
                        <li><i className="fa-brands fa-twitter"></i></li>
                        <li><i className="fa-brands fa-facebook"></i></li>
                        <li><i className="fa-brands fa-youtube"></i></li>
                        <li><i className="fa-brands fa-instagram"></i></li>
                        <li><i className="fa-brands fa-linkedin"></i></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

const RightContact = () => {
    return (
        <>
            <div className='contact-card-container right-card'>
                <p>We'd love to hear from you! Fill out our contact form to get in touch with our team. </p>
                <div className='input-container'>
                    <select>
                        <option value="" selected="true" disabled="">What can we help with? *</option>
                        <option value="For Dealership Inquiries">For Dealership Inquiries</option>
                        <option value="For Export Inquiries">For Export Inquiries</option>
                        <option value="Feedback">Feedback</option>
                    </select>
                </div>
                <div className='input-container'>
                    <input type='text' placeholder='Name*' />
                </div>
                <div className='input-container'>
                    <input type='text' placeholder='Email*' />
                </div>
                <div className='input-container'>
                    <input type='text' placeholder='Phone Number*' />
                </div>
                <div className='input-container'>
                    <input type='text' placeholder='Area/City*' />
                </div>
                <div className='input-container'>
                    <input type='text' placeholder='Country(for export)*' />
                </div>
                <div className='input-container'>
                    <textarea placeholder='Message*' rows='10' cols="20" />
                </div>
                <div className='input-container'>
                    <button>Submit</button>
                </div>
            </div>
        </>
    )
}
export default ContactUs
