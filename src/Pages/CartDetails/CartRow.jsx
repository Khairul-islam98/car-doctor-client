import React from 'react';

const CartRow = ({ order, handleRemove, handleOrderConfirm }) => {
    const { _id, service, img, price, date, status } = order;
    return (
        <tr>
            <th>
                <button onClick={() => handleRemove(_id)} className="btn btn-circle btn-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="w-32 h-32 rounded-xl">
                            <img src={img} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{service}</div>
                        <div className="text-sm opacity-50">United States</div>
                    </div>
                </div>
            </td>
            <td>
                ${price}
            </td>
            <td>{date}</td>
            <th>
                {
                    status === 'confirm' ? <span className='btn btn-outline'>Approved</span>
                    : <button onClick={()=> handleOrderConfirm(_id)} className="btn btn-ghost btn-xs">Pending</button>
                }
            </th>
        </tr>
    );
};

export default CartRow;