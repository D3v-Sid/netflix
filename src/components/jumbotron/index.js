import { Inner, Container, Image, Title, SubTitle, Pane } from "./style/jumbotron";

export default function Jumbotron({ children, direction = "row", ...restProps }) {
	return (
		/* Inner is a Styled Component */
		<Inner direction={direction}>{children}</Inner>
	);
}

Jumbotron.Container = function JumbotronContainer({ children, ...restProps }) {
	return <Container {...restProps}>{children}</Container>;
};

Jumbotron.Image = function JumbotronImage({ src, alt, ...restProps }) {
	return <Image src={src} alt={alt} {...restProps} />;
};

Jumbotron.Title = function JumbotronTitle({ children, ...restProps }) {
	return <Title {...restProps}>{children}</Title>;
};

Jumbotron.SubTitle = function JumbotronSubTitle({ children, ...restProps }) {
	return <SubTitle {...restProps}>{children}</SubTitle>;
};

Jumbotron.Pane = function JumbotronPane({ children, ...restProps }) {
	return <Pane {...restProps}>{children}</Pane>;
};
