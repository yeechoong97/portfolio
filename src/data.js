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
    "I'm interested in Mobile App Development and also Backend Development",
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
}]

const projects = [{
    title: "Volunter Management System",
    type: "Web Application",
    course: "Team Project",
    year: "2019",
    summary: "This project focused on easing the jobs of CyberCare Organization adminstrator :",
    lang: ["HTML", "CSS", "PHP", "Laravel", "JavaScript"],
    objectives: ["Keep track of programme details", "Extract data from programme", "Allocate manpower through online", "Reward volunteers based on milestones", "Notify volunteers via platform"],
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

export { urlContents, conversation, iconPack, projects }