import React from 'react'

import { IoSchool } from 'react-icons/io5'
import { FaDesktop } from 'react-icons/fa'

import { skillDesc, skills, courses, methodologies } from '../data/Skills'

const Skills = () => {

    return (
        <div name="skills" className='bg-gradient-to-b to-teal-700 from-slate-900 w-full h-full min-h-screen text-white'>
            <div className='max-w-screen-xl mx-auto p-4 flex flex-col justify-center w-full h-full min-h-screen py-24'>
                <div className='pb-2'>
                    <p className='text-4xl font-bold border-b-4 border-gray-500 inline'>Skills</p>
                    <p className='py-6 text-gray-300 leading-6' dangerouslySetInnerHTML={{__html: skillDesc}}></p>
                </div>
                <div className='w-full flex flex-col md:flex-row'>
                    <div className='w-full md:w-1/2 mb-5 md:mb-0 md:mr-4 p-4 rounded-xl border-[1px] border-gray-600 bg-gray-800 bg-opacity-50 flex flex-col'>
                        <h2 className='font-bold text-xl pb-3'>Technical Skills</h2>
                        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center my-auto'>
                            {skills.map(({id, src, title}) => (
                                <div 
                                    key={id} 
                                    className="shadow-xl hover:scale-110 duration-500 py-2 rounded-lg bg-gradient-to-b from-teal-800"
                                >
                                    <img src={src} alt={title} className='h-14 mx-auto'/>
                                    <p className='mt-4 pb-2 text-xl '>{title}</p>
                                </div>
                            ))}                   
                        </div>
                    </div>
                    <div className='w-full md:w-1/2 p-4 rounded-xl border-[1px] border-gray-600 bg-gray-800 bg-opacity-50'>
                        <div className='flex flex-row items-center'>
                            <h2 className='font-bold text-xl pb-1'>Relevant Courses</h2>
                            <IoSchool size={50} className='ml-auto'/>
                        </div>
                        <div className='mb-4'>
                            <ul className='list-disc list-inside'>
                                {courses.map((course, index) => (
                                    <li key={index} className='text-gray-300'>{course}</li>
                                ))}
                            </ul>
                        </div>

                        <div className='flex flex-row items-center'>
                            <h2 className='font-bold text-xl pb-1'>Technical Methodologies<br/> & Others</h2>
                            <FaDesktop size={50} className='ml-auto'/>
                        </div>
                        <div>
                            <ul className='list-disc list-inside'>
                                {methodologies.map((method, index) => (
                                    <li key={index} className='text-gray-300'>{method}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills