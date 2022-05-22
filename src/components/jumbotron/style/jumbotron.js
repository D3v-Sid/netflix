/* Give us the composant name  */
import styled from "styled-components/macro";

export const Inner = styled.div`
	display: flex;
	/* Pass a prop  : Use template literal, then declare an arrow function */
	flex-direction: ${({ direction }) => direction};
	justify-content: space-around;
	align-items: center;
	flex-wrap: nowrap;
	border: 1px solid green;
	gap: 1rem;
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	border: 1px solid black;
	max-width: 100vw;
	max-height: 100vh;
`;

export const Image = styled.img`
	width: 100%;
	max-width: 400px;
`;
