import React from 'react'
import info from '../data/info.json'
import {BsArrowRightCircle} from 'react-icons/bs'
import { Link } from 'react-scroll'

const Home = () => {
  return (
    <div name="home" className='h-full min-h-screen w-full bg-gradient-to-b from-teal-700 to-slate-900'>
      <div className='max-w-screen-lg justify-center h-full min-h-screen py-24 flex flex-col mx-auto'>
        <h1 className='text-7xl text-white text-center mb-2 md:mx-16'>Hey! I'm <span className='font-bold bg-gradient-to-r text-transparent bg-clip-text from-teal-300 to-green-400 tracking-wide'>{info.name}.</span></h1>
        <h2 className='text-2xl text-gray-300 font-bold mb-32 text-center'>{info.description}</h2>
        
        <div className='mx-auto'>
          <Link to="experience" smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-br from-teal-500 to-blue-600 cursor-pointer'>
          Check out my Experience and More!
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