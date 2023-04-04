export function formatPrice(price) {
		return Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(price/100);
	}
