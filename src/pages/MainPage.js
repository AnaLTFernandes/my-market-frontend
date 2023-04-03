import { useState } from "react";
import { Products } from "../components/products/Products";
import { Search } from "../components/search/Search";

export function MainPage() {
	const [products, setProducts] = useState({ original: [], filtered: [] });

	return (
		<main>
			<Search />
			<Products products={products} setProducts={setProducts} />
		</main>
	);
}
