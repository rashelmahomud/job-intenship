import React from 'react';
import { useForm } from 'react-hook-form';

const SearchBox = () => {
    const { handleSubmit, reset, register } = useForm();
    const employerRange = ['fesher (less then 1 year)', '1 year', '2 year', '3 year', '4 year', '4 year', '5 year', '6year'];
    const onSubmit = (data) => {
        console.log(data);
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='w-1/2 mx-auto flex p-5 shadow rounded-full bg-white gap-10'>
                    <div className='rounded'>
                        <input className='p-3' type='email' placeholder='Enter Skill/ designations'{...register("email")} id="email" />
                    </div>
                    <div className=''>
                        <select className='p-3' id='employerRang' {...register('employerRang')}>
                            {employerRange.sort((a, b) => a.localeCompare(b)).map((catagory) => (
                                <option key={catagory} value={catagory}>{catagory}</option>
                            ))}
                        </select>
                    </div>
                    <div className='flex'>
                        <input type='location' className=' border-0' placeholder='Search your locations'  {...register('location')} />
                        <button className='bg-blue-500 p-3 rounded-full font-semibold text-white'>Search</button>
                    </div>
                </div>



            </form>
        </div>
    );
};

export default SearchBox;