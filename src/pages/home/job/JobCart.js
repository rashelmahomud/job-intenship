import React from 'react';
import { BiHomeAlt } from 'react-icons/bi';
import { CiMoneyBill } from 'react-icons/ci';
import { AiFillPlayCircle } from 'react-icons/ai';
import { BsStopwatch } from 'react-icons/bs';
import { GiDuration } from 'react-icons/gi';
import { AiOutlineRise } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { useGetJobsQuery } from '../../../features/job/jobApi';
import Modal from './Modal';

const JobCart = () => {

    const navigate = useNavigate();
    const { data, isError, isLoading } = useGetJobsQuery();

    return (
        <div className='p-5  max-w-3xl mx-auto rounded'>

            {
                data?.data.map(({ _id, position, duration, companyName, logo, salaryrange }) => <div>
                    <div className='bg-white m-5 p-5'>
                        <button className='border-2 font-semibold p-2 text-xs rounded bg-white flex items-center gap-2'><AiOutlineRise className='font-semibold text-blue-500 text-xl' />  Actively hiring</button>

                        <div className='flex justify-between items-center '>
                            <div><h1 className='text-2xl font-semibold'>{position}</h1>
                                <h3 className='text-xl font-semibold text-gray-400'>{companyName}</h3></div>
                            <img src={logo} alt='logo' className='w-16 h-16' />
                        </div>
                        <div className='flex items-center gap-2'>
                            <BiHomeAlt />
                            <h2 className='flex my-2'> Work From Home</h2>

                        </div>
                        <div className='flex gap-10'>
                            <div>

                                <div className='flex justify-center items-center gap-2'>
                                    <AiFillPlayCircle />
                                    <span> STARTED DATE</span>
                                </div>
                                <p>Emmidietly</p>
                            </div>
                            <div>
                                <div className='flex justify-center items-center gap-2'>
                                    <GiDuration />
                                    <span> DURATION</span>
                                </div>

                                <p>{duration} Months</p>
                            </div>
                            <div>
                                <div className='flex justify-center items-center gap-2'>
                                    <CiMoneyBill />
                                    <span> STIPEND</span>
                                </div>
                                <p>{salaryrange}/month</p>
                            </div>
                        </div>
                        <div className='flex items-center'>
                            <BsStopwatch />
                            <span className='p-2'>Today</span>
                        </div>

                        <p className='border my-5'></p>

                        <div className='flex gap-5 flex-row-reverse '>

                            {/* <button className='border p-2 px-4 rounded bg-blue-500 text-white font-semibold'>Apply Now</button> */}
                            <button className='border p-2 px-4 rounded bg-blue-500 text-white font-semibold'><Modal data={data}>Apply Now</Modal></button> 

                            <button onClick={() => navigate(`/jobDetails/${_id}`)} className="cursor-pointer p-2 text-black-600 font-semibold">View Details</button>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default JobCart;