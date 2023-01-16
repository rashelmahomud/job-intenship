import React from 'react';
import { Link } from 'react-router-dom';
import candidate from '../../../assates/register/candidate.jpg';
const Candidate = () => {
    return (
        <div>

            <h1 className='text-4xl font-bold my-3'> Candidate</h1>
            <Link to='/candidateFrom'>
                <img className='w-full rounded-full animate-pulse' src={candidate} alt='candidate img' />
            </Link>
        </div>
    );
};

export default Candidate;