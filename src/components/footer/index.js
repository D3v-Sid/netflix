import { Container, Link, Column, Row, Headline } from "./style/footer";

export default function Footer({ children, ...restProps }) {
	return <Container {...restProps}>{children} </Container>;
}

Footer.Link = function FooterLink({ children, ...restProps }) {
	return <Link {...restProps}>{children} </Link>;
};

Footer.Column = function FooterColumn({ children, ...restProps }) {
	return <Column {...restProps}> {children} </Column>;
};
Footer.Row = function FooterRow({ children, ...restProps }) {
	return <Row {...restProps}> {children} </Row>;
};
Footer.Headline = function FooterHeadline({ children, ...restProps }) {
	return <Headline {...restProps}> {children} </Headline>;
};
