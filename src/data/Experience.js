import ircc from '../images/experience/ircc.png'
import carleton from '../images/experience/carleton.png'
import canadianTire from '../images/experience/canadianTire.png'
import swissKeg from '../images/experience/swissKeg.png'

const education = [
    {
      id: 112,
      title: 'Bachelor of Computer Science',
      school: 'Carleton University',
      desc: ["Stream/Specialization: Artificial Intelligence and Machine Learning"],
      grade: 'GPA: 11.7/12.0',
      date: 'Expected Graduation: May 2025'
    },
    {
      id: 21,
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
        title: 'Test Automation Internship at <abbr title="Immigration, Refugees, Citizenship Canada">IRCC</abbr>',
        pos: 'FSWEP Program',
        desc: [
        'Developed and implemented automated regression, acceptance, and unit tests in C# utilizing Selenium and NUnit within Visual Studio.',
        'Enhanced QA by collaborating with cross-functional teams to integrate testing and data creation',
        "Utilized Git for version control and Azure DevOps for codebase management and CI/CD.",
        'Identified and documented bugs in system',
        'Contributed to enhancing our team’s automation framework codebase and outdated scripts.'
        ],
        location: 'Remote',
        date: 'May 2023 - Present'
    },
    {
        id: 2,
        image: carleton,
        title: 'Teaching Assistant at Carleton University',
        pos: 'Computer Science Dept.',
        desc: [
        'Marked assignments and exams in Python/Java',
        'Led multiple tutorial presentations with 30+ students',
        'Mentored first-year students, boosting their confidence and motivation to learn',
        'Worked with faculty to enhance teaching techniques'
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