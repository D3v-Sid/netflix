import { Container, Input, Inner, Button, Text } from "./style/mail";

export default function Mail({ children, ...restProps }) {
	return <Container {...restProps}> {children} </Container>;
}

Mail.Inner = function MailInner({ children, ...restProps }) {
	return <Inner {...restProps}> {children} </Inner>;
};

Mail.Input = function MailInput({ children, ...restProps }) {
	return <Input {...restProps} />;
};

Mail.Button = function MailButton({ children, ...restProps }) {
	return <Button {...restProps}> {children} </Button>;
};

Mail.Text = function MailText({ children, ...restProps }) {
	return <Text {...restProps}> {children} </Text>;
};
