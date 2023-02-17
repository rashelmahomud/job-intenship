import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { GoSettings } from "react-icons/go";
import { GiMultipleTargets } from "react-icons/gi";
import { MdPreview } from "react-icons/md";
import { AiOutlineBorderInner } from "react-icons/ai";
import { AiFillFileAdd } from "react-icons/ai";
import { BiMessageSquareAdd } from "react-icons/bi";
import { SiAboutdotme } from "react-icons/si";
import { CgProfile } from "react-icons/cg";


const Dashboard = () => {

    return (
        <div class="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content">
                <div className='flex lg:p-5'>
                    <h2 className='text-5xl font-bold text-secondary'>Dashboard</h2>
                    <div className='navbar-end'>
                        <label tabindex="0" for="my-drawer-2" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                    </div>
                </div>

                <Outlet></Outlet>


            </div>
            <div class="drawer-side">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-gray-700 text-base-100">
                    <li><Link to='profile'><CgProfile className='text-gray-300 ' />Profile</Link></li>
                    <li><Link to='about'><SiAboutdotme className='text-gray-300 ' />About</Link></li>
                    <li><Link><BiMessageSquareAdd className='text-blue-500' /> Job</Link></li>
                    <li><Link><AiFillFileAdd className='text-gray-300 ' /> Add Job</Link></li>
                    <li><Link><AiOutlineBorderInner className='text-gray-300 ' /> Order</Link></li>
                    <li><Link><MdPreview className='text-gray-300 ' /> Reviews</Link></li>
                    <li><Link><GiMultipleTargets className='text-gray-200 ' /> Grattings</Link></li>
                    <li> <Link><GoSettings className='text-gray-200 ' /> Setting</Link></li>
                    <li> <Link to='/'><GoSettings className='text-gray-200 ' />Back</Link></li>



                </ul>

            </div>
        </div>
    );
};

export default Dashboard;