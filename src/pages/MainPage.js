import { useState } from "react";
import { useProducts } from "../hooks/useProducts";
import { Products } from "../components/products/Products";
import { Search } from "../components/search/Search";

export function MainPage() {
	const { products, setProducts } = useProducts();

	return (
		<main>
			<Search />
			<Products products={products} setProducts={setProducts} />
		</main>
	);
}
