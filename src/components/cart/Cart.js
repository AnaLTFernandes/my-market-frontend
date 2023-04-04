import { useState } from "react";
import { ProductInCart } from "./ProductInCart";

export function Cart({ cart: { data: cart, removeProduct } }) {
	const [isOpen, setIsOpen] = useState(false);

	function formatPrice(price) {
		return `R$ ${(price / 100).toFixed(2)}`;
	}

	function toggleIsOpen() {
		setIsOpen((prev) => !prev);
	}

	function removeFromCart(id, price) {
		removeProduct(id, price);
	}

	return (
		<div id="cart" className={`cart ${isOpen ? "open" : "closed"}`}>
			<div className="cart-products">
				{cart.products.length > 0 &&
					cart.products.map((product) => (
						<ProductInCart
							key={`cart-product-${product._id}`}
							{...product}
							removeFromCart={removeFromCart}
							formatPrice={formatPrice}
						/>
					))}

				{cart.products.length === 0 && (
					<span>Ainda não há nada no carrinho!</span>
				)}
			</div>

			<div className="cart-total">
				<span>Total</span>

				<div>
					<span className="cart-total-price">
						{formatPrice(cart.totalPrice)}
					</span>

					<span className="open-close-cart" onClick={toggleIsOpen}>
						{isOpen ? "-" : "+"}
					</span>
				</div>
			</div>
		</div>
	);
}
