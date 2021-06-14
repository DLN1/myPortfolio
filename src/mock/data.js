import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Jacob', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Jacob Carlberg',
  subtitle: '',
  cta: 'About Me',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: 'On a personal level i am highly motivated, result oriented, self-driven, hard-working, fast learner and constantly looking to improve my skills and keep up to date with the latest tool',
  paragraphThree: '',
  resume: 'https://cvkungen.se/r/uUOjUfRe6', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'Invoice-img.png',
    title: 'Invoice App',
    info: 'Vue 3, vuex, scss, Firebase for backend',
    info2: 'Front-end challenge provided by frontendmentor.com. ',
    url: 'https://invoice-app-e4c26.web.app/',
    repo: 'https://github.com/DLN1/Vue-Invoice-App', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'rest-countries.png',
    title: 'Rest-Countries API',
    info: 'HTML, CSS, JavaScript, API',
    info2: 'Front-end challenge provided by frontendmentor.com. The challenge is to integrate with the REST Countries API to pull country data and display it like in the provided designs.',
    url: 'https://rest-countriess-6lsrlmn18.vercel.app/',
    repo: 'https://github.com/DLN1/rest-countries', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'blogr-desktop.png',
    title: 'Blogr Landing Page',
    info: 'HTML, CSS, Bootstrap',
    info2: 'Front-end challenge provided by frontendmentor.com. The challenge is to build out the landing page as close as the provided design as possible.',
    url: 'https://blogr-frontendmentor-dln1.vercel.app/',
    repo: 'https://github.com/DLN1/blogr-frontendmentor', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'clipboard.png',
    title: 'Clipboard Landing Page',
    info: 'HTML, CSS, Bootstrap',
    info2: 'Front-end challenge provided by frontendmentor.com. The challenge is to build out the landing page as close as the provided design as possible.',
    url: 'https://clipboard-landing-page-swart-five.vercel.app/',
    repo: 'https://github.com/DLN1/clipboard-landing-page', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'jacobcarlberg97@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/jacob-carlberg-048685195/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/DLN1',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
