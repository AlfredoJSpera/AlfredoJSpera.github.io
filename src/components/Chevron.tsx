import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import "../style/Chevron.css";

interface ChevronProps {
	direction: "up" | "down";
	href: string;
}

function Chevron(props: ChevronProps) {
	return (
		<div className="chevron">
			<a className="chevron-link" href={`${props.href}`}>
				{props.direction === "up" ? (
					<ChevronUpIcon className="chevron-icon" />
				) : (
					<ChevronDownIcon className="chevron-icon" />
				)}
			</a>
		</div>
	);
}

export default Chevron;
