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

export { links }