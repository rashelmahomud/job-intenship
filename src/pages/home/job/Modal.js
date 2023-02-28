import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useGetJobByIdQuery } from "../../../features/job/jobApi";

export default function Modal({ data }) {
    const [showModal, setShowModal] = useState(false);
    const { companyName, position, duration, salaryrange, logo, overview, needMember } = data?.data || {};
    const { handleSubmit, register } = useForm();


    const onSubmite = (data) => {
        console.log('hello', data)
    }
    return (
        <>
            <button
                type="button"
                onClick={() => setShowModal(true)}
            >
                Apply Now
            </button>

            {showModal ? (
                <>
                    <div
                        className=" flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start bg-gray-50 justify-between p-5 border-b border-solid border-slate-200 rounded-t text-slate-500">
                                    <div className="">
                                        <h3 className="text-3xl font-semibold ">
                                            Applying for
                                            {position}
                                            internship
                                        </h3>
                                        <br />
                                        <h3 className="flex flex-left text-xl">{companyName}</h3>
                                    </div>
                                    <div className="">
                                        <button
                                            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                            type="button"
                                            onClick={() => setShowModal(false)}
                                        >
                                            Close
                                        </button>
                                    </div>

                                </div>
                                {/*body*/}
                                <div className="relative p-6 text-gray-400">

                                    <form onSubmit={handleSubmit(onSubmite)} className=" p-3">

                                        <div className="flex flex-col w-full gap-2 ">
                                            <label className="flex flex-left p-2 text-gray-600" htmlFor="resume">Your resume</label>
                                            <p className="flex flex-left font-normal text-base px-2">Your current resume will be submitted along with this application.</p>
                                            <input className="border rounded-full text-xl p-3 text-base" type='url' id='resume' placeholder="share your resume url" {...register('resume')} />
                                        </div>

                                        <div className="flex flex-col gap-2">

                                            <label className="flex flex-left p-2 text-gray-600" htmlFor="coverLetter">Cover Letter</label>
                                            <p className="flex flex-left text-base font-normal px-2">Why should you be hired for this role?</p>
                                            <p className="flex flex-left text-base font-normal text-blue-500 px-2"> Copy from your last application & edit</p>

                                            <textarea className="border rounded-full text-xl p-2 text-base" rows={2} placeholder='Write your cover letter.' type='text' id='coverLetter' {...register('coverLetter')} />
                                        </div>

                                        <button type='submit' className="flex flex-end bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 mt-3"
                                        >Submit</button>

                                    </form>

                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    );
}