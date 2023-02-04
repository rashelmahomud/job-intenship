import React from 'react';
import { Link } from 'react-router-dom';

const Carrer = ({ carer }) => {
    return (
        <div className='relative'>
            <div className='hover:border-4 border-teal-200'>
                <div>
                    <img src={carer.img} alt='' />
                </div>
                <div className='absolute text-center bg-gray-100 opacity-0 hover:opacity-100 lg:px-10 p-5 bottom-0 '>
                    <h1 className='font-semibold text-gray-500'>{carer.name}</h1>
                    <h3 className='text-xl font-semibold my-3'>{carer.title}</h3>
                    <Link to='/' className='text-blue-600'>Reacd More</Link>
                </div>

            </div>

        </div>
    );
};

export default Carrer;