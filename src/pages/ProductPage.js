import { Link } from "react-router-dom";
import { ProductDetails } from "../components/products/ProductDetails";

export function ProductPage({ cart }) {
	return (
		<main>
			<Link to="/" className="return-main-link">
				voltar
			</Link>

			<ProductDetails cart={cart} />
		</main>
	);
}
