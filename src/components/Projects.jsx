import React from 'react'

import { projects } from '../data/Projects'

const Projects = () => {

    return (
        <div name="projects" className='bg-gradient-to-b from-gray-900 to-black w-full text-white h-full min-h-screen'>

            <div className='max-w-screen-xl p-4 mx-auto flex flex-col justify-center w-full h-full min-h-screen py-24'>
                <div className='pb-2'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Projects</p>
                    <p className='py-6'>Check out some of my work right here. To see the all of my work, check out <a href='https://github.com/osasuair' target='_blank' rel="noreferrer" className='text-teal-400 hover:text-teal-300'>my GitHub</a>.</p>
                </div>

                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8'>
                {projects.map(({id, title, src, demo, code}) => ( 
                    <div key={id} className='shadow-xl hover:scale-110 duration-200 rounded-lg border-[1px] border-gray-700 bg-gray-800 bg-opacity-80'>
                        <h2 className='text-center py-2'>{title}</h2>
                        <div className='bg-teal-800'>
                            <img src={src} alt="" className='mx-auto h-40' />
                        </div>
                        <div className='flex items-center justify-center text-center'>
                            {/* <a href={demo} target='_blank' rel="noreferrer" className='w-1/2 px-6 py-1 m-3 duration-200 hover:scale-110'>Demo</a> */}
                            <a href={code} target='_blank' rel="noreferrer" className='w-1/2 px-6 py-1 m-3 duration-200 hover:scale-110'>Code</a>
                        </div>
                    </div>
                ))}
                </div>    
            </div>
        </div>
    )
}

export default Projects