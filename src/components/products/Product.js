import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../shared/Button";

export function Product({ _id, name, image, price, isPromotion, cart }) {
	const [isInCart, setIsInCart] = useState(false);
	const navigate = useNavigate();

	function formatPrice() {
		return `R$ ${(price / 100).toFixed(2)}`;
	}

	function addToCart() {
		cart.addProduct({ _id, name, image, price });
		setIsInCart(true);
	}

	function removeFromCart() {
		cart.removeProduct(_id, price);
		setIsInCart(false);
	}

	return (
		<div id="product" onClick={() => navigate(`/product/${_id}`)}>
			<div>
				<img alt={name} src={image} />
				<span className="product-name">{name}</span>
				{isPromotion && <span className="product-promotion">PROMOÇÃO</span>}
			</div>

			<div>
				{isPromotion && (
					<span className="product-price product-promotion">
						{formatPrice()}
					</span>
				)}

				{!isPromotion && <span className="product-price">{formatPrice()}</span>}

				{!isInCart && (
					<Button
						size="small"
						text="Adicionar ao carrinho"
						onClick={addToCart}
					/>
				)}

				{isInCart && (
					<Button
						size="small"
						style="default-inverted"
						text="Remover do carrinho"
						onClick={removeFromCart}
					/>
				)}
			</div>
		</div>
	);
}
