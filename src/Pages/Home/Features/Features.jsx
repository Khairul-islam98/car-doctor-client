import React from 'react';
import team from '../../../assets/icons/group.svg'
import time from '../../../assets/icons/time.svg'
import support from '../../../assets/icons/support.svg'
import equipment from '../../../assets/icons/equipment.svg'
import guranty from '../../../assets/icons/guranty.svg'
import deliveryt from '../../../assets/icons/deliveryt.svg'

const Features = () => {
    return (
        <div className='text-center space-y-5 mt-5'>
            <h5 className='text-[#FF3811] font-bold'>Core Features</h5>
            <h2 className='text-2xl font-bold'>Why Choose Us</h2>
            <p className='text-[#737373]'>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable.</p>
            <div className='grid ml-4 font-bold p-4 grid-cols-2 gap-2 md:grid-cols-4 lg:grid-cols-6'>
                <div className='border flex  flex-col items-center  h-36 w-36 transition ease-in-out delay-150 bg-white hover:-translate-y-1 hover:scale-110 hover:bg-[#FF3811] hover:text-white duration-300'>
                    <img src={team} alt="" className='w-20 h-16 mt-4' />
                    <h5>Expert Team</h5>
                </div>
                <div className='border  flex flex-col items-center  h-36 w-36 transition ease-in-out delay-150 bg-white hover:-translate-y-1 hover:scale-110 hover:bg-[#FF3811] hover:text-white duration-300'>
                    <img src={time} alt="" className='w-20 h-16 mt-4 bg-[#FF3811]' />
                    <h5 className=''>Timely Delivery</h5>
                </div>
                <div className='border flex flex-col items-center  h-36 w-36 transition ease-in-out delay-150 bg-white hover:-translate-y-1 hover:scale-110 hover:bg-[#FF3811] hover:text-white duration-300'>
                    <img src={support} alt="" className='w-20 h-16 mt-4' />
                    <h5>24/7 Support</h5>
                </div>
                <div className='border flex flex-col items-center  h-36 w-36 transition ease-in-out delay-150 bg-white hover:-translate-y-1 hover:scale-110 hover:bg-[#FF3811] hover:text-white duration-300'>
                    <img src={equipment} alt="" className='w-20 h-16 mt-4' />
                    <h5>Best Equipment</h5>
                </div>
                <div className='border flex flex-col items-center  h-36 w-36 transition ease-in-out delay-150 bg-white hover:-translate-y-1 hover:scale-110 hover:bg-[#FF3811] hover:text-white duration-300'>
                    <img src={guranty} alt="" className='w-20 h-16 mt-4' />
                    <h5>100% Guranty</h5>
                </div>
                <div className='border flex flex-col items-center  h-36 w-36 transition ease-in-out delay-150 bg-white hover:-translate-y-1 hover:scale-110 hover:bg-[#FF3811] hover:text-white duration-300'>
                    <img src={deliveryt} alt="" className='w-20 h-16 mt-4' />
                    <h5>Timely Delivery</h5>
                </div>
            </div>
        </div>
    );
};

export default Features;