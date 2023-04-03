import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Header } from "../header/Header";
import { MainPage } from "../../pages/MainPage";

import "../../styles/reset.css";
import "../../styles/style.css";

function App() {
	return (
		<BrowserRouter>
			<ToastContainer />

			<Header />

			<Routes>
				<Route path="/" element={<MainPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
