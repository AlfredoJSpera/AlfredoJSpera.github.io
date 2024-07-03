import { HomepageMeta, Hero } from "./dataDef";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";

import heroImage from "../images/hero-background.png";

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
	title: "Spera Alfredo Jeshoua",
	description: "Sito curriculum di Spera Alfredo Jeshoua",
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
				Sono uno <strong>studente di Informatica</strong> presso
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
