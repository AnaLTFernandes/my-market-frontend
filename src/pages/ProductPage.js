import { ProductDetails } from "../components/products/ProductDetails";

export function ProductPage({ cart }) {
	return (
		<main>
			<ProductDetails cart={cart} />
		</main>
	);
}
