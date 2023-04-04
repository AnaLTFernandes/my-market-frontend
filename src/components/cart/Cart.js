export function Cart({ cart }) {
	function formatPrice() {
		return `R$ ${(cart.data.totalPrice / 100).toFixed(2)}`;
	}

	return (
		<div id="cart">
			<div className="cart-total">
				<span>Total</span>
				<span className="cart-total-price">{formatPrice()}</span>
			</div>
		</div>
	);
}
