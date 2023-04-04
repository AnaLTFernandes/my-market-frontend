import { useEffect, useState } from "react";
import { Search } from "../components/search/Search";
import { Products } from "../components/products/Products";
import { FilterProductsFieldset } from "../components/products/FilterProductsFieldset";
import { OrderProductsFieldset } from "../components/products/OrderProductsFieldset";
import { useProducts } from "../hooks/useProducts";

export function MainPage() {
	const {
		products,
		setProducts,
		filterProductsByName,
		filterProductsByCategory,
		orderProductsByField,
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

			<OrderProductsFieldset orderProductsByField={orderProductsByField} />

			<Products products={currentProducts} setProducts={setProducts} />
		</main>
	);
}
