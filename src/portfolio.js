/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Afonso Navarini",
  title: "Olá, meu nome é Afonso!",
  subTitle: emoji(
    "Um desenvolvedor apaixonado por tecnologia 🚀 com experiência criando aplicações com JavaScript / Reactjs / Nodejs / React Native / Python / Java entre outras linguagens e frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/15zQoUT_W-ylCjhh37jE2KK6TT7SZ7Lyq/view?usp=share_link", // Set to empty to hide the button
  displayGreeting: false // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/afonsonavarini",
  linkedin: "https://www.linkedin.com/in/afonsonavarini/",
  gmail: "afonsonavarini@hotmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "O que eu faço",
  subTitle: "DESENVOLVEDOR FULL STACK QUE QUER EXPLORAR TODAS AS STACKS",
  skills: [
    emoji(
      "⚡ Desenvolvimento de aplicações Front e Back para aplicações web e mobile"
    ),
    emoji("⚡ Extração e análise de dados estatísticos, métodos científicos e gerenciamento de informações"),
    emoji(
      "⚡ Integração de serviços de terceiros como Firebaasea/ AWS/ Google Cloud"
      
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Atitus Educação",
      logo: require("./assets/images/atitus.jpg"),
      subHeader: "Bacharel em Ciência da Computação",
      duration: "Fevereiro 2020 - Dezembro 2023",
      desc: "Estudos das atuais tecnologias como Python. Java, JavaScript, NodeJS, React, React Native, Flutter, SQL, etc...",
      descBullets: [
        "Desenvolvimento de projetos de cunho acadêmico.",
        "Experiência e contato direto com a área da tecnologia."
      ]
    },
    {
      schoolName: "Wizard by Pearson",
      logo: require("./assets/images/wizard-logo.jpg"),
      subHeader: "Proficiência em Língua Inglesa",
      duration: "Janeiro 2016 - Dezembro 2019",
      desc: "Aquisição da fluência em língua inglesa e experiência de conversação.",
      descBullets: ["Capacidade de comunicação fluída com falantes nativos."]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "80%"
    },
    {
      Stack: "DevOps",
      progressPercentage: "75%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Estagiário Full Stack",
      company: "CWI Software",
      companylogo: require("./assets/images/cwi.png"),
      date: "Agosto 2022 – Janeiro 2023",
      desc: "Trabalhei com as tecnologias Java, JavaScript, HTML/CSS, Banco de Dados e ReactJS. Criando aplicações e implementações a nível profissional baseado em cenários reais.",
      descBullets: [
        "Experiência lidando correção de bugs e métodos ágeis",
        "Criação de novas features e clean code. "
      ]
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Meus Projetos",
  subtitle: "ALGUMAS DAS MINHAS CRIAÇÕES PESSOAIS E IDEIAS DE NEGÓCIO",
  projects: [
    {
      image: require("./assets/images/clappy.png"),
      projectName: "Clappy Bird",
      projectDesc: "Clappy Bird é uma emocionante remasterização do icônico jogo Flappy Bird que desafiou o mundo dos games em sua época. Neste jogo, os jogadores mergulharão em uma experiência viciante e divertida de habilidade e destreza. ",
      footerLink: [
        {
          name: "VER PROJETO",
          url: "https://github.com/afonsonavarini/Clappy-Bird"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/fox.png"),
      projectName: "Foxy Planner",
      projectDesc: "Foxy Planner é a solução definitiva para manter o controle de todos os seus compromissos e tarefas em um aplicativo inteligente e amigável, construído com a tecnologia Flutter. ",
      footerLink: [
        {
          name: "VER PROJETO",
          url: "https://github.com/afonsonavarini/foxy-planner"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Conquistas e Certificações 🏆 "),
  subtitle:
    "CONQUISTAS, CERTIFICAÇÕES, PREMIAÇÕES E OUTRAS COISAS LEGAIS QUE EU FIZ!",

  achievementsCards: [
    {
      title: "Crescer Level 1 - CWI Software",
      subtitle:
        "Estudo intensivo avançado em programação orientada à objetos (JAVA), PostgreSQL, HTML, CSS e JavaScript. 200 horas de curso totalizadas.",
      image: require("./assets/images/crescer.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "VER CERTIFICAÇÃO",
          url: "https://drive.google.com/file/d/18XPwzIk2vjssSsrA6QuwXfd4c-Imm3vz/view?usp=sharing"
        },
      ]
    },
    {
      title: "Essential Cloud Infrastructure: Foundation - Coursera",
      subtitle:
        "Aprendizagem em conceitos essenciais relacionados à infraestrutura de nuvem.",
      image: require("./assets/images/coursera.png"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "VER CERTIFICAÇÃO",
          url: "https://drive.google.com/file/d/1XDTHjOOiJhMogG3fhw54KQuvuYkUPyBA/view?usp=sharing"
        }
      ]
    },
    {
      title: "Google Cloud Infrastructure: Core Services - Coursera",
      subtitle: "Aquisição da proficiência em serviços fundamentais do Google Cloud.",
      image: require("./assets/images/coursera.png"),
      imageAlt: "PWA Logo",
      footerLink: [
        {
          name: "VER CERTIFICAÇÃO",
          url: "https://drive.google.com/file/d/1WV5_dE4uQnbuHYwSZD3WNUXjQ2PN8xDV/view?usp=sharing"
        }
      ]
    },
    {
      title: "Reliable Cloud Infrastructure: Design & Process - Coursera",
      subtitle: "Desenvolvimento de design e processamento de serviços Cloud.",
      image: require("./assets/images/coursera.png"),
      imageAlt: "PWA Logo",
      footerLink: [
        {
          name: "VER CERTIFICAÇÃO",
          url: "https://drive.google.com/file/d/1vC9kY55INTOOAlyHMFsBk0StEFuv7zLQ/view?usp=sharing"
        }
      ]
    },
    {
      title: "Elastic Cloud Infrastructure: Scaling and Automation - Coursera",
      subtitle: "Desenvolvimento de design e processamento de serviços Cloud.",
      image: require("./assets/images/coursera.png"),
      imageAlt: "PWA Logo",
      footerLink: [
        {
          name: "VER CERTIFICAÇÃO",
          url: "https://drive.google.com/file/d/15wxnnk_VaU855JBVTETBGFJHkUmkFJ9O/view?usp=sharing"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Entre em Contato ☎️"),
  subtitle:
    "ESTOU ABERTO À PROPOSTAS E DISCUSSÕES DE PROJETOS. MAS SE PREFERIR PODE MANDAR APENAS UM OI!",
  number: "+55 (54) 9 9698-2868",
  email_address: "afonsonavarini@hotmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
