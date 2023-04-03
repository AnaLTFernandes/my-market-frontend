import { useEffect, useState } from "react";
import { Products } from "../components/products/Products";
import { FilterProductsFieldset } from "../components/products/FilterProductsFieldset";
import { Search } from "../components/search/Search";
import { useProducts } from "../hooks/useProducts";

export function MainPage() {
	const {
		products,
		setProducts,
		filterProductsByName,
		filterProductsByCategory,
	} = useProducts();
	const [currentProducts, setCurrentProducts] = useState(products);

	useEffect(() => {
		setCurrentProducts(products);
	}, [products]);

	return (
		<main>
			<Search filterProductsByName={filterProductsByName} />

			<FilterProductsFieldset
				filterProductsByCategory={filterProductsByCategory}
			/>

			<Products products={currentProducts} setProducts={setProducts} />
		</main>
	);
}
