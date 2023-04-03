export function Button({
	text,
	size = "normal",
	style = "default",
	rounded = false,
	...otherProps
}) {
	const classname = `extensible-button ${size} ${style} ${
		rounded ? "rounded" : ""
	}`.trim();

	return (
		<button {...otherProps} className={classname}>
			{text}
		</button>
	);
}
