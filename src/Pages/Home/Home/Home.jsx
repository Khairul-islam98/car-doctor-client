import React from 'react';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Services from '../Services/Services';
import ContactB from '../ContactB/ContactB';
import Products from '../Products/Products';
import Teams from '../Teams/Teams';
import Features from '../Features/Features';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <ContactB></ContactB>
            <Products></Products>
            <Teams></Teams>
            <Features></Features>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;