import React from "react";
import "./App.css";
import Hero from "./components/Hero";
import Page from "./components/Page";
import About from "./components/About";

function App() {
	return (
		<>
			<Page>
				<Hero />
				{/*<About />*/}
			</Page>
		</>
	);
}

export default App;
