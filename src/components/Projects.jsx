import React from 'react'

import socialMedia from '../images/projects/socialMedia.png'
import gms from '../images/projects/gms.png'
import portfolioReact from '../images/projects/portfolioReact.png'
import runnergame from '../images/projects/runnergame.png'
import photogram from '../images/projects/photogram.png'
import tiptime from '../images/projects/tiptime.png'

const Projects = () => {

    const projects = [
       {
            id: 1,
            title: 'Gym Management System (Java)',
            src: gms,
            demo: '',
            code: 'https://github.com/osasuair/GymManager'
        },
        {
            id: 2,
            title: 'Portfolio Website (React-JS)',
            src: portfolioReact,
            demo: '',
            code: 'https://github.com/osasuair/react-portfolio'
        },
        {
            id: 3,
            title: 'Runner Game (C)',
            src: runnergame,
            demo: '',
            code: 'https://github.com/osasuair/RunnerGame'
        },
        {
            id: 4,
            title: 'Artwork Social Media (Node-JS)',
            src: socialMedia,
            demo: '',
            code: 'https://github.com/osasuair/Artwork-App'
        },
        {
            id: 5,
            title: 'Tip Time (Kotlin)',
            src: tiptime,
            demo: '',
            code: 'https://github.com/osasuair/TipTime'
        },
        {
            id: 6,
            title: 'Photogram (C++)',
            src: photogram,
            demo: '',
            code: 'https://github.com/osasuair/PhotoGram'
        },
    ]


    return (
        <div name="projects" className='bg-gradient-to-b from-gray-900 to-black w-full text-white md:h-screen'>

            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-2'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Projects</p>
                    <p className='py-6'>Check out some of my work right here</p>
                </div>

                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                {projects.map(({id, title, src, demo, code}) => ( 
                    <div key={id} className='shadow-xl hover:scale-110 duration-200 rounded-lg bg-gray-800'>
                        <h2 className='text-center py-2 font-bold'>{title}</h2>
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