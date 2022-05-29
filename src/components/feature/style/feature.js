import styled from "styled-components/macro";

export const Container = styled.div`
	padding: 70px 45px;
	display: flex;
	flex-direction: column;
	color: #fff;
	justify-content: space-around;
	align-items: center;
	@media (max-width: 1000px) {
		padding: 70px 30px;
	}
`;

export const Inner = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	@media (max-width: 1000px) {
		flex-direction: column;
	}
`;

export const Text = styled.p`
	text-align: center;
	font-size: 1.2rem;
	margin: 1rem;
	padding: 1rem 5rem;
	@media (max-width: 1000px) {
		padding: 1rem;
		font-size: 16px;
		line-height: 20px;
	} ;
`;
