import { useEffect } from "react";
import { toast } from "react-toastify";
import { api } from "../../service/api";
import { Product } from "./Product";

export function Products({ products, setProducts }) {
	useEffect(() => {
		api
			.listProducts()
			.then((response) => setProducts([...response]))
			.catch(() =>
				toast(
					"Não foi possível carregar os produtos. Por favor, recarregue a página."
				)
			);
	}, []);

	return (
		<section className="products-section">
			<h3>Produtos</h3>

			<div>
				{products.render.length === 0 && <span>Não há produtos!</span>}

				{products.render.length > 0 &&
					products.render.map((product, index) => (
						<Product key={index} {...product} />
					))}
			</div>
		</section>
	);
}
