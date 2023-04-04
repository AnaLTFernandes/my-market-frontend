import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../../service/api";
import { Button } from "../shared/Button";

export function ProductDetails() {
	const [details, setDetails] = useState({});
	const params = useParams();

	useEffect(() => {
		api
			.getProductDetails(params.id)
			.then((response) => setDetails({ ...response }))
			.catch((error) =>
				toast(
					error.message || "Não foi possível carregar os detalhes do produto."
				)
			);
	}, [params.id]);

	function formatPrice(price) {
		return `R$ ${(price / 100).toFixed(2)}`;
	}

	return (
		<section className="product-details-section">
			<div>
				<h4>{details.name}</h4>

				<span>
					Categoria: <b>{details.categoryName}</b>
				</span>

				<p>
					<b>Descrição: </b>
					{details.description}
				</p>

				{!details.isPromotion && (
					<span className="product-details-price">
						{formatPrice(details.originalPrice)}
					</span>
				)}

				{details.isPromotion && (
					<>
						<span className="product-details-price original-price">
							De: {formatPrice(details.originalPrice)}
						</span>
						<span className="product-details-price promotion-price">
							Para: {formatPrice(details.promotionPrice)}
						</span>
					</>
				)}

				<Button size="large" text="Adicionar ao carrinho" />
			</div>

			<img alt={details.name} src={details.image} />
		</section>
	);
}
