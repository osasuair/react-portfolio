import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className='w-full h-full min-h-screen bg-gradient-to-b from-teal-700 to-slate-900 p-4 text-white'>

        <div className='flex flex-col p-4 justify-center max-w-screen-xl mx-auto h-full min-h-screen py-24'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                    Contact
                </p>
                <p className='py-6'>Submit the form below to get in touch with me</p>
            </div>

            <div className='flex'>
                <form 
                    action="https://getform.io/f/dfe1f337-5bcd-4007-a587-ccc87a5d3ebb" 
                    method='POST' 
                    className='flex flex-col w-full md:w-2/3 lg:1/2'
                >
                    <input 
                        type="text" 
                        name="name" 
                        placeholder='Enter your name' 
                        className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' 
                    />
                    <input 
                        type="text" 
                        name="email" 
                        placeholder='Enter your email' 
                        className='my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' 
                    />
                    <textarea 
                        name="message" 
                        rows="10" 
                        placeholder="Enter your message"
                        className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'>
                    </textarea>

                    <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mr-auto flex items-center rounded-md hover-scale-110 duration-300'>
                        Let's Talk
                    </button>
                </form>
            </div>
        </div>

    </div>
  )
}

export default Contact