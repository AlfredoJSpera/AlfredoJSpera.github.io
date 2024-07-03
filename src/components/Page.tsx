import { ReactNode, useEffect } from "react";

import { homePageMeta } from "../data/data";

interface PageProps {
	children: ReactNode;
}

function Page({ children }: PageProps) {
	const { description, title } = homePageMeta;

	useEffect(() => {
		// Update title
		document.title = title;

		// Update meta description
		const metaDescription = document.querySelector(
			'meta[name="description"]'
		);
		if (metaDescription) {
			metaDescription.setAttribute("content", description);
		}
	}, [title, description]);

	return <>{children}</>;
}

export default Page;
