/* Give us the composant name  */
import styled from "styled-components/macro";

export const Inner = styled.div`
	display: flex;
	/* Pass a prop  : Use template literal, then declare an arrow function */
	flex-direction: ${({ direction }) => direction};
	color: #fff;
	justify-content: space-between;
	border-bottom: 8px solid #222;
	align-items: center;
	max-width: 100vw;
	margin: auto;
	width: 100%;
	@media (max-width: 1000px) {
		flex-direction: column;
	}
`;

export const Container = styled.div`
	padding: 3rem;
`;

export const Pane = styled.div`
	width: 50%;
	@media (max-width: 1000px) {
		width: 100%;
		padding: 0 45px;
		text-align: center;
	}
`;

export const Image = styled.img`
	max-width: 100%;
	height: auto;
`;

export const Title = styled.h1`
	font-size: 50px;
	line-height: 1.1;
	margin-bottom: 8px;
	@media (max-width: 600px) {
		font-size: 1.625rem;
	}
`;
export const SubTitle = styled.h2`
	font-size: 26px;
	font-weight: normal;
	line-height: normal;
	@media (max-width: 600px) {
		font-size: 1.125rem;
	}
`;
