import { useState } from "react";
import { Products } from "../components/products/Products";

export function MainPage() {
	const [products, setProducts] = useState({ original: [], filtered: [] });

	return (
		<main>
			<Products products={products} setProducts={setProducts} />
		</main>
	);
}
