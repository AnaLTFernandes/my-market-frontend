import { Link } from "react-router-dom";
import logo from "../../images/my-market-logo.svg";

export function Header() {
	return (
		<header>
			<Link to="/">
				<img src={logo} alt="My Market" />
			</Link>
		</header>
	);
}
