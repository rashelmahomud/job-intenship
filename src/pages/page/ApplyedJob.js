import React from 'react';
import { useApplyedJobQuery } from '../../features/job/jobApi';

const ApplyedJob = () => {

    const { applyJob } = useApplyedJobQuery();
    console.log(applyJob)
    return (
        <div>
            hello
        </div>
    );
};

export default ApplyedJob;