import { Inner, Container } from "./style/jumbotron";

export default function Jumbotron({ children, direction = "row", ...restProps }) {
	return (
		/* Inner is a Styled Component */
		<Inner direction={direction}>{children}</Inner>
	);
}

Jumbotron.Container = function JumbotronContainer({ children, ...restProps }) {
	return <Container>{children}</Container>;
};
