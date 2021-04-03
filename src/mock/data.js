import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Max Huckstepp', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: 'Hello!', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Max Huckstepp',
  subtitle: 'Software Developer',
  cta: 'Learn more',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'Max is a former enterprise software sales and customer facing engineer turned software developer. His interests include reading, running and meditation.',
  paragraphTwo:
    "Max likes to learn new things and play with gadgets, he has tried almost every smart home device. He also enjoys flying RC planes and drones and is currently trying to pick up the harmonica (it's not going well)",
  resume: 'https://www.linkedin.com/in/max-huckstepp/', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'notxkcd.jpg',
    title: 'notxkcd Web App',
    info:
      'As a big fan of xkcd comics, I thought the xkcd website was lacking and decided to build my own.',
    info2: 'This project utilized react, redux, tailwind.css',
    url: 'https://notxkcd.vercel.app/',
    repo: 'https://github.com/mhuckstepp/notxkcd', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'plants.jpg',
    title: 'Water My Plant',
    info: 'I built this app to help people remember to water their plants on the right schedule.',
    info2: ' Built with React and Redux',
    url: 'https://frontend-phi-ivory.vercel.app/myplants',
    repo: 'https://github.com/mhuckstepp/WaterMyPlants', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: "Let's talk",
  btn: 'contact me',
  email: 'mhuckstepp@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/home',
    },

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
