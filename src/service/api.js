const BASE_URI = process.env.REACT_APP_API_URI;

function createHeader() {
	const config = {
		headers: {
			"Content-Type": "application/json",
		},
	};

	return config;
}

async function throwError(response) {
	const error = await response
		.json()
		.then((response) => response)
		.catch(() => ({
			message: "Um erro ocorreu!",
		}));

	throw new Error(error.message, {
		cause: {
			message: error.message,
			status: response.status,
		},
	});
}

async function getRequest(path) {
	const config = createHeader();
	const response = await fetch(`${BASE_URI}${path}`, {
		method: "GET",
		...config,
	});

	if (response.status >= 400) {
		return throwError(response);
	}

	return response.json();
}

function listProducts() {
	return getRequest("/products");
}

function listCategories() {
	return getRequest("/categories");
}

const api = {
	listProducts,
	listCategories,
};

export { api };
