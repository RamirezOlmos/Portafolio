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
  git,
  nextjs,
  net,
  c_sharp,
  monetizandoIdeas,
  pulppo,
  visual_components,
  imss,
  videogames,
  pulppo_landing,
  openai_codex,
  finance_dashboard,
  selfDrivingCar_js,
  message_app,
  asteroids_game,
  tetris,
  santander,
  cindy_posadas,
  jared_hernandez,
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
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: ".Net",
    icon: net,
  },
  {
    name: "C#",
    icon: c_sharp,
  },
];

const experiences = [
  {
    title: "FullStack Developer",
    company_name: "Monetizando Ideas",
    icon: monetizandoIdeas,
    iconBg: "#383E56",
    date: "August 2023 - October 2023",
    points: [
      "Subscriptions Management: Designed and executed the entire subscriptions management system, encompassing database architecture and complete CRUD functionality on the backend. Leveraged Express, Typescript, Object-Oriented Programming principles, and implemented dependency injection with Tsyringe. Adhered to Domain-Driven Design principles for the backend structure. Created the frontend using Next.js, React, and Tailwind CSS, with the UI design meticulously crafted in Figma.",
      "PDF Upload and Display: Successfully implemented the capability to upload and display PDF documents within the SaaS project. This functionality seamlessly integrates into multiple facets of the project, from uploading End-User License Agreements (EULA) to presenting them to users.",
      "Password Recovery: Played a pivotal role in the password recovery feature, which involves sending confirmation codes to users via email to verify their accounts. Once users input the code in the interface, they are directed to a password recovery link. Additionally, designed the user interface for the email notifications sent during this process.",
      "Dashboard UI Development: Contributed to the user interface development of the project's dashboard, adhering to the design concepts originated in Figma. Employed Tailwind CSS to ensure an aesthetically pleasing and user-friendly interface.",
    ],
  },
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
    testimonial: `Deneb es una persona que destaca por su incomparable disciplina y dedicación 
       a los temas de su interés. Resalta su constante aspiración por actualizarse y 
       utilizar las herramientas aprendidas en sus actividades cotidianas tanto laborales 
       como proyectos de índole personal. Sobresale su capacidad por aprender de manera 
       constante y autodidacta cuando la situación lo apremia. Deneb cuenta con las 
       competencias sociales, atributos personales, cualidades y actitudes (soft skills) 
       necesarias para desenvolverse en equipos altamente efectivos en la consecución de 
       logro de objetivos en proyectos específicos.`,
    name: "Jared Hernandez",
    designation: "Titular de la Dirección de Planeación y Evaluación",
    company: "SISTEMA PÚBLICO DE RADIODIFUSIÓN DEL ESTADO MEXICANO",
    image: jared_hernandez,
  },
  {
    testimonial: `Deneb es una persona que aprende rápido y lo considero sumamente 
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
    testimonial: `Deneb es un profesional altamente capacitado y un miembro de equipo 
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
    name: "Tetris",
    description: `The Tetris game is a modern adaptation of the classic 1985 Tetris 
       game, enhanced with two new features. First, it introduces the ability 
       to "hold" a piece, giving players the option to save it for later 
       and switch it with the next piece when desired. Second, it includes 
       a preview feature that displays the upcoming piece, allowing players 
       to strategize their moves. The game was developed using the .NET WTF 
       framework and the C# programming language, ensuring a smooth and 
       enjoyable gaming experience.`,
    tags: [
      {
        name: "C#",
        color: "blue-text-gradient",
      },
      {
        name: ".NET WPF",
        color: "green-text-gradient",
      },
      {
        name: "OOP",
        color: "pink-text-gradient",
      },
    ],
    image: tetris,
    source_code_link: "https://github.com/RamirezOlmos/Tetris",
  },
  {
    name: "Real-Time Message App",
    description: `This app operates in real-time, much like popular messaging 
       platforms such as WhatsApp. Developed using Next.js 13 and 
       Typescript, it leverages the upstash Redis database to deliver 
       optimal performance and responsiveness. Consequently, users can 
       expect no lag when sending messages or accepting/rejecting friend 
       requests.`,
    tags: [
      {
        name: "TypeScript",
        color: "blue-text-gradient",
      },
      {
        name: "Next.js 13",
        color: "green-text-gradient",
      },
      {
        name: "React",
        color: "pink-text-gradient",
      },
    ],
    image: message_app,
    source_code_link: "https://github.com/RamirezOlmos/message-app",
  },
  {
    name: "Asteroids Game",
    description: `The Asteroids game, developed using Python and pygame, 
       employs Object-oriented programming (OOP) and shares 
       striking similarities with the classic asteroid game 
       once played on Atari consoles.`,
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "pygame",
        color: "green-text-gradient",
      },
      {
        name: "OOP",
        color: "pink-text-gradient",
      },
    ],
    image: asteroids_game,
    source_code_link: "https://github.com/RamirezOlmos/asteroids_pygame",
  },
  {
    name: "Finance Dashboard",
    description: `The finance dashboard is an all-encompassing tool that allows users 
       to efficiently track financial data and make informed decisions. It 
       boasts a diverse range of dynamic graphs and tables that provide detailed 
       insights into revenue, expenses, profits, and product sales. Moreover, the 
       prediction section of the dashboard incorporates a linear regression model, 
       which accurately predicts the revenue for the upcoming year, providing valuable 
       information for future planning. One of the significant advantages of this 
       dashboard is its customizable nature, allowing businesses to tailor it to 
       their specific needs, ensuring that the dashboard is a perfect fit for their 
       financial management requirements.`,
    tags: [
      {
        name: "machine learning",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "react",
        color: "pink-text-gradient",
      },
    ],
    image: finance_dashboard,
    source_code_link: "https://github.com/RamirezOlmos/finance_dashboard",
  },
  {
    name: "Self Driving Car Neural Networks",
    description: `This project utilizes a range of elements including car physics, 
       road generation, collision-detecting sensors, traffic generation, 
       neural networks, and genetic algorithms, to create a comprehensive 
       simulation of a self-driving car.`,
    tags: [
      {
        name: "neural networks",
        color: "blue-text-gradient",
      },
      {
        name: "vanilla javascript",
        color: "green-text-gradient",
      },
      {
        name: "machine learning",
        color: "pink-text-gradient",
      },
    ],
    image: selfDrivingCar_js,
    source_code_link:
      "https://github.com/RamirezOlmos/Self_Driving_Car_JS/tree/main",
  },
  {
    name: "Videogames",
    description: `Web-based platform that allows users to search Videogames 
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
    description: `Redesigned the landing page to create a simpler and more intuitive 
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
    description: `The Web-based platform features an elegant user interface that emulates the 
       ChatGPT app. Seamlessly integrated with the advanced GPT-3 model API, 
       users can submit their code to request translations to other programming 
       languages, check for errors, or perform other programming tasks. The system 
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
