import { Fieldset } from "../shared/Fieldset";

export function OrderProductsFieldset({ orderProductsByField }) {
	function handleOrder(field, order) {
		orderProductsByField({ field, order });
	}

	return (
		<Fieldset legend="Ordernar por">
			<div>
				<input
					type="radio"
					id="orderById"
					name="orderBy"
					value="_id"
					defaultChecked
					onChange={(e) => handleOrder(e.target.value, "asc")}
				/>
				<label htmlFor="orderById">padrão</label>
			</div>

			<div>
				<input
					type="radio"
					id="orderByName"
					name="orderBy"
					value="name"
					onChange={(e) => handleOrder(e.target.value, "asc")}
				/>
				<label htmlFor="orderByName">nome</label>
			</div>

			<div>
				<input
					type="radio"
					id="orderByLowestPrice"
					name="orderBy"
					value="price"
					onChange={(e) => handleOrder(e.target.value, "asc")}
				/>
				<label htmlFor="orderByLowestPrice">menor preço</label>
			</div>

			<div>
				<input
					type="radio"
					id="orderByBiggestPrice"
					name="orderBy"
					value="price"
					onChange={(e) => handleOrder(e.target.value, "desc")}
				/>
				<label htmlFor="orderByBiggestPrice">maior preço</label>
			</div>

			<div>
				<input
					type="radio"
					id="orderByCategory"
					name="orderBy"
					value="categoryId"
					onChange={(e) => handleOrder(e.target.value, "asc")}
				/>
				<label htmlFor="orderByCategory">categoria</label>
			</div>
		</Fieldset>
	);
}
