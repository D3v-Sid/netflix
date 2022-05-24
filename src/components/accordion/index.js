/* eslint-disable no-unused-vars */
import { Container, Title, Header, Body, Row } from "./style/accordion";
import { useState } from "react";

export default function Accordion({ children, ...restProps }) {
	return <Container {...restProps}> {children} </Container>;
}

Accordion.Title = function AccordionTitle({ children, ...restProps }) {
	return <Title {...restProps}> {children} </Title>;
};
Accordion.Row = function AccordionRow({ children, ...restProps }) {
	const [toggleShow, settoggleShow] = useState(false);
	return <Row {...restProps}> {children} </Row>;
};

Accordion.Header = function AccordionHeader({ children, ...restProps }) {
	return <Header {...restProps}> {children} </Header>;
};

Accordion.Body = function AccordionBody({ children, ...restProps }) {
	return <Body {...restProps}> {children} </Body>;
};
