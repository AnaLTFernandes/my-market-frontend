import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../../service/api";
import { Fieldset } from "../shared/Fieldset";

export function FilterProductsFieldset({ filterProductsByCategory }) {
	const [categories, setCategories] = useState([{ _id: 0, name: "todas" }]);

	useEffect(() => {
		api
			.listCategories()
			.then((response) => setCategories((prev) => [...prev, ...response]))
			.catch(() =>
				toast(
					"Não foi possível carregar as categorias. Por favor, recarregue a página."
				)
			);
	}, []);

	return (
		<Fieldset legend="Filtrar por">
			<div>
				<span>categoria: </span>

				<select onChange={(e) => filterProductsByCategory(e.target.value)}>
					{categories.map(({ name, _id }) => (
						<option key={_id} value={_id}>
							{name}
						</option>
					))}
				</select>
			</div>
		</Fieldset>
	);
}
