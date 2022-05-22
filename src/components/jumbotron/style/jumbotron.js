/* Give us the composant name  */
import styled from "styled-components/macro";

export const Inner = styled.div`
	display: flex;
	/* Pass a prop  : Use template literal, then declare an arrow function */
	flex-direction: ${({ direction }) => direction};
	color: #fff;
	justify-content: space-between;
	align-items: center;
	max-width: 1100px;
	margin: auto;
	width: 100%;
	@media (max-width: 1000px) {
		flex-direction: column;
	}
`;

export const Container = styled.div`
	padding: 3rem;
`;

export const Pane = styled.div``;

export const Image = styled.img`
	max-width: 100%;
	height: auto;
`;

export const Title = styled.h1`
	font-size: 50px;
	line-height: 1.1;
	margin-bottom: 8px;
	@media (max-width: 600px) {
		font-size: 35px;
	}
`;
export const SubTitle = styled.h2`
	font-size: 26px;
	font-weight: normal;
	line-height: normal;
	@media (max-width: 600px) {
		font-size: 18px;
	}
`;
