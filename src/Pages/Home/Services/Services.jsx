import React, { useEffect, useState } from 'react';
import Service from './Service';

const Services = () => {
    const [services, setServices] = useState([])
    const [asc, setAsc] = useState(true)
    const [search, setSearch] = useState('')


    useEffect(() => {
        fetch(`http://localhost:5001/services?sort=${asc ? 'asc' : 'desc'}&search=${search}`)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [asc, search])
    const handlesearch = e => {
        e.preventDefault();
        const searchfield = e.target.search.value
        console.log(searchfield);
        setSearch(searchfield)
    }
    return (
        <div>
            <div className='text-center space-y-4'>
                <h4 className='text-[#FF3811] font-bold'>Service</h4>
                <h2 className='text-3xl font-bold'>Our Service Area</h2>
                <p className='text-sm text-[#737373]'>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
                <form onSubmit={handlesearch} >
                    <input type="text" className='input' name='search' />
                    <input type="submit" className='btn' value="search" />
                </form>
                <button onClick={() => setAsc(!asc)} className='btn btn-primary'>{asc ? 'price: high to low' : 'price: low to high'}</button>
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