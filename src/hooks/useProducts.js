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
		products.filteredByName = products.original.filter(({ name }) =>
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

	if (action.type === "orderByField") {
		const field = action.field;

		if (products.original[0][field] === undefined) return { ...products };

		const arrayBase = getArrayBase();

		if (action.order === "desc") {
			products[arrayBase].sort((curr, next) =>
				curr[field] > next[field] ? -1 : 1
			);
			products.render = [...products[arrayBase]];

			return { ...products };
		}

		products[arrayBase].sort((curr, next) =>
			curr[field] > next[field] ? 1 : -1
		);
		products.render = [...products[arrayBase]];

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

	function orderProductsByField({ field = "_id", order = "asc" }) {
		return dispatch({ type: "orderByField", field, order });
	}

	return {
		products,
		setProducts,
		filterProductsByName,
		filterProductsByCategory,
		orderProductsByField,
	};
}
