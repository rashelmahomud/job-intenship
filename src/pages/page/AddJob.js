import React from 'react';
import { useForm } from 'react-hook-form';

const AddJob = () => {
    const { handleSubmit, register, control } = useForm();

    const onSubmit = () => {

    }


    return (

        <div className=' mx-5'>
            <form onSubmit={handleSubmit(onSubmit)} className="bg-gray-300/20 p-10 shadow-lg rounded-2xl max-w-3xl" >

                <h1 className='mx-auto text-2xl font-semibold'>Add a New Job</h1>
                <div className=' flex flex-wrap gap-3  justify-between'>



                    <div className='flex flex-col w-full max-w-xs'>
                        <label className='mb-2' htmlFor='position'>
                            Position
                        </label>
                        <input className='rounded-full p-2' type='text' id='position' {...register('position')} />
                    </div>
                    <div className='flex flex-col w-full max-w-xs'>
                        <label className='mb-2' htmlFor='companyName'>
                            Company Name
                        </label>
                        <input className='rounded-full p-2' type='text' id='companyName' {...register('companyName')} />
                    </div>
                    <div className='flex flex-col w-full max-w-xs'>
                        <label className='mb-2' htmlFor='experience'>
                            Exprience
                        </label>
                        <input className='rounded-full p-2' type='text' id='exprience' {...register('exprience')} />
                    </div>
                    <div className='flex flex-col w-full max-w-xs'>
                        <label className='mb-2' htmlFor='worklabel'>
                            Work Label
                        </label>
                        <input className='rounded-full p-2' type='text' id="worklabel" {...register("worklabel")} />
                    </div>
                    <div className='flex flex-col w-full max-w-xs'>
                        <label className='mb-2' htmlFor='employment'>
                            Employment Type
                        </label>
                        <input className='rounded-full p-2' type='text' id='employment' {...register("employment")} />

                    </div>
                    <div>

                    </div>

                </div>
            </form>
        </div>
    );
};

export default AddJob;