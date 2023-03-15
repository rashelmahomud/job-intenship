import React from 'react';
import { useApplyedJobQuery } from '../../features/job/jobApi';

const ApplyedJob = () => {

    const { data } = useApplyedJobQuery();

    return (
        <div>
            {
                data?.map(({ email, coverLetter }) => <div className='grid grid-cols-2 gap-10 my-20 mx-auto'>
                    <p className='bg-gray-200 p-3'>{coverLetter}</p>
                    <h3>{email}</h3>
                </div>)
            }
        </div>
    );
};

export default ApplyedJob;