import { FaReact, FaNode, FaCss3Alt, FaNodeJs } from 'react-icons/fa';
import { SiJavascript } from 'react-icons/si';

import Project1 from '../assets/To-Do.png';
import Project2 from '../assets/Blogger.png';

export const Skills = [
    {
        id: 0,
        tech: 'React JS',
        icon: <FaReact />
    },

    {
        id: 1,
        tech: 'Node JS',
        icon: <FaNode />
    },

    {
        id: 2,
        tech: 'CSS',
        icon: <FaCss3Alt />
    },

    {
        id: 3,
        tech: 'Javascript',
        icon: <SiJavascript />
    },
];

export const projectDetails = [
    {
        id:0,
        project_name:"MyTask Organizer",
        project_desc: "MyTask Organizer is a user-friendly to-do app that Ive developed using the power of ReactJs. This app is designed to help you efficiently manage your tasks and stay organized in your daily life. Whether you're a student striving to meet deadlines, a professional juggling multiple projects, a homemaker managing household chores, or an adventurer planning your next escapade, this app adapts to you.",
        tech_stack: ['React JS'],
        project_img: Project1,
        project_url: 'https://www.youtube.com',
        reverse: false,
    },

    {
        id:0,
        project_name:"Blogger",
        project_desc: "Embark on a journey of discovery with Blogger, a world of wanderlust and exploration at your fingertips. Our travel blogging website is a treasure trove of captivating travel narratives, breathtaking visuals, and expert travel advice. We take you on a virtual tour of the most enchanting destinations across the globe, offering in-depth insights into culture, cuisine, and hidden gems.",
        tech_stack: ['HTML,CSS,Javascript'],
        project_img: Project2,
        project_url: 'https://www.youtube.com',
        reverse: true,
    }

]

export const navLinks =[
    {
        id: 0,
        name: 'Home',
        href: 'Home'
    },

    {
        id: 1,
        name: 'My Skills',
        href: 'Skills'
    },

    {
        id: 2,
        name: 'My Projects',
        href: 'Projects'
    },

    {
        id: 3,
        name: 'My Contact',
        href: 'Contact'
    },
]