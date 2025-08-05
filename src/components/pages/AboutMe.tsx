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

	function OnClickDownloadResume(path: string) {
		const url = `${window.location.origin}/src/assets/docs/${path}`
		window.open(url, '_blank');
	}

	return (
		<div className="bg-base-200 rounded-3xl p-8 flex flex-col items-center text-center">
			<div className="avatar mb-6">
				<div className="w-52 h-72 lg:w-72 lg:h-92 rounded-3xl">
					<img src={avatar} alt={name} className="object-cover" />
				</div>
			</div>

			<div className="flex flex-col">
				<h1 className="text-3xl font-bold text-base-content mb-2 text-left">{name}</h1>
				<p className="text-base-content/70 text-md mb-4 text-left">{title}</p>

				<div className="flex flex-row gap-3">
					<button className="btn btn-outline gap-2" onClick={() => OnClickDownloadResume("curriculo-victor-magalhaes.pdf")}>
						<svg width={24} height={24} fill="none" viewBox="0 0 24 24">
							<g clipPath="url(#BR_svg__a)">
								<path d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12Z" fill="#6DA544" />
								<path d="M12 4.696 21.913 12 12 19.305 2.087 12 12 4.696Z" fill="#FFDA44" />
								<path d="M12 16.174a4.174 4.174 0 1 0 0-8.348 4.174 4.174 0 0 0 0 8.348Z" fill="#F0F0F0" />
								<path
									d="M9.913 11.74a7.02 7.02 0 0 0-2.086.315 4.173 4.173 0 0 0 7.59 2.34 7.034 7.034 0 0 0-5.504-2.655Zm6.183 1.06a4.174 4.174 0 0 0-7.932-2.447 8.607 8.607 0 0 1 7.932 2.447Z"
									fill="#0052B4"
								/>
							</g>
							<defs>
								<clipPath id="BR_svg__a">
									<path fill="#fff" d="M0 0h24v24H0z" />
								</clipPath>
							</defs>
						</svg>
						Resume
					</button>
					<button className="btn btn-outline gap-2" onClick={() => OnClickDownloadResume("resume-victor-magalhaes.pdf")}>
						<svg width={24} height={24} fill="none" viewBox="0 0 24 24">
							<g clipPath="url(#US_svg__a)">
								<path d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12Z" fill="#F0F0F0" />
								<path
									d="M11.477 12H24a12.01 12.01 0 0 0-.413-3.13H11.478V12Zm0-6.262h10.761a12.064 12.064 0 0 0-2.769-3.13h-7.992v3.13ZM12 24c2.824 0 5.42-.976 7.47-2.609H4.53A11.948 11.948 0 0 0 12 24ZM1.761 18.26h20.477a11.93 11.93 0 0 0 1.348-3.13H.413c.3 1.116.758 2.167 1.348 3.13Z"
									fill="#D80027"
								/>
								<path
									d="M5.559 1.874h1.093l-1.017.739.389 1.196-1.018-.74-1.017.74.336-1.033c-.896.746-1.68 1.62-2.328 2.594h.35l-.647.47c-.1.168-.197.34-.29.513l.31.951-.578-.419C1 7.19.868 7.5.75 7.817l.34 1.048h1.258l-1.017.74.388 1.195-1.017-.739-.61.443C.033 10.994 0 11.494 0 12h12V0C9.63 0 7.42.688 5.559 1.874Zm.465 8.926-1.018-.739-1.017.739.389-1.196-1.017-.739h1.257l.388-1.195.389 1.195h1.257l-1.017.74.389 1.195Zm-.389-4.691.389 1.195-1.018-.739-1.017.74.389-1.196-1.017-.74h1.257l.388-1.195.389 1.196h1.257l-1.017.739Zm4.693 4.691-1.017-.739-1.017.739.388-1.196-1.017-.739h1.257l.389-1.195.388 1.195h1.258l-1.018.74.389 1.195Zm-.389-4.691.389 1.195-1.017-.739-1.017.74.388-1.196-1.017-.74h1.257l.389-1.195.388 1.196h1.258l-1.018.739Zm0-3.496.389 1.196-1.017-.74-1.017.74.388-1.196-1.017-.739h1.257L9.311.678l.388 1.196h1.258l-1.018.739Z"
									fill="#0052B4"
								/>
							</g>
							<defs>
								<clipPath id="US_svg__a">
									<path fill="#fff" d="M0 0h24v24H0z" />
								</clipPath>
							</defs>
						</svg>
						Resume
					</button>
				</div>
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
		title: "Full Stack Developer & Graphic Designer",
		avatar: "/portfolio/src/assets/images/personal/foto-victor.jpg",
		contact: {
			email: "victormsouza@protonmail.com",
		}
	};

	const aboutMe = [
		{
			title: "About me",
			description: "I'm a React and Blazor Full Stack Developer and also a university student who loves Graphic Design and Computing. My main style of work involves building modern user interfaces, exploring principles of usability and Graphic Design to create dynamic and modularized applications with reusable, clean, atomic, customized and organized components following good development practices."
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
		<div className="min-h-screen">
			<div className="max-w-7xl mx-auto">
				<div className=" flex flex-col bg-base-100 rounded-3xl gap-5">
					<div className="grid grid-cols-1 lg:grid-cols-12 gap-5">

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