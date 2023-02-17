import React from 'react';
import { GoSettings } from "react-icons/go";
import { GiMultipleTargets } from "react-icons/gi";
import { MdPreview } from "react-icons/md";
import { AiOutlineBorderInner } from "react-icons/ai";
import { AiFillFileAdd } from "react-icons/ai";
import { BiMessageSquareAdd } from "react-icons/bi";
import { SiAboutdotme } from "react-icons/si";
import { CgProfile } from "react-icons/cg";
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="drawer drawer-mobile drawer-end bg-gray-800">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 bg-gray-700 text-gray-300 text-base-content text-xl font-semibold">
                    <li><Link to='profile'><CgProfile className='text-gray-300 ' />Profile</Link></li>
                    <li><Link><SiAboutdotme className='text-gray-300 '/>About</Link></li>
                    <li><Link><BiMessageSquareAdd className='text-blue-500'/> Job</Link></li>
                    <li><Link><AiFillFileAdd className='text-gray-300 '/> Add Job</Link></li>
                    <li><Link><AiOutlineBorderInner className='text-gray-300 ' /> Order</Link></li>
                    <li><Link><MdPreview className='text-gray-300 '/> Reviews</Link></li>
                    <li><Link><GiMultipleTargets className='text-gray-200 '/> Grattings</Link></li>
                    <li> <Link><GoSettings className='text-gray-200 '/> Setting</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;

