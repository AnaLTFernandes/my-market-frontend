import { Button } from "../shared/Button";

export function Product({ _id, name, image, price, isPromotion }) {
	function formatPrice() {
		return `R$ ${(price / 100).toFixed(2)}`;
	}

	return (
		<div id="product">
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

				<Button size="small" text="Adicionar ao carrinho" />
			</div>
		</div>
	);
}
