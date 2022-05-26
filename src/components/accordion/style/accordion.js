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
	text-align: center;
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

export const Header = styled.div`
	font-size: 26px;
	font-weight: 400;
	display: flex;
	justify-content: space-between;
	padding: 0.5rem 1rem;

	img {
		filter: brightness(0) invert(1);
		height: 18px;
		width: 18px;
	}
`;

export const Body = styled.div`
	padding: 1rem;
	font-weight: normal;
	line-height: normal;
	font-size: 23px;
	background: #303030;
	white-space: pre-wrap;
	user-select: none;
	text-align: justify;

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
