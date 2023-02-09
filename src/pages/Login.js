import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import login from '../assates/login/login (1).jpg'
import { loginUser } from '../features/auth/authSlice';

const Login = () => {

    const { register, handleSubmit, reset } = useForm();
    const navigate = useNavigate();
    const dispatch = useDispatch();


    const onSubmit = ({ email, password }) => {
        dispatch(loginUser({ email, password }));
        navigate('/');
    }
    return (
        <div className='flex h-screen items-center'>
            <div className='w-1/3'>
                <img src={login} className='w-full' alt='' />
            </div>

            <div className='mt-20 w-1/3 grid place-items-center'>

                <div className='bg-[#FFFAF4] rounded-lg grid place-items-center  p-10'>
                    <h1 className='mb-10 font-medium text-2xl'>Login</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='space-y-3'>
                            <div className='flex flex-col rounded'>
                                <label htmlFor='email' className='ml-5'>
                                    Email
                                </label>
                                <input type='email' className='bg-gray-50 p-2' {...register("email")} id="email" />
                            </div>
                            <div className='flex flex-col '>
                                <label htmlFor='password' className='ml-5'>
                                    Password
                                </label>
                                <input type='password' className='bg-gray-50 p-2' id="password" {...register("password")} />
                            </div>
                            <div className='relative !mt-8'>

                                <button
                                    type='submit'
                                    className='font-bold text-white py-3 rounded-full bg-blue-500 w-full'
                                >
                                    Login
                                </button>
                            </div>
                            <div>
                                <p>
                                    Don't have an account?{" "}
                                    <span
                                        className='text-primary hover:underline cursor-pointer'
                                        onClick={() => navigate("/signup")}
                                    >
                                        Sign up
                                    </span>
                                </p>
                            </div>
                            <button

                                type='button'
                                className='font-bold text-white py-3 rounded-full bg-blue-500 w-full'
                            >
                                Login With Google
                            </button>

                        </div>
                    </form>

                </div>


            </div>
        </div>
    );
};

export default Login;