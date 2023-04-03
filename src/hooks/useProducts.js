import { useReducer } from "react";

function reducer(products, action) {
	if (action.type === "set") {
		products.original = [...action.data];
		products.render = [...action.data];

		return { ...products };
	}

	if (action.type === "filterByName") {
		const searchName = action.name.toLowerCase();
		products.filteredByName = products.original.filter(({ name }) =>
			name.toLowerCase().includes(searchName)
		);
		products.render = [...products.filteredByName];

		return { ...products };
	}

	return { ...products };
}

export function useProducts() {
	const [products, dispatch] = useReducer(reducer, {
		original: [],
		filteredByName: [],
		render: [],
	});

	function setProducts(data) {
		return dispatch({ type: "set", data });
	}

	function filterProductsByName(name) {
		return dispatch({ type: "filterByName", name });
	}

	return { products, setProducts, filterProductsByName };
}
