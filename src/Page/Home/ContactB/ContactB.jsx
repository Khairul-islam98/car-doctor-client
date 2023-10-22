import React from 'react';
import { FcCalendar, FcPhone } from "react-icons/fc";
import { BiSolidMapPin } from "react-icons/bi";

const ContactB = () => {
    return (
        <div className='bg-[#151515] h-60 flex items-center justify-center rounded-xl my-14'>
            <div className='flex gap-24 text-white'>
                <div className='flex gap-3'>
                    <p className='text-5xl'><FcCalendar></FcCalendar></p>
                    <div>
                        <h4 className='text-sm'>We are open monday-friday</h4>
                        <h2 className='text-xl font-bold'>7:00 am - 9:00 pm</h2>
                    </div>
                </div>
                <div className='flex gap-2'>
                    <p className='text-5xl'><FcPhone></FcPhone></p>
                    <div>
                        <h4 className='text-sm'>Have a question?</h4>
                        <h2 className='text-xl font-bold'>+2546 251 2658</h2>
                    </div>
                </div>
                <div className='flex gap-3'>
                    <p className='text-red-500 text-5xl'><BiSolidMapPin></BiSolidMapPin></p>
                    <div>
                        <h4 className='text-sm'>Need a repair? our address</h4>
                        <h2 className='text-xl font-bold'>Liza Street, New York</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactB;