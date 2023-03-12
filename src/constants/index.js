import {
	mobile,
	backend,
	creator,
	web,
	javascript,
	typescript,
	html,
	css,
	reactjs,
	tailwind,
	nodejs,
	git,
	java,
	python,
	excel,
	accenture,
	firstround,
	seaswellness,
	supernow,
	blog,
	pennbook,
	penncoursecart,
	threejs,
} from "../assets";

export const navLinks = [
	{
		id: "about",
		title: "About",
	},
	{
		id: "work",
		title: "Work",
	},
	{
		id: "contact",
		title: "Contact",
	},
];

const services = [
	{
		title: "Front-End Developer",
		icon: web,
	},
	{
		title: "Software Engineer",
		icon: mobile,
	},
	{
		title: "Data Analyst",
		icon: backend,
	},
	{
		title: "Consultant",
		icon: creator,
	},
];

const technologies = [
	{
		name: "HTML 5",
		icon: html,
	},
	{
		name: "CSS 3",
		icon: css,
	},
	{
		name: "JavaScript",
		icon: javascript,
	},
	{
		name: "TypeScript",
		icon: typescript,
	},
	{
		name: "React JS",
		icon: reactjs,
	},
	{
		name: "Tailwind CSS",
		icon: tailwind,
	},
	{
		name: "Node JS",
		icon: nodejs,
	},
	{
		name: "Three JS",
		icon: threejs,
	},
	{
		name: "git",
		icon: git,
	},
	{
		name: "java",
		icon: java,
	},
	{
		name: "python",
		icon: python,
	},
	{
		name: "excel",
		icon: excel,
	},
];

const experiences = [
	{
		title: "Front-End Web Developer Intern",
		company_name: "SEAS Wellness @ Penn",
		icon: seaswellness,
		iconBg: "#383E56",
		date: "Jan 2022 - Feb 2022",
		points: [
			"Collaborated with a team to build Grade Calculator, an upcoming Penn-wide interactive platform that minimizes grade anxiety by offering students instant and meaningful performance projections.",
			"Utilized React, JavaScript, HTML, CSS, and Figma for initial branding, wireframing, and development of prototype.",
		],
	},
	{
		title: "Investment Analyst and Software Developer Intern",
		company_name: "First Round Capital",
		icon: firstround,
		iconBg: "#E6DEDD",
		date: "Jun 2022 - Aug 2022",
		points: [
			"Supported the venture capital firm’s CEO and Chief of Staff in reviewing start-up investment deals.",
			"Conducted competitive market analysis and compiled due diligence reports to address concerns for potential investment opportunity proposals.",
			"Sourced and consolidated a directory of healthcare professionals to help Partners build an advisory board to support start-ups.",
			"Updated website UI for a community discussion-based tool using React, JavaScript, and Tailwind.",
		],
	},
	{
		title: "Data Analyst, Software Developer, and Growth Marketing Intern",
		company_name: "Supernow",
		icon: supernow,
		iconBg: "#383E56",
		date: "Jul 2022 - Aug 2022",
		points: [
			"Developed a new dashboard for an edtech start-up using Microsoft Excel and Metabase to streamline analysis of Shopify data for 1k+ customers.",
			"Partnered with the Heads of Product and Engineering on developing a gamified kid-enrichment platform by using React, TypeScript, and Tailwind..",
			"Assisted in the development and optimization of a back-to-school marketing campaign to increase user acquisition.",
			"Performed keyword research and competitor analysis to identify SEO opportunities and optimize existing content.",
		],
	},
	{
		title: "Tech Architecture Summer Analyst",
		company_name: "Accenture",
		icon: accenture,
		iconBg: "#E6DEDD",
		date: "Jun 2023 - Aug 2023",
		points: [],
	},
];

const testimonials = [
	{
		testimonial:
			"Ryan is a dedicated and talented individual who consistently delivers excellent work. His attention to detail and commitment to quality make him a valuable asset to any team.",
		name: "Swarith Reddy",
		designation: "President of",
		company: "Wharton Undergraduate Finance & Technology Group",
		linkedIn: "https://www.linkedin.com/in/swarith-reddy/",
	},
	{
		testimonial:
			"Ryan is a role model and inspiration to anyone he meets. He has an innate talent for leading a diverse team and drawing out their strengths while producing consistent, excellent results across all disciplines.",
		name: "Zayvinn Lin",
		designation: "Mechanical and Aerospace Engineering Student at",
		company: "Princeton University",
		linkedIn: "https://www.linkedin.com/in/zayvinn-lin-295782201/",
	},
	{
		testimonial:
			"Ryan brings, at the highest standard, the two most important elements of someone people strive to work with: professional and personable.",
		name: "Kyne Wang",
		designation:
			"Co-President of Wharton Undergraduate Healthcare Club, Investment Banking Summer Analyst at",
		company: "Lazard",
		linkedIn: "https://www.linkedin.com/in/kynewang/",
	},
	// {
	// 	testimonial:
	// 		"Ryan is an exceptional leader, as he possesses strong strategic thinking, effective decision-making skills, and a proven track record of delivering results.",
	// 	name: "Om Gandhi",
	// 	designation: "Project Lead at",
	// 	company: "Locust Bioventures",
	// },
];

const projects = [
	{
		name: "Blogging Platform",
		description:
			"In a course I took, I developed a blogging platform very similar to Medium and Dev.to with features such as Google Authentication, custom usernames, real-time CRUD posts and hearts, SEO compatability, and image file uploads.",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "next.js",
				color: "green-text-gradient",
			},
			{
				name: "firebase",
				color: "pink-text-gradient",
			},
			{
				name: "css modules",
				color: "orange-text-gradient",
			},
		],
		image: blog,
		source_code_link: "https://github.com/rydelopez/Medium-Blog-Platform",
	},
	{
		name: "Social Media Website",
		description:
			"For a class group project, we designed and developed a mock Facebook app with features such as account registration, friend networks, network visualization, dynamic content, real-time chat channels, and news recommendation.",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "bootstrap",
				color: "green-text-gradient",
			},
			{
				name: "node",
				color: "pink-text-gradient",
			},
			{
				name: "express",
				color: "orange-text-gradient",
			},
			{
				name: "dynamodb",
				color: "blue-text-gradient",
			},
			{
				name: "socket.io",
				color: "green-text-gradient",
			},
			{
				name: "ec2",
				color: "pink-text-gradient",
			},
		],
		image: pennbook,
		source_code_link: "https://github.com/rydelopez/Social-Media-Website",
	},
	{
		name: "Penn Course Cart",
		description:
			"For Penn Labs' front-end technical challenge, I developed a course cart app for students to easily search for, add, and checkout CIS courses. Data is integrated from the Penn Courses API.",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "typescript",
				color: "green-text-gradient",
			},
			{
				name: "tailwind",
				color: "pink-text-gradient",
			},
			{
				name: "headlessui",
				color: "orange-text-gradient",
			},
		],
		image: penncoursecart,
		source_code_link: "https://github.com/rydelopez/frontend-challenge-f22",
	},
];

export { services, technologies, experiences, testimonials, projects };
