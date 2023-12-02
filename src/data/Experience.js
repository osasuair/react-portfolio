import ircc from '../images/experience/ircc.png'
import carleton from '../images/experience/carleton.png'
import canadianTire from '../images/experience/canadianTire.png'
import swissKeg from '../images/experience/swissKeg.png'

const education = [
    {
      id: 1,
      title: 'Bachelor of Computer Science',
      school: 'Carleton University',
      desc: ["Stream/Specialization: Software Engineering"],
      grade: 'GPA: 11.7/12.0',
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
        title: 'Carleton University Deans\' Honour List (2)',
        date: 'May 2022, May 2023'
    },
    {
        id: 2,
        title: 'Walter A. Ainsworth Bursary ($1,900)',
        date: 'January 2023'
    },
    {
        id: 3,
        title: 'Henry Marshall Tory Scholarship ($3,000)', 
        date: 'September 2022'
    },
    {
        id: 4,
        title: 'Carleton University President\'s Scholarship ($12,000)',
        date: 'September 2021'
    }
]

const csExperience = [
    {
        id: 1,
        image: ircc,
        title: 'Test Automation Internship at <abbr title="Immigration, Refugees and Citizenship Canada">IRCC</abbr>',
        pos: 'FSWEP Program',
        desc: [
        'Automated sanity and regression testing using Selenium and C#, reducing manual testing by 15%',
        'Enhanced quality assurance by collaborating with various teams to integrate testing into CI/CD Pipeline via Azure DevOps',
        'Identified and documented defects, improving detection of critical unidentified bugs',
        'Contributed to enhancing the automation framework'
        ],
        location: 'Ottawa, Ontario / Remote',
        date: 'May 2023 - Present'
    },
    {
        id: 2,
        image: carleton,
        title: 'Teaching Assistant at Carleton University',
        pos: 'Computer Science Dept.',
        desc: [
        'Communicated with faculty to enhance teaching techniques, developing modern approaches for students\' benefit',
        'Marked assignments and exams in Python/Java, providing detailed feedback',
        'Led multiple tutorial sessions of 30+ students, providing in-depth explanations',
        'Mentored first-year students, boosting their confidence and motivation to learn'
        ],
        location: 'Ottawa, Ontario',
        date: 'September 2022 - April 2023'
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

export { education, awards, csExperience, otherExperience }