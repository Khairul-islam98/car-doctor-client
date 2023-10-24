import React, { useEffect, useState } from 'react';
import Product from './Product';

const Products = () => {
    const [products, setProducts] = useState([])

    useEffect(()=>{
        fetch('products.json')
        .then(res=> res.json())
        .then(data => setProducts(data))
    },[])
    
    return (
        <div className='text-center space-y-5'>
            <h5 className='text-[#FF3811] font-bold'>Popular Products</h5>
            <h2 className='text-2xl font-bold'>Browse Our Products</h2>
            <p className='text-[#737373]'>the majority have suffered alteration in some form, by injected humour,<br /> or randomised words which don't look even slightly believable. </p>
            <div className='grid justify-center md:grid-cols-2 lg:grid-cols-3'>
                {
                    products.map((product, idx) => <Product key={idx} product={product}></Product>)
                }
            </div>
        </div>
    );
};

export default Products;