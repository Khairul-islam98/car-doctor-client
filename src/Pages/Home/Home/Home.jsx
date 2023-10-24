import React from 'react';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Services from '../Services/Services';
import ContactB from '../ContactB/ContactB';
import Products from '../Products/Products';
import Teams from '../Teams/Teams';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <ContactB></ContactB>
            <Products></Products>
            <Teams></Teams>
        </div>
    );
};

export default Home;