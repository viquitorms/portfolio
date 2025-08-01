import { FaBehanceSquare, FaLinkedin, FaPinterestSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

// types/index.ts
interface ContactInfo {
    email: string;
}

interface ProfileData {
    name: string;
    title: string;
    avatar: string;
    contact: ContactInfo;
}

interface Experience {
    company: string;
    role: string;
    description: string;
    period: string;
}

interface AboutMe {
    title: string;
    description: string;
}

interface Technology {
    name: string;
    icon: string;
}

// components/ProfileCard.jsx
const ProfileCard = ({ name, title, avatar, contact }: ProfileData) => {

    return (
        <div className="bg-base-200 rounded-3xl p-8 flex flex-col items-center text-center h-full">
            <div className="avatar mb-6">
                <div className="w-72 h-92 rounded-3xl">
                    <img src={avatar} alt={name} className="object-cover" />
                </div>
            </div>

            <div className="flex flex-col items-start">
                <h1 className="text-3xl font-bold text-base-content mb-2">{name}</h1>
                <p className="text-base-content/70 text-md mb-8 text-left">{title}</p>

                <div className="flex flex-col text-start mt-8 gap-3">
                    <h5 className="text-sm text-base-content/50 font-medium">Contacts & Social Media</h5>
                    <div className="w-full text-left">
                        <div className="flex items-center gap-3">
                            <svg className="w-5 h-5 text-base-content/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <span className="text-base-content/80">{contact.email}</span>
                        </div>
                    </div>
                    <div className="flex gap-2 ">
                        <a href="https://www.linkedin.com/in/victormagalhaesdesouza/" target="_blank"><FaLinkedin size={25} /></a>
                        <a href="https://www.instagram.com/fromsilencetotheheart/" target="_blank"><FaSquareInstagram size={25} /></a>
                        <a href="https://www.behance.net/victormsouza" target="_blank"><FaBehanceSquare size={25} /></a>
                        <a href="https://br.pinterest.com/vicmagalhaes20/" target="_blank"><FaPinterestSquare size={25} /></a>
                    </div>
                </div>

                <button className="btn btn-outline btn-wide mt-8 gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Download Resume
                </button>
            </div>
        </div>
    );
};

const AboutMe = ({ title, description }: AboutMe) => {
    return (
        <div className="mb-8 last:mb-0">
            <div className="mb-2">
                <h3 className="text-primary font-semibold text-sm uppercase tracking-wide">
                    {title}
                </h3>
            </div>
            <p className="text-base-content/70 text-sm leading-relaxed mb-2">
                {description}
            </p>
        </div>
    )
}

// components/ExperienceCard.jsx
const ExperienceCard = ({ company, role, description, period }: Experience) => {

    return (
        <div className="mb-8 last:mb-0">
            <div className="mb-2">
                <h3 className="text-primary font-semibold text-sm uppercase tracking-wide">
                    {company}
                </h3>
                <h4 className="text-base-content font-semibold text-lg">
                    {role}
                </h4>
            </div>
            <p className="text-base-content/70 text-sm leading-relaxed mb-2">
                {description}
            </p>
            <span className="text-base-content/50 text-xs font-medium">
                {period}
            </span>
        </div>
    );
};

// components/TechStack.jsx
const TechStack = ({ technologies }: { technologies: Technology[] }) => {

    return (
        <div className="flex flex-wrap gap-3 mt-8">
            {technologies.map((tech, index) => (
                <div key={index} className="w-12 h-12 bg-base-200 rounded-xl flex items-center justify-center">
                    <img src={tech.icon} alt={tech.name} className="w-8 h-8" />
                </div>
            ))}
        </div>
    );
};

// Resume.jsx (componente principal)
const Resume = () => {
    const profileData = {
        name: "Victor Magalhães",
        title: "Front-End Developer & Graphic Designer",
        avatar: "/images/personal/foto-victor.jpg",
        contact: {
            email: "victormsouza@protonmail.com",
        }
    };

    const aboutMe = [
        {
            title: "About me",
            description: "I'm a React and Blazor Front-End Developer and also a university student who loves Graphic Design and Computing. My main style of work involves building modern user interfaces, exploring principles of usability and Graphic Design to create dynamic and modularized applications with reusable, clean, atomic, customized and organized components following good development practices."
        },
        {
            title: "Objectives",
            description: "My goals are to specialize in front-end development, building a solid career in this area, and to complete a postgraduate course in Distributed Software Architecture at Pontifícia Universidade Catócilica de Minas Gerais, deepening and applying my technical knowledge in the area of software development and maintenance. I also want to specialize and become fluent in two new languages, in addition to English, of which I have an advanced level for communication and writing."
        },
        {
            title: "Interests",
            description: "In addition, I am interested in studying technical areas such as architecture and engineering of software for mobile devices and applications aimed at artificial intelligence, as well as having good experience with design and management of software projects, conducted by good practices and good market methodologies. As a hobby, I'm enthusiastic about game development and also theology."
        }
    ]

    const experiences = [
        {
            company: "OpenAI",
            role: "Design Engineer",
            description: "Leading the design and development of user-centric AI interfaces, collaborating with cross-functional teams to ensure intuitive and efficient user experiences in advanced AI systems.",
            period: "2024 - Present"
        },
        {
            company: "Apple",
            role: "UI Designer",
            description: "Led the design of innovative, user-centric products, collaborating closely with cross-functional teams to create seamless, intuitive experiences for millions of users.",
            period: "2021 - 2023"
        },
        {
            company: "Google",
            role: "Product Designer",
            description: "Driving the design of seamless digital experiences for web and mobile platforms, focusing on user-centered design principles, prototyping, and usability testing to enhance engagement and product success.",
            period: "2019 - 2021"
        },
        {
            company: "Microsoft",
            role: "UX Designer, Intern",
            description: "Driving the UX design of seamless digital experiences for web and mobile platforms, emphasizing user-centered design principles and usability testing to optimize engagement and product performance.",
            period: "2018 - 2019"
        }
    ];

    const techStack = [
        { name: "Stack Overflow", icon: "/api/placeholder/32/32" },
        { name: "Framer", icon: "/api/placeholder/32/32" },
        { name: "Figma", icon: "/api/placeholder/32/32" },
        { name: "Notion", icon: "/api/placeholder/32/32" },
        { name: "Linear", icon: "/api/placeholder/32/32" },
        { name: "Slack", icon: "/api/placeholder/32/32" },
        { name: "Raycast", icon: "/api/placeholder/32/32" },
        { name: "Spotify", icon: "/api/placeholder/32/32" },
        { name: "Paw", icon: "/api/placeholder/32/32" }
    ];

    return (
        <div className="min-h-screen p-8">
            <div className="max-w-7xl mx-auto">
                <div className="bg-base-100 rounded-3xl p-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                        {/* Profile Section */}
                        <div className="lg:col-span-4">
                            <ProfileCard {...profileData} />
                        </div>

                        {/* Experience Section */}
                        <div className="lg:col-span-8">
                            <div className="bg-base-200 rounded-3xl p-8 h-full">
                                <h2 className="text-2xl font-bold text-base-content mb-8">
                                    Who am I?
                                </h2>

                                <div className="space-y-6">
                                    {aboutMe.map((about, index) => (
                                        <AboutMe key={index} {...about} />
                                    ))}
                                </div>

                                <h2 className="text-2xl font-bold text-base-content my-8">
                                    Work Experience
                                </h2>

                                <div className="space-y-6">
                                    {experiences.map((exp, index) => (
                                        <ExperienceCard key={index} {...exp} />
                                    ))}
                                </div>

                                <TechStack technologies={techStack} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resume;