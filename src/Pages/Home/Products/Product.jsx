import React from 'react';

const Product = ({product}) => {
    const{img, name, price} = product;
    return (
        <div className="relative flex flex-col text-gray-700 bg-[#FFF] pt-4 border w-80 h-72 rounded-xl mb-10">
            <div className="relative  mx-4  overflow-hidden text-white  rounded-xl bg-[#F3F3F3]">
                <img className='w-80'
                    src={img}
                    alt="img-blur-shadow"
                    layout="fill"
                />
            </div>
            <div className="mt-2">
                <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                    {name}
                </h5>
            </div>
            <div className="p-4 pt-0 text-[#FF3811] font-bold items-center">
                <button className=''>Price: {price}</button>
            </div>
        </div>
    );
};

export default Product;