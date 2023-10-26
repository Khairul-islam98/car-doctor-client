import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import CartRow from './CartRow';
import Swal from 'sweetalert2';

const CartDetails = () => {
    const { user } = useContext(AuthContext)
    const [orders, setOrders] = useState([])
    const url = `http://localhost:5001/orders?email=${user.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setOrders(data)
            })
    }, [])
    const handleRemove = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5001/orders/${id}`,{
                    method: 'DELETE',
                })
                .then(res => res.json())
                .then(data => {
                    if(data.deletedCount > 0) {
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                          )
                          const remaining = orders.filter(order => order._id !== id)
                          setOrders(remaining)
                    }
                })
            }
          })
    
    }
    const handleOrderConfirm = id => {
        fetch(`http://localhost:5001/orders/${id}`,{
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({status: 'confirm'})
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0) {
                const remaining = orders.filter(order => order._id !== id);
                const updated = orders.find(order => order._id === id)
                updated.status = 'confirm'
                const newOrders = [updated, ...remaining];
                setOrders(newOrders)
            }
        })
    }
    return (
        <div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <tbody>
                        {
                            orders.map(order => <CartRow key={order._id} order={order}handleRemove={handleRemove} handleOrderConfirm={handleOrderConfirm}></CartRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CartDetails;