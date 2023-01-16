import React from 'react';
import Candidate from './candidate/Candidate';
import Employer from './employer/Employer';

const Register = () => {
    return (
        <div className='mt-20'>
            <div className='grid lg:grid-cols-2 grid-cols-1 gap-10 text-center'>
                <div>
                    <Candidate />
                </div>

                <div>
                    <Employer />
                </div>
            </div>
        </div>
    );
};

export default Register;