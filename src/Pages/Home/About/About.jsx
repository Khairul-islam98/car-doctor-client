import React from 'react';
import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className="hero py-20">
            <div className="hero-content flex-col gap-20 lg:flex-row">
                <div className='lg:w-1/2 relative ml-10 '>
                <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
                <img src={parts} className="w-1/2 absolute top-1/2 right-10 border-8 border-white rounded-lg shadow-2xl" />
                </div>
                <div className='pl-20 lg:w-1/2 space-y-6 '>
                    <h1 className="text-3xl text-[#FF3811] font-bold">About Us</h1>
                    <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                    <p>
                    the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
                    </p>
                    <button className='btn bg-[#fe3811] text-white mr-5'>Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;