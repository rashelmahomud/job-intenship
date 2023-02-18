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
import { AiFillBackward } from "react-icons/ai";
import { signOut } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { logOut } from '../../features/auth/authSlice';
import auth from '../../firebase/firebase.config';


const Dashboard = () => {

    const dispatch = useDispatch();

    const handelSignOut = () => {
        signOut(auth).then(() => {
            dispatch(logOut());
        })
    }


    return (
        <div class="drawer drawer-mobile bg-green-50">
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

                <Outlet />


            </div>
            <div class="drawer-side">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <ul class="menu p-5 overflow-y-auto w-60 lg:hover:w-80 bg-gray-700 text-base-100 text-xl">

                    <li><Link to='profile'><CgProfile className='text-orange-400 ' />Profile</Link></li>
                    <li><Link to='about'><SiAboutdotme className='text-orange-400 ' />About</Link></li>
                    <li><Link to='job'><BiMessageSquareAdd className='text-orange-400' /> Job</Link></li>
                    <li><Link to='add-job'><AiFillFileAdd className='text-orange-400 ' /> Add Job</Link></li>
                    <li><Link to='order'><AiOutlineBorderInner className='text-orange-400 ' /> Order</Link></li>
                    <li><Link to='reviews'><MdPreview className='text-orange-400' /> Reviews</Link></li>
                    <li><Link to='gettings'><GiMultipleTargets className='text-orange-400' /> Grattings</Link></li>
                    <li><Link to='setting'><GoSettings className='text-orange-400' /> Setting</Link></li>
                    <li><Link to='/'><AiFillBackward className='text-orange-400' />Back</Link></li>
                    <li><Link onClick={handelSignOut}>Logout</Link></li>


                </ul>

            </div>
        </div>
    );
};

export default Dashboard;