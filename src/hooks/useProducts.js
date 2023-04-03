import { useReducer } from "react";

function reducer(products, action) {
	function getArrayBase() {
		if (products.filtered.length > 0) return "filtered";
		return "original";
	}

	if (action.type === "set") {
		products.original = [...action.data];
		products.render = [...action.data];

		return { ...products };
	}

	if (action.type === "filterByName") {
		const searchName = action.name.toLowerCase();
		products.filteredByName = products[getArrayBase()].filter(({ name }) =>
			name.toLowerCase().includes(searchName)
		);
		products.filtered = [...products.filteredByName];
		products.render = [...products.filtered];

		return { ...products };
	}

	if (action.type === "filterByCategory") {
		if (Number(action.id) === 0) {
			products.render = [...products.original];
			return { ...products };
		}

		products.filteredByCategory = products[getArrayBase()].filter(
			({ categoryId }) => categoryId === action.id
		);
		products.filtered = [...products.filteredByCategory];
		products.render = [...products.filtered];

		return { ...products };
	}

	return { ...products };
}

export function useProducts() {
	const [products, dispatch] = useReducer(reducer, {
		original: [],
		filtered: [],
		render: [],
	});

	function setProducts(data) {
		return dispatch({ type: "set", data });
	}

	function filterProductsByName(name) {
		return dispatch({ type: "filterByName", name });
	}

	function filterProductsByCategory(id) {
		return dispatch({ type: "filterByCategory", id });
	}

	return {
		products,
		setProducts,
		filterProductsByName,
		filterProductsByCategory,
	};
}
