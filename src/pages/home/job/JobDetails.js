import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useGetJobByIdQuery } from '../../../features/job/jobApi';

const JobDetails = () => {
    const { id } = useParams();
    const { data, isLoading, isError } = useGetJobByIdQuery(id);
    console.log(data)

    const { companyName, position } = data?.data || {};

    console.log('hello ')
    return (
        <div>
            <Link to='/job'>hello</Link>
            <h1>Job Details page :::: {companyName}</h1>
            <h1>Job Details page :::: {position}</h1>

        </div>
    );
};

export default JobDetails;