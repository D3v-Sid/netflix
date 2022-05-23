import styled from "styled-components/macro";

export const Container = styled.div`
	padding: 70px 45px;
	display: flex;
	justify-content: space-evenly;
	@media (max-width: 1000px) {
		padding: 70px 30px;
	}
`;

export const Link = styled.a`
	color: #757575;
	text-decoration: none;
	font-size: 13px;
	:hover {
		text-decoration: underline;
	}
`;
export const Column = styled.div`
	display: flex;
	flex-direction: column;
	padding: 1rem;
	gap: 10px;
	border: 1px solid red;
`;
export const Row = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
	grid-gap: 15px;
	@media (max-width: 1000px) {
		grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
	}
`;
