import { Container, Logo, Button } from "./style/header";

export default function Header({ children, ...restProps }) {
	return <Container {...restProps}> {children} </Container>;
}

Header.Logo = function HeaderLogo({ ...restProps }) {
	return <Logo {...restProps} />;
};

Header.Button = function HeaderButton({ children, ...restProps }) {
	return <Button {...restProps}> {children} </Button>;
};
