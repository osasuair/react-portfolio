import React from 'react'

import tempImage from '../images/portfolio/tempImage2.jpg'

const Experience = () => {

    const skills = [
        {
            id: 1,
            src: tempImage,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id: 2,
            src: tempImage,
            title: 'CSS',
            style: 'shadow-blue-500'
        },
        {
            id: 3,
            src: tempImage,
            title: 'JavaScript',
            style: 'shadow-yellow-500'
        },
        {
            id: 4,
            src: tempImage,
            title: 'React',
            style: 'shadow-blue-500'
        },
        {
            id: 5,
            src: tempImage,
            title: 'Node',
            style: 'shadow-green-500'
        },
        {
            id: 6,
            src: tempImage,
            title: 'Express',
            style: 'shadow-green-500'
        },
        {
            id: 7,
            src: tempImage,
            title: 'PostgreSQL',
            style: 'shadow-blue-500'
        },
        {
            id: 8,
            src: tempImage,
            title: 'Python',
            style: 'shadow-yellow-500'
        }
    ]

    return (
        <div name="experience" className='bg-gradient-to-b from-gray-800 to-black w-full h-screen'>
            <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
                <div>
                    <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Experience</p>
                    <p className='py-6'>These are the technologies I've worked with</p>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
                    {skills.map(({id, src, title, style}) => (
                        <div 
                            key={id} 
                            className= {`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
                        >
                            <img src={src} alt={title} className='w-20 mx-auto'/>
                            <p className='mt-4'>{title}</p>
                        </div>
                    ))}                   
                </div>
            </div>
        </div>
    )
}

export default Experience