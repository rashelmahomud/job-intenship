import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useGetJobQuery } from '../../../features/job/jobApi';

const JobCart = () => {
    const navigate = useNavigate();
    const { data, isError, isLoading } = useGetJobQuery();


    return (
        <div className='p-5'>

            {
                data?.data.map(({ _id, position, companyName, location, employmentType,salaryrange }) => <div>
                    <div>

                        <h1 className='text-2xl font-semibold'>{position}</h1>
                        <h3 className='text-xl font-semibold text-gray-400'>{companyName}</h3>
                        <h2>Work From Home</h2>
                        <p>{salaryrange}</p>

                    </div>
                </div>)
            }
        </div>
    );
};

export default JobCart;