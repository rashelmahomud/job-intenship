import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navber from './Navber';

const Main = () => {
    const { pathname } = useLocation();
    return (
        <div className='bg-red-50'>
            <Navber />
            <div className={` ${pathname === "/" ? "max-w-[1600px] px-5" : "max-w-7xl"
                } max-w-[1600px] mx-auto`}>
                <Outlet />
            </div>
        </div>
    );
};

export default Main;