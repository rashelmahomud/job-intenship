import React from 'react';
import { BsInstagram } from 'react-icons/bs';
import { AiFillLinkedin } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { BsArrowBarRight } from 'react-icons/bs';

const Footer = () => {
    return (
        <div className=' bg-zinc-800 text-white lg:py-10 lg:px-32 border-t-4 border-indigo-500'>
            <div className='grid lg:grid-cols-2 border-t-2 border-white '>
                <div className='grid lg:grid-cols-3 mt-10'>
                    <div className='leading-8'>
                        <ul>
                            <li>About us</li>
                            <li>We're hiring</li>
                            <li>Hire interns for your company</li>
                        </ul>
                    </div>
                    <div className='leading-8'>
                        <ul>
                            <li>Team Diary</li>
                            <li>Blogs</li>
                            <li>Our Services</li>
                        </ul>
                    </div>

                    <div className='leading-8'>
                        <ul>
                            <li> Terms & Conditions</li>
                            <li>Privacy</li>
                            <li>Contact us</li>
                        </ul>
                    </div>


                </div>
                <div></div>
            </div>
            <div className='flex flex-row mt-10'>
                <div className='basis-1/4'>
                    <Link><button className='border p-3 font-semibold flex'><BsArrowBarRight className='text-2xl font-bold' />Get Android App</button></Link>
                </div>
                <div className='flex basis-1/4 gap-5 text-2xl cursor-pointer'>
                    <BsInstagram />
                    <AiFillLinkedin />
                    <BsFacebook />
                    <BsTwitter />
                </div>
                <div className='basis-1/2 text-end'>
                    <p>© Copyright 2023 job-intership</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;