import React from 'react'
import info from '../data/info.json'
import {BsArrowRightCircle} from 'react-icons/bs'
import { Link } from 'react-scroll'

const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-900'>
      <div className='max-w-screen-lg justify-center h-full flex flex-col mx-auto'>
        <h1 className='text-7xl text-white text-center mb-2'>Hey! I'm <span className='font-bold bg-gradient-to-r text-transparent bg-clip-text from-teal-300 to-green-400 tracking-wide'>{info.name}.</span></h1>
        <h2 className='text-2xl text-gray-300 font-bold mb-32 text-center'>{info.description}</h2>
        
        <div className='mx-auto'>
          <Link to="about" smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-teal-500 cursor-pointer'>
            Learn more about me!
            <span className='group-hover:rotate-90 duration-300'>
              <BsArrowRightCircle size={25} className='ml-2'/>
            </span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home