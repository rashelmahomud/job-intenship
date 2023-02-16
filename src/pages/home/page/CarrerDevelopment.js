import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Carrer from './Carrer';

const CarrerDevelopment = () => {

    const [carers, setCarers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/carear')
            .then(res => res.json())
            .then(data => setCarers(data.data))
    }, [])

    return (
        <div>
            <div className='text-center my-10'>
                <h1 className='font-semibold'>SEE HOW YOU CAN UP YOUR CARRER START</h1>
                <h3 className='text-4xl font-semibold'>CAREER DEVELOPMENT & TRAINING</h3>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 lg:gap-10 gap-5'>

                {
                    carers.map(carer => <Carrer carer={carer}  key={carer._id}/>)
                }

            </div>
            <p className='text-center mt-5'><Link to='/' className='text-blue-600 hover:border-b text-center'>View More Articals</Link></p>
        </div>
    );
};

export default CarrerDevelopment;