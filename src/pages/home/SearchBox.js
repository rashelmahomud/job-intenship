import React from 'react';
import { useForm } from 'react-hook-form';
import { BiSearch } from 'react-icons/bi';

const SearchBox = () => {
    const { handleSubmit, reset, register } = useForm();
    const employerRange = ['fesher (less then 1 year)', '1 year', '2 year', '3 year', '4 year', '4 year', '5 year', '6year'];
    const onSubmit = (data) => {
        console.log(data);
    }
    return (
        <div className='bg-gray-700 lg:p-10 p-3 rounded'>
            <div className=' text-center my-5'>
                <h1 className='lg:text-5xl text-3xl font-semibold my-3 text-white'>Find your dream job now</h1>
                <p className='text-2xl text-semibold text-gray-300'>5 lakh+ jobs for you to explore</p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 lg:w-1/2 mx-auto p-5 shadow rounded lg:rounded-full bg-white gap-10'>
                    <div className='rounded flex items-center justify-center'>
                        <BiSearch className='text-xl' />
                        <input className='border-r-4' type='name' placeholder='Enter Skill/ designations'{...register("name")} id="name" />
                    </div>
                    <div className='w-1/3'>
                        <select className='p-3' id='employerRang' {...register('employerRang')}>
                            {employerRange.sort((a, b) => a.localeCompare(b)).map((catagory) => (
                                <option key={catagory} value={catagory}>{catagory}</option>
                            ))}
                        </select>
                    </div>
                    <div className='flex'>
                        <input type='location' className=' border-0' placeholder='Enter Location'  {...register('location')} />
                        <button className='bg-blue-500 p-3 rounded-full font-semibold text-white'>Search</button>
                    </div>
                </div>



            </form>
        </div>
    );
};

export default SearchBox;