export const pageTitles = [
  'about',
  'stack',
  'projects',
  'work experience',
  'leisure',
  'contact'
]

export const aboutMe = {
  title: 'about me',
  paragraphs: [
    "I'm Mike, a curious person turned full-stack developer.",
    "I'm passionate about learning and customer experiences - qualities that have lead me through several countries, down different roads, and ultimately brought me to Tampere, Finland.",
    "Click around, get to know me, and I'd love to hear from you if you think we could do something awesome together!"
  ]
}

export const languages = {
  title: 'languages',
  languages: [
    {
      language: 'Danish',
      level: 'Native'
    },
    {
      language: 'English',
      level: 'Fluent'
    },
    {
      language: 'German',
      level: 'Fluent'
    },
    {
      language: 'Finnish',
      level: 'Novice'
    }
  ]
}

export const courseList = {
  title: 'courses',
  courses: [
    {
      end: 'July 2020',
      title: 'The Complete Web Developer in 2020',
      intructor: 'Andrei Neagoie (Udemy)'
    },
    {
      end: 'August 2019',
      title: 'Elements of AI',
      intructor: 'University of Helsinki'
    },
    {
      end: 'September 2019',
      title: 'The Web Developer Bootcamp',
      intructor: 'Colt Steele (Udemy)'
    },
    {
      end: 'September 2018',
      title: 'Object-Oriented programming with Java, part I',
      intructor: 'University of Helsinki'
    },
  ]
}

export const stack = [
  {
    name: 'Front end',
    technologies: [
      'Accessibility',
      'CSS',
      'HTML',
      'JavaScript',
      'Material UI',
      'React.js',
      'React-Bootstrap',
      'Redux',
      'SCSS',
      'TypeScript',
    ],
  },
  {
    name: 'Back end',
    technologies: [
      'ExpressJS',
      'NodeJS',
      'REST API',
      'TypeScript'
    ],
  },
  {
    name: 'Databases',
    technologies: [
      'MongoDB',
      'PostgreSQL'
    ],
  },
  {
    name: 'Testing',
    technologies: [
      'Jest'
    ],
  },
  {
    name: 'DevOps',
    technologies: [
      'Docker',
      'Github Actions'
    ],
  },
  {
    name: 'Other skills',
    technologies: [
      'Adobe Illustrator',
      'Adobe Photoshop',
      'Gimp',
      'Google Adwords',
      'Google Analytics',
      'Inkscape',
      'SEO'
    ],
  },
]

export const education = {
  title: 'education',
  institution: 'Bachelor of Leisure Management, University College Zealand, 2014',
  text: [
    'International management studies within the leisure industries.',
    'They taught me everything to lead and manage a business in the industry but most importantly, this is where I learned to dedicate myself to customer experiences.'
  ]
}

export const projectsList = [
  {
    image: 'https://res.cloudinary.com/dahevvjff/image/upload/v1608280142/portfolio/javzo8ag6u4a28uqa9xt.png',
    title: 'JoinMe',
    stack: [
      'ExpressJS,',
      'Jest,',
      'NodeJS,',
      'PostgreSQL,',
      'React,',
      'Redux,',
      'SCSS,',
      'TypeScript',
    ],
    description: [
      'Group project done at Integrify. Currently still a work in progress',
      'A full stack social media project allowing users to create and find social sports events based on location and activity type.',
      'For this project, I serve(d) as tech lead.',
      'In addition, my tasks are/were especially focused on database management, google APIs and finding new and vetting technologies that were new to the participants of the group.'
    ],
    buttons: [
      // {
      //   name: 'Demo',
      //   link: 'https://joinme-integrify.herokuapp.com/'
      // },
      {
        name: 'Repo',
        link: 'https://github.com/MikeVedsted/JoinMe'
      }
    ],
  },
  {
    image: 'https://res.cloudinary.com/dahevvjff/image/upload/v1604995840/portfolio/zug4b6qu82k7ddrleuh0.png',
    title: 'Hatster',
    stack: [
      'ExpressJS,',
      'Jest,',
      'JWT,',
      'Mailgun,',
      'MongoDB,',
      'Mongoose,',
      'NodeJS,',
      'React-Bootstrap,',
      'React,',
      'Redux,',
      'SCSS,',
      'TypeScript',
    ],
    description: [
      'Individual assignment done at Integrify.',
      'A full stack e-commerce project of my own choosing. Requirements included but were not limited to: authentication (with token saved in local storage), admin roles and actions (CRUD, banning, promoting to admin), option to add products to cart, protected routes and actions, REST API with options to query'
    ],
    buttons: [
      {
        name: 'Demo',
        link: 'https://hatster.netlify.app/'
      },
      {
        name: 'Client repo',
        link: 'https://github.com/MikeVedsted/hatster-client'
      },
      {
        name: 'API repo',
        link: 'https://github.com/MikeVedsted/hatster-api'
      }
    ],
  },
  {
    image: 'https://res.cloudinary.com/dahevvjff/image/upload/v1604997776/portfolio/teejnthaggituapilkkr.png',
    title: "Mike Vedsted's Portfolio",
    stack: [
      'Netlify Forms,',
      'React-Bootstrap,',
      'React,',
      'SCSS'
    ],
    description: [
      'Personal Project.',
      "My personal portfolio (Yes, the very site you are currently on). This was my first project using React-Bootstrap, which I chose to familiarize myself with it and the options for customizing it with custom SCSS. I've used Netlify forms to handle contact form submission without having to build a backend."
    ],
    buttons: [
      {
        name: 'Demo',
        link: 'https://www.vedsted.fi'
      },
      {
        name: 'Repo',
        link: 'https://github.com/MikeVedsted/Personal-Portfolio'
      },
    ],
  },
  {
    image: 'https://res.cloudinary.com/dahevvjff/image/upload/v1604995838/portfolio/kpe6pia4nicxtmd0ednk.png',
    title: 'Countries App',
    stack: [
      'React Context API,',
      'React,',
      'Redux-Saga,',
      'Redux-Thunk,',
      'Redux,',
      'SCSS',
    ],
    description: [
      'Individual assignment done at Integrify.',
      'An app that lets users search the countries of the world and access data on individual pages. Requirements included: using React Context API, Redux, Thunk and Saga, Storing data in local storage, being able to add countries to a cart, having theme switching available.'
    ],
    buttons: [
      {
        name: 'Demo',
        link: 'https://coutries-table.netlify.app/'
      },
      {
        name: 'Repo',
        link: 'https://github.com/MikeVedsted/React-Countries-App'
      },
    ],
  },
]

export const experienceIntro = {
  title: 'my background',
  text: '',
}

export const experience = [
  {
    type: "Experience",
    period: "August 2020 - January 2021",
    title: "Full Stack Developer",
    company: "Integrify Oy",
    location: "Helsinki, Finland",
    flag: 'https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Finland.svg',
    description: '',
    tags: [
      'Full-Stack',
      'Web Development',
      'MERN',
      'PERN'
    ],
    responsibilities: [
      'Taking numerous responsibilities in front-end development with JavaScript and TypeScript and applied frameworks and other tools such as React.js and Redux among many others.',
      'Contributing to the back-end development of various projects with Node.js and Express.js.',
      'Building and managing databases with MongoDB and PostgreSQL.',
      'Conducting software tests with Jest.',
      'Collaborating with other developers of different seniority via GitHub Actions.'
    ],
  },
  {
    type: "Experience",
    period: "January 2019 - August 2020",
    title: "Transcriber",
    company: "Lionbridge Oy",
    location: "Tampere, Finland",
    flag: 'https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Finland.svg',
    description: '',
    tags: [
      'Transcription',
      'Data annotation',
      'AI/ML',
      'Project coordination'
    ],
    responsibilities: [
      'Produced, annotated, and ensured the quality of the data for projects related to Artificial Intelligence and Machine Learning.',
      'In addition, managed minor projects and held the responsibility for various administrative tasks.'
    ],
  },
  {
    type: "Self-study",
    period: "July 2018 - December 2018",
    title: "self-study",
    description: '',
    tags: [
      'Finnish',
      'Web development'
    ]
  },
  {
    type: "Experience",
    period: "September 2016 - June 2018",
    title: "SERS advisor",
    company: "Vistaprint",
    location: "Berlin, Germany",
    flag: 'https://upload.wikimedia.org/wikipedia/en/b/ba/Flag_of_Germany.svg',
    description: '',
    tags: [
      'Customer experience',
      'Internal support',
      'Data handling',
      'Training',
      'Knowledge management',
    ],
    responsibilities: [
      'Supported European contact teams with solutions to technical-, print-, and payment-related issues.',
      'Collected customer data on product quality, process improvements, and complaint trends.',
      'Investigated technical issues and identified their causes.',
      'Developed and conducted training for contact teams.'
    ],
  },
  {
    type: "Experience",
    period: "July 2017 - October 2017",
    title: "VOICE OF THE CUSTOMER",
    company: "Vistaprint",
    location: "Berlin, Germany",
    flag: 'https://upload.wikimedia.org/wikipedia/en/b/ba/Flag_of_Germany.svg',
    description: '',
    tags: [
      'Customer experience',
      'Advocacy',
      'Internal consultancy',
      'Coordination'],
    responsibilities: [
      'Collected and analyzed data on customer experience.',
      'Advised senior management on customer experience.',
      'Coordinated collaboration between technical teams, production teams, internal support, and contact teams to resolve various issues.'
    ],
  },
  {
    type: "Experience",
    period: "August 2015 - August 2016",
    title: "SPECIALIST, CUSTOMER CARE",
    company: "Vistaprint",
    location: "Berlin, Germany",
    flag: 'https://upload.wikimedia.org/wikipedia/en/b/ba/Flag_of_Germany.svg',
    description: '',
    tags: [
      'Customer service',
      'Visual design',
    ],
    responsibilities: [
      'Assisted customers with designing their print material.',
      'Advised customers on their marketing efforts.',
      'Assisted customers in building websites in the Vistaprint Website Builder.',
      'Conducted technical and design reviews on large or important orders.',
    ],
  },
  {
    type: "Self-study",
    period: "March 2015 - July 2015",
    title: "self-study",
    description: '',
    tags: [
      'German'
    ]
  },
  {
    type: "Experience",
    period: "January 2014 - February 2015",
    title: "TOURISM CONSULTANT",
    company: "Business LF",
    location: "Holeby, Denmark",
    flag: 'https://upload.wikimedia.org/wikipedia/commons/9/9c/Flag_of_Denmark.svg',
    description: '',
    tags: [
      'Consultancy',
      'Marketing',
      'Business development',
      'Project management',
      'Product development',
    ],
    responsibilities: [
      'Managed cross-border European development projects.',
      'Consulted SMEs and startups on marketing, business development, and product development.',
      'Managed all online marketing and analytics.',
      'Reported to senior management on industry development and marketing performance.',
      'Produced offline marketing material.'
    ],
  },
  {
    type: "Experience",
    period: "July 2013 - December 2013",
    title: "STUDENT HELPER",
    company: "Business LF",
    location: "Holeby, Denmark",
    flag: 'https://upload.wikimedia.org/wikipedia/commons/9/9c/Flag_of_Denmark.svg',
    description: '',
    tags: [
    ],
    responsibilities: [
      'Conducted online marketing activities.',
      'Established industry newsletter.',
      'Maintained database for visitlolland-falster.',
      'Represented the company at various marketing events.'
    ],
  },
  {
    type: "Experience",
    period: "January 2013 - June 2013",
    title: "intern",
    company: "Business LF",
    location: "Holeby, Denmark",
    flag: 'https://upload.wikimedia.org/wikipedia/commons/9/9c/Flag_of_Denmark.svg',
    description: '',
    tags: [
    ],
    responsibilities: [
    ],
  },
  {
    type: "Experience",
    period: "June 2010 - September 2011",
    title: "CATERING STAFF",
    company: "Scandlines A/S",
    location: "Gedser, Denmark",
    flag: 'https://upload.wikimedia.org/wikipedia/commons/9/9c/Flag_of_Denmark.svg',
    description: '',
    tags: [
    ],
    responsibilities: [
    ],
  },
  {
    type: "Experience",
    period: "February 2010 - May 2010",
    title: "CONSCRIPT",
    company: "Forsvaret (Danish Defence)",
    location: "Fredericia, Denmark",
    flag: 'https://upload.wikimedia.org/wikipedia/commons/9/9c/Flag_of_Denmark.svg',
    description: '',
    tags: [
    ],
    responsibilities: [
    ],
  },
]

export const hobbies = [
  {
    title: 'Travel',
    description: "New places and people give me new ideas",
    image: 'https://res.cloudinary.com/dahevvjff/image/upload/v1604659135/portfolio/vv4ltipyw9nwvdg7suzr.jpg'
  },
  {
    title: 'Graphic Design',
    description: "15 years of self-taught visual skills",
    image: 'https://res.cloudinary.com/dahevvjff/image/upload/v1604659135/portfolio/cm1h35xfd0ahnzpuasio.png'
  },
  {
    title: 'Story telling',
    description: "Make 'em, tell 'em, get engaged.",
    image: 'https://res.cloudinary.com/dahevvjff/image/upload/v1604659135/portfolio/h8q6t1mahhazyhlxln0o.jpg'
  },
  {
    title: 'Camping',
    description: '10 years of scouting and I still love the outdoors',
    image: 'https://res.cloudinary.com/dahevvjff/image/upload/v1604659135/portfolio/opiknmcrbmhqaga58o90.jpg'
  },
  {
    title: 'Music',
    description: 'Self-taught guitar player (and wannabe rock star 🤘) since 2004',
    image: 'https://res.cloudinary.com/dahevvjff/image/upload/v1604659134/portfolio/kbvnp6rj6kxrfd2yzil1.jpg'
  },
  {
    title: 'Cooking',
    description: "Flavour, history, and community. What's not to love?",
    image: 'https://res.cloudinary.com/dahevvjff/image/upload/v1604659135/portfolio/ly1lechivloinyww8hl5.jpg'
  },
]