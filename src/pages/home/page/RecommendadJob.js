import React from 'react';
import reactlogo from '../../../assates/ddd.png';
const RecommendadJob = () => {

    const jobs = [

        { name: 'Frontend Developer', location: 'New-worrk' },
        { name: 'Senior Frontend Developer', location: 'New-sikago' },
        { name: 'MERN Frontend Developer', location: 'New-singapur' },
        { name: 'Experienced Frontend Developer', location: 'New-Dubai', city: 'Dhaka' }

    ]


    return (
        <div>
            <div className='text-center my-10'>
                <h3>BASED ON YOUR LAST VISIT</h3>
                <h1 className='text-3xl font-semibold'>RECOMMENDED JOBS</h1>
            </div>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-10 gap-5 '>
                {
                    jobs.map(job => <div key={job.name} className="mx-auto lg:p-8 p-3 border-2 rounded hover:shadow cursor-pointer flex" >
                        <div className='w-16 h-16 m-2 animate-spin '> 
                            <img src={reactlogo} alt='logo react' />
                        </div>
                        <div>
                            <h2 className='font-semibold'>{job.name}</h2>
                            <span>{job.location}</span><br />
                        </div>

                    </div>)
                }
            </div>

        </div>
    );
};

export default RecommendadJob;