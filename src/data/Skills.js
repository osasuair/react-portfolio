import cpp from '../images/skills/cpp.png'
import csharp from '../images/skills/csharp.png'
import kotlin from '../images/skills/kotlin.png'
import java from '../images/skills/java.png'
import js from '../images/skills/js.png'
import python from '../images/skills/python.png'
import git from '../images/skills/git.png'
import mongodb from '../images/skills/mongodb.png'
import sql from '../images/skills/sql.png'

const skillDesc = "These are the technical abilities I've acquired during my computer science journey so far.<br />I want to make it clear that I'm not saying I'm perfect at all of these, because that would be almost impossible and honestly, not accurate.<br/>Rather, I'm confident in my ability to thrive in any role that involves these technical skills, and I'm committed to enhancing my expertise as needed.</p>"

const skills = [
    {
        id: 1,
        src: java,
        title: 'Java',
    },
    {
        id: 2,
        src: cpp,
        title: 'C++',
    },
    {
        id: 3,
        src: js,
        title: 'JavaScript',
    },
    {
        id: 4,
        src: csharp,
        title: 'C#',
    },
    {
        id: 5,
        src: python,
        title: 'Python',
    },
    {
        id: 6,
        src: mongodb,
        title: 'MongoDB',
    },
    {
        id: 7,
        src: git,
        title: 'Git',
    },
    {
        id: 8,
        src: sql,
        title: 'MySQL',
    },
    {
        id: 9,
        src: kotlin,
        title: 'Kotlin',
    }
]

const courses = ['Data Structures and Algorithms', 'Software Engineering in C++', 'Web Application Development', 'Objected Oriented Programming in Java',
    'Discrete Structures I-II', 'Programming Paradigms in Haskell/Prolog', 'Linear Algebra I-II', 'Calculus I', 'Systems Programming', 'Statistic Modelling'
]

const methodologies = ['Test-Driven Development', 'Agile', 'Object-Oriented Programming', 'Functional Programming', 'Clean Code', 'Useful Comments', "Windows/Linux", 'Virtual Machines']

export { skillDesc, skills, courses, methodologies }