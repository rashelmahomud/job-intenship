import React from 'react';
import { Link } from 'react-router-dom';
import employer from '../../../assates/register/employer.jpg';

const Employer = () => {
    return (
        <div>
            <h1 className='text-4xl font-bold my-3'>Employer</h1>
            <Link to='/employerFrom'>
                <img className='w-full rounded-full ' src={employer} alt='employer img' />
            </Link>
        </div>
    );
};

export default Employer;