import { socialLinks } from "../data/data";
import "../style/Socials.css";

function Socials() {
	return (
		<>
			<div className="socials-container">
				{socialLinks.map(({ label, Icon, href }) => (
					<a
						aria-label={label}
						className="socials"
						href={href}
						key={label}
					>
						<Icon className="icon" />
					</a>
				))}
			</div>
		</>
	);
}

export default Socials;
