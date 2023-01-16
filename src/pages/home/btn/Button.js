import React from 'react';

const Button = (props) => {
    return (
        <button className='animate-bounce bg-indigo-500 text-white font-[poppins] py-4 px-10 rounded lg:ml-8 hover:bg-red-800 text-3xl'>{props.children}</button>
    );
};

export default Button;