import React from "react";
import "../style/Hero.css";
import classNames from "classnames";
import { heroData, SectionId } from "../data/data";
import Chevron from "./Chevron";

function Hero() {
	const { imageSrc, name, description, actions } = heroData;

	return (
		<div className="hero" style={{ backgroundImage: `url(${imageSrc})` }}>
			<div className="container">
				<div className="content">
					<div className="name">{name}</div>

					<div className="description">{description}</div>

					{/* TODO: SOCIALS*/}

					<div className="actions">
						{actions.map(({ href, text, primary, Icon }) => (
							<a
								className={classNames(
									"action-button",
									primary
										? "action-button-primary"
										: "action-button-other"
								)}
								href={href}
								key={text}
							>
								{text}
								{Icon && <Icon className="action-icon" />}
							</a>
						))}
					</div>
				</div>
			</div>
			<Chevron direction="down" href={`/#${SectionId.About}`} />
		</div>
	);
}

export default Hero;
