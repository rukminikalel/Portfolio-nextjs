import emoji from "react-easy-emoji";

export const greetings = {
	name: "Rukmini Kalel",
	title: "Hi all, I'm Rukmini",
	description:
		"I'm passionate Full Stack web developer having an experience of web applications with Python, Angular.js, React.js, Next.js and Mongo,Node.js.",
	resumeLink:
		"https://drive.google.com/file/d/1rBwxZ_0abrLq8SmxQGsgYJSQOjMPnThI/view?usp=sharing",
};

export const openSource = {
	githubUserName: "rukmini20",
};

export const contact = {};

export const socialLinks = {
	instagram: "https://www.instagram.com/its.miniii/",
	github: "https://github.com/rukmini20",
	linkedin: "https://www.linkedin.com/in/rukmini-kalel",
};

export const skillsSection = {
	title: "What I do",
	subTitle:
		"CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
	data: [
		{
			title: "Full Stack Development",
			lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
			skills: [
				emoji(
					"⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js"
				),
				emoji("⚡ Building responsive static websites using Next.js"),
				emoji(
					"⚡ Building RESTful APIs in Django & Django REST Framework"
				),
			],
			softwareSkills: [
				{
					skillName: "HTML-5",
					fontAwesomeClassname: "vscode-icons:file-type-html",
				},
				{
					skillName: "CSS-3",
					fontAwesomeClassname: "vscode-icons:file-type-css",
				},
				{
					skillName: "JavaScript",
					fontAwesomeClassname: "logos:javascript",
				},
				{
					skillName: "Reactjs",
					fontAwesomeClassname: "vscode-icons:file-type-reactjs",
				},
				{
					skillName: "Nextjs",
					fontAwesomeClassname: "vscode-icons:file-type-light-next",
				},
				{
					skillName: "Python",
					fontAwesomeClassname: "logos:python",
				},
				{
					skillName: "Django",
					fontAwesomeClassname: "vscode-icons:file-type-django",
				},

				{
					skillName: "Redux",
					fontAwesomeClassname: "logos:redux",
				},
				{
					skillName: "NPM",
					fontAwesomeClassname: "logos:npm-icon",
				},
				{
					skillName: "Yarn",
					fontAwesomeClassname: "logos:yarn",
				},
			],
		},
		{
			title: "Cloud Infra-Architecture",
			lottieAnimationFile: "/lottie/skills/cloudinfra.json", // Path of Lottie Animation JSON File
			skills: [
				emoji("⚡ Experience of working on multiple cloud platforms"),
				emoji(
					"⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases"
				),
				emoji(
					"⚡ Building CI/CD pipelines for automated testing & deployment using Github Actions"
				),
			],
			softwareSkills: [
				{
					skillName: "AWS",
					fontAwesomeClassname: "logos:aws",
				},
				{
					skillName: "Azure",
					fontAwesomeClassname: "logos:microsoft-azure",
				},
				{
					skillName: "Heroku",
					fontAwesomeClassname: "logos:heroku-icon",
				},
				{
					skillName: "PostgreSQL",
					fontAwesomeClassname: "logos:postgresql",
				},
				{
					skillName: "Github",
					fontAwesomeClassname: "akar-icons:github-fill",
				},
				{
					skillName: "Docker",
					fontAwesomeClassname: "logos:docker-icon",
				},
				{
					skillName: "Github Actions",
					fontAwesomeClassname: "logos:github-actions",
				},
				{
					skillName: "Cloudinary",
					fontAwesomeClassname: "logos:cloudinary",
				},
				{
					skillName: "Nginx",
					fontAwesomeClassname: "logos:nginx",
				},
				{
					skillName: "Sentry",
					fontAwesomeClassname: "logos:sentry-icon",
				},
			],
		},
		{
			title: "Blockchain",
			lottieAnimationFile: "/lottie/skills/ethereum.json", // Path of Lottie Animation JSON File
			skills: [
				emoji(
					"⚡ Experience in developing Smart Contract using Solidity & Ethereum"
				),
				emoji(
					"⚡ Building Scripts for automated testing & deployment of Smart Contracts using Brownie & Infura"
				),
				emoji(
					"⚡ Experience of using Openzeppelin Smart Contract Standards & Chainlink Oracles"
				),
				emoji(
					"⚡ Developing NFT Smart Contracts using ERC-721 Token Standard"
				),
				emoji(
					"⚡ Building Dapps with React.js & Solidity using Web3.js, Moralis & IPFS"
				),
			],
			softwareSkills: [
				{
					skillName: "Ethereum",
					fontAwesomeClassname: "logos:ethereum",
				},
				{
					skillName: "Solidity",
					fontAwesomeClassname: "logos:solidity",
				},
				{
					skillName: "Web3js",
					fontAwesomeClassname: "logos:web3js",
				},
				{
					skillName: "Metamask",
					fontAwesomeClassname: "logos:metamask-icon",
				},
				{
					skillName: "Ganache",
					fontAwesomeClassname: "logos:ganache-icon",
				},
			],
		},
	],
};

export const SkillBars = [
	{
		Stack: "Frontend/Design", //Insert stack or technology you have experience in
		progressPercentage: "90", //Insert relative proficiency in percentage
	},
	{
		Stack: "Backend",
		progressPercentage: "70",
	},
	{
		Stack: "Programming",
		progressPercentage: "60",
	},
];

export const educationInfo = [
	{
		schoolName: "Pune University",
		subHeader: "Master of Computer Science(MCA)",
		duration: "2015 - 2018",
		desc: "Participated in the research of XXX and published 3 papers.",
	},
];

export const experience = [
	{
		role: "Software Engineer",
		company: "Invimatic Solutions",
		companylogo: "/img/icons/common/Invimatic.jpg",
		date: "Apr 2019 – Oct 2021",
		desc: "I worked as Full stack Developer with tech stack ReactJs,Nodejs,Dotnet Core,mysql,Postgre.",
	},
	{
		role: "Development Engineer",
		company: "CalsoftInc Private Limited",
		companylogo: "/img/icons/common/calsoft.png",
		date: "Dec 2021 - Till now",
		desc: "I am working as a development Engineer working on Frontend Angular and React,Kubernatives,Docker,D3Js,ML,Python.",
	},
];

export const projects = [
	{
		name: "AtlasMart",
		desc: "With Atlas Mart, it’s easy to find the products with the best price and ship them straight to your door.",
		link: "https://atlasmart.netlify.app/",
	},
	{
		name: "Technota (Forum)",
		desc: "Get hands-on experience in technical skills with Technota",
		link: "https://technota.netlify.app/",
	},
	{
		name: "Shopaza (Ecommerce)",
		desc: "Now your reach to all your favorite entertainment and luxury items is just one touch apart",
		link: "https://shopaza.herokuapp.com/",
	},
	{
		name: "MMFmelody (Blog)",
		desc: "Here you will find amazing tips about health, beauty, and modern-day life.",
		// github: "https://github.com/1hanzla100",
		link: "https://mmfmelody.herokuapp.com/",
	},
	{
		name: "Developer-Portfolio",
		desc: "Software Developer Portfolio Template built with react.js and next.js bootstrap that helps you showcase your work and skills as a software developer.",
		github: "https://github.com/1hanzla100/developer-portfolio",
		link: "https://developer-portfolio-1hanzla100.vercel.app/",
	},
];
