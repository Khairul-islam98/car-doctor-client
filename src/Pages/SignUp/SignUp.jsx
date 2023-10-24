import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import img from '../../assets/images/login/login.svg'
import { Link } from 'react-router-dom';

const SignUp = () => {
    const { createUser } = useContext(AuthContext)

    const handleSignUp = e => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value
        const user = {email, password, name}
        console.log(name, email, password);

        createUser(email, password)
        .then(result => {
            console.log(result.user);
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
                <div className="card flex-shrink-0 w-full max-w-sm ml-10  border">
                    <h2 className='text-center font-semibold text-2xl mt-6'>sign Up</h2>
                    <form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                        </div>
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
                            <input className='btn bg-[#FF3811] text-white' type="submit" value="Sign Up" />
                        </div>
                        <p>Already have account? <Link className='text-red-500' to='/login'>Login</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;