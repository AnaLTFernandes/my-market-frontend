import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../../service/api";
import { Loading } from "../shared";
import { Product } from "./Product";

export function Products({ products, setProducts, cart }) {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		api
			.listProducts()
			.then((response) => {
				setProducts([...response]);
				setIsLoading(false);
			})
			.catch(() => {
				setIsLoading(false);
				toast(
					"Não foi possível carregar os produtos. Por favor, recarregue a página."
				);
			});
	}, []);

	return (
		<section className="products-section">
			<h3>Produtos</h3>

			{isLoading && <Loading />}

			{!isLoading && (
				<div>
					{products.render.length === 0 && <span>Não há produtos!</span>}

					{products.render.length > 0 &&
						products.render.map((product, index) => (
							<Product key={index} {...product} cart={cart} />
						))}
				</div>
			)}
		</section>
	);
}
