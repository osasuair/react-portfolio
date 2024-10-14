import cpp from '../images/skills/cpp.png'
import csharp from '../images/skills/csharp.png'
import kotlin from '../images/skills/kotlin.png'
import java from '../images/skills/java.png'
import js from '../images/skills/js.png'
import python from '../images/skills/python.png'
import git from '../images/skills/git.png'
import mongodb from '../images/skills/mongodb.png'
import sql from '../images/skills/sql.png'

const skillDesc = "These are some of the technical abilities and skills I've acquired during my computer science journey so far.<br />I want to make it clear that I'm not saying I'm perfect at all of these, because that would be almost impossible and not an accurate statement.<br/>However, I'm confident in my ability to thrive in any role that involves these technical skills, and I'm committed to enhancing my expertise as needed.</p>"

const skills = [
    {
        id: 1,
        src: java,
        title: 'Java',
    },
    {
        id: 2,
        src: js,
        title: 'JavaScript',
    },
    {
        id: 3,
        src: python,
        title: 'Python',
    },
    {
        id: 4,
        src: cpp,
        title: 'C++',
    },
    {
        id: 5,
        src: csharp,
        title: 'C#',
    },
    {
        id: 6,
        src: git,
        title: 'Git',
    },
    {
        id: 7,
        src: mongodb,
        title: 'MongoDB',
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

const courses = ['OOP in Java', 'Intro to Machine Learning', 'Intro to Artificial Intelligence', 'Web Applications', 'Software Engineering in C++', 'Design and Analysis of Algorithms', 'Computer Vision', 'Data Structures and Algorithms',
     "Human-Computer Interaction", 'Linear Algebra', 'Calculus' 
]

const methodologies = ['Agile (Scrum)', 'Object-Oriented Programming', 'Functional Programming',  'Aspect-Oriented Programming', "Linux", 'Windows', 'Virtual Machines']

export { skillDesc, skills, courses, methodologies }