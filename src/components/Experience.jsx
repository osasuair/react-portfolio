import React from 'react'

import awardImg from '../images/experience/award.png'
import ircc from '../images/experience/ircc.png'
import carleton from '../images/experience/carleton.png'
import canadianTire from '../images/experience/canadianTire.png'
import swissKeg from '../images/experience/swissKeg.png'

const Experience = () => {

  const education = [
    {
      id: 1,
      title: 'Bachelor of Computer Science',
      school: 'Carleton University',
      desc: ["Stream/Specialization: Software Engineering", 'GPA: 11.7/12.0'],
      date: 'Expected Graduation: May 2025'
    },
    {
      id: 2,
      title: 'Ontario Secondary School Diploma',
      school: 'St. Roch Catholic Secondary School',
      desc: ["Graduated with High Honours"],
      date: 'Graduation: June 2021'
    }
  ]

  const awards = [
    {
      id: 1,
      title: 'Carleton University Dean\'s Honour List (2)',
      date: 'May 2022, May 2023'
    },
    {
      id: 2,
      title: 'Walter A. Ainsworth Bursary ($1,900)',
      date: 'January 2023'
    },
    {
      id: 3,
      title: 'Henry Marshall Tory Scholarship ($12,000)', 
      date: 'September 2021'
    }
  ]

  const csExperience = [
    {
      id: 1,
      image: ircc,
      title: 'Internship at Canada <abbr title="Immigration, Refugees and Citizenship Canada">IRCC</abbr>',
      pos: 'Test Automation Engineer (FSWEP)',
      desc: 'Test Automation Engineer (FSWEP)',
      location: 'Ottawa, Ontario / Remote',
      date: 'May 2023 - Present'
    },
    {
      id: 2,
      image: carleton,
      title: 'Teaching Assistant at Carleton University',
      pos: 'Computer Science Dept.',
      desc: 'Test Automation Engineer (FSWEP)',
      location: 'Ottawa, Ontario',
      date: 'September 2021 - Present'
    }
  ]

  const otherExperience = [
    {
      id: 1,
      image: canadianTire,
      title: 'Warehouse Associate at Canadian Tire Corp.',
      pos: 'Fast-Pick, Receiving, and Bulk Positions',
      location: 'Bolton, Ontario',
      date: 'June 2022 - August 2022'
    },
    {
      id: 2,
      image: swissKeg,
      title: 'Kitchen Staff at Swiss Chalet and The Keg',
      pos: 'Lead Line Cook, Kitchen Help, and Dishwasher',
      location: 'Brampton, Ontario / Ottawa, Ontario',
      date: 'November 2019 - April 2022'
    }
  ]


  return (
    <div name="experience" className='w-full h-full min-h-screen bg-gradient-to-b from-black to-gray-900 text-white'>

        <div className='max-w-screen-xl p-4 mx-auto flex flex-col justify-center w-full h-full py-24'>
            <div className='pb-4'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Experience</p>
            </div>

            <div className='h-full w-full grid sm:grid-cols-2 md:grid-cols-3 gap-5 mx-auto'>
              <div>
                <div className='mb-5'>
                  <h2 className='font-bold text-teal-300 text-xl lg:text-2xl'>Education</h2>
                  {education.map(({id, title, school, desc, date}) => (
                  <div className='rounded-xl my-5 p-4 border-[1px] border-gray-600 bg-gray-800 bg-opacity-50'>
                      <ul key={id} className='py-2 leading-5'>
                        <li className='text-xl font-bold'>{title}</li>
                        <li className='font-bold text-gray-300 mb-2'>{school}</li>
                          {desc.map((item, index) => (
                            <li key={index} className='mb-2 text-gray-300'>{item}</li>
                          ))}
                        <li className='text-gray-300 text-sm'>{date}</li>    
                      </ul>
                    </div>
                    ))}
                </div>
                <div>
                  <h2 className='font-bold text-teal-300 text-xl lg:text-2xl'>Awards</h2>
                  <div className='rounded-xl my-5 border-[1px] border-gray-600 bg-gray-800 bg-opacity-50'>
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
              </div>

              <div>
                <h2 className='font-extrabold text-xl lg:text-2xl bg-gradient-to-r text-transparent bg-clip-text from-teal-400 to-green-300 tracking-wide'>Experience - Computer Science</h2>
                {csExperience.map(({id, image, title, pos, desc, location, date}) => (
                  <div key={id} className='rounded-xl my-5 border-[1px] border-gray-600 bg-gray-800 bg-opacity-50'>
                    <div className='min-h-[8rem] p-4 bg-gray-950 rounded-t-xl flex items-center justify-center'>
                      <img className="mx-auto" src={image} alt={title}/>
                    </div>
                    <div className='p-4'>
                      <ul className='py-2 leading-5'>
                        <li className='text-xl font-bold' dangerouslySetInnerHTML={{__html: title}}></li>
                        <li className='text-gray-400 font-bold mb-3'>{pos}</li>
                        <li className='text-gray-300 mb-3'>{desc}</li>
                        <li className='text-gray-300 mb'>{location}</li>
                        <li className='text-gray-300 text-sm'>{date}</li>
                      </ul>
                    </div>
                  </div>
                ))}
              </div>

              <div>
                <h2 className='font-bold text-teal-300 text-xl lg:text-2xl'>Experience - Other</h2>
                {otherExperience.map(({id, image, title, pos, location, date}) => (
                  <div key={id} className='rounded-xl my-5 border-[1px] border-gray-600 bg-gray-800 bg-opacity-50'>
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