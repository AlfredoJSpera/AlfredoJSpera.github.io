import { HomepageMeta, Hero, Social, About } from "./dataDef";
import {
	ArrowDownTrayIcon,
	CalendarIcon,
	FlagIcon,
	MapIcon,
	SparklesIcon,
} from "@heroicons/react/24/outline";

import GithubIcon from "../components/Icon/GithubIcon";
import LinkedInIcon from "../components/Icon/LinkedInIcon";
import StackOverflowIcon from "../components/Icon/StackOverflowIcon";
import heroImage from "../images/hero-background.png";
import profilepic from "../images/profilepic.png";

/**
 * Section definition
 */
export const SectionId = {
	Hero: "hero",
	About: "about",
	Contact: "contact",
	Portfolio: "portfolio",
	Resume: "resume",
	Skills: "skills",
	Stats: "stats",
	Testimonials: "testimonials",
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
	title: "Spera Alfredo Jeshoua",
	description: "Sito di Spera Alfredo Jeshoua",
};

/**
 * Hero section
 */
export const heroData: Hero = {
	imageSrc: heroImage,
	name: "Spera Alfredo Jeshoua",
	description: (
		<>
			<p>
				Sono uno <strong>studente di Informatica</strong> presso{" "}
				<strong className="text-stone-100">
					l'Università degli Studi di Salerno
				</strong>
				.
			</p>
		</>
	),
	actions: [
		{
			href: "/resume.pdf",
			text: "Curriculum Vitae",
			primary: true,
			Icon: ArrowDownTrayIcon,
		},
	],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
	{
		label: "Github",
		Icon: GithubIcon,
		href: "https://github.com/AlfredoJSpera",
	},
	{
		label: "Stack Overflow",
		Icon: StackOverflowIcon,
		href: "https://stackoverflow.com/users/23087941/alfredojspera",
	},
	{
		label: "LinkedIn",
		Icon: LinkedInIcon,
		href: "https://www.linkedin.com/in/alfredo-jeshoua-spera-444200313/",
	},
];

/**
 * About section
 */
export const aboutData: About = {
	profileImageSrc: profilepic,
	description: `Studente del dipartimento di Informatica dell'Università degli Studi di Salerno con interessi per vari tipi di Hardware e Software. 
	Dopo aver conseguito la laurea triennale, intendo proseguire i miei studi con una Magistrale in Informatica, specializzandomi in Cloud Computing, presso l'Università degli Studi di Salerno.`,
	aboutItems: [
		{
			label: "Posizione",
			text: "San Marzano sul Sarno (SA)",
			Icon: MapIcon,
		},
		{ label: "Età", text: "22", Icon: CalendarIcon },
		{ label: "Nationalità", text: "Italiana", Icon: FlagIcon },
		{
			label: "Interessi",
			text: "Videogiochi, Vintage Computing, Disegno",
			Icon: SparklesIcon,
		},
	],
};
