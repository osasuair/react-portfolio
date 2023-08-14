import React, { useState } from 'react'
import { Link } from 'react-scroll'
import { FaBars, FaTimes} from 'react-icons/fa'
import logo from '../images/logo512.png'
import info from '../data/info.json'
import { links } from '../data/SocialLinks'

const Navbar = () => {

    const [nav, setNav] = useState(false);

    const pages = [
        {
            id: 1,
            link: 'home',
        },
        {
            id: 2,
            link: 'about',
        },
        {
            id: 3,
            link: 'experience',
        },
        {
            id: 4,
            link: 'projects',
        },
        {
            id: 5,
            link: 'skills',
        },
        {
            id: 6,
            link: 'contact',
        },
    ]

    return (
    <div className='flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed top-0 z-50'>
        <div className='flex flex-row items-center'>
            <img src={logo} alt={info.name} className='w-12 h-12'/>
            <span className='hidden md:inline-block ml-2 text-2xl font-bold font-logoName text-teal-300 uppercase tracking-widest'>Paul<br/>Airuehia</span>
        </div>

        <div className='flex flex-row mx-2 md:hidden md:mx-0'>
            {links.map(({id, text, child, href, altStyle, download}) => (
                <span key={id} title={text} className={"flex justify-between items-center h-12 px-3 bg-teal-500 hover:bg-teal-800 " + altStyle}>
                    <a href={href} className="flex justify-between items-center w-full text-white" download={download} target='_blank' rel="noreferrer">{child}</a>
                </span>
            ))}
        </div>

        <ul className='hidden md:flex'>
            {pages.map(({id, link}) => (
                <li key={id} className='px-3 xl:px-4 cursor-pointer capitalize font-bold text-teal-500 hover:scale-110 hover:text-teal-200 duration-200'>
                    <Link to={link} smooth duration={500}>
                        {link}
                    </Link>
                </li>
            ))}            
        </ul>

        <div 
            onClick={() => setNav(!nav)} 
            className='cursor-pointer z-10 text-gray-500 md:hidden'
        >
            {nav ? <FaTimes size= {30}/> : <FaBars size={30} />}
        </div>

        {nav && (
            <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500'>
                {pages.map(({id, link}) => (
                    <li key={id} className='px-4 py-6 cursor-pointer capitalize font-medium text-4xl text-gray-500 hover:scale-105 duration-200'>
                        <Link 
                            onClick={() => setNav(!nav)} 
                            to={link} 
                            smooth 
                            duration={500}
                        >
                            {link}
                        </Link>
                    </li>
                ))}
            </ul>
        )}       
    </div>
  )
}

export default Navbar