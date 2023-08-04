import React from 'react'
import profileImage from '../images/heroImage.png'
import {BsArrowRightCircle} from 'react-icons/bs'
import { Link } from 'react-scroll'

const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
      <div className='max-w-screen-lg items-center justify-center h-full flex flex-col mx-auto'>
        <h2 className='text-4xl md:text-7xl text-white mb-10 text-center'><b>Hi!</b> My name is <span className='font-bold text-teal-300 tracking-wide whitespace-nowrap'>Paul Airuehia</span></h2>

        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center px-4 md:flex-row'>
          <div className='flex flex-col justify-center h-full w-2/3'>
            <h2 className='text-3xl md:text-5xl text-white text-bold'>I'm a Software Developer/Engineer</h2>
            <p className='text-gray-500 py-4 max-w-lg'>
              I'm a Software Engineer/Developer with a passion for building web applications and solving problems. 
              I'm currently a student at Lambda School, where I'm learning the skills to become a full-stack web developer. 
              I'm also a graduate of the University of Benin, where I studied Computer Science.
            </p>

            <div>
              <Link to="portfolio" smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-teal-500 cursor-pointer'>
                Portfolio
                <span className='group-hover:rotate-90 duration-300'>
                  <BsArrowRightCircle size={25} className='ml-2'/>
                </span>
              </Link>
            </div>
          </div>

          <div className='ml-10'>
            <img src={profileImage} alt='profile' className='rounded-2xl' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home