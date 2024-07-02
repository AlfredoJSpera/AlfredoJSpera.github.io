import React from "react";
import "../style/Hero.css";

interface HeroProps {
	name: string;
	description: string;
}

function Hero(props: HeroProps) {
	return (
		<div className="hero">
			<div className="hero-content">
				<div className="hero-content hero-blur">
					<div className="hero-name">{props.name}</div>
					<div className="hero-description">{props.description}</div>
					<button className="hero-btn">Learn More</button>
				</div>
			</div>
		</div>
	);
}

export default Hero;
