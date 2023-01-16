import React from 'react';
import Button from '../btn/Button';
import banner from '../../../assates/d.png';
const Banner = () => {
    return (
        <div className='grid lg:grid-cols-2 md:grid-cols-1'>
            <div className='mt-10 p-3'>

                <h1 className='text-7xl font-bold text-blue-400'>Job <span className='animate-pulse text-red-800'>&</span></h1>
                <h1 className='text-8xl font-semibold'>Interns<span className='text-violet-800'>hi</span>p</h1>
                <p className='my-5 text-justify font-serif '>Both our Geneva and DC offices welcome talented and motivated individuals to join our internship programme, designed to advance your career and give you an opportunity to contribute to Gavi’s mission. We are committed to diversity and encourage applications from all qualified candidates.</p>


                <div className='mt-20'>

                    <Button>Get Started</Button>
                </div>


            </div>

            <div>
                <div>
                    <img className='w-full' src={banner} alt='' />
                </div>
            </div>

        </div>
    );
};

export default Banner;