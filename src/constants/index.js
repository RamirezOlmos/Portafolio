import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  python,
  r_logo,
  git,
  figma,
  pulppo,
  visual_components,
  imss,
  videogames,
  pulppo_landing,
  openai_codex,
  threejs,
  santander,
  cindy_posadas,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Data Analyst",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "R",
    icon: r_logo,
  },
];

const experiences = [
  {
    title: "Intern",
    company_name: "Pulppo",
    icon: pulppo,
    iconBg: "#383E56",
    date: "February 2023 - March 2023",
    points: [
      "Played a role in enhancing both of Pulppo's services. Pulppo Public is aimed at users looking to buy or rent a property, while Pulppo Agent is an innovative CRM designed for real estate companies.",
      "For the Pulppo Public service, redesigned the landing page to create a simpler and more intuitive user experience. This involved removing distracting elements and streamlining the design. To accomplish this, studied the base code from both Pulppo Agent and Pulppo Public, utilizing React, Next.js, antd, and Tailwind CSS to modify what was necessary and leverage helpful code for the project..",
      "Created a new Profile section for Pulppo Agent using React, Tailwind CSS, and antd. This section is crucial as real estate agents currently lack the ability to modify their profile information. With my contributions, agents can now manage their profiles with greater ease and efficiency.",
    ],
  },
  {
    title: "Business Development Manager",
    company_name: "Visual Components",
    icon: visual_components,
    iconBg: "#E6DEDD",
    date: "October 2021 - February 2022",
    points: [
      "In charge of the business development and administration..",
      "Create leads to sell the Visual Components and Delfoi softwares..",
      "Give presentation of Visual Components Software to prospects.",
      "Manage the CRM.",
      "Simulate manufacturing projects in Visual Components for clients, using python.",
    ],
  },
  {
    title: "Technical Coordinator in the Research Coordination",
    company_name: "IMSS",
    icon: imss,
    iconBg: "#383E56",
    date: "April 2018 - September 2021",
    points: [
      "As the coordinator for large database wrangling, expansion, data analysis and reporting, I streamlined team communication to optimize data workflows and meet deadlines.",
      "Implementing a text classifier using TARS, a machine learning natural language processing (NLP) model from Flair package in Python, which reduced textual classification time from survey answers by 2 weeks.",
      "Developing a system to verify thousands of emails with TARS machine learning text classifier from Flair package in Python, reducing the verification process by 4 days.",
      "Enhancing the reporting and analysis capabilities of the Directorate-General of IMSS by creating dashboards with Python Dash.",
      "Devising a new approach for data wrangling and database creation in SPSS and Python from data generated from online surveys, reducing the reporting time by 1 week.",
      "Creating a composite indicator to measure client satisfaction from survey data and compare performance between delegations nationally.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      `Deneb es una persona que aprende rápido y lo considero sumamente 
       capaz para realizar cualquier trabajo en lo que a tecnologias web 
       y aplicaciones REST se refiere, ya tiene antecedentes de ser data 
       scientist por lo cual complementa muy bien el conocimiento adquirido 
       en Henry para ser Fullstack developer.`,
    name: "Israel Santander Mendoza",
    designation: "Full Stack Developer",
    company: "Henry",
    image: santander,
  },
  {
    testimonial:
      `Deneb es un profesional altamente capacitado y un miembro de equipo 
       comprometido. Durante nuestra colaboración en Pulppo, demostró 
       habilidades excepcionales en el trabajo en equipo, el análisis y 
       resolución de problemas, y la capacidad de entender rápidamente el 
       código. Su capacidad para trabajar en equipo y comunicarse de manera 
       efectiva aseguró que estuviéramos en la misma página en cada parte del 
       proyecto. Además, tiene un excelente conocimiento de las tecnologías 
       de Full Stack y es capaz de analizar problemas de manera rápida y 
       eficiente, lo que lo convierte en un valioso activo para cualquier 
       equipo de desarrollo.`,
    name: "Cindy Posadas",
    designation: "Frontend Developer",
    company: "Vauxoo",
    image: cindy_posadas,
  },
  /* { */
  /*   testimonial: */
  /*     "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!", */
  /*   name: "Lisa Wang", */
  /*   designation: "CTO", */
  /*   company: "456 Enterprises", */
  /*   image: "https://randomuser.me/api/portraits/women/6.jpg", */
  /* }, */
];

const projects = [
  {
    name: "Videogames",
    description:
      `Web-based platform that allows users to search Videogames 
       information from the RAWG API. The platform also allows users
       to create new information and store it a PostgreSQL database.`,
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "green-text-gradient",
      },
      {
        name: "redux",
        color: "pink-text-gradient",
      },
    ],
    image: videogames,
    source_code_link: "https://github.com/RamirezOlmos/Videogames",
  },
  {
    name: "Realstate CRM",
    description:
      `Redesigned the landing page to create a simpler and more intuitive 
       user experience for the Pulppo Public service. Created a new Profile 
       section for Pulppo Agent`,
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "next.js",
        color: "green-text-gradient",
      },
      {
        name: "tailwind css",
        color: "pink-text-gradient",
      },
    ],
    image: pulppo_landing,
    source_code_link: "https://github.com/RamirezOlmos",
  },
  {
    name: "OpenAI Codex",
    description:
      `The Web-based platform features an elegant user interface that emulates the 
       ChatGPT app. Seamlessly integrated with the advanced GPT-3 model API, 
       users can submit their code to request translations to other programming 
       languages, check for errors, or perform other programming tasks. Our system 
       provides a user-friendly interface to streamline the programming experience.`,
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "OpenAI",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
    ],
    image: openai_codex,
    source_code_link: "https://github.com/RamirezOlmos/openAI_codex_JS",
  },
];

export { services, technologies, experiences, testimonials, projects };
