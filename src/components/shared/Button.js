export function Button({
	text,
	size = "normal",
	style = "default",
	rounded = false,
}) {
	const classname = `extensible-button ${size} ${style} ${
		rounded ? "rounded" : ""
	}`.trim();

	return <button className={classname}>{text}</button>;
}
