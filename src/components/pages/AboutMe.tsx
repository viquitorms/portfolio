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

// components/ProfileCard.jsx
const ProfileCard = ({ name, title, avatar }: ProfileData) => {

    return (
        <div className="bg-base-200 rounded-3xl p-8 flex flex-col items-center text-center">
            <div className="avatar mb-6">
                <div className="w-72 h-92 rounded-3xl">
                    <img src={avatar} alt={name} className="object-cover" />
                </div>
            </div>

            <div className="flex flex-col items-start">
                <h1 className="text-3xl font-bold text-base-content mb-2">{name}</h1>
                <p className="text-base-content/70 text-md mb-4 text-left">{title}</p>

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
                <span className="text-base-content/50 text-xs font-medium">
                    {period}
                </span>
            </div>
            <p className="text-base-content/70 text-sm leading-relaxed mb-2">
                {description}
            </p>
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
            company: "LogisticMobile Technology",
            role: "FullStack Developer",
            description: `Experience in front-end development with Blazor (C#, HTML, CSS) using the MudBlazor component library, including creation of reusable components following Atomic Design principles. Skilled in technical documentation using Docusaurus, React.js, and TinaCMS. Also experienced with Silverlight (XAML) and back-end development in C#, including REST API creation with Swagger documentation, Postman testing, and SQL Server stored procedures. Applies usability heuristics, uses SVN for version control, performs server maintenance via IIS, and manages tasks using agile methodologies.`,
            period: "feb. 2024 - Present"
        },
        {
            company: "LogisticMobile Technology",
            role: "System Analyst Junior",
            description: "Provided technical support to clients, including issue resolution using SQL Server and ticket management through Redmine. Tracked support hours, tested new software features, and performed API testing with Postman. Gained and applied knowledge of WMS (Warehouse Management System) and logistics concepts. Responsible for server setup and deployment of WMS software, IIS-based server/application maintenance, and SQL database creation for system use.",
            period: "oct. 2022 - feb. 2024"
        },
        {
            company: "Solucionar Serviços Elétricos LTDA",
            role: "Administrative Assistant",
            description: "Experience in financial management, including income/expense control, cash flow, and monthly reporting. Managed loans, employee records, and banking data, while producing daily work reports and commercial presentations. Planned and executed marketing campaigns and created materials such as flyers, videos, and social media content. Oversaw construction project planning using the 5W2H methodology and organized tool usage. Proficient in Office 365 (Excel, Word, PowerPoint, Project, Outlook) and Google Workspace (Sheets, Drive, Docs, Slides, Calendar, Gmail).",
            period: "jan. 2021 - jun. 2022"
        },
        {
            company: "Solucionar Serviços Elétricos LTDA",
            role: "Eletrician Assistant",
            description: "Hands-on experience in assembling industrial control panels, power center electrical panels, and general industrial electrical panels. Collaborated with companies such as Grupo Vision and Minas Laser. Skilled in reading and interpreting electrical documents and diagrams.",
            period: "jul. 2020 - jan. 2021"
        }
    ];

    return (
        <div className="min-h-screen p-8">
            <div className="max-w-7xl mx-auto">
                <div className=" flex flex-col bg-base-100 rounded-3xl p-8 gap-5">
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
                            </div>
                        </div>

                    </div>

                    <div className="grid grid-cols-1">

                        <div className="col-span-12">
                            <div className="bg-base-200 rounded-3xl p-8 h-full">
                                <h2 className="text-2xl font-bold text-base-content mb-8">
                                    Work Experience
                                </h2>

                                <div className="space-y-6">
                                    {experiences.map((exp, index) => (
                                        <ExperienceCard key={index} {...exp} />
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resume;