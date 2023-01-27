import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const CarrerDevelopment = () => {

    const [carers, setCarers] = useState([]);

    useEffect(() => {
        fetch('carear.json')
            .then(res => res.json())
            .then(data => setCarers(data))
    }, [])

    return (
        <div>
            <div className='text-center my-10'>
                <h1 className='font-semibold'>SEE HOW YOU CAN UP YOUR CARRER START</h1>
                <h3 className='text-4xl font-semibold'>CAREER DEVELOPMENT & TRAINING</h3>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 lg:gap-10 gap-5'>
                {
                    carers.map(carer => <div className='hover:relative delay-300 duration-100 hover:border-4 border-teal-200' key={carer._id}>
                        <img  src={carer.img} alt='' />
                        <div className='text-center bg-gray-100 opacity-75 hover:opacity-100 lg:px-10 p-5 absolute bottom-0 '>
                            <h1 className='font-semibold text-gray-500'>{carer.name}</h1>
                            <h3 className='text-xl font-semibold my-3'>{carer.title}</h3>
                            <Link to='/' className='text-blue-600'>Reacd More</Link>
                        </div>
                    </div>)
                }
            </div>
            <p className='text-center mt-5'><Link to='/' className='text-blue-600 hover:border-b text-center'>View More Articals</Link></p>
        </div>
    );
};

export default CarrerDevelopment;