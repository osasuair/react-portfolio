import React from 'react'

import cpp from '../images/experience/cpp.png'
import csharp from '../images/experience/csharp.png'
import kotlin from '../images/experience/kotlin.png'
import java from '../images/experience/java.png'
import js from '../images/experience/js.png'
import python from '../images/experience/python.png'
import git from '../images/experience/git.png'
import mongodb from '../images/experience/mongodb.png'
import sql from '../images/experience/sql.png'


const Experience = () => {

    const skills = [
        {
            id: 1,
            src: java,
            title: 'Java',
        },
        {
            id: 2,
            src: cpp,
            title: 'C++',
        },
        {
            id: 3,
            src: js,
            title: 'JavaScript',
        },
        {
            id: 4,
            src: csharp,
            title: 'C#',
        },
        {
            id: 5,
            src: python,
            title: 'Python',
        },
        {
            id: 6,
            src: mongodb,
            title: 'MongoDB',
        },
        {
            id: 7,
            src: git,
            title: 'Git',
        },
        {
            id: 8,
            src: sql,
            title: 'MySQL',
        },
        {
            id: 9,
            src: kotlin,
            title: 'Kotlin',
        }
    ]

    return (
        <div name="experience" className='bg-gradient-to-b from-gray-800 to-black w-full h-screen'>
            <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
                <div>
                    <p className='text-5xl font-bold border-b-4 border-gray-500 p-2 inline'>Experience</p>
                    <p className='py-6 text-2xl'>These are the technologies I've worked with!</p>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
                    {skills.map(({id, src, title}) => (
                        <div 
                            key={id} 
                            className= {`shadow-xl hover:scale-110 duration-500 py-2 rounded-lg bg-gradient-to-b from-teal-800`}
                        >
                            <img src={src} alt={title} className='w-20 mx-auto'/>
                            <p className='mt-4 pb-2 text-xl '>{title}</p>
                        </div>
                    ))}                   
                </div>
            </div>
        </div>
    )
}

export default Experience