// import images
import Hero_person from "./assets/images/Hero/person.png";
import nodejs from "./assets/images/Skills/node.png";
import mongodb from "./assets/images/Skills/mongodb.png";
import mysql from "./assets/images/Skills/mysql.png";
import cpp from "./assets/images/Skills/cpp.png";
import rust from "./assets/images/Skills/rust.png";
import linux from "./assets/images/Skills/linux.png";
import git from "./assets/images/Skills/git.png";
import datastructure from "./assets/images/Skills/datastructure.png";
import java from "./assets/images/Skills/java.png";
import uml from "./assets/images/Skills/uml.png";
import typescript from "./assets/images/Skills/typescript.png";
import teamwork from "./assets/images/Skills/teamwork.png";
import python from "./assets/images/Skills/python.png";
import spring from "./assets/images/Skills/spring.png";
import azure from "./assets/images/Skills/azure.png";
import oci from "./assets/images/Skills/azure.png";
import docker from "./assets/images/Skills/docker.png";
import redis from "./assets/images/Skills/redis.png";
import oracle from "./assets/images/Skills/oracle.png";

import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";

import cert1 from "./assets/images/Certifications/cert1.jpeg";
import cert2 from "./assets/images/Certifications/cert2.jpg";
import cert5 from "./assets/images/Certifications/cert5.jpg";
import cert6 from "./assets/images/Certifications/cert6.jpg";
import cert7 from "./assets/images/Certifications/cert7.jpg";
import cert8 from "./assets/images/Certifications/cert8.jpg";

import bricoll from "./assets/images/Projects/bricoll.webp";
import aman from "./assets/images/Projects/aman.png";



import avatar1 from "./assets/images/Testimonials/avatar1.png";
import avatar2 from "./assets/images/Testimonials/avatar2.png";
import avatar3 from "./assets/images/Testimonials/avatar3.png";

import hireme_person from "./assets/images/Hireme/person.png";


import {GrMail} from "react-icons/gr";
import {GiSkills} from "react-icons/gi";
import {MdOutlinePermContactCalendar} from "react-icons/md";
import {TbCertificate, TbSmartHome} from "react-icons/tb";
import {BiUser} from "react-icons/bi";
import {AiFillGithub, AiFillLinkedin} from "react-icons/ai";
import {SiUpwork} from "react-icons/si";
import {TbBrandFiverr} from "react-icons/tb";
import {RiProjectorLine, RiServiceLine} from "react-icons/ri";

const Nav = [{
    link: "#home", icon: TbSmartHome,
}, {
    link: "#aboutme", icon: BiUser,
}, {
    link: "#skills", icon: GiSkills,
}, {
    link: "#certifications", icon: TbCertificate,
}, {
    link: "#services", icon: RiServiceLine,
}, {
    link: "#projects", icon: RiProjectorLine,
}, {
    link: "#contact", icon: MdOutlinePermContactCalendar,
},];

const social_media = [{
    text: "sialsanwal885@gmail.com", icon: GrMail, link: "mailto:sialsanwal885@gmail.com",
}, {
    text: "Sanwal Khan", icon: AiFillLinkedin, link: "https://www.linkedin.com/in/sanwal-khan/",
}, {
    text: "sial-sanwal", icon: AiFillGithub, link: "https://github.com/sial-sanwal/",
// }, {
//     text: "sohaib M", icon: SiUpwork, link: "https://www.upwork.com/freelancers/~010a44723a9108a1bc",
// }, {
//     text: "sohaibesohaib", icon: TbBrandFiverr, link: "https://www.fiverr.com/sohaibesohaib",
},];
const cert_content = [{
//     title: "Python",
//     link: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=62C57609853F17D04BC5C8213FE5F74514586122F8FA58C788102AFC03DFE33C",
//     image: "https://brm-workforce.oracle.com/pdf/certview/images/OCID2024CP.png",
// },
// {
//     title: "Oracle Certified Professional, Java SE 8 Programmer",
//     link: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=7150FE2EA98D08F2D32A1F2DD4A5A487B04D95277185B268D04CEE1E1298F3AB",
//     image: "https://brm-workforce.oracle.com/pdf/certview/images/OCPJSE8.png",
// },{
//     title: "Oracle Cloud Infrastructure 2024 Certified DevOps Professional",
//     link: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=626266EE80DDDC838B6D5FFCD8567ABD36933ADEFF42EF705D948D1147967D74",
//     image:  "https://brm-workforce.oracle.com/pdf/certview/images/OCI2024DOPOCP.png",
// },{
//     title: "Oracle Certified Associate, Java SE 8 Programmer",
//     link: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=7D311F9484B6360A03BC18199C0FDBFCD7B252935AB01626B20902BF93BA49DB",
//     image: "https://brm-workforce.oracle.com/pdf/certview/images/OCAJSE8.png",
// },{
//     title: "Oracle Cloud Infrastructure 2024 Certified AI Foundations Associate",
//     link: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=2766D12BC1722B59E051F38F5B122C78B2119732F2AF774A430314D257CF0B5F",
//     image: "https://brm-workforce.oracle.com/pdf/certview/images/OCI24AICFA.png",
// },{
//     title: "Oracle Cloud Infrastructure 2024 Certified Foundations Associate",
//     link: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=626266EE80DDDC838B6D5FFCD8567ABD04D625908DC961DB0D8583FF3C5E80D4",
//     image: "https://brm-workforce.oracle.com/pdf/certview/images/OCI2024FNDCFA.png",
// },{
    title: "Deep Learning Specialization",
    link: "https://coursera.org/share/e2fd2906f49b6fda3f174304666bfa49",
    image: cert1,
}, {
    title: "Google Cloud Fundamentals: Core Infrastructure", link: 'https://coursera.org/share/5a6a00aada19ba62d54079c48b48a7bc', image: cert8
}, {
    title: "Generative AI for Everyone", image: cert2, link: "https://learn.mongodb.com/c/lkxA2J6RTE2Ash0IL--EtA",
}, {
    title: "Python Data Structures",
    link: "https://badgr.com/public/assertions/JKnbd3dAQwCPpg3dxr1n_A?identity__email=sohaib.manah@etu.uae.ac.ma",
    image: cert5,
}, {
    title: "Structuring Machine Learning Projects", link: "https://www.hackerrank.com/certificates/3a683fbab8d4", image: cert6,
}, {
    title: "AI for Everyone",
    link: "https://ti-user-certificates.s3.amazonaws.com/ae62dcd7-abdc-4e90-a570-83eccba49043/a96c73c5-e997-5d54-80a0-54f8afa0e457-sohaib-manah-0239280c-b43a-45ac-a4b7-a55c4db1b568-certificate.pdf",
    image: cert7,
},];

export const content = {
    en: {
        Nav, hero: {
            title: "AIEngineer specializing in LLM,GenAI & RAG",
            firstName: "Sanwal",
            LastName: "Khan",
            //btnText: "View my resume",
            //btnLink: "https://www.canva.com/design/DAFltazUEpM/1HUGhv9zLupr7TU3NbZ68w/view",
            image: Hero_person,
            hero_content: [{
                count: `+${new Date(new Date() - new Date("2022-01-01")).getFullYear() - 1970}`,
                text: "Years of experience in AI development, GenAI & cloud-based AI solutions.",
            }, {
                count: "10+", text: "Projects Worked in my career",
            },],
        }, skills: {
            title: "Skills", subtitle: "MY TOP SKILLS", skills_content: [{
                name: "AI & Machine Learning", para: "Expertise in developing and deploying AI models to solve complex tasks with advanced algorithms and data-driven insights.", logo: rust,
            }, {
                name: "Large Language Models (LLMs)", para: "Skilled in fine-tuning LLMs for NLP tasks like text generation, question answering, and summarization.", logo: cpp,
            }, {
                name: "Agentic AI Systems", para: "Designing autonomous AI systems that perform intelligent decision-making and task execution with minimal human intervention.", logo: java,
            }, {
                name: "Retrieval-Augmented Generation (RAG)", para: "Enhancing language models with RAG techniques to improve text generation by integrating external data sources.", logo: typescript,
            }, {
                name: "Python", para: "Proficient in Python for AI, machine learning, and data science, utilizing libraries like TensorFlow, PyTorch, and Pandas.", logo: python,
            }, {
                name: "Data Science & Analytics", para: "Analyzing complex datasets to derive actionable insights and build predictive models that inform strategic decisions.", logo: nodejs,
            }, {
                name: "FastAPI & Flask",
                para: "Building scalable and efficient APIs with FastAPI and Flask for AI and machine learning applications.",
                logo: datastructure,
            }, {
                name: "Spring",
                para: "J2EE , spring boot, spring security , spring data , spring cloud, eureka",
                logo: spring,
            }, {
                name: "Linux servers management",
                para: "Managing Linux servers for deploying AI models and ensuring secure, reliable, and high-performance operations.",
                logo: linux,
            }, {
                name: "Microsoft Azure", para: "with Azure blob storage & Azure VM & Azure App Service", logo: azure,
            }, {
                name: "Cloud-Based AI Deployment",
                para: "Deploying AI models on cloud platforms like AWS, Azure, and GCP for scalable, robust solutions.",
                logo: oci,
            }, {
                name: "Docker", para: "with kubernetes , jenkins , portainer", logo: docker,
            }, {
                name: "Git | GitHub", para: "Managing codebase with Git and GitHub, enabling version control and efficient collaboration on AI projects.", logo: git,
            }, {
                name: "MongoDB associate developer", para: "in NodeJs", logo: mongodb,
            }, {
                name: "MySql | PostgresSql", para: "and relational data modeling with UML & ERD & MERISE ", logo: mysql,
            }, {
                name: "LangChain & LLaMA Index", para: "Utilizing LangChain and LLaMA Index for enhanced language model integration with external data sources.", logo: redis,
            }, {
                name: "Computer Vision", para: "Developing computer vision applications using deep learning for tasks like object detection and image segmentation., views", logo: oracle,
            }, {
                name: "Hugging Face Transformers",
                para: "Hugging Face Transformers for cutting-edge NLP tasks, including classification, summarization, and conversational AI.",
                logo: teamwork,
            }, {
                name: "Scrum & Agile | UML | Data Modeling(Sql & NoSql)",
                para: "Project management and Software Design",
                logo: uml,
            },],
        }, services: {
            title: "Services", subtitle: "WHAT I OFFER", service_content: [{
                title: " LLMs (Large Language Models) Development",
                para: "I specialize in developing and fine-tuning Large Language Models (LLMs) to address a variety of tasks like NLP, text generation, and automated reasoning. Leveraging Python and cutting-edge technologies, I ensure your AI-driven applications perform at their best.",
                logo: services_logo1,
            }, {
                title: "Agentic Systems & AI Workflow Automation",
                para: "With a focus on agentic AI systems, I build intelligent workflows that can adapt, learn, and improve over time. Using Python and automation frameworks, I create solutions that handle repetitive tasks, making your operations more efficient and scalable.",
                logo: services_logo2,
            }, {
                title: "Data Science & Machine Learning Solutions",
                para: "Using Python, I apply data science techniques and machine learning algorithms to extract insights, predict trends, and create data-driven solutions. Whether it’s data cleaning, modeling, or visualization, I turn complex data into actionable insights to support decision-making.",
                logo: services_logo3,
            },],
        }, Projects: {
            title: "Projects", subtitle: "MY CREATION", project_content: [{
                title: "SaaS Insurance Platform for Football Clubs using machine learning and blockchain",
                image: aman,
                githubLink: "https://github.com/2aman-lafr9a",
            }, {
                title: "Freelance website -- 'bricoll'",
                image: bricoll,
                githubLink: "https://github.com/sohaibMan/bricoll",
            },
            ],
        }, Testimonials: {
            title: "Testimonials", subtitle: "MY CLIENT REVIEWS", testimonials_content: [{
                review: "Sanwal was outstanding! He quickly understood my project's requirements and delivered exceptional results with impressive speed. I highly recommend his expertise and services!”",
                img: avatar3,
                name: "jean V. Fiver Client",
                rating: 5

            }, {
                review: "“I wanted to take a moment to share my positive experience with Sanwal, whom I recently hired to assist with our AI-driven project. His expertise and dedication were truly impressive!  ”",
                img: avatar3,
                name: "khalid D. Fiver Client",
                rating: 5
            }, {
                review: "“Thank you for your outstanding work and dedication, Sanwal! We are extremely satisfied with the final product. Your expertise and professionalism were invaluable to our project, and we have no doubt that you will continue to deliver exceptional services. ”",
                img: avatar1,
                name: "Mohamed E. Bougeons ensemble's designer ",
                rating: 5
            }, {
                review: "“I know how important it is to work with reliable, flexible, and responsive individuals, and Sanwal truly exemplified these qualities throughout the entire project. His expertise and attention to detail were invaluable”",
                img: avatar2,
                name: "Manal Z. It Geeks's team leader",
                rating: 5
            }],
        }, Aboutme: {
            title: "About Me",
            subtitle: "Hello Dear,This is a brief introduction about me",
            image1: hireme_person,
            image2: hireme_person,
            para: "I'm an AI Engineer passionate about developing intelligent systems, solving real-world problems, and exploring cutting-edge AI technologies. I specialize in LLMs, AI Agents, Generative AI, and Retrieval-Augmented Generation (RAG). With experience leading AI projects and working with startups, I continuously strive to innovate and push the boundaries of AI-driven solutions.",
            btnText: "More about me",
        }, Contact: {
            title: "Contact Me",
            subtitle: "LET'S GET IN TOUCH",
            social_media,
        }, Certifications: {
            title: "Certifications", subtitle: "My Certifications", cert_content,
        },
    }, fr: {
        Nav, hero: {
            title: "Ingénieur DevOps junior et passionné du Cloud",
            firstName: "SOHAIB",
            LastName: "MANAH",
            // btnText: "Consulter mon curriculum vitæ",
            // btnLink: "https://www.canva.com/design/DAFltazUEpM/1HUGhv9zLupr7TU3NbZ68w/view",
            image: Hero_person,
            hero_content: [{
                count: `+${new Date(new Date() - new Date("2024-01-01")).getFullYear() - 1970}`,
                text: "An d'expérience en développement Web et en développement de logiciels",
            }, {
                count: "10+", text: "Projets Travaillé dans ma carrière",
            },],
        }, skills: {
            title: "compétences", subtitle: "MES MEILLEURES COMPÉTENCES", skills_content: [

                {
                    name: "c | c++",
                    para: "projets universitaires | structures de données et algorithmes | POO",
                    logo: cpp,
                }, {
                    name: "Rust", para: "aves architecture des microservices et grpc et actix-web", logo: rust,
                }, {
                    name: "Java", para: "Swing (Interface utilisateur graphique)", logo: java,
                }, {
                    name: "Python", para: "avec la Théorie des graphes", logo: python,
                }, {
                    name: "Structure des données | Résolution de problèmes | Théorie des graphes",
                    para: "en c & c++ & java & javascript",
                    logo: datastructure,
                }, {
                    name: "TypeScript | JavaScript", para: "avec React & Next js & Node js", logo: typescript,
                }, {
                    name: "Node js | Express.js ", para: "avec  Rest Api |  GraphQL", logo: nodejs,
                },

                {
                    name: "Spring",
                    para: "J2EE , spring boot, spring security , spring data , spring cloud, eureka",
                    logo: spring,
                }, {
                    name: "Management des serveurs Linux",
                    para: "Connaissance des bases de script bash et d'administration système",
                    logo: linux,
                }, {
                    name: "Git | GitHub", para: "Connaissance de git and github", logo: git,
                }, {
                    name: "Microsoft Azure",
                    para: "avec Azure blob storage & Azure VM & Azure App Service",
                    logo: azure,
                }, {
                    name: "Oracle Cloud Infrastructure ( Associate level )",
                    para: "Connaissance de tous les services et solutions cloud d'oracle",
                    logo: oci,
                }, {

                    name: "Docker", para: "avec kubernetes , jenkins , portainer", logo: docker,
                }, {
                    name: "MongoDB développeur", para: "avec NodeJs & Java", logo: mongodb,
                }, {
                    name: "MySql | PostgresSql",
                    para: "plus la modélisation de données relationnelles avec UML & ERD & MERISE ",
                    logo: mysql,
                }, {
                    name: "redis", para: "pour la mise en cache et la gestion des sessions", logo: redis,
                }, {
                    name: "oracle DBA",
                    para: "avec pl/sql, procédures stockées, déclencheurs, fonctions, vues",
                    logo: oracle,
                }, {
                    name: "Travail en équipe | communication",
                    para: "J'aime travailler en équipe et je suis un bon communicateur",
                    logo: teamwork,
                }, {
                    name: "Scrum & Agile | conception UML | Modélisation des données (Sql & NoSql)",
                    para: "Conception et gestion des projets,",
                    logo: uml,
                },

            ],
        }, services: {
            title: "Les services", subtitle: "ce que j'offre", service_content: [{
                title: " LLMs (Large Language Models) Developmen",
                para: "Construire des applications web et des sites web avec des technologies modernes et les meilleures pratiques est ma passion et je peux vous aider à le faire avec mon expérience dans ce domaine",
                logo: services_logo1,
            }, {
                title: "Agentic Systems & AI Workflow Automation",
                para: "Je peux vous aider à concevoir et à mettre en œuvre des solutions cloud sécurisées, évolutives et rentables",
                logo: services_logo2,
            }, {
                title: " Data Science & Machine Learning Solutions",
                para: "Je peux vous aider à automatiser votre processus de déploiement et à le rendre plus fiable et résilient",
                logo: services_logo3,
            },],
        }, Projects: {
            title: "Projects", subtitle: "Ma création", project_content: [{
                title: "Plateforme d'assurance SaaS pour les clubs de football en utilisant machine learning et blockchain",
                image: aman,
                githubLink: "https://github.com/2aman-lafr9a",
            }, {
                title: "site web de freealnce -- 'bricoll'",
                image: bricoll,
                githubLink: "https://github.com/sohaibMan/bricoll",
            }],
        }, Testimonials: {
            title: "Témoignages", subtitle: "ÉVALUATIONS DE MES CLIENTS", testimonials_content: [{
                review: "“Merci d’avoir communiqué avec nous et de l’excellent travail que vous avez accompli.  nous sommes très satisfaits du produit final, votre expertise et votre professionnalisme ont été inestimables pour notre projet, et je n’ai aucun doute que vous continuerez à offrir d’excellents services.“",
                img: avatar1,
                name: "Mohamed E. Bougeons ensemble club ",
            }, {
                review: "“Je sais à quel point il est important de travailler avec des personnes fiables, flexibles et réactives, et Sohaib a certainement démontré ces qualités tout au long du projet.  Leur expertise et leur souci du détail étaient inestimables",
                img: avatar2,
                name: "Manal Z. chef d'équipe d'It Geeks",
            }, {
                review: "“Sohaib était formidable, a fait un excellent travail en comprenant les besoins de mes projets, et livré super rapide! Je recommande vivement ses services.”",
                img: avatar3,
                name: "jean V. Fiverr Client",
            }, {
                review: "“Je voulais prendre un moment pour partager mon expérience positive avec Sohaib, que j’ai récemment embauché pour aider à l’effort de rebranding de notre entreprise. ”",
                img: avatar3,
                name: "khalid D. Fiverr Client",
            },],
        }, Aboutme: {
            title: "A propos de moi",
            subtitle: "Bonjour Cher,Ceci est une brève introduction sur moi",
            image1: hireme_person,
            image2: hireme_person,
            para: " je suis un ingénieur logiciel junior passionné par la création de logiciels, la résolution de problèmes concrets et l'exploration de nouvelles technologies. J'aime apprendre des autres et partager mes connaissances. J'ai eu l'opportunité de faire un stage chez Oracle et de travailler avec deux startups, ce qui a grandement enrichi mon expérience",
            btnText: "En savoir plus",
        }, Contact: {
            title: "contactez-moi", subtitle: "RESTONS EN CONTACT", social_media,
        }, Certifications: {
            title: "Certifications", subtitle: "mes Certifications", cert_content,
        },
    },
};
