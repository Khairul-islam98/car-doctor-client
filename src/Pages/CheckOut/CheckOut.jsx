import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const CheckOut = () => {
    const service = useLoaderData()
    const { _id, title, price, img } = service
    const {user} = useContext(AuthContext)


    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = user?.email;
        const message = form.message.value
        const order = {
            customerName: name,
            email,
            img,
            date,
            message,
            service: title,
            service_id: _id,
            price: price,
        }
        console.log(order);
        fetch('http://localhost:5001/orders', {
            method: 'POST',
            headers:{
                'content-type': 'application/json',
            },
            body: JSON.stringify(order),

        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
        })
    }
    return (
        <div>
            <h2>CheckOut {price}</h2>
            <div className="">
                <div className="card">
                    <form onSubmit={handleSubmit} className="card">
                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-2'>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Name" defaultValue={user?.displayName} name='name' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Date</span>
                                </label>
                                <input type="date" name='date' className="input input-bordered" required />
                            </div>
                        </div>
                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-2'>
                            <div className="form-control w-full ">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="Email" defaultValue={user?.email} className="input input-bordered" required />
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Due Amout</span>
                                </label>
                                <input type="text" name='amout' defaultValue={'$ ' + price} className="input input-bordered" required />
                            </div>
                        </div>
                        <div className='mt-3 space-y-3'>
                            <lebel className="lebel-text">
                                <span className='lebel-text'>message</span>
                            </lebel>
                            <textarea
                                id="message"
                                name="message"
                                className=" p-3  border rounded-md h-56 w-full resize-none"
                                placeholder="message"
                            ></textarea>
                        </div>
                        <div className="form-control mt-6">
                            <button type='submit' className="btn btn-primary">Order Confirm</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;