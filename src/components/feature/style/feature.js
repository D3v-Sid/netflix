import styled from "styled-components/macro";

export const Container = styled.div`
	max-width: 700px;
	margin: 0 auto;
	color: #fff;
	align-items: center;
	@media (max-width: 1000px) {
		padding: 70px 30px;
	}
`;

export const Title = styled.h1`
	text-align: center;
	font-size: 3.125rem;
	margin: 1rem;
	padding: 1rem 5rem;
	@media (max-width: 1000px) {
		padding: 1rem;
		font-size: 16px;
		line-height: 20px;
	} ;
`;

export const Subtitle = styled.h2`
	text-align: center;
	font-size: 1.625rem;
	font-weight: 400;
	margin: 1rem;
	padding: 1rem 5rem;
	@media (max-width: 1000px) {
		padding: 1rem;
		font-size: 16px;
		line-height: 20px;
	} ;
`;
