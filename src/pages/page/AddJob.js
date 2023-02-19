import React from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import { FiTrash } from 'react-icons/fi';
import { usePostJobMutation } from '../../features/job/jobApi';
const AddJob = () => {
    const { handleSubmit, register, control, reset } = useForm();
    const [jobPost, { isLoading, isError }] = usePostJobMutation();

    const {
        fields: SkillFields,
        append: SkillAppend,
        remove: SkillRemove,
    } = useFieldArray({ control, name: "skills" });

    const {
        fields: resFields,
        append: resAppend,
        remove: resRemove,
    } = useFieldArray({ control, name: "responsibilities" });


    const {
        fields: reqFields,
        append: reqAppend,
        remove: reqRemove,
    } = useFieldArray({ control, name: "requirments" })



    const onSubmit = (data) => {
        console.log(data)
        jobPost(data);

        reset();
    }


    return (

        <div className='  mx-5'>
            <form onSubmit={handleSubmit(onSubmit)} className="bg-gray-300/20 mx-auto p-10 shadow-lg rounded-2xl max-w-3xl" >

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
                    <div className='flex flex-col w-full max-w-xs'>
                        <label className='mb-2' htmlFor='salaryrange'>
                            Salary Range
                        </label>
                        <input className="rounded-full p-2" type='text' id="salaryrange"  {...register("salaryrange")} />

                    </div>
                    <div className='flex flex-col w-full'>
                        <label className='mb-2' htmlFor='location'>
                            Location
                        </label>
                        <input className="rounded-full p-2" type='text' id="location"  {...register("location")} />

                    </div>
                    <div className='flex flex-col w-full'>
                        <label className='mb-2' htmlFor='overview'>
                            Overview
                        </label>
                        <textarea className="rounded p-2" rows={8} type='text' id="overview"  {...register("overview")} />

                    </div>

                    {/* add akill  */}
                    <div className='flex flex-col w-full'>
                        <label className="mb-2">Skill</label>
                        <div>
                            <div>
                                {
                                    SkillFields.map((item, index) => {
                                        return (
                                            <div key={item.key} className="flex items-center gap-3 mb-5">
                                                <input type='text' className="!w-full rounded-full p-2" {...register(`skills[${index}]`)} />
                                                <button type='button' onClick={() => SkillRemove(index)} className="grid place-items-center bg-red-500/20 border border-red-500 h-11 w-11 group transition-all hover:bg-red-500 rounded-full">
                                                    <FiTrash
                                                        className='text-red-500  group-hover:text-white transition-all'
                                                        size='20' />
                                                </button>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <div>
                                <button
                                    type='button' onClick={() => SkillAppend("")}
                                    className="outline outline-offset-2 outline-1 rounded-full p-2"
                                >Add Skill</button>
                            </div>
                        </div>
                    </div>

                    {/* add responsibility  */}

                    <div className='flex flex-col w-full'>
                        <label className="mb-2">Add Responsibility</label>
                        <div>
                            <div>
                                {
                                    resFields.map((item, index) => {
                                        return (
                                            <div key={item.key} className="flex items-center gap-3 mb-5">
                                                <input type='text' className="!w-full rounded-full p-2" {...register(`responsibilities[${index}]`)} />
                                                <button type='button' onClick={() => resRemove(index)} className="grid place-items-center bg-red-500/20 border border-red-500 h-11 w-11 group transition-all hover:bg-red-500 rounded-full">
                                                    <FiTrash
                                                        className='text-red-500  group-hover:text-white transition-all'
                                                        size='20' />
                                                </button>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <div>
                                <button
                                    type='button' onClick={() => resAppend("")}
                                    className="outline outline-offset-2 outline-1 rounded-full p-2"
                                >Add Responsibility</button>
                            </div>
                        </div>
                    </div>


                    {/* Add requirments  */}

                    <div className='flex flex-col w-full'>
                        <label className='mb-2'>Add Requirment</label>
                        <div>
                            {
                                reqFields.map((item, index) => {
                                    return (
                                        <div key={item.key} className="flex items-center gap-3 mb-5">
                                            <input type='text' className='!w-full rounded-full p-2' {...register(`requirments[${index}]`)} />
                                            <button type='button' onClick={() => reqRemove(index)} className="grid place-items-center bg-red-500/20 border border-red-500 h-11 w-11 group transition-all hover:bg-red-500 rounded-full">
                                                <FiTrash
                                                    className='text-red-500  group-hover:text-white transition-all'
                                                    size='20' />
                                            </button>
                                        </div>
                                    )
                                })
                            }

                        </div>
                        <div>
                            <button onClick={() => reqAppend("")} type='button' className='outline outline-offset-2 outline-1 rounded-full p-2'>Add Requirment</button>
                        </div>
                    </div>




                </div>
                <div className='flex justify-end items-center w-full mt-3'>
                    <button className='outline outline-offset-2 outline-1 rounded-full py-2 px-3' type='submit'>
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddJob;