import React from 'react'

import awardImg from '../images/experience/award.png'
import { education, awards, csExperience, otherExperience } from '../data/Experience'

const Experience = () => {

  return (
    <div name="experience" className='w-full h-full min-h-screen bg-gradient-to-b to-teal-700 from-slate-900 text-white'>

        <div className='max-w-screen-xl p-4 mx-auto flex flex-col justify-center w-full h-full pt-24'>
            <div className='pb-4'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Experience</p>
            </div>

            {/* Add two columns a big one for only experience computer science and smaller one for the others at a ratio of 2:1 */}

            <div className='h-full w-full grid sm:grid-cols-2 md:grid-cols-3 gap-5 mx-auto'>
              <div>
                <h2 className='font-extrabold text-xl lg:text-2xl bg-gradient-to-r text-transparent bg-clip-text from-teal-400 to-green-300 tracking-wide'>
                  Experience - Computer Science
                </h2>
                {csExperience.map(({id, image, title, pos, desc, location, date}) => (
                  <div key={id} className='rounded-xl my-5 hover:scale-105 duration-200 border-[1px] border-gray-600 bg-gray-800 bg-opacity-50'>
                    <div className='min-h-[8rem] p-4 bg-gray-950 rounded-t-xl flex items-center justify-center'>
                      <img className="mx-auto" src={image} alt={title}/>
                    </div>
                    <div className='p-4'>
                      <ul className='py-2 leading-5'>
                        <li className='text-xl font-bold' dangerouslySetInnerHTML={{__html: title}}></li>
                        <li className='text-gray-400 font-bold mb-3'>{pos}</li>
                        <div className='mb-3'>
                            <ul className='list-disc list-inside'>
                                {desc.map((course, index) => (
                                    <li key={index} className='text-gray-300 text-sm mb-1'>{course}</li>
                                ))}
                            </ul>
                        </div>
                        <li className='text-gray-300'>{location}</li>
                        <li className='text-gray-300 text-sm'>{date}</li>
                      </ul>
                    </div>
                  </div>
                ))}
              </div>


              
                <div className='mb-5'>
                  <h2 className='font-bold text-teal-300 text-xl lg:text-2xl'>Education</h2>
                  {education.map(({id, image, title, school, desc, grade, date}) => (
                  <div key={id} className='rounded-xl my-5 hover:scale-105 duration-200 border-[1px] border-gray-600 bg-gray-800 bg-opacity-50'>
                    <div className='min-h-[8rem] p-4 bg-gray-950 rounded-t-xl flex items-center justify-center'>
                      <img className="mx-auto" src={image} alt={title}/>
                    </div>
                    <div className='p-4'>
                      <ul className='py-2 leading-5'>
                        <li className='text-xl font-bold'>{title}</li>
                        <li className='font-bold text-gray-400 mb-2'>{school}</li>
                        {desc.map((item, index) => (
                          <li key={index} className=' text-gray-300 mb-1'>{item}</li>
                        ))}
                        {grade && <li className='text-gray-200 font-bold mt-2'>{grade}</li>}
                        <li className='text-gray-300 text-sm mt-2'>{date}</li>    
                      </ul>
                    </div>
                  </div>
                  ))}
                </div>

              <div>
              <div>
                  <h2 className='font-bold text-teal-300 text-xl lg:text-2xl'>Awards</h2>
                  <div className='rounded-xl my-5 hover:scale-105 duration-200 border-[1px] border-gray-600 bg-gray-800 bg-opacity-50'>
                    <div className='bg-gray-950 rounded-t-xl'>
                      <img className="h-24 mx-auto" src={awardImg} alt="Award"/>
                    </div>
                    <div className='p-4'>
                      {awards.map(({id, title, date}) => (
                        <ul key={id} className='py-2 leading-5'>
                          <li className='text-lg font-bold'>{title}</li>
                          <li className='text-gray-300 text-sm'>{date}</li>
                        </ul>
                      ))}
                    </div>
                  </div>
                </div>
                <h2 className='font-bold text-teal-300 text-xl lg:text-2xl'>Experience - Other</h2>
                {otherExperience.map(({id, image, title, pos, location, date}) => (
                  <div key={id} className='rounded-xl my-5 hover:scale-105 duration-200 border-[1px] border-gray-600 bg-gray-800 bg-opacity-50'>
                    <div className='min-h-[8rem] p-4 bg-gray-950 rounded-t-xl flex items-center justify-center'>
                      <img className="mx-auto" src={image} alt={title}/>
                    </div>
                    <div className='p-4'>
                      <ul className='py-2 leading-5'>
                        <li className='text-gray-200 text-xl font-bold' dangerouslySetInnerHTML={{__html: title}}></li>
                        <li className='text-gray-400 font-bold mb-3'>{pos}</li>
                        <li className='text-gray-300 mb'>{location}</li>
                        <li className='text-gray-300 text-sm'>{date}</li>
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
        </div>
    </div>
  )
}

export default Experience