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
    title: "Astrophysics Major",
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
    title: "Full Stack Fellowship",
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
  {
    title: "Full Stack Developer",
    company_name: "Super Rich - Independant Contractor",
    icon: tiger,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developed 8+ production web applications for clients using Typescript, Javascript, React and Nextjs.",
      "Participated in weekly design sessions with clients to ensure customer needs were met.",
      "Implemented rich user experiences with tailwind CSS, HTML5/6 following CSS best practices.",
      "Identified and corrected 50+ bug fixes.",
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
    name: "Gateway Ice Center",
    description:
      "Built a website for a local ice skating rink with Typescript, React, Nextjs and Tailwind.The website contains several pages of information with dropdowns and calendar functionality. Users can email the business from the website and view updated times and schedules",
    tags: [
      {
        name: "Javascript & React",
        color: "blue-text-gradient",
      },
      {
        name: "Nextjs",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: gateway,
    source_code_link: "https://github.com/MACKINtossh/Gateway-Ice-Center",
  },
  {
    name: "Out Of This World",
    description:
      "This website is a futuristic travel website that allows users to book trips to destinationspreviously off limits to passengers. Buit with Typescript, React, Nextjs MySQL, PlanetScale and Tailwind CSS.",
    tags: [
      {
        name: "Typescript & Nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "green-text-gradient",
      },
      {
        name: "MySQL",
        color: "pink-text-gradient",
      },
    ],
    image: outOfThisWorld,
    source_code_link: "https://github.com/MACKINtossh/out-of-this-world",
  },
  {
    name: "Food Delivery",
    description:
      "Built an e-commerce, food delivery website for East and Southeast Asian delicacies. Built with Typescript, React, Nextjs, MySQL, PlanetScale and Tailwind CSS",
    tags: [
      {
        name: "Typescript & Nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "PlanetScale",
        color: "green-text-gradient",
      },
      {
        name: "MySQL",
        color: "pink-text-gradient",
      },
    ],
    image: crabHouse,
    source_code_link: "https://github.com/MACKINtossh/sushiShop/",
  },
  // {
  //   name: "Lift Off",
  //   description:
  //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "supabase",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: ,
  //   source_code_link: "https://github.com/",
  // },
  // {
  //   name: "Document Sumarizer",
  //   description:
  //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "supabase",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: ,
  //   source_code_link: "https://github.com/",
  // },
  // {
  //   name: "Work Around",
  //   description:
  //     "The demos included here are examples of projects that I have build which have a primary focus on the use of Typescrpt. You can again expect mobile responsive sites and state redux toolkit for state management.",
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "supabase",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: ,
  //   source_code_link: "https://github.com/",
  // },
];

export { services, technologies, experiences, testimonials, projects };
