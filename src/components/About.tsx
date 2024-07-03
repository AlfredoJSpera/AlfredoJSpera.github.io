import classNames from "classnames";

import { aboutData, SectionId } from "../data/data";

function About() {
	const { profileImageSrc, description, aboutItems } = aboutData;

	return (
		<div
			id={SectionId.About}
			className={classNames("about", {
				"about-with-image": !!profileImageSrc,
			})}
		>
			{!!profileImageSrc && (
				<div className="image-container">
					<img
						className="image"
						src={profileImageSrc}
						alt="Profile"
					/>
				</div>
			)}
			<div
				className={classNames("text-container", {
					"text-container-with-image": !!profileImageSrc,
				})}
			>
				<div className="text">
					<h2 className="text-2xl font-bold text-white">About me</h2>
					<p className="prose prose-sm text-gray-300 sm:prose-base">
						{description}
					</p>
				</div>
				<ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
					{aboutItems.map(({ label, text, Icon }, idx) => (
						<li
							className="col-span-1 flex  items-start gap-x-2"
							key={idx}
						>
							{Icon && <Icon className="h-5 w-5 text-white" />}
							<span className="text-sm font-bold text-white">
								{label}:
							</span>
							<span className=" text-sm text-gray-300">
								{text}
							</span>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}

export default About;
