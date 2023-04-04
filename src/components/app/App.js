import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import { useCart } from "../../hooks/useCart";
import { Header } from "../header/Header";
import { MainPage } from "../../pages/MainPage";
import { ProductPage } from "../../pages/ProductPage";

import "../../styles/reset.css";
import "../../styles/style.css";

function App() {
	const cart = useCart();
	const [currentCart, setCurrentCart] = useState(cart);

	useEffect(() => {
		setCurrentCart(cart);
	}, [cart.data]);

	return (
		<BrowserRouter>
			<ToastContainer />

			<Header />

			<Routes>
				<Route path="/" element={<MainPage cart={currentCart} />} />

				<Route
					path="/product/:id"
					element={<ProductPage cart={currentCart} />}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
