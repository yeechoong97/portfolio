const urlContents = [{
    name: 'facebook',
    background: 'bg-facebook',
    icon: 'fa-facebook-f',
    url: "https://www.facebook.com/see.yeechoong"
},
{
    name: 'github',
    background: 'bg-github',
    icon: 'fa-github',
    url: 'https://github.com/yeechoong97'
},
{
    name: 'instagram',
    background: 'bg-instagram',
    icon: 'fa-instagram',
    url: 'https://www.instagram.com/yee_choong97/'
},
{
    name: 'linkedin',
    background: 'bg-linkedin',
    icon: 'fa-linkedin',
    url: "https://www.linkedin.com/in/see-yee-choong-405a471bb/"
},
]

const conversation = [
    "Hi there. Nice to meet you ! 😊",
    "Hi Yee Choong 😁. Where did you completed your degree?",
    "I'm completed my Software Engineering degree in Universiti Tunku Abdul Rahman (UTAR)",
    "Sounds good. Then what is your current interest in IT industry?",
    "I'm interested in Mobile App development and also Backend development",
    " ",
]

const iconPack = [{
    name: "NodeJS",
    path: "./icons/nodejs.png",
    link: "https://nodejs.org/en/"
}, {
    name: "Laravel",
    path: "./icons/laravel.png",
    link: "https://laravel.com/"
}, {
    name: "JavaScript",
    path: "./icons/javascript.png",
    link: "https://www.javascript.com/"
}, {
    name: "Heroku",
    path: "./icons/heroku.png",
    link: "https://www.heroku.com/"
}, {
    name: "PHP",
    path: "./icons/php.png",
    link: "https://www.php.net/"
}, {
    name: "HTML",
    path: "./icons/html.png",
    link: "#"
}, {
    name: "CSS",
    path: "./icons/css.png",
    link: "#"
}, {
    name: "React JS",
    path: "./icons/react.png",
    link: "https://reactjs.org/"
}, {
    name: "React Native",
    path: "./icons/react.png",
    link: "https://reactnative.dev/"
}, {
    name: "Java",
    path: "./icons/java.png",
    link: "https://www.java.com/en/"
}, {
    name: "C#",
    path: "./icons/csharp.png",
    link: "https://docs.microsoft.com/en-us/dotnet/csharp/"
}, {
    name: "Python",
    path: "./icons/python.png",
    link: "https://www.python.org/"
}, {
    name: "Flutter",
    path: "./icons/flutter.png",
    link: "https://flutter.dev/"
}, {
    name: "TypeScript",
    path: "./icons/typescript.png",
    link: "https://www.typescriptlang.org/"
}, {
    name: "MySQL",
    path: "./icons/mysql.png",
    link: "https://www.mysql.com/"
}, {
    name: "Firebase",
    path: "./icons/firebase.png",
    link: "https://firebase.google.com/"
}]

const projects = [{
    title: "Volunter Management System",
    type: "Web Application",
    course: "Team Project",
    year: "2019",
    summary: "This project focused on easing the jobs of CyberCare Organization adminstrator :",
    lang: ["HTML", "CSS", "PHP", "Laravel", "JavaScript"],
    objectives: ["Keep track of programme details", "Extract data from programme", "Allocate manpower through online", "Reward volunteers based on milestones", "Notify volunteers via platform", "Register programmes and events"],
    image: "./VMS.png",
}, {
    title: "FOREX E - Learning and Currency Exchange Simulation Platform",
    type: "Web Application",
    course: "Final Year Project",
    year: "2021",
    summary: "This project focused on providing opportunities for a new beginner trader to :",
    lang: ["HTML", "CSS", "PHP", "Laravel", "JavaScript", "NodeJS", "Heroku"],
    objectives: ["Understand the trading mechanism", "Explore the market structure", "Learn the fundamental of FOREX Market", "Experience paper trading", "Communicate with other traders"],
    image: "./FYP.png",
}]

const education = [{
    university: "Asia Pacific University (APU)",
    year: "2015 - 2017",
    course: "Diploma in Information and Communications Technology Specialism in Software Engineering",
    cgpa: "3.76",
    hyperlink: "https://new.apu.edu.my/",
    achievements: [
        { title: "Null", duration: " " }
    ]
}, {
    university: "University Tunku Abdul Rahman (UTAR)",
    year: "2018 - 2021",
    course: "Bachelor of Science (Hons) Software Engineering",
    cgpa: "3.39",
    hyperlink: "https://www.utar.edu.my/",
    achievements: [{
        title: "Participant of Microsoft Insider Dev Tour Kuala Lumpur 2019",
        duration: "22 June 2019"
    }, {
        title: "Committee, 24 Festive Drum Unit",
        duration: "2019 - 2020",
    },
    {
        title: "Auditor, 24 Festive Drum Unit",
        duration: "2020 - 2021",
    },
    {
        title: "Dean List",
        duration: "May 2020",
    },
    ]
}]

const working = [{
    title: "Game Developer",
    company: "RedPoint Technologies Sdn Bhd",
    duration: "Oct 2021 - Aug 2022",
}, {
    title: "Mobile Tester",
    company: "Hong Leong Bank Berhad",
    duration: "Oct 2020 - Jan 2021",
},
{
    title: "Cashier",
    company: "S.Y Enterprise",
    duration: "June 2017 - May 2018",
},
{
    title: "Kitchen Helper",
    company: "Ginza Japanese Restaurant",
    duration: "Feb 2015 - May 2015",
},
{
    title: "Portal Service",
    company: "Big Bad Wolf",
    duration: "Dec 2018 (2 Weeks)",
},
{
    title: "Waiter",
    company: "Steamboat Restaurant",
    duration: "Oct 2015 - Dec 2015",
},
]

const skills = [{
    type: "Front End",
    languages: [
        "React JS",
        "HTML",
        "CSS"
    ]
}, {
    type: "Back End",
    languages: ["NodeJS",
        "Java",
        "C#",
        "PHP",
        "Python"
    ]
}, {
    type: "Mobile Dev",
    languages: [
        "React Native",
        "Flutter",
    ]
}, {
    type: "Others",
    languages: [
        "JavaScript",
        "TypeScript",
        "Laravel",
    ]
}, {
    type: "Database",
    languages: [
        "MySQL",
        "Firebase"
    ]
}]

const resumeCategory = ["Education", "Experience", "Skills"]

export { urlContents, conversation, iconPack, projects, education, working, resumeCategory, skills }