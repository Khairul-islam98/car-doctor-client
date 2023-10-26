import React, { useEffect, useState } from 'react';
import Service from './Service';

const Services = () => {
    const [services, setServices] = useState([])

    useEffect(()=> {
        fetch('http://localhost:5001/services')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div>
            <div className='text-center space-y-4'>
            <h4 className='text-[#FF3811] font-bold'>Service</h4>
            <h2 className='text-3xl font-bold'>Our Service Area</h2>
            <p className='text-sm text-[#737373]'>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>
            <div className='grid  justify-center md:grid-cols-2 lg:grid-cols-3 py-10 space-y-5'>
                {
                    services.map(service => <Service key={service._id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;