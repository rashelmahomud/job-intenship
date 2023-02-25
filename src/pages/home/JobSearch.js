import React from 'react';
import phone from '../../assates/mobile.png';
import { ImMobile } from 'react-icons/im';
import { FaSearchLocation } from 'react-icons/fa';
import { MdOutlineNotificationsOff } from 'react-icons/md';
const JobSearch = () => {
    return (
        <div>
            <div className='text-center my-10'>
                <h3 className='text-2xl font-semibold'>DOWNLOAD OUR MOBILE APP</h3>
                <h1 className='text-5xl font-semibold capitalize'>Search for jobs on the go </h1>
            </div>
            <div className='grid lg:grid-cols-2 grid-cols-1'>

                <div className='mx-auto'>
                    <img src={phone} alt='' />
                </div>
                <div className='lg:pr-20 lg:py-10 mx-auto'>
                    <div className='flex'>
                        <span className='flex items-center justify-center mr-10 text-3xl '><ImMobile className='bg-red-300 w-16 h-16 rounded-full p-3' /></span>
                        <div>
                            <h2 className='text-xl font-semibold my-2'>AR JOB SEARCH</h2>
                            <p className='text-gray-500'>You can use Augmented Reality to enhance your job search experience. See exactly where jobs are, and quickly apply.</p>
                        </div>
                    </div>
                    <div className='flex my-5'>
                        <span className='flex items-center justify-center mr-10 text-3xl'><FaSearchLocation className='bg-red-300 w-16 h-16 rounded-full p-3' /></span>
                        <div>
                            <h2 className='text-xl font-semibold mb-2'>SEARCH ON THE GO</h2>
                            <p className='text-gray-500'>Now you can easily search for jobs without having to sit at your computer. You can quickly apply to jobs, build a resume, and more all from your phone.</p>
                        </div>
                    </div>
                    <div className='flex items-center justify-center'>
                        <span className='flex items-center justify-center mr-10 text-3xl '><MdOutlineNotificationsOff className='bg-red-300 w-16 h-16 rounded-full p-3' /></span>
                        <div>
                            <h2 className='text-xl font-semibold mb-2'>INSTANT NOTIFICATIONS</h2>
                            <p className='text-gray-500'>You'll receive push notifications when your resume is viewed, or when new jobs appear in your most recent search. Making it easy for you to jump right back into your job search.</p>
                        </div>
                    </div>

                </div>
                <div>
                    
                </div>
            </div>
        </div>
    );
};

export default JobSearch;