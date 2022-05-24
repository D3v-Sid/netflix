import styled from "styled-components/macro";

export const Container = styled.div`
	padding: 70px 35px;
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	justify-content: center;
	color: #fff;
`;

export const Title = styled.h1`
	font-size: 3.125rem;
	line-height: 1.1;
	margin-bottom: 0.5rem;
	@media (max-width: 600px) {
		font-size: 26px;
	}
`;

export const Row = styled.div`
	text-align: left;
	background: #303030;
	padding: 0.8em 2.2em 0.8em 1.2em;
	margin-bottom: 1px;
	cursor: pointer;
`;

export const Header = styled.h3`
	font-size: 26px;
	font-weight: 400;
`;

export const Body = styled.div`
	font-weight: normal;
	line-height: normal;
	background: #303030;
	white-space: pre-wrap;
	user-select: none;
	overflow: hidden;
	&.closed {
		max-height: 0;
		overflow: hidden;
		transition: max-height 0.25s cubic-bezier(0.5, 0, 0.1, 1);
	}
	&.open {
		max-height: 1200px;
		transition: max-height 0.25s cubic-bezier(0.5, 0, 0.1, 1);
	}
	span {
		display: block;
		padding: 0.8em 2.2em 0.8em 1.2em;
	}
	@media (max-width: 600px) {
		font-size: 16px;
		line-height: 22px;
	}
`;
