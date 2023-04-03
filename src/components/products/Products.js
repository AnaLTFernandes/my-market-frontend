import { useEffect } from "react";
import { toast } from "react-toastify";
import { Product } from "./Product";
import { api } from "../../service/api";

export function Products({ products, setProducts }) {
	useEffect(() => {
		api
			.listProducts()
			.then((response) =>
				setProducts({ filtered: [...response], original: [...response] })
			)
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
				{products.filtered.map((product, index) => (
					<Product key={index} {...product} />
				))}
			</div>
		</section>
	);
}
