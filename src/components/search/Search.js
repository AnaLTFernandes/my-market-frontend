import { useState } from "react";
import { Button } from "../shared/Button";

export function Search({ filterProductsByName }) {
	const [searchValue, setSearchValue] = useState("");

	return (
		<section className="search-section">
			<input
				type="text"
				placeholder="Digite o nome de um produto..."
				onChange={(e) => setSearchValue(e.target.value)}
			/>

			<Button
				text="Pesquisar"
				onClick={() => filterProductsByName(searchValue)}
			/>
		</section>
	);
}
