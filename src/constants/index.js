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
  mongodb,
  git,
  figma,
  docker,
  gateway,
  threejs,
  columbia,
  springboard,
  cvp,
  tiger,
  outOfThisWorld,
  crabHouse,
  companion,
  ai,
  strings,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
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
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "Typescript & Javascript",
    icon: mobile,
  },
  {
    title: "Nextjs, Nestjs and React",
    icon: backend,
  },
  {
    title: "SQL, MySQL, Express and MongoDB",
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
    name: "MongoDB",
    icon: mongodb,
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
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Astrophysics / Computer Science",
    company_name: "Columbia University New York",
    icon: columbia,
    iconBg: "#383E56",
    date: "September 2019 - May 2022",
    points: [
      "Learned and implemented 10+ numerical intergration techniques for studiying and modeling the universe with Python.",
      "Build 2 Solar System simulation models using Python, Blender, and Pandascv.",
      "Designed and implemented N-body simulations, Monte Carlo methods and smooth particle hydrodynamic simulations using Python.",
      "Completed rigorous coursework in Physics, Mathematics and computational astrophysics using Python.",
    ],
  },
  {
    title: "Full Stack Internship",
    company_name: "Springboard",
    icon: springboard,
    iconBg: "#E6DEDD",
    date: "December 2021 - September 2022",
    points: [
      "Developed and maintained 10+ web applications using React.js and other related technologies.",
      "Worked with senior developers to learn and master best workflow practices using GIT, BASH, and other developer tools.",
      "Helped mentor 10+ bootcamp students through full stack programming curriculum.",
      "Developed 15+ REST API's using Express and MongoDB.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "CVP - Contract for Enviromental Protection Agency",
    icon: cvp,
    iconBg: "#383E56",
    date: "August 2022 - June 2023",
    points: [
      "Developed 30+ custom interfaces using javascript and redux tool-kit for the frontend team.",
      "Implemented 15+ new features as defined and scoped by the client and development team.",
      "Gave 10+ product and feature presentations to the client at the end of designated sprints.",
      "Build 15+ new api routes, controllers and modules for our backend database using Nextjs.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Jordan proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Jordan does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Jordan optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "AI Companion",
    description:
      "Fully responsive web app that allows users to have real time conversations with creatable AI models. The project features generated conversations using OpenAI, full email, and google user authentication, Stripe monthly subscription, error handling and full crud functionality with MYSQL database.",
    tags: [
      {
        name: "Next 13, OpenAI, Stripe",
        color: "blue-text-gradient",
      },
      {
        name: "Prisma, MYSQL, PlanetScale",
        color: "green-text-gradient",
      },
      {
        name: "Pinecone Vector DB, Upstash Redis DB",
        color: "pink-text-gradient",
      },
    ],
    image: companion,
    source_code_link: "https://github.com/MACKINtossh/ai-companion",
    source_code_link2: "https://companion-io.vercel.app",
  },
  {
    name: "AI Generator",
    description:
      "This website is an AI generator that allows users to sign in and generate code, images, music, videos and conversations. Conversations and images use OpeAI and videos and music are generated using the Replicate API. The project also features full user authentication, stripe subscriptions and full responsiveness. Prisma, MYSQL and PlanetScale were used for the backend production. The project also features AI customer service with Crisp. ",
    tags: [
      {
        name: "Next 13, OpenAI, Replicate",
        color: "blue-text-gradient",
      },
      {
        name: "Prisma, MYSQL, PlanetScale",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind (Shadcn UI), Stripe, Crisp",
        color: "pink-text-gradient",
      },
    ],
    image: ai,
    source_code_link: "https://github.com/MACKINtossh/ai-saas",
    source_code_link2: "https://raindrop-saas.vercel.app",
  },
  {
    name: "Strings",
    description:
      "Social media app based on the new Threads application by META. This project includes image uploading with Uploadthing, real-time listener events with webhooks, and full user authentication. Users can communicate between themselves and and create and delete communities.",
    tags: [
      {
        name: "Next 13, Shadcn UI",
        color: "blue-text-gradient",
      },
      {
        name: "SQL, MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind, Zod, Uploadthing",
        color: "pink-text-gradient",
      },
    ],
    image: strings,
    source_code_link: "https://github.com/MACKINtossh/strings",
    source_code_link: "https://github.com/MACKINtossh/strings",
  },
];

export { services, technologies, experiences, testimonials, projects };
