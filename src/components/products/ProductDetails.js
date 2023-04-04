import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../../service/api";
import { Button } from "../shared/Button";

export function ProductDetails({ cart }) {
	const params = useParams();
	const [details, setDetails] = useState({});
	const [isInCart, setIsInCart] = useState(
		cart.searchProduct(params.id) !== null
	);

	useEffect(() => {
		const product = cart.searchProduct(params.id);
		if (!!product !== isInCart) setIsInCart((prev) => !prev);
	}, [cart.data]);

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

	function getPrice() {
		return details.isPromotion ? details.promotionPrice : details.originalPrice;
	}

	function addToCart() {
		const { _id, name, image } = details;

		cart.addProduct({ _id, name, image, price: getPrice() });
		setIsInCart(true);
	}

	function removeFromCart() {
		cart.removeProduct(details._id, getPrice());
		setIsInCart(false);
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

				{!isInCart && (
					<Button
						size="large"
						text="Adicionar ao carrinho"
						onClick={addToCart}
					/>
				)}

				{isInCart && (
					<Button
						size="large"
						style="default-inverted"
						text="Remover do carrinho"
						onClick={removeFromCart}
					/>
				)}
			</div>

			<img alt={details.name} src={details.image} />
		</section>
	);
}
