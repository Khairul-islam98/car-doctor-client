import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.svg';
import { AuthContext } from '../../../Provider/AuthProvider';

const NavBar = () => {

    const {user, logOut} = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
        .then(()=> {})
        .catch(err => console.log(err))
    }

    const navLinks = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link>About</Link></li>
        <li><Link>Service</Link></li>
        <li><Link>Blog</Link></li>
        <li><Link>Contact</Link></li>
        {
            user?.email ? <>
            <li><Link to='/cartdetails'>My Cart</Link></li>
            <li><button onClick={handleLogOut}>Logout</button></li>
            </>
            : <li><Link to='/login'>Login</Link></li>
        }
    </>

    return (
        <div className="navbar bg-base-100 h-24 mb-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl"><img src={logo} alt="" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <button className='btn btn-outline text-[#fe3811]'>Appointment</button>
            </div>
        </div>
    );
};

export default NavBar;