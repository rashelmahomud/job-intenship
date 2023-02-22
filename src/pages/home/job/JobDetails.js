import React from 'react';
import { BiHomeAlt } from 'react-icons/bi';
import { CiMoneyBill } from 'react-icons/ci';
import { AiFillPlayCircle } from 'react-icons/ai';
import { BsStopwatch } from 'react-icons/bs';
import { GiDuration } from 'react-icons/gi';
import { AiOutlineRise } from 'react-icons/ai';
import { RiMapPinRangeLine } from 'react-icons/ri';
import { BiShare } from 'react-icons/bi';
import { AiOutlineFile } from 'react-icons/ai';
import { CiShare1 } from 'react-icons/ci';
import { RiUserSettingsLine } from 'react-icons/ri';
import { RiChatNewLine } from 'react-icons/ri';
import { CgEditHighlight } from 'react-icons/cg';

import { Link, useParams } from 'react-router-dom';
import { useGetJobByIdQuery } from '../../../features/job/jobApi';

const JobDetails = () => {
    const { id } = useParams();
    const { data, isLoading, isError } = useGetJobByIdQuery(id);
    console.log(data)

    const { companyName, position, duration, salaryrange, logo, overview } = data?.data || {};

    console.log('hello ')
    return (
        <div>
            <Link className='border-2 font-semibold p-2 text-xs rounded bg-white w-20 flex items-center gap-2' to='/job'><AiOutlineRise className='font-semibold text-blue-500 text-xl' />Back</Link>
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

                <div className='flex justify-between'>

                    <p className='flex items-center ' > <RiMapPinRangeLine className='text-orange-500' />Be an early applicant</p>
                    <div className='flex gap-5 text-2xl'>
                        <AiOutlineFile />
                        <BiShare />
                    </div>
                </div>
                <p className='border my-5'></p>
                <div>
                    <h1 className='font-bold text-xl'>About Kylo Apps</h1>
                    <Link className='text-blue-400 flex items-center gap-2 text-xl'>website<CiShare1 /></Link>
                    <p className='my-2'>{overview}</p>
                </div>
                <div className='border p-5 my-3'>
                    <h3 className='font-bold mb-2'>Activity on Internshala</h3>
                    <div className='flex gap-5'>
                        <p className='flex gap-2 items-center'><RiUserSettingsLine />Hiring since October 2022</p>
                        <p className='flex gap-2 items-center'><RiChatNewLine />13 opportunities posted</p>
                        <p className='flex gap-2 items-center'><CgEditHighlight /> 2 candidates hired</p>
                    </div>
                </div>
                <div>
                    <div className='my-3 mt-5 '>
                        <h4 className='font-bold text-xl'>About the work from home job/internship</h4>
                        <p className='font-semibold'>Selected intern's day-to-day responsibilities include:</p>
                    </div>
                    <div>
                        <ul>
                            <li>1. Build pixel-perfect, smooth UIs for mobile platforms</li>
                            <li>2. Leverage native APIs for deep integrations</li>
                            <li>3. Write well-documented, clean JavaScript code</li>
                            <li>4. Have firm knowledge of state management libraries to manage the state of the app</li>
                            <li>5. Write fully structured scalable code and make it responsive</li>
                        </ul>
                    </div>
                    <p className='font-xl my-10'>Who can apply:</p>
                    <div>
                        <ul>
                            <li>1. Should be able to deal with APIs and basic crud operations with React native</li>
                            <li>2. Knowledge of functional or object-oriented programming</li>
                            <li>3. Should have experience in developing mobile applications</li>
                            <li>4. Should have experience in state management libraries</li>
                            <li>5. Ability to act with integrity, professionalism and confidentiality</li>
                            <li>6. Strong organizational skills and attention to detail</li>
                            <li>7. Ability to cope with a fast-paced business environment and adhere to deadlines</li>
                            <li>8. High level of ownership and a go-getter attitude</li>
                            <li>9. Ability to multitask and adapt to changes</li>
                        </ul>
                    </div>
                    <p className='font-xl my-10'>Selection Process:</p>
                    <div>
                        <ul>
                            <li>1. Resume shortlisting</li>
                            <li>2. Telephonic Interview (HR)</li>
                            <li>3. A video interview (Technical)</li>
                        </ul>
                        <p className='my-2'>Earn certifications in these skills</p>
                        <Link className='text-blue-600 font-semibold'>Learn Web Development</Link>
                    </div>

                    <div>
                        <h2 className='text-xl font-bold my-5'>Who can apply</h2>
                        <p>Only those candidates can apply who:</p>

                        <ul>
                            <li>1. are available for the work from home job/internship</li>
                            <li>2. can start the work from home job/internship between 22nd Feb'23 and 29th Mar'23</li>
                            <li>3. are available for duration of 2 months</li>
                            <li> 4. have relevant skills and interests</li>
                        </ul>
                        <div className='my-5 '>
                            <p className='text-xl font-bold'>Perks</p>
                            <button className='mx-3 my-2 bg-gray-200 rounded-full p-2 font-bold text-gray-500'>Certificate</button>
                            <button className='mx-3 my-2 bg-gray-200 rounded-full p-2 font-bold text-gray-500'>Letter of recommendation</button>
                            <button className='mx-3 my-2 bg-gray-200 rounded-full p-2 font-bold text-gray-500'>Flexible work hours</button>
                        </div>
                    </div>


                </div>

            </div>

        </div>
    );
};

export default JobDetails;