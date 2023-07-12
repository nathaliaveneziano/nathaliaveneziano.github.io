import {
  Avatar1,
  Avatar2,
  Avatar3,
  Me,
  Blog1,
  Blog2,
  Blog3,
  Logo,
  Price1,
  Price2,
  Price3,
  Service1,
  Service2,
  Service3,
  Work1,
  Work2,
  Work3,
  Work4,
  Work5,
  Work6,
} from './assets';

export default {
  sidebar: [
    { url: '#home', title: 'home', icon: 'SlHome' },
    { url: '#about', title: 'about', icon: 'SlUserFollowing' },
    { url: '#services', title: 'services', icon: 'SlBriefcase' },
    { url: '#resume', title: 'resume', icon: 'SlGraduation' },
    { url: '#projects', title: 'projects', icon: 'SlLayers' },
    { url: '#blog', title: 'blog', icon: 'SlNote' },
    { url: '#contact', title: 'contact', icon: 'SlBubble' },
    { url: '/', title: 'Home', icon: 'SlEqualizer' },
  ],
  socialMedia: [
    {
      url: 'https://www.facebook.com/nathalia.veneziano.developer',
      title: 'facebook',
      icon: 'FaFacebookF',
    },
    {
      url: 'https://www.instagram.com/nathalia.veneziano.developer/',
      title: 'instagram',
      icon: 'FaInstagram',
    },
    {
      url: 'https://www.linkedin.com/in/nathalia-veneziano/',
      title: 'LinkedIn',
      icon: 'FaLinkedinIn',
    },
    {
      url: 'https://twitter.com/nath_veneziano',
      title: 'twitter',
      icon: 'FaTwitter',
    },
  ],
  about: {
    skills: [
      {
        id: 1,
        name: 'Development',
        number: '90%',
        newClass: 'development',
      },
      {
        id: 2,
        name: 'UI/UX design',
        number: '80%',
        newClass: 'ui__design',
      },
      {
        id: 3,
        name: 'Photography',
        number: '60%',
        newClass: 'photography',
      },
    ],
    boxes: [
      {
        id: 1,
        icon: 'SlFire',
        title: '198',
        subtitle: 'Project completed',
      },
      {
        id: 2,
        icon: 'SlCup',
        title: '5670',
        subtitle: 'Cup of coffee',
      },
      {
        id: 3,
        icon: 'SlPeople',
        title: '427',
        subtitle: 'Satisfied clients',
      },
      {
        id: 4,
        icon: 'SlBadge',
        title: '35',
        subtitle: 'Nomiees winner',
      },
    ],
  },
  services: [
    {
      id: 1,
      image: Service1,
      title: 'UI/UX design',
      description:
        'Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.',
    },
    {
      id: 2,
      image: Service2,
      title: 'Web Development',
      description:
        'Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.',
    },
    {
      id: 3,
      image: Service3,
      title: 'Photography',
      description:
        'Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.',
    },
  ],
  resume: {
    categories: ['education', 'experience'],
    education: [
      {
        id: 1,
        icon: 'SlGraduation',
        year: '2019 - present',
        title: 'Academic Degree',
        desc: 'Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.',
      },
      {
        id: 2,
        icon: 'SlGraduation',
        year: '2013 - 2017',
        title: "Bachelor's Degree",
        desc: 'Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.',
      },
      {
        id: 3,
        icon: 'SlGraduation',
        year: '2009 - 2013',
        title: 'Honours Degree',
        desc: 'Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.',
      },
    ],
    experience: [
      {
        id: 1,
        icon: 'SlBriefcase',
        year: '2019 - present',
        title: 'Web Designer',
        desc: 'Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.',
      },
      {
        id: 2,
        icon: 'SlBriefcase',
        year: '2013 - 2017',
        title: 'Front-End Developer',
        desc: 'Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.',
      },
      {
        id: 3,
        icon: 'SlBriefcase',
        year: '2009 - 2013',
        title: 'Back-End Developer',
        desc: 'Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.',
      },
    ],
  },
  portfolio: [
    {
      id: 1,
      title: 'Project Management Illustration',
      category: 'Design',
      image: Work1,
      url: '#',
    },
    {
      id: 2,
      title: 'Guest App Walkthrough Screens',
      category: 'Art',
      image: Work2,
      url: '#',
    },
    {
      id: 3,
      title: 'Delivery App Wireframe',
      category: 'Branding',
      image: Work3,
      url: '#',
    },
    {
      id: 4,
      title: 'Onboarding Motivation',
      category: 'Design',
      image: Work4,
      url: '#',
    },
    {
      id: 5,
      title: 'iMac Mockup Design',
      category: 'Creative',
      image: Work5,
      url: '#',
    },
    {
      id: 6,
      title: 'Game Store App Concept',
      category: 'Art',
      image: Work6,
      url: '#',
    },
  ],
  projects: [
    {
      id: 1,
      title: 'Responsive Animated Website Footer',
      category: 'Front-end',
      image:
        'https://github.com/nathaliaveneziano/responsive-animated-website-footer/raw/main/img/cover.webp',
      techs: [
        { tech: 'html', icon: 'SiHtml5' },
        { tech: 'css', icon: 'SiCss3' },
      ],
      url_github: 'https://bit.ly/3zAEhGd',
      url_preview: 'http://bit.ly/435s3Tq',
    },
    {
      id: 2,
      title: 'Responsive Personal Portfolio Website with Theme Customization',
      category: 'Front-end',
      image:
        'https://github.com/nathaliaveneziano/responsive-personal-portfolio-theme-customization/raw/main/img/cover.webp',
      techs: [
        { tech: 'html', icon: 'SiHtml5' },
        { tech: 'css', icon: 'SiCss3' },
        { tech: 'javascript', icon: 'SiJavascript' },
      ],
      url_github: 'https://bit.ly/3MvFqGa',
      url_preview: 'https://bit.ly/3MvFCVU',
    },
  ],
};
