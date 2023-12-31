import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import img from '../../assets/images/login/login.svg'
import { Link } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const { signInUser } = useContext(AuthContext)

    const handleLogin = e => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value

        signInUser(email, password)
            .then(result => {
                const loggedInUser = result.user
                const user = { email }

                axios.post('http://localhost:5001/jwt', user, {withCredentials: true})
                .then(res => {
                    console.log(res.data)
                    if(res.data.success) {
                        
                    }
                })

            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <div className="hero min-h-screen flex items-center justify-center">
            <div className="hero-content">
                <div >
                    <img className='' src={img} alt="" />
                </div>
                <div className="card flex-shrink-0  w-full max-w-sm border">
                    <h2 className='text-center font-semibold text-2xl mt-6'>Login</h2>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className='btn bg-[#FF3811] text-white' type="submit" value="Sign In" />
                        </div>
                        <p>Don't have account? <Link className='text-red-500' to='/signup'>Sign Up</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;