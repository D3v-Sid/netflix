import { Container, Inner, Text } from "./style/feature";

export default function Feature({ children, ...restProps }) {
	return <Container {...restProps}> {children} </Container>;
}

Feature.Inner = function MailInner({ children, ...restProps }) {
	return <Inner {...restProps}> {children} </Inner>;
};

Feature.Text = function MailText({ children, ...restProps }) {
	return <Text {...restProps}> {children} </Text>;
};
