import ircc from '../images/experience/ircc.png'
import carleton from '../images/experience/carleton.png'
import canadianTire from '../images/experience/canadianTire.png'
import swissKeg from '../images/experience/swissKeg.png'
import google from '../images/experience/google.png'
import stroch from '../images/experience/stroch.png'

const education = [
    {
      id: 112,
      image: carleton,
      title: 'Bachelor of Computer Science',
      school: 'Carleton University',
      desc: ["Stream/Specialization: Artificial Intelligence and Machine Learning"],
      grade: 'GPA: 11.73/12.0',
      date: 'Expected Graduation: May 2025'
    },
    {
      id: 21,
      image: stroch,
      title: 'Ontario Secondary School Diploma',
      school: 'St. Roch Catholic Secondary School',
      desc: ["Graduated with High Honours"],
      date: 'Graduation: June 2021'
    }
]

const awards = [
    {
        id: 1,
        title: 'Carleton University Deans\' Honour List (3)',
        date: 'May 2022, May 2023, May 2024'
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
        image: google,
        title: 'Software Engineering Internship at Google',
        pos: 'Google Groups Platform',
        desc: [
            'Implemented two new backend APIs for Groups team with Java to refactor and improve the codebase',
            'Added individual monitoring, improved maintainability, and more accurate latency tracking',
            'Completed the project with over 15K lines of code and 90% test coverage and integration tests',
        ],
        location: 'Sunnyvale, CA - US',
        date: 'June 2024 - August 2024'
    },
    {
        id: 2,
        image: ircc,
        title: 'Test Automation Internship at <abbr title="Immigration, Refugees, Citizenship Canada">IRCC</abbr>',
        pos: 'FSWEP Program',
        desc: [
        'Developed and implemented automated regression, acceptance, and unit tests in C# utilizing Selenium and NUnit within Visual Studio.',
        'Contributed to enhancing our team’s automation framework codebase and outdated scripts.'
        ],
        location: 'Remote',
        date: 'May 2023 - April 2024'
    },
    {
        id: 3,
        image: carleton,
        title: 'Teaching Assistant at Carleton University',
        pos: 'Computer Science Dept.',
        desc: [
        'Marked assignments and tests in Python/Java',
        'Led multiple tutorial presentations with 30+ students and mentored them personally during Office hours',
        ],
        location: 'Ottawa, Ontario - CA',
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