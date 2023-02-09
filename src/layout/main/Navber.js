import React, { useState } from 'react';
import { GrInternetExplorer } from 'react-icons/gr';
import { AiOutlineMenuUnfold } from 'react-icons/ai';
import { FiDelete } from 'react-icons/fi';
import { BsChatSquareDots } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signOut } from 'firebase/auth';
import { logOut } from '../../features/auth/authSlice';
import auth from '../../firebase/firebase.config';

const Navber = () => {

    const [open, setOpen] = useState(false);
    const { email } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const handelSignOut = () => {
        signOut(auth).then(() => {
            dispatch(logOut())
        });

    };

    return (
        <div className='w-full shadow-md top-0 left-0'>
            <div className='lg:flex items-center justify-between py-4 lg:px-10 px-10'>

                <div className='font-bold text-2xl cursor-pointer flex items-center font-[poppins] text-gray-800'>
                    <span className='text-3xl text-indigo-600'> < GrInternetExplorer /> </span>
                    <Link to='/'>  Job-IntanShip</Link>

                </div>
                <div onClick={() => setOpen(!open)} className=' text-3xl absolute right-8 top-5 cursor-pointer lg:hidden'>

                    {

                        open ? <FiDelete /> : <AiOutlineMenuUnfold />
                    }

                </div>


                <ul className={`lg:flex md:items-center md:pb-3 pb-12 absolute lg:static lg:z-auto z-[-1] left-0 w-fulllg:w-auto lg:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-18 opacity-100 z-10' : "top-[-490] lg:opacity-100 opacity-0"}`}>


                    <li className="lg:ml-8 lg:my-0 my-7 text-xl cursor-pointer hover:border-b-2 duration-500 hover:text-blue-400"> <Link to='/'><BsChatSquareDots /></Link></li>

                    {email ? <button onClick={handelSignOut} className='lg:ml-8 lg:my-0 my-7 text-xl cursor-pointer hover:border-b-2 duration-500 hover:text-blue-400'>LogOut</button> : <li className="lg:ml-8 lg:my-0 my-7 text-xl cursor-pointer hover:border-b-2 duration-500 hover:text-blue-400"> <Link to='/login'>Login</Link></li>}

                    {email ? <li className="lg:ml-8 lg:my-0 my-7 text-xl cursor-pointer hover:border-b-2 duration-500 hover:text-blue-400"> <Link to='/register'>REGISTER</Link></li> : "H"}


                </ul>

            </div>

        </div>
    );
};

export default Navber; <div>
</div>