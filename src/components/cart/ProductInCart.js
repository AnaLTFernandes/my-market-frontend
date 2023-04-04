export function ProductInCart({ name, image, price, formatPrice }) {
	return (
		<div className="cart-product">
			<div>
				<img alt={name} src={image} />
				<span className="cart-product-name">{name}</span>
			</div>

			<div>
				<span className="cart-product-price">{formatPrice(price)}</span>
			</div>
		</div>
	);
}
