import React, { useEffect, useState } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import signUP from '../assates/login/login (2).jpg'
import { createUser } from '../features/auth/authSlice';

const SignUp = () => {
    const { register, handleSubmit, reset, control } = useForm();
    const password = useWatch({ control, name: "password" });
    const confirmPassword = useWatch({ control, name: "confirmPassword" });
    const navigate = useNavigate();
    const [disabled, setDisabled] = useState(true);

    const dispatch = useDispatch();
    useEffect(() => {
        if (
          password !== undefined &&
          password !== "" &&
          confirmPassword !== undefined &&
          confirmPassword !== "" &&
          password === confirmPassword
        ) {
          setDisabled(false);
        } else {
          setDisabled(true);
        }
      }, [password, confirmPassword]);




    const onSubmit = (data) => {
        dispatch(createUser({ email: data.email, password: data.password }))
        reset();
        navigate('/');
    }
    return (
        <div className='flex h-screen items-center'>
            <div className='w-1/3'>
                <img src={signUP} className='w-full' alt='' />
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
                                <input type='email' name='email' className='bg-gray-50 p-2' {...register("email")} id="email" />
                            </div>
                            <div className='flex flex-col '>
                                <label htmlFor='password' className='ml-5'>
                                    Password
                                </label>
                                <input type='password' name='password' id="password" className='bg-gray-50 p-2'  {...register("password")} />
                            </div>

                            <div className='flex flex-col items-start'>
                                <label htmlFor='confirm-password' className='ml-5'>
                                    Confirm Password
                                </label>
                                <input
                                    type='password'
                                    id='confirm-password'
                                    {...register("confirmPassword")}
                                />
                            </div>

                            <div className='relative !mt-8'>

                                <button
                                    type='submit'
                                    className='font-bold text-white py-3 rounded-full bg-blue-500 w-full disabled:bg-gray-300 disabled:cursor-not-allowed'
                                    disabled={disabled}
                                >
                                    SignUp
                                </button>
                            </div>
                            <div>
                                <p>
                                    Don't have an account?{" "}
                                    <span
                                        className='text-primary hover:underline cursor-pointer'
                                        onClick={() => navigate("/login")}

                                    >
                                        Login
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

export default SignUp;