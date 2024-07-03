import React from "react";
import "../style/Hero.css";
import { heroData } from "../data/data";

function Hero() {
	return (
		<div
			className="hero"
			style={{ backgroundImage: `url(${heroData.imageSrc})` }}
		>
			<div className="hero1">
				<div className="hero-content">
					<div className="hero-name">{heroData.name}</div>
					<div className="hero-description">
						{heroData.description}
					</div>
					<button className="hero-btn">Learn More</button>
				</div>
			</div>
		</div>
	);
}

export default Hero;
