import React from 'react';
import { AiOutlineArrowRight } from "react-icons/ai";

const Service = ({ service }) => {
    const { img, title, price } = service
    return (
        <div className="relative flex flex-col text-gray-700 bg-white pt-4 shadow-md w-80 h-72 rounded-xl bg-clip-border">
            <div className="relative  mx-4  overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
                <img className='w-80'
                    src={img}
                    alt="img-blur-shadow"
                    layout="fill"
                />
            </div>
            <div className="p-4">
                <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                    {title}
                </h5>
            </div>
            <div className="p-4 pt-0 text-[#FF3811] flex justify-between font-bold items-center">
                <button className=''>Price: {price}</button>
                <span><AiOutlineArrowRight></AiOutlineArrowRight></span>
            </div>
        </div>
    );
};

export default Service;