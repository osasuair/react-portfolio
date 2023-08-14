import React from 'react'

import { links } from '../data/SocialLinks'

const SocialLinks = () => {
    return (
        <div className='hidden md:flex flex-col top-20 left-0 socialLimit:top-0 socialLimit:h-screen absolute socialLimit:fixed'>
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