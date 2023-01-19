import React from 'react';
import { useForm } from 'react-hook-form';

const EmployerFrom = () => {

    const { register, handleSubmit, control, reset } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        reset();
    }



    const employerRange = ['1-11', '45-12', '5-65', '4-88', '88-96', 'Above-100'];
    const businessCategory = [
        "Automotive",
        "Business Support & Supplies",
        "Computers & Electronics",
        "Construction & Contractors",
        "Design Agency",
        "Education",
        "Entertainment",
        "Food & Dining",
        "Health & Medicine",
        "Home & Garden",
        "IT Farm",
        "Legal & Financial",
        "Manufacturing, Wholesale, Distribution",
        "Merchants (Retail)",
        "Miscellaneous",
        "Personal Care & Services",
        "Real Estate",
        "Travel & Transportation",
    ];

    return (
        <div className='mt-20 mb-5'>
            <div className='flex justify-center items-center overflow-auto p-10'>
                <form onSubmit={handleSubmit(onSubmit)} className='shadow-lg p-10 flex flex-wrap rounded-2xl gap-3 max-w-3xl justify-between'>
                    <h1 className='text-center w-full text-2xl'>Employer</h1>


                    <div className='flex flex-col w-full max-w-xs'>
                        <label className='mb-2' for='firstName'>
                            First Name
                        </label>
                        <input type='text' id='firstName' {...register('firstName')} />
                    </div>

                    <div className='flex flex-col w-full max-w-xs'>
                        <label className='mb-2' for='lastName'>
                            Last Name
                        </label>
                        <input type='text' id="lastName" {...register('lastName')} />
                    </div>

                    <div className='flex flex-col w-full max-w-xs'>
                        <label className='mb-2' for='email'>
                            Email
                        </label>
                        <input type='text' id="email" {...register('email')} />
                    </div>

                    <div className='flex flex-col w-full max-w-xs'>
                        <h1 className='mb-3'>Gender</h1>
                        <div className='flex gap-3'>
                            <div>
                                <input type='radio' id='male' {...register('gender')} value='male' />
                                <label for='male' className='ml-2 text-lg'>Male</label>
                            </div>
                            <div>
                                <input type='radio' id='famile' {...register('gender')} value='famile' />
                                <label for='famile' className='ml-2 text-lg'>Famile</label>
                            </div>
                            <div>
                                <input type='radio' id='other' {...register('gender')} value='other' />
                                <label for='other' className='ml-2 text-lg'>Other</label>
                            </div>
                        </div>

                    </div>
                    <hr className='w-full mt-2 bg-black' />
                    <div className='flex flex-col w-full max-w-xs'>

                        <label className='mb-2' for='companyName'>
                            Company's Name
                        </label>
                        <input type='compnayName' id="companyName"  {...register('companyName')} />

                    </div>
                    <div className='flex flex-col w-full max-w-xs'>
                        <label className='mb-2' for='employerRang'>
                            Employer Rang
                        </label>
                        <select id='employerRang' {...register('employerRang')}>
                            {employerRange.sort((a, b) => a.localeCompare(b)).map((catagory) => (
                                <option key={catagory} value={catagory}>{catagory}</option>
                            ))}
                        </select>
                    </div>
                    <div className='flex flex-col w-full max-w-xs'>
                        <label className='mb-3' for='companyCategory'>
                            Company's Category
                        </label>
                        <select {...register("companyCategory")} id='companyCategory'>
                            {businessCategory
                                .sort((a, b) => a.localeCompare(b))
                                .map((category) => (
                                    <option key={category} value={category}>{category}</option>
                                ))}
                        </select>
                    </div>
                    <div className='flex flex-col w-full max-w-xs'>
                        <label className='mb-2' for='roleInCompany'>
                            Your role in company
                        </label>
                        <input
                            type='text'
                            {...register("roleInCompany")}
                            id='roleInCompany'
                        />
                    </div>

                    <div className='flex justify-between items-center w-full mt-3'>
                        <div className='flex  w-full max-w-xs'>
                            <input
                                className='mr-3'
                                type='checkbox'
                                {...register("term")}
                                id='terms'
                            />
                            <label for='terms'>I agree to terms and conditions</label>
                        </div>
                        <button type='submit' className='btn bg-blue-500 p-3 text-white font-bold rounded ' >Submit</button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default EmployerFrom;