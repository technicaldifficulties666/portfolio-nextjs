import {
  FaHtml5,
  FaCss3,
  FaReact,
  FaSass,
  FaPython,
  FaNodeJs,
  FaDocker,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaJenkins,
  FaAws,
  FaWordpress,
  FaFigma,
  FaJira,
  FaConfluence,
  FaNpm,
} from "react-icons/fa";

import {
  TbBrandTypescript,
  TbBrandJavascript,
  TbBrandCpp,
  TbBrandRedux,
  TbDatabaseSearch,
  TbBrandBootstrap,
  TbBrandCSharp,
} from "react-icons/tb";
import { 
  BiLogoJquery, 
  BiLogoPostgresql, 
  BiLogoJava, 
  BiLogoPhp, 
  BiLogoSpringBoot, 
  BiLogoGraphql,
  BiLogoTailwindCss,
 } from "react-icons/bi";
import {
  SiPug,
  SiExpress,
  SiPostman,
  SiGnubash,
  SiNextdotjs,
  SiMysql,
  SiSqlite,
  SiPostgresql,
  SiFlask,
  SiRubyonrails,
  SiMongodb,
  SiKubernetes,
  SiSelenium,
  SiGooglecloud,
  SiAsana,
  SiVisualstudiocode,
  SiMicrosoftoffice,
  SiRedux,
} from "react-icons/si";
import { AiFillCode } from "react-icons/ai";
import { FaHashnode, FaGuitar, FaAngular, FaGitlab, FaDrupal } from "react-icons/fa6";
import {
  BsGlobe,
  BsCodeSlash,
  BsRobot,
  BsFiletypeSql,
  BsFileBarGraph,
  BsGit,
  BsMarkdown,
  BsAndroid2,
  BsTrello,
} from "react-icons/bs";
import { GiArchiveResearch, GiArtificialIntelligence, GiGuitarBassHead } from "react-icons/gi";
import { FcElectronics } from "react-icons/fc";
import { DiDjango, DiMsqlServer, DiRedis } from "react-icons/di";

export const links = [
  { text: "Home", path: "/" },
  { text: "About", path: "/about" },
  { text: "Projects", path: "/projects" },
  { text: "Skills", path: "/skills" },
  { text: "Experience", path: "/experience" },
  { text: "Contact", path: "/contact" },
];

export const interestsData = [
  {
    interest: "Coding",
    icon: BsCodeSlash,
  },
  {
    interest: "Web Development",
    icon: BsGlobe,
  },
  {
    interest: "Mobile App Development",
    icon: BsAndroid2,
  },
  {
    interest: "Software Development",
    icon: AiFillCode,
  },
  {
    interest: "Market Research",
    icon: GiArchiveResearch,
  },
  {
    interest: "Data Analysis",
    icon: TbDatabaseSearch,
  },
  {
    interest: "Visualization",
    icon: BsFileBarGraph,
  },
  {
    interest: "Bass Guitar",
    icon: GiGuitarBassHead,
  },
];

export const skillsDevelopment = [
  {
    name: "HTML5",
    icon: FaHtml5,
  },
  {
    name: "CSS3",
    icon: FaCss3,
  },
  {
    name: "Javascript",
    icon: TbBrandJavascript,
  },
  {
    name: "Typescript",
    icon: TbBrandTypescript,
  },
  {
    name: "NodeJS",
    icon: FaNodeJs,
  },
  {
    name: "Jquery",
    icon: BiLogoJquery,
  },
  {
    name: "PHP",
    icon: BiLogoPhp,
  },
  {
    name: "React",
    icon: FaReact,
  },
  {
    name: "Redux",
    icon: SiRedux,
  },
  {
    name: "Angular",
    icon: FaAngular,
  },
  {
    name: "NextJS",
    icon: SiNextdotjs,
  },
  {
    name: "ExpressJS",
    icon: SiExpress,
  },
  {
    name: "Java",
    icon: BiLogoJava,
  },
  {
    name: "Spring Boot",
    icon: BiLogoSpringBoot,
  },
  {
    name: "Ruby on Rails",
    icon: SiRubyonrails,
  },
  {
    name: "Python",
    icon: FaPython,
  },
  {
    name: "Django",
    icon: DiDjango,
  },
  {
    name: "Flask",
    icon: SiFlask,
  },
  {
    name: "Bootstrap",
    icon: TbBrandBootstrap,
  },
  {
    name: "Tailwind",
    icon: BiLogoTailwindCss,
  },
  {
    name: "C/C++",
    icon: TbBrandCpp,
  },
  {
    name: "GraphQL",
    icon: BiLogoGraphql,
  },
];
export const skillsDatabase = [
  {
    name: "SQL",
    icon: BsFiletypeSql,
  },
  {
    name: "MYSQL",
    icon: SiMysql,
  },
  {
    name: "Sqlite",
    icon: SiSqlite,
  },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
  },
  {
    name: "Microsoft SQL Server",
    icon: DiMsqlServer,
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
  },
  {
    name: "Redis",
    icon: DiRedis,
  },
];
export const skillsTools = [
  {
    name: "npm",
    icon: FaNpm,
  },
  {
    name: "GitHub",
    icon: FaGithub,
  },
  {
    name: "Postman",
    icon: SiPostman,
  },
  {
    name: "Selenium",
    icon: SiSelenium,
  },
  {
    name: "Git",
    icon: BsGit,
  },
  {
    name: "Bash",
    icon: SiGnubash,
  },
  {
    name: "Docker",
    icon: FaDocker,
  },
  {
    name: "Kubernetes",
    icon: SiKubernetes,
  },
  {
    name: "Gitlab",
    icon: FaGitlab,
  },
  {
    name: "Jenkins",
    icon: FaJenkins,
  },
  {
    name: "AWS",
    icon: FaAws,
  },
  {
    name: "GCP",
    icon: SiGooglecloud,
  },
  {
    name: "WordPress",
    icon: FaWordpress,
  },
  {
    name: "Drupal",
    icon: FaDrupal
  },
  {
    name: "Figma",
    icon: FaFigma,
  },
  {
    name: "Jira",
    icon: FaJira,
  },
  {
    name: "Asana",
    icon: SiAsana
  },
  {
    name: "Confluence",
    icon: FaConfluence,
  },
  {
    name: "VS Code",
    icon: SiVisualstudiocode,
  },
  {
    name: "Office Suite",
    icon: SiMicrosoftoffice,
  },
];


export const workData = [
  {
    company: "The Peak Publications Society ",
    designation: "Website Manager",
    duration: "Sep 2022 - Present | Burnaby, BC",
    companyImg: "peak-re.png",
    description: (
      <>
        <ul>
          <li>
           Maintained the website of <i>The Peak</i>, Simon Fraser University’s student weekly
          </li>
          <li>
           Demonstrated proficiency in CMS using WordPress, phpMyAdmin and Linux
           Ubuntu server for ensuring continuous uptime, recurring backups and timely content upload
          </li>
          <li>
           Boosted site performance by 50% with Search engine optimization (SEO), web analytics and real-time security monitoring
          </li> 
        </ul>
      </>
    ),
  },
  {
    company: "Fastloop ",
    designation: "Full-Stack Engineer",
    duration: "May 2023 - Dec 2023 | Vancouver, BC",
    companyImg: "fastloop.png",
    description: (
      <>
        <ul>
          <li>
           Created a data visualization dashboard using Angular and Node Express stack
          </li>
          <li>
           Optimized team productivity through implementation of an in-house Slack app,
           boosting workflow efficiency and collaborative output by 20%
          </li>
          <li>
          Collaborated in a hybrid work setting and gained approval for projects from major stakeholders
            </li>
        </ul>
      </>
    ),
  },
  {
    company: "Xneelo",
    designation: "Software Developer",
    duration: "Jan 2022 - Sep 2022 | Vancouver, BC",
    companyImg: "xneelo.jpeg",
    description: (
      <>
        <ul>
          <li>
            Aided in developing and maintaining the Managed WordPress Hosting platform,
            using React TypeScript and Ruby on Rails stack
          </li>
          <li>
            Implemented Test Driven Development (TDD) and DevOps principles, incorporating
            virtualization, continuous integration, and continuous delivery (CI/CD) using tools like Docker, Kubernetes and Jenkins
          </li>
          <li>
          Curbed technical roadblocks to achieve successful feature releases and client onboarding 
          </li>
        </ul>
      </>
    ),
  },
  {
    company: "Vecima Networks",
    designation: "Front End Developer",
    duration: "Sep 2020 - May 2021 | Burnaby, BC",
    companyImg: "vecima_networks_logo.png",
    description: (
      <>
        <ul>
          <li>
            Aided in developing new UI for Fleet Tracking using HTML, CSS, jQuery and PHP
          </li>
          <li>
            Collaborated with UX designers to overhaul and migrate existing functionality,
            ensuring a consistent UI for engaging 10,000+ users and 1,500+ vehicles
          </li>
          <li>
            Facilitated staged feature rollout, collected user feedback, and implemented further improvements
          </li>
        </ul>
      </>
    ),
  },
];

export const projectsData = [
  {
    type: "SaaS",
    title: "Adley.ai",
    image: "adley-ai",
    link: "https://adley.ai/",
    source: "",
    description: "An AI content generator built with Reactjs, MongoDB, Nodejs, and JavaScript, deployed on AWS. Focused on incorporating AI features to enhance efficiency and user experience.",
    languages: "Node.js, React.js, MongoDB, AWS",
    team: "Subaig Bindra and Sidharth Nayyar",
  },
  {
    type: "SaaS",
    title: "WebAbility.io",
    image: "webability-io",
    link: "https://www.webability.io/",
    source: "",
    description: "A comprehensive solution focused on web accessibility compliance, ensuring adherence to WCAG and ADA standards. My role spanned across full-stack development, utilizing MongoDB, Node.js, and React.",
    languages: "Node.js, React.js, MongoDB",
  },
  {
    type: "SaaS",
    title: "Make-CV",
    image: "make-cv",
    link: "https://make-cv.com/",
    source: "",
    description: "A drag and drop resume and cover letter builder using PHP, Laravel, and MySQL. Aimed at providing a seamless user experience and helping users present their qualifications effectively to employers.",
    languages: "PHP, Laravel, and MySQL",
  },
  {
    type: "SaaS",
    title: "Vistabots.ai",
    image: "vistabots-ai",
    link: "https://vistabots.ai/",
    source: "",
    description: "Involved in creating a GPT-powered live chat for online customer support, enabling rapid AI training and deployment. My contribution covered backend, frontend, and full-stack engineering skills.",
    languages: "Node.js, React.js, MongoDB",
  },
  // {
  //   type: "Micro-app",
  //   title: "Task Manager",
  //   image: "task-manager-re" ,
  //   link: "https://todo-python-flask-app-10d98ce989a3.herokuapp.com/",
  //   source: "https://github.com/technicaldifficulties666/flask-todo-app",
  //   description: "A task management web application using Python Flask. The app allows users to maintain a to-do list by adding, updating, and deleting tasks. It uses SQLAlcemy for the database",
  //   languages: "Python - Flask, HTML, Bootstrap, SQLAlchemy",
  // },
  // {
  //   type: "Micro-app",
  //   title: "Music Player",
  //   image: "music-player",
  //   link: "https://technicaldifficulties666.github.io/",
  //   source: "https://technicaldifficulties666.github.io/music-player-app.github.io/",
  //   description: "A music player application utilizing HTML, CSS, JavaScript and SoundCloud API. The app allows search functionality to browse songs by artist, title, or genre, and playback controls to play or pause music.",
  //   languages: "HTML, CSS, JavaScript"
  // },
];

export const education = [
  {
    company: "Simon Fraser University, Burnaby, BC",
    designation: "Bachelor of Science, Co-operative Education - Major in Computing Science",
    duration: "Sep 2019 - Dec 2023",
    companyImg: "SFU_vertical_colour_rgb.png",
    description: (
      <>
      </>
    ),
  },
];

export const socialMediaLinks = [
  {
    href: "https://github.com/technicaldifficulties666",
    icon: FaGithub,
    backgroundColor: "gray.700",
    hoverColor: "gray.600",
  },
  {
    href: "https://www.linkedin.com/in/subaig-bindra-45b295182/",
    icon: FaLinkedin,
    backgroundColor: "social.linkedin",
    hoverColor: "social.linkedinHover",
  },
];

export const query = `
query Publication($after: String) {
  publication(host: "codersk36.hashnode.dev") {
    posts(first: 20, after: $after) {
      totalDocuments
      pageInfo {
        hasNextPage
        endCursor
      }
      edges {
        node {
          title
          brief
          slug
          publishedAt
          coverImage {
            url
          }
        }
      }
    }
  }
}

`;
