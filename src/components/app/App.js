import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "../header/Header";

import "../../styles/reset.css";
import "../../styles/style.css";

function App() {
	return (
		<BrowserRouter>
			<Header />
		</BrowserRouter>
	);
}

export default App;
