import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Max Huckstepp', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Hello!', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Max Huckstepp.',
  subtitle: 'Thanks for visiting, scroll down to see my projects and contact info.',
  cta: 'Learn more',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpeg',
  paragraphOne:
    'Max is a software developer who has 7+ years experience working for software companies in the Robotics and Industrial IoT industries. His interests outside of work include reading, running and meditation.',
  paragraphTwo:
    "Max likes to learn new things and play with gadgets, he has tried almost every smart home device. He also enjoys flying RC planes and drones and is currently trying to pick up the harmonica (it's not going well)",
  resume: 'https://www.linkedin.com/in/max-huckstepp/', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'hrf.png',
    title: 'Human Rights First - Blue Witness ',
    info:
      'An application to provide mapping and visibility into 1300+ police use of force events scraped from social media sites for journalists and the general public',
    url: 'https://a.humanrightsfirst.dev/',
    repo: 'https://github.com/Lambda-School-Labs/human-rights-first-police-fe-a', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'notxkcd.jpeg',
    title: 'notxkcd Web App',
    info:
      'As a big fan of xkcd comics, I thought the official xkcd website was lacking and decided to build my own.',
    info2:
      'This project is a monolith built with React, Redux, Node, Express, Postgres, Tailwind, react-chart-js, and Cron',
    url: 'https://maxhxkcd.herokuapp.com/',
    repo: 'https://github.com/mhuckstepp/notxkcd', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'plants.jpeg',
    title: 'Water My Plant',
    info:
      'I built this app to help people remember to water their plants at the right time. The site checks local weather to update watering schedule when it rains and sends email notifications to users to water.',
    info2:
      'Built with React, Redux, Node, Express, Postgres, Styled Components, Heroku Scheduler, SendGrid API, OpenWeather API',
    url: 'https://water-my-plants.vercel.app/',
    repo: 'https://github.com/mhuckstepp/backendwaterplants', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'mhuckstepp@gmail.com',
  btn: 'contact me',
  email: 'mhuckstepp@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/max-huckstepp/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/mhuckstepp',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
