import React from 'react'

import profileImage from '../images/heroImage.png'
import {BsArrowRightCircle} from 'react-icons/bs'
import { Link } from 'react-scroll'
import info from '../data/info.json'

const About = () => {
  return (
    <div name="about" className='w-full min-h-screen h-full bg-gradient-to-b from-gray-900 to-black text-white my-auto'>
      <div className='max-w-screen-xl items-center justify-center h-full min-h-screen flex flex-col mx-auto'>
        <h2 className='text-3xl md:text-5xl text-white font-bold my-10'>{info.home.title}</h2>

        <div className='flex flex-col items-center justify-center px-4 md:flex-row text-xl'>
          
          <div className='flex flex-col h-full mr-10'>
            <div className='mb-2'>
              <h2 className='text-3xl text-teal-300 mb-1 font-bold'>Quick Facts</h2>
              <div className='text-lg text-gray-200'>
                <h4>I am currently based in Ontario, Canada📌</h4>
                <h4>My technical interests are Software Engineering, Software/Application Development👨🏾‍💻 and Back-end Development roles💻.</h4>
                <h4>I am currently a student at Carleton University in my third-year!🎓</h4>
                <h4>I also enjoy Working out and Swimming!🏋🏾‍♂️🏊🏾‍♂️</h4>
              </div>
            </div>

            <h2 className='text-3xl text-teal-300 mt-5 mb-1 font-bold'>Biography</h2>
            <p className='text-gray-300 pb-4 max-w-screen-xl my-auto' dangerouslySetInnerHTML={{__html: info.home.description}}></p>

            <div className='mt-auto'>
              <Link to="experience" smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-teal-500 cursor-pointer'>
                Check out my Experience and Projects!
                <span className='group-hover:rotate-90 duration-300'>
                  <BsArrowRightCircle size={25} className='ml-2'/>
                </span>
              </Link>
            </div>
          </div>
          <div className='mx-auto min-w-[275px] w-[45vw] md:w-2/3'>
            <img src={profileImage} alt='profile' className='rounded-2xl mx-auto' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About