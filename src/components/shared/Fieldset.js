export function Fieldset({ legend = "Legenda", children, ...otherProps }) {
	return (
		<fieldset {...otherProps} className="extensible-fieldset">
			<legend>{legend}</legend>

			<div>{children}</div>
		</fieldset>
	);
}
