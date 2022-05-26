/* eslint-disable no-unused-vars */
import { Container, Title, Header, Body, Row } from "./style/accordion";
import { useState, createContext, useContext } from "react";

const toggleFAQ = createContext();

export default function Accordion({ children, ...restProps }) {
	return <Container {...restProps}> {children} </Container>;
}

Accordion.Title = function AccordionTitle({ children, ...restProps }) {
	return <Title {...restProps}> {children} </Title>;
};
Accordion.Row = function AccordionRow({ children, ...restProps }) {
	const [toggleShow, setToggleShow] = useState(false);
	return (
		<toggleFAQ.Provider value={{ toggleShow, setToggleShow }}>
			<Row {...restProps}> {children} </Row>
		</toggleFAQ.Provider>
	);
};

Accordion.Header = function AccordionHeader({ children, ...restProps }) {
	const { toggleShow, setToggleShow } = useContext(toggleFAQ);
	return (
		<Header onClick={() => setToggleShow(toggleShow => !toggleShow)} {...restProps}>
			{children}
			{toggleShow ? (
				<img src="/images/icons/close-slim.png" alt="Close" />
			) : (
				<img src="/images/icons/add.png" alt="Open" />
			)}
		</Header>
	);
};

Accordion.Body = function AccordionBody({ children, ...restProps }) {
	const { toggleShow } = useContext(toggleFAQ);

	return toggleShow ? <Body {...restProps}> {children} </Body> : null;
};
