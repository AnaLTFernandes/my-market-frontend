import { useEffect, useState } from "react";
import { Products } from "../components/products/Products";
import { Search } from "../components/search/Search";
import { useProducts } from "../hooks/useProducts";

export function MainPage() {
	const { products, setProducts, filterProductsByName } = useProducts();
	const [currentProducts, setCurrentProducts] = useState(products);

	useEffect(() => {
		setCurrentProducts(products);
	}, [products]);

	return (
		<main>
			<Search filterProductsByName={filterProductsByName} />
			<Products products={currentProducts} setProducts={setProducts} />
		</main>
	);
}
