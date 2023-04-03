import {
	createContext,
	PropsWithChildren,
	useContext,
	useReducer,
} from "react";

function reducer(products, action) {
	if (action.type === "set") {
		products.original = [...action.data];
		products.render = [...action.data];

		return products;
	}

	return products;
}

export function useProducts() {
	const [products, dispatch] = useReducer(reducer, {
		original: [],
		render: [],
	});

	function setProducts(data) {
		return dispatch({ type: "set", data });
	}

	return { products, setProducts };
}
