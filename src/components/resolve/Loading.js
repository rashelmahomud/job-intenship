import React from 'react';
import { ClockLoader } from 'react-spinners';

const Loading = () => {
    return (
        <div className='grid h-screen place-items-center'>
            <ClockLoader size={150} color="#36d7b7" />
        </div>
    );
};

export default Loading;