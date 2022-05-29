import { Header } from "../components";
import { Link } from "react-router-dom";

export default function HeaderContainer({ children, ...restProps }) {
	return (
		<Header {...restProps}>
			<Header.Inner>
				<Link to={"/"}>
					<Header.Logo src="/images/misc/logo.svg" alt="logo" />
				</Link>
				<Link to={"/signin"}>
					<Header.Button>S'identifier</Header.Button>
				</Link>
			</Header.Inner>
			{children}
		</Header>
	);
}
