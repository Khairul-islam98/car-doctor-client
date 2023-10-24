import React from 'react';
import team1 from '../../../assets/images/team/1.jpg'
import team2 from '../../../assets/images/team/2.jpg'
import team3 from '../../../assets/images/team/3.jpg'
import { FaFacebook, FaSquareTwitter, FaLinkedin, FaInstagram } from "react-icons/fa6";

const Teams = () => {
    return (
        <div className='text-center space-y-5 mt-5'>
            <h5 className='text-[#FF3811] font-bold'>Team</h5>
            <h2 className='text-2xl font-bold'>Meet Our Team</h2>
            <p className='text-[#737373]'>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable.  </p>
            <div className='grid justify-center md:grid-cols-2 lg:grid-cols-3'>
                <div className="relative flex flex-col text-gray-700 bg-[#FFF] pt-4 border w-80 h-72 rounded-xl mb-10">
                    <div className="relative  mx-4  overflow-hidden text-white  rounded-xl bg-[#F3F3F3]">
                        <img src={team1} alt="" />
                    </div>
                    <div className="mt-2">
                        <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                            Car Engine Plug
                        </h5>
                        <p className='text-[#737373] text-base'>Engine Expert</p>
                        <div className='flex justify-center py-4 gap-3 text-3xl text-red-500'>
                            <span><FaFacebook></FaFacebook></span>
                            <span><FaSquareTwitter></FaSquareTwitter></span>
                            <span><FaLinkedin></FaLinkedin></span>
                            <span><FaInstagram></FaInstagram></span>
                        </div>
                    </div>
                    <div className="lg:absolute flex justify-start transform -translate-y-1/2  bottom-36 -left-7">
                        <a href="#" className="btn btn-circle bg-[#F3F3F3">❮</a>
                    </div>
                </div>
                <div className="relative flex flex-col text-gray-700 bg-[#FFF] pt-4 border w-80 h-72 rounded-xl mb-10">
                    <div className="relative  mx-4  overflow-hidden text-white  rounded-xl bg-[#F3F3F3]">
                        <img src={team2} alt="" />
                    </div>
                    <div className="mt-2">
                        <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                            Car Engine Plug
                        </h5>
                        <p className='text-[#737373] text-base'>Engine Expert</p>
                        <div className='flex justify-center py-4 gap-3 text-3xl text-red-500'>
                            <span><FaFacebook></FaFacebook></span>
                            <span><FaSquareTwitter></FaSquareTwitter></span>
                            <span><FaLinkedin></FaLinkedin></span>
                            <span><FaInstagram></FaInstagram></span>
                        </div>
                    </div>
                </div>
                <div className="relative flex  flex-col text-gray-700 bg-[#FFF] pt-4 border w-80 h-72 rounded-xl mb-10">
                    <div className="relative mx-4  overflow-hidden text-white  rounded-xl bg-[#F3F3F3]">
                        <img src={team3} alt="" className='w-full' />
                    </div>
                    <div className="mt-2">
                        <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                            Car Engine Plug
                        </h5>
                        <p className='text-[#737373] text-base'>Engine Expert</p>
                        <div className='flex justify-center py-4 gap-3 text-3xl text-red-500'>
                            <span><FaFacebook></FaFacebook></span>
                            <span><FaSquareTwitter></FaSquareTwitter></span>
                            <span><FaLinkedin></FaLinkedin></span>
                            <span><FaInstagram></FaInstagram></span>
                        </div>
                    </div>
                    <div className="lg:absolute flex justify-end transform -translate-y-1/2 -right-6 bottom-36">
                        <a href="#" className="btn btn-circle bg-[#fe3811] text-white ">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Teams;