import { useState } from "react";
import { Button } from "../shared/Button";

export function Search() {
	return (
		<section className="search-section">
			<input type="text" placeholder="Digite o nome de um produto..." />
			<Button text="Pesquisar" />
		</section>
	);
}
