import React, { useEffect, useState } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { FaChevronLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useRegisterMutation } from '../../../features/auth/authApi';

const CandidateFrom = () => {
    const [countries, setCountries] = useState([]);
    const { register, handleSubmit, control, reset } = useForm();
    const navigate = useNavigate();
    const term = useWatch({ control, name: "term" });


    const [postUser, { isLoading, isError }] = useRegisterMutation();

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])

    const onSubmit = (data) => {
        postUser({ ...data, role: 'candidate' });
        reset();
    }

    return (
        <div className='mt-20'>
            <div onClick={() => navigate('/register')} className='cursor-pointer w-fit mt-5 flex items-center'>
                <FaChevronLeft />
                <p>back</p>
            </div>

            <div className='flex justify-center items-center overflow-auto p-10'>

                <form className='bg-secondary/20 shadow-lg p-10 rounded-2xl flex flex-wrap gap-3 max-w-3xl justify-between'
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <h1 className='text-center w-full text-2xl'>Candidate</h1>

                    <div className='flex flex-col w-full max-w-xs'>
                        <label className='mb-2' for='firstName'>
                            First Name
                        </label>
                        <input type='text' id='firstName' {...register('firstName')} />
                    </div>

                    <div className='flex flex-col w-full max-w-xs'>
                        <label className='mb-2' for='lastName'>
                            Last Name
                        </label>
                        <input type='text' id='lastName' {...register('lastName')} />
                    </div>

                    <div className='flex flex-col w-full max-w-xs'>
                        <label className='mb-2' for='email'>
                            Email
                        </label>
                        <input type='email' id='email' {...register("email")} />
                    </div>

                    <div className='flex flex-col w-full max-w-xs'>
                        <h1 className="mb-3">Gender</h1>
                        <div className='flex gap-3'>
                            <div >
                                <input type='radio' id='male' {...register('gender')} value='male' />
                                <label className='ml-2 text-lg' for='male'>
                                    Male
                                </label>
                            </div>
                            <div >
                                <input type='radio' id='famile' {...register('gender')} value='famile' />
                                <label className='ml-2 text-lg' for='famile'>
                                    Famile
                                </label>
                            </div>
                            <div >
                                <input type='radio' id='other' {...register('gender')} value='other' />
                                <label className='ml-2 text-lg' for='other'>
                                    Others
                                </label>
                            </div>
                        </div>
                        <hr className='w-full mt-2 bg-black' />
                    </div>

                    <div className='flex flex-col w-full max-w-xs'>
                        <label className='mb-3' for='country'>
                            Country
                        </label>
                        <select {...register("country")} id='country'>
                            {countries
                                .sort((a, b) => a?.name?.common?.localeCompare(b?.name?.common))
                                .map(({ name }) => (
                                    <option value={name.common}>{name.common}</option>
                                ))}
                        </select>
                    </div>
                    <div className='flex flex-col w-full max-w-xs'>
                        <label className='mb-2' for='address'>
                            Street Address
                        </label>
                        <input type='text' {...register("address")} id='address' />
                    </div>
                    <div className='flex flex-col w-full max-w-xs'>
                        <label className='mb-2' for='city'>
                            City
                        </label>
                        <input type='text' id='city' {...register('city')} />

                    </div>
                    <div className='flex flex-col w-full max-w-xs'>
                        <label className='mb-2' for='postcode'>
                            Post Code

                        </label>
                        <input type='postcode' id='postcode' {...register('postcode')} />
                    </div>

                    <div className='flex justify-between items-center w-full mt-3'>

                        <div className='flex w-full max-w-xs'>
                            <input className='mr-3' type='checkbox' {...register('term')} id="terms" />
                            <label for='terms'>I agree trams and Conditions</label>

                        </div>

                        <button disabled={!term} type='submit' className='btn bg-blue-500 p-3 rounded text-white font-bold'>submit</button>

                    </div>



                </form>
            </div>
        </div>
    );
};

export default CandidateFrom;