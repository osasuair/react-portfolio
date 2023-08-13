import React from 'react'
import { FaGithub, FaLinkedin, FaPhone } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { FiPaperclip } from 'react-icons/fi'
import info from '../data/info.json'

const links = [
        {
            id: 1,
            text: 'LinkedIn',
            child: (
                <>
                    <FaLinkedin size={30}/>
                </>
            ),
            href: info.contact.linkedin,
            style: 'rounded-tr-md',
            altStyle: "rounded-l-md"
        },
        {
            id: 2,
            text: 'Github',
            child: (
                <>
                    <FaGithub size={30}/>
                </>
            ),
            href: info.contact.github,
        },
        {
            id: 3,
            text: 'Email',
            child: (
                <>
                    <HiOutlineMail size={30}/>
                </>
            ),
            href: info.contact.email,
        },
        {
            id: 4,
            text: 'Phone',
            child: (
                <>
                    <FaPhone size={30}/>
                </>
            ),
            href: info.contact.phone,          
        },
        {
            id: 5,
            text: 'Resume',
            child: (
                <>
                    <FiPaperclip size={30}/>
                </>
            ),
            href: '/resume.pdf',
            style: 'rounded-br-md',
            altStyle: "rounded-r-md",
            download: true
        },
    ]

const SocialLinks = () => {

    

    return (
        <div className='hidden md:flex flex-col top-20 absolute socialLimit:top-0 socialLimit:h-screen left-0 socialLimit:fixed'>
            <ul className='my-auto'>

                {links.map(({id, text, child, href, style, download}) => (
                    <li key={id} className={"flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-teal-500 " + style}>
                      <a href={href} className="flex justify-between items-center w-full text-white" download={download} target='_blank' rel="noreferrer">
                          {text}{child}
                      </a>
                    </li>
                ))}
              
            </ul>
        </div>
    )
}

export default SocialLinks
export const socials = links